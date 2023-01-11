import {Col, Row} from "antd";
import moment from "moment";

const UserNoteListRow = (data: any) => {
    const {item} = data
    return (
        <Row style={{background: 'grey', margin: 10, padding: 10}}>
            <Col>{item.title}</Col>
            <Col offset={1}>{moment(item.createTime).format('ll')}</Col>

        </Row>
    )
}
export default UserNoteListRow
