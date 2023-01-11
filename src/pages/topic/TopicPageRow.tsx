import {Button, Card, Col, Row} from "antd"
import moment from "moment";
import {useNavigate} from "react-router-dom";

const TopicPageRow = (data: any) => {
    const {item} = data
    const navigate = useNavigate()
    return (<Card style={{marginTop: 5}} bodyStyle={{padding: 5}}>
            <Row>
                <Col><Button type='primary' size='small' onClick={() => {
                    console.log(item.topicId)
                    navigate('/main/TopicEdit', {state: {topicId: item.topicId}})
                }}>Edit</Button></Col>
                <Col offset={1}>{item.title}</Col>
                <Col offset={1}>{moment(item.createTime).format('LLLL')}</Col>
            </Row>
            <Row>

            </Row>
        </Card>
    )
}
export default TopicPageRow
