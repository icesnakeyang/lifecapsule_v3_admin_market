import {
    Breadcrumb,
    Button,
    Card,
    Divider,
    Input,
    Pagination,
    Spin,
    DatePicker
} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/counterSlice";
import {useLocation} from "react-router-dom";
import {apiListUserLoginLog, apiLoadUserLoginStatistic, apiLoadUserStatistic} from "../../api/Api";
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

const {Search} = Input;
const {RangePicker} = DatePicker;

const Dashboard = () => {
    const count = useSelector((state: any) => state.counterSlice.value);
    const dispatch = useDispatch();
    const location = useLocation();
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

    useEffect(() => {
        dispatch(saveUserLoginLogPageIndex(1));
        loadUserStatistic();
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
                        {userLoginStatisticList.length > 0 ?
                            <div>
                                {
                                    userLoginStatisticList.map((item: any, index: any) => (
                                        <UserLoginStatisticRow item={item} key={index}/>
                                    ))
                                }
                            </div> : null}
                        <div>
                            {userLoginLogList ? (
                                <div
                                    style={{
                                        border: "2px solid #blue",
                                        margin: 10,
                                        padding: 10,
                                    }}
                                >
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
