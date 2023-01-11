import {Card, Form, Input, Pagination, Switch} from "antd";
import {useEffect, useState} from "react";
import {apiListTopic} from "../../api/Api";
import TopicPageRow from "./TopicPageRow";
import FormItem from "antd/es/form/FormItem";

const TopicList = () => {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const [topicList, setTopicList] = useState([])
    const [totalTopic, setTotalTopic] = useState(0)
    const [includeChildren, setIncludeChildren] = useState(false)
    const [active, setActive] = useState(true)

    useEffect(() => {
        loadAllData()
    }, [pageIndex, pageSize])

    useEffect(() => {
        setPageIndex(1)
        loadAllData()
    }, [includeChildren, active])

    const loadAllData = () => {
        let params = {
            pageIndex,
            pageSize,
            includeChildren,
            status: ''
        }
        if (active) {
            params.status = 'ACTIVE'
        } else {
        }
        apiListTopic(params).then((res: any) => {
            if (res.code === 0) {
                setTopicList(res.data.topicList)
                setTotalTopic(res.data.totalTopic)
            }
        })
    }
    return (<div>
        <Card>
            <Form>
                <FormItem>
                    <Input placeholder='Search for keywords'/>
                </FormItem>
                <FormItem>
                    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <div style={{display: 'flex'}}>
                            <div>Include children</div>
                            <div style={{marginLeft: 10}}>
                                <Switch defaultChecked={includeChildren} onChange={(e) => {
                                    console.log(e)
                                    setIncludeChildren(e)
                                }}/>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>Active</div>
                            <div style={{marginLeft: 10}}>
                                <Switch defaultChecked={active} onChange={(e) => {
                                    console.log(e)
                                    setActive(e)
                                }}/>
                            </div>
                        </div>
                    </div>
                </FormItem>
            </Form>
        </Card>

        {topicList.length > 0 ? <div>
            {topicList.map((item, index) => (
                <TopicPageRow item={item} key={index}/>
            ))}
        </div> : null}
        <div style={{marginTop: 10}}>
            <Pagination total={totalTopic} onChange={(page) => {
                setPageIndex(page)
            }} defaultPageSize={pageSize}/>
        </div>
    </div>)
}
export default TopicList
