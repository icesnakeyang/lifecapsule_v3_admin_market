import {Card, Col, Row} from "antd";
import moment from "moment";

const UserActRow = (data: any) => {
    const {item} = data
    return (<Card style={{marginTop: 5}} bodyStyle={{padding: 10}}>
        <Row>
            <Col>{moment(item.createTime).format('lll')}</Col>
            <Col offset={1}>{
                item.nickname
            }</Col>
            <Col offset={1}>{item.actType}</Col>
            <Col offset={1}>{item.email}</Col>
            <Col offset={1}>{item.memo.length < 50 ? item.memo : item.memo.substring(0, 50) + '...'}</Col>
        </Row>
    </Card>)
}
export default UserActRow
