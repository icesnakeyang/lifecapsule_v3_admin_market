import moment from "moment";
import {Col, Row} from "antd";

const MottoRow1 = (data: any) => {
    const {item} = data
    console.log(item)
    return (
        <Row style={{background: "#ccc", margin: 5}}>
            <Col span={12}>{item.content}</Col>
            <Col span={4}>{moment(item.createTime).format("ll")}</Col>
            <Col span={4}>{item.authorName}</Col>
        </Row>
    )
}
export default MottoRow1;
