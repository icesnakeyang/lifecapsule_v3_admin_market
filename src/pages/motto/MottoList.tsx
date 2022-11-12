import {apiListMotto} from "../../api/Api";
import {useEffect, useState} from "react";
import {Button, Card} from "antd";
import MottoListRow from "./MottoListRow";

const MottoList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [totalMotto, setTotalMotto] = useState(0)
    const [mottoList, setMottoList] = useState([])
    const [status, setStatus] = useState('ACTIVE')

    useEffect(() => {
        loadAllData()
    }, [status])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize,
            status
        }
        apiListMotto(params).then((res: any) => {
            if (res.code === 0) {
                setMottoList(res.data.mottoList)
                setTotalMotto(res.data.totalMotto)
            }
        })
    }
    return (
        <div>
            <Card>
                {
                    status === 'ACTIVE' ?
                        <div>
                            <Button type='primary' onClick={() => {
                                setStatus("ACTIVE")
                            }}>Active</Button>
                            <Button style={{marginLeft:10}} onClick={() => {
                                        setStatus('STOP')
                                    }}>Stop</Button>
                        </div> :
                        <div>
                            <Button onClick={() => {
                                setStatus("ACTIVE")
                            }}>Active</Button>
                            <Button type='primary' style={{marginLeft: 10}}
                                    onClick={() => {
                                        setStatus('STOP')
                                    }}>Stop</Button>
                        </div>}
            </Card>

            {mottoList.length > 0 ?
                mottoList.map((item, index) => (
                    <MottoListRow item={item} key={index}/>
                ))
                : <div>no data</div>}
        </div>
    )
}
export default MottoList
