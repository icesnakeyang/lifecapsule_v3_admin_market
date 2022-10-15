import {Col, Row} from "antd";
import moment from "moment";
import React from "react";

const UserLoginStatisticRow = (data: any) => {
    console.log(data)
    const {item} = data
    return (
        <div
            style={{background: "#ccc",margin:3, display: "flex"}}
        >
            <Row style={{width: "100%"}}>
                <Col xs={12} sm={8} md={8} lg={8} xl={6} xxl={6}>
                    {item.total}
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} xl={6} xxl={6}>
                    {item.nickname}
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={6} xxl={6}>
                    {item.email}
                </Col>
            </Row>
        </div>)
}
export default UserLoginStatisticRow;
