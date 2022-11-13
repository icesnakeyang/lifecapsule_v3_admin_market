import {apiListUserAct} from "../../api/Api";
import {useEffect, useState} from "react";
import UserActRow from "./UserActRow";
import {Card, DatePicker, Form, Input, Pagination, PaginationProps} from "antd";
import FormItem from "antd/es/form/FormItem";
import {saveTotalUserAct, saveUserActPageIndex, userActSlice} from "../../store/userActSlice";
import {useDispatch, useSelector} from "react-redux";

const {RangePicker} = DatePicker;

const showTotal: PaginationProps['showTotal'] = total => `Total ${total} items`;

const UserActLogList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [userActList, setUserActList] = useState([])
    const [nickname, setNickname] = useState('')
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const userActPageIndex = useSelector((state: any) => state.userActSlice.userActPageIndex)
    const userActPageSize = useSelector((state: any) => state.userActSlice.userActPageSize)
    const totalUserAct = useSelector((state: any) => state.userActSlice.totalUserAct)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(saveUserActPageIndex(pageIndex))
        loadAllData()
    }, [pageIndex])

    useEffect(() => {
        setPageIndex(1)
        loadAllData()
    }, [nickname])

    useEffect(() => {
        console.log('time changed')
        setPageIndex(1)
        loadAllData()
    }, [startTime, endTime])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize,
            nickname,
            startTime,
            endTime
        }
        console.log(params)
        apiListUserAct(params).then((res: any) => {
            if (res.code === 0) {
                setUserActList(res.data.userActList)
                console.log('total:' + res.data.totalUserAct)
                dispatch(saveTotalUserAct(res.data.totalUserAct))
            }
        })
    }
    return (<div>
        <Card>
            <Form>
                <FormItem>
                    <RangePicker onChange={(e: any) => {
                        console.log(e)
                        if (e) {
                            setStartTime(e[0])
                            setEndTime(e[1])
                        } else {
                            setStartTime(null)
                            setEndTime(null)
                        }
                    }}/>
                </FormItem>
                <FormItem>
                    <Input placeholder="Nickname" onChange={(e) => {
                        setNickname(e.target.value)
                    }}/>
                </FormItem>
            </Form>
        </Card>
        {
            userActList.length > 0 ?
                <>
                    {userActList.map((item, index) => (
                        <UserActRow item={item} key={index}/>
                    ))}
                    <div style={{marginTop: 10}}>
                        <Pagination showTotal={showTotal} total={totalUserAct} onChange={(page) => {
                            setPageIndex(page)
                        }
                        }/>
                    </div>
                </> : null
        }
    </div>)
}
export default UserActLogList
