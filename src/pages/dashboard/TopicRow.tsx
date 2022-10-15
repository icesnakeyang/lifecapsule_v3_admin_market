import {Col, Row} from "antd"
import moment from "moment";

const TopicRow = (data: any) => {
    const {item} = data
    return (
        <Row style={{background:'#ccc', margin:5}}>
            <Col span={12}>{item.title}</Col>
            <Col span={4}>{moment(item.createTime).format('ll')}</Col>
            <Col span={4}>{item.authorName}</Col>
        </Row>
    )
}
export default TopicRow

