import {Col, Row} from "antd"
import moment from "moment";

const BindEmailRow = (data: any) => {
    const {item} = data
    return (
        <Row style={{background: '#ccc', margin: 5, padding: 5}}>
            <Col span={12}>{item.email}</Col>
            <Col span={12}>{moment(item.createTime).format('ll')}</Col>
        </Row>
    )
}
export default BindEmailRow
