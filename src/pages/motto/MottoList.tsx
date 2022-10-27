import {apiListMotto} from "../../api/Api";
import {useEffect, useState} from "react";
import {Card} from "antd";
import MottoListRow from "./MottoListRow";

const MottoList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [totalMotto, setTotalMotto] = useState(0)
    const [mottoList, setMottoList] = useState([])

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize
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
