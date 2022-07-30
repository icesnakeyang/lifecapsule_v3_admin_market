import { Col, Row } from "antd";
import moment from "moment";

const UserListRow = (data: any) => {
  const { item } = data;
  return (
    <div style={{ background: "#ccc", marginTop: 10, padding: 10 }}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={10}>
          UserId：{item.userId}
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
          Register time：{moment(item.createTime).format("LL")}
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          Phone：{item.phone}
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={10} xxl={10}>
          Email：{item.email}
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
          Loginname：{item.loginName}
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          Login time：{moment(item.loginTime).format("LLL")}
        </Col>
      </Row>
    </div>
  );
};

export default UserListRow;
