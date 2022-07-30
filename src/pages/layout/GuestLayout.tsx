import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { UserOutlined, GlobalOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const GuestLayout = () => {
  const { t } = useTranslation();

  const onMenu = (e: any) => {
    if (e.key === "menuLanZh") {
      i18n.changeLanguage("zh");
    }
    if (e.key === "menuLanEn") {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Menu
          style={{ justifyContent: "flex-end", width: "100%" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "2",
              label: t("common.language"),
              icon: <GlobalOutlined />,
              children: [
                {
                  label: "中文",
                  key: "menuLanZh",
                },
                {
                  label: "English",
                  key: "menuLanEn",
                },
              ],
            },
          ]}
          onClick={(e) => {
            onMenu(e);
          }}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default GuestLayout;
