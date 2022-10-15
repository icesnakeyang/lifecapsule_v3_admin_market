import {Card, Col, Row} from "antd"
import moment from "moment";

const TopicPageRow = (data:any) => {
    const {item} =data
    return (<Card>
            <Row>
                <Col>{item.title}</Col>
                <Col offset={1}>{moment(item.createTime).format('LLLL')}</Col>
            </Row>
            <Row>

            </Row>
    </Card>
        )
}
export default TopicPageRow
