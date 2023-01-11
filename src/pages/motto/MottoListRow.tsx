import {Button, Card, Col, Row, Tag} from "antd"
import moment from "moment";
import {useNavigate} from "react-router-dom";

const MottoListRow = (data: any) => {
    const navigate = useNavigate()
    const {item} = data
    return (
        <Card style={{marginTop: 5}} title={item.authorName}
              extra={<div>{moment(item.createTime).format("LL")} <Button type='primary' size='small' onClick={() => {
                  navigate('/main/MottoDetail', {state: {mottoId: item.mottoId}})
              }
              }>Edit</Button>
              </div>}>
            <div>{item.status === 'ACTIVE' ?
                <Tag color="#108ee9">{item.status}</Tag> :
                <Tag color="#ccc">{item.status}</Tag>
            }
            </div>
            <Row>
                <Col>{item.content}</Col>
            </Row>
            <Row>
                <Col>Views: {item.views}</Col>
            </Row>
        </Card>
    )

}
export default MottoListRow
