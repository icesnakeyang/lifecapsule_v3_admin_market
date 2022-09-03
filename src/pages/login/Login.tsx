import { useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { apiAdminLogin } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserLogin } from "../../store/loginSlice";

const Login = () => {
  const { t } = useTranslation();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = () => {
    let params = {
      loginName,
      password,
    };
    apiAdminLogin(params)
      .then((res: any) => {
        if (res.code === 0) {
          /**
           * 保存token，跳转到dashboard
           */
          dispatch(saveUserLogin(res.data.admin));
          localStorage.setItem(
            "lifecapsule3_admin_token",
            res.data.admin.token
          );
          message.success(t("login.tipLoginSuccess"));
          navigate("/main/dashboard");
        } else {
          message.error(t("syserr." + res.code));
        }
      })
      .catch(() => {
        message.error(t("syserr.10001"));
      });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: 10 }}>
        <Typography.Title>{t("login.greeting1")}</Typography.Title>
        <Typography.Paragraph>{t("login.greeting2")}</Typography.Paragraph>
      </div>
      <div
        style={{
          background: "#ddd",
          padding: "40px 40px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          width: "450px",
          borderRadius: "10px",
        }}
      >
        <Form style={{ marginTop: 10, width: "100%" }}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder={t("login.loginNameHolder")}
              onChange={(text) => {
                setLoginName(text.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder={t("login.passwordHolder")}
              onChange={(text) => {
                setPassword(text.target.value);
              }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              onClick={() => {
                if (!loginName) {
                  message.error(t("login.tipNoLoginName"));
                  return;
                }
                if (!password) {
                  message.error(t("login.tipNoPassword"));
                  return;
                }
                login();
              }}
            >
              {t("login.btSignIn")}
            </Button>
          </Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">{t("login.register")}</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
