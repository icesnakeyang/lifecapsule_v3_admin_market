import {Card} from "antd";
import {useEffect, useState} from "react";
import {apiListTopic} from "../../api/Api";
import TopicPageRow from "./TopicPageRow";

const TopicList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const [topicList, setTopicList] = useState([])

    useEffect(() => {
        loadAllData()
    }, [pageIndex, pageSize])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize
        }
        apiListTopic(params).then((res: any) => {
            if (res.code === 0) {
                setTopicList(res.data.topicList)
            }
        })
    }
    return (<div>
        <Card></Card>

        {topicList.length > 0 ? <div>
            {topicList.map((item, index) => (
                <TopicPageRow item={item} key={index}/>
            ))}
        </div> : null}

    </div>)
}
export default TopicList
