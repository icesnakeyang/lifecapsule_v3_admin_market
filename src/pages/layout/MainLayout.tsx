import React, { useEffect, useState } from "react";

import { WalletOutlined } from "@ant-design/icons";
import { Col, Grid, Row, Typography, Layout } from "antd";
import MainHeader from "./MainHeader";
import MainSider from "./MainSider";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "antd/lib/layout/layout";
import LoginHeader from "./LoginLayout";
import { useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.loginSlice.token);

  useEffect(() => {
    if (!token) {
      navigate("/guest/login");
    }
    return () => {};
  }, [token]);

  return (
    <Layout style={{ height: "100%", minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Row
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            {collapsed ? (
              <WalletOutlined
                style={{ fontSize: "28px", color: "#eee" }}
                onClick={() => {}}
              />
            ) : (
              <Typography.Title
                level={4}
                style={{ margin: 0, color: "#eee", cursor: "pointer" }}
                onClick={() => {
                  navigate("/dashboard", { state: { pp: 1 } });
                }}
              >
                {t("common.title")}
              </Typography.Title>
            )}
          </Col>
          <Col
            xs={18}
            sm={18}
            md={18}
            lg={20}
            xl={20}
            style={{
              width: "100%",
            }}
          >
            {token ? <MainHeader data={collapsed} /> : <LoginHeader />}
          </Col>
        </Row>
      </Header>
      <Layout
        style={{
          marginTop: "70px",
          background: "red",
          height: "100%",
          display: "flex",
        }}
      >
        <Sider
          breakpoint="md"
          onBreakpoint={(e) => {
            setCollapsed(e);
          }}
        >
          <MainSider />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Layout>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Footer>LifeCapsule</Footer>
    </Layout>
  );
};

export default MainLayout;
