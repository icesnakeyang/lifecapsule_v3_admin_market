import {useLocation} from "react-router-dom";
import {apiAdminNoteList, apiLoadUserData} from "../../../api/Api";
import {useEffect, useState} from "react";
import UserNoteListRow from "./UserNoteListRow";
import {Card} from "antd";
import moment from "moment";

const UserProfilePage = (data: any) => {
    const {userId}: any = useLocation().state;
    const [notePageIndex, setNotePageIndex] = useState(1)
    const [notePageSize, setNotePageSize] = useState(10)
    const [noteList, setNoteList] = useState([])
    const [nickname, setNickname] = useState('')
    const [registerTime, setRegisterTime] = useState('')
    const [email, setEmail] = useState('')
    const [primaryTimer, setPrimaryTimer] = useState('')
    const [loginTime, setLoginTime] = useState('')
    useEffect(() => {
        loadAllData()
    }, [])


    const loadAllData = () => {
        let params = {
            userId,
            pageIndex: notePageIndex,
            pageSize: notePageSize
        }
        apiLoadUserData(params).then((res: any) => {
            if (res.code === 0) {
                setNickname(res.data.userData.nickname)
                setRegisterTime(res.data.userData.createTime)
                setEmail(res.data.userData.email)
                setPrimaryTimer(res.data.userData.timerPrimary)
                setLoginTime(res.data.userData.loginTime)
            }
        })

        apiAdminNoteList(params).then((res: any) => {
            if (res.code === 0) {
                setNoteList(res.data.noteList)
            }
        })
    }
    return (
        <div>
            <Card title='User Information'>
                <div>Nickname: {nickname}</div>
                <div>Register time: {moment(registerTime).format('LLLL')}</div>
                <div>Email: {email}</div>
                <div>Primary timer: {moment(primaryTimer).format('LLLL')}</div>
            </Card>

            <Card style={{marginTop: 10}} title='Recent Actions'>
                <div>Recent login time: {moment(loginTime).format('LLLL')}</div>
            </Card>

            <Card style={{marginTop: 10}} title='Recent notes'>
                {noteList ?
                    noteList.map((item: any, index: any) => (
                        <UserNoteListRow item={item} key={index}/>
                    )) : <div>no data</div>
                }
            </Card>
        </div>
    )
}
export default UserProfilePage
