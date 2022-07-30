import { Menu } from "antd";
import Login from "../login/Login";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { UserOutlined, GlobalOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const MainHeader = (props: any) => {
  const { t } = useTranslation();
  const userName =
    useSelector((state: any) => state.loginSlice.userName) || t("login.unSign");
  const onMenu = (e: any) => {
    if (e.key === "menuLanZh") {
      i18n.changeLanguage("zh");
    }
    if (e.key === "menuLanEn") {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Menu
      style={{ justifyContent: "flex-end", width: "100%" }}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          label: userName,
          icon: <UserOutlined />,
          children: [
            {
              key: "menuSignout",
              label: t("nav.signout"),
            },
          ],
        },
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
  );
};

export default MainHeader;
