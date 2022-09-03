import { Col, Row } from "antd";
import moment from "moment";
import React from "react";

const UserLoginLogRow = (data: any) => {
  const { item } = data;
  return (
    <div
      style={{ background: "#ccc", margin: 10, padding: 10, display: "flex" }}
    >
      <Row style={{ width: "100%" }}>
        <Col xs={24} sm={8} md={8} lg={6} xl={6} xxl={6}>
          {item.loginName}
        </Col>
        <Col xs={24} sm={9} md={8} lg={6} xl={6} xxl={6}>
          {moment(item.loginTime).format("lll")}
        </Col>
        <Col xs={24} sm={7} md={8} lg={6} xl={6} xxl={6}>
          {moment(item.createTime).format("ll")}
        </Col>
        <Col xs={24} sm={7} md={8} lg={6} xl={6} xxl={6}>
          {item.frontEnd}
        </Col>
      </Row>
    </div>
  );
};

export default UserLoginLogRow;
