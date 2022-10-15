import { Col, Row} from "antd"
import moment from "moment";

const NoteRow = (data: any) => {
    const {item} = data
    return (
        <Row style={{background:'#ccc',margin:5}}>
            <Col span={12}>{item.title}</Col>
            <Col span={4}>{moment(item.createTime).format('ll')}</Col>
            <Col span={4}>{item.nickname}</Col>
            <Col span={4}>{item.email}</Col>
        </Row>
    )
}
export  default NoteRow
