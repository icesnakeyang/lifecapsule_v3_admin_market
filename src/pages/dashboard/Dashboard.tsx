import {
    Breadcrumb,
    Row,
    Card,
    Divider,
    Input,
    Pagination,
    Spin,
    DatePicker, Col
} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    apiListTop10Notes, apiListTopic,
    apiListUserLoginLog,
    apiLoadUserLoginStatistic,
    apiLoadUserStatistic,
} from "../../api/Api";
import {useEffect, useState} from "react";
import {
    saveUserLoginLogList,
    saveUserLoginLogPageIndex,
    saveUserLoginLogPageSize,
    saveUserLoginLogTotal,
    saveUserLoginStatisticList,
} from "../../store/userSlice";
import UserLoginLogRow from "./UserLoginLogRow";
import UserLoginStatisticRow from './UserLoginStatisticRow'
import NoteRow from './NoteRow'
import TopicRow from "./TopicRow";

const {Search} = Input;
const {RangePicker} = DatePicker;

const Dashboard = () => {
    const dispatch = useDispatch();
    const userLoginLogPageIndex = useSelector(
        (state: any) => state.userSlice.userLoginLogPageIndex
    );
    const userLoginLogPageSize = useSelector(
        (state: any) => state.userSlice.userLoginLogPageSize
    );
    const userLoginLogList = useSelector(
        (state: any) => state.userSlice.userLoginLogList || []
    );
    const userLoginLogTotal = useSelector(
        (state: any) => state.userSlice.userLoginLogTotal
    );
    const [totalUserLogs, setTotalUserLogs] = useState(0);
    const [totalUser, setTotalUser] = useState(0);
    const [totalNote, setTotalNote] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchKey, setSearchKey] = useState("");
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const userLoginStatisticList = useSelector((state: any) => state.userSlice.userLoginStatisticList || [])
    const [noteList, setNoteList] = useState([])
    const [topicList, setTopicList] = useState([])

    useEffect(() => {
        dispatch(saveUserLoginLogPageIndex(1));
        loadUserStatistic();
        loadTop10Notes()
        loadTop10Topis()
    }, []);

    useEffect(() => {
        loadUserLoginLog();
        return () => {
        };
    }, [userLoginLogPageIndex, userLoginLogPageSize]);

    useEffect(() => {
        loadUserStatistic();
    }, [startTime, endTime])

    const loadUserLoginLog = () => {
        let params = {
            pageIndex: userLoginLogPageIndex,
            pageSize: userLoginLogPageSize,
            searchKey,
        };
        setLoading(true);
        apiListUserLoginLog(params).then((res: any) => {
            if (res.code === 0) {
                dispatch(saveUserLoginLogList(res.data.userList));
                dispatch(saveUserLoginLogTotal(res.data.totalUserLogs));
                setLoading(false);
            }
        });
    };

    const loadUserStatistic = () => {
        apiLoadUserStatistic().then((res: any) => {
            if (res.code === 0) {
                setTotalUserLogs(res.data.totalUserLogs);
                setTotalUser(res.data.totalUser);
                setTotalNote(res.data.totalNote);
            }
        });

        apiLoadUserLoginStatistic({
            pageIndex: 1,
            pageSize: 10,
            startTime,
            endTime
        }).then((res: any) => {
            if (res.code === 0) {
                console.log(res.data.statistics)
                dispatch(saveUserLoginStatisticList(res.data.statistics))
            }
        })
    };

    const onSearch = () => {
        dispatch(saveUserLoginLogPageIndex(1));
        loadUserLoginLog();
    };

    const loadTop10Notes = () => {
        apiListTop10Notes().then((res: any) => {
            console.log(res)
            if (res.code === 0) {
                setNoteList(res.data.noteList)
            }
        })
    }

    const loadTop10Topis = () => {
        let params = {
            pageIndex: 1,
            pageSize: 10
        }
        apiListTopic(params).then((res: any) => {
            if (res.code === 0) {
                setTopicList(res.data.topicList)
            }
        })
    }

    return (
        <div>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 300,
                    }}
                >
                    <Spin size="large"></Spin>
                </div>
            ) : (
                <div>
                    <Breadcrumb style={{margin: "20px 0"}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/guest/login">App</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    {/*header bar*/}
                    <Card>
                        {/* <Input placeholder="Search user" onSearch={onSearch} /> */}
                        <Search
                            placeholder="Search user"
                            onChange={(e) => setSearchKey(e.target.value)}
                            onSearch={() => {
                                onSearch();
                            }}
                            style={{width: 200}}
                            value={searchKey}
                        />
                    </Card>

                    {/*统计板*/}
                    <div style={{display: "flex"}}>
                        <Card style={{margin: 10}}>
                            <div>用户登录次数</div>
                            <div style={{fontSize: 24}}>{totalUserLogs}</div>
                            <Divider/>
                            <div>本月日活：0</div>
                        </Card>
                        <Card style={{margin: 10}}>
                            <div>用户总数</div>
                            <div style={{fontSize: 24}}>{totalUser}</div>
                            <Divider/>
                        </Card>
                        <Card style={{margin: 10}}>
                            <div>笔记总数</div>
                            <div style={{fontSize: 24}}>{totalNote}</div>
                            <Divider/>
                        </Card>
                    </div>

                    <div>
                        <RangePicker onChange={(e: any) => {
                            setStartTime(e[0]);
                            setEndTime(e[1])
                        }}/>

                        {/*用户登录次数统计*/}
                        <Row style={{marginTop: 10}}>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                <Row style={{}}>
                                    <Col xs={12} sm={8} md={8} lg={8} xl={6} xxl={6}>登录次数</Col>
                                    <Col xs={12} sm={8} md={8} lg={8} xl={6} xxl={6}>用户姓名</Col>
                                    <Col xs={12} sm={8} md={8} lg={8} xl={6} xxl={6}>Email</Col>
                                </Row>
                                {userLoginStatisticList.length > 0 ?
                                    <div style={{}}>
                                        {
                                            userLoginStatisticList.map((item: any, index: any) => (
                                                <UserLoginStatisticRow item={item} key={index}/>
                                            ))
                                        }
                                    </div> : null}
                            </Col>
                        </Row>

                        {/*笔记*/}
                        <Row>
                            <Col span={12}>标题</Col>
                            <Col span={4}>创建时间</Col>
                            <Col span={4}>用户昵称</Col>
                            <Col span={4}>Email</Col>
                        </Row>
                        {noteList.length > 0 ?
                            <div>
                                {
                                    noteList.map((item, index) => (
                                        <NoteRow item={item} key={index}/>
                                    ))
                                }
                            </div> : null}

                        {/*用户登录记录*/}
                        <div>
                            {userLoginLogList ? (
                                <div
                                    style={{
                                        border: "2px solid #blue",
                                        margin: 10,
                                        padding: 10,
                                    }}
                                >
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>用户姓名</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>登录时间</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>注册时间</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>登录设备</Col>
                                    </Row>
                                    {userLoginLogList.map((item: any, index: any) => (
                                        <UserLoginLogRow item={item} key={index}/>
                                    ))}
                                    <Pagination
                                        total={userLoginLogTotal}
                                        showSizeChanger
                                        showQuickJumper
                                        showTotal={() => `Total ${userLoginLogTotal} logs`}
                                        onChange={(e) => {
                                            dispatch(saveUserLoginLogPageIndex(e));
                                        }}
                                        onShowSizeChange={(page, size) => {
                                            dispatch(saveUserLoginLogPageIndex(page));
                                            dispatch(saveUserLoginLogPageSize(size));
                                        }}
                                    />
                                </div>
                            ) : (
                                <div>没有用户使用</div>
                            )}
                        </div>

                        {/*话题*/}
                        <Row>
                            <Col span={12}>标题</Col>
                            <Col span={4}>创建时间</Col>
                            <Col span={4}>作者</Col>
                        </Row>
                        {topicList.length > 0 ?
                            <div>
                                {
                                    topicList.map((item, index) => (
                                        <TopicRow item={item} key={index}/>
                                    ))
                                }
                            </div> : null}

                        {/*用户登录记录*/}
                        <div>
                            {userLoginLogList ? (
                                <div
                                    style={{
                                        border: "2px solid #blue",
                                        margin: 10,
                                        padding: 10,
                                    }}
                                >
                                    <Row>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>用户姓名</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>登录时间</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>注册时间</Col>
                                        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>登录设备</Col>
                                    </Row>
                                    {userLoginLogList.map((item: any, index: any) => (
                                        <UserLoginLogRow item={item} key={index}/>
                                    ))}
                                    <Pagination
                                        total={userLoginLogTotal}
                                        showSizeChanger
                                        showQuickJumper
                                        showTotal={() => `Total ${userLoginLogTotal} logs`}
                                        onChange={(e) => {
                                            dispatch(saveUserLoginLogPageIndex(e));
                                        }}
                                        onShowSizeChange={(page, size) => {
                                            dispatch(saveUserLoginLogPageIndex(page));
                                            dispatch(saveUserLoginLogPageSize(size));
                                        }}
                                    />
                                </div>
                            ) : (
                                <div>没有用户使用</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
