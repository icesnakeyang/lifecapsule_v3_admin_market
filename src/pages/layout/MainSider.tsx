import { Menu } from "antd";
import {
  UploadOutlined,
  DashboardOutlined,
  VideoCameraOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const MainSider = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSider = (e: any) => {
    if (e.key === "menuDashboard") {
      navigate("/main/dashboard");
    }
    if (e.key === "menuNoteList") {
      navigate("/main/noteList");
    }
    if (e.key === "menuUsers") {
      navigate("/main/UserList");
    }
    if (e.key === "menuThemePageWeb") {
      navigate("/main/ThemePageWeb");
    }
    if (e.key === "menuThemePageApp") {
      navigate("/main/AppThemePage");
    }
    if (e.key === "menuTopicList") {
      navigate("/main/TopicList");
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "menuDashboard",
          icon: <DashboardOutlined />,
          label: t("nav.dashboard"),
        },
        {
          key: "menuUsers",
          icon: <PartitionOutlined />,
          label: t("nav.users"),
        },
        {
          key: "menuMarketUser",
          icon: <PartitionOutlined />,
          label: t("nav.marketUser"),
        },
        {
          key: "menuNote",
          icon: <PartitionOutlined />,
          label: t("nav.note"),
          children: [
            {
              key: "menuNoteList",
              label: t("nav.noteList"),
            },
          ],
        },
        {
          key: "menuThemePageWeb",
          icon: <PartitionOutlined />,
          label: t("nav.themePageWeb"),
        },
          {
          key: "menuThemePageApp",
          icon: <PartitionOutlined />,
          label: t("nav.themePageApp"),
        },
          {
          key: "menuTopicList",
          icon: <PartitionOutlined />,
          label: t("nav.topicList"),
        },
      ]}
      onClick={(e) => {
        onSider(e);
      }}
    />
  );
};

export default MainSider;
