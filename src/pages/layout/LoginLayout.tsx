import { Menu } from "antd";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
const LoginLayout = (props: any) => {
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
  );
};

export default LoginLayout;
