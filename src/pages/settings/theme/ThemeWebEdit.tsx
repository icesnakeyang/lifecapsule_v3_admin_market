import { current } from "@reduxjs/toolkit";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
} from "antd";
import FormItem from "antd/lib/form/FormItem";
import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  apiCreateWebTheme,
  apiGetWebTheme,
  apiListWebTheme,
  apiUpdateWebTheme,
} from "../../../api/Api";
import {
  saveCurrentThemeBackground,
  saveCurrentThemeBlockDark,
  saveCurrentThemeBlockLight,
  saveCurrentThemeTextDark,
  saveCurrentThemeTextHolder,
  saveCurrentThemeTextLight,
} from "../../../store/themeSlice";

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const ThemeWebEdit = () => {
  const { themeId }: any = useLocation().state;
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: any) => state.themeSlice.currentTheme
  );
  const [background, setBackground] = useState("");
  console.log(themeId);
  const [themeEdit, setThemeEdit] = useState(null);
  const currentThemeBackground = useSelector(
    (state: any) => state.themeSlice.currentThemeBackground
  );
  const currentThemeBlockDark = useSelector(
    (state: any) => state.themeSlice.currentThemeBlockDark
  );
  const currentThemeBlockLight = useSelector(
    (state: any) => state.themeSlice.currentThemeBlockLight
  );
  const currentThemeTextLight = useSelector(
    (state: any) => state.themeSlice.currentThemeTextLight
  );
  const currentThemeTextDark = useSelector(
    (state: any) => state.themeSlice.currentThemeTextDark
  );
  const currentThemeTextHolder = useSelector(
    (state: any) => state.themeSlice.currentThemeTextHolder
  );
  const { t } = useTranslation();
  const [themeName, setThemeName] = useState("");

  useEffect(() => {
    console.log("load");
    loadAllData();
    return () => {};
  }, []);

  const loadAllData = () => {
    let params = {
      pageIndex: 1,
      pageSize: 1,
      themeId,
    };
    apiGetWebTheme(params).then((res: any) => {
      console.log(res);
      if (res.code === 0) {
        console.log(res);
        dispatch(saveCurrentThemeBackground(res.data.theme.background));
        dispatch(saveCurrentThemeBlockDark(res.data.theme.blockDark));
        dispatch(saveCurrentThemeBlockLight(res.data.theme.blockLight));
        dispatch(saveCurrentThemeTextLight(res.data.theme.textLight));
        dispatch(saveCurrentThemeTextDark(res.data.theme.textDark));
        dispatch(saveCurrentThemeTextHolder(res.data.theme.textHolder));
        setThemeName(res.data.theme.themeName);
        setThemeEdit(res.data.theme);
        setBackground(res.data.theme.background);
      }
    });
  };

  return (
    <div>
      <Card title="Edit theme">
        <Form {...formLayout}>
          <Form.Item label="themeName">
            <Input
              value={themeName}
              onChange={(e) => {
                setThemeName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="background" style={{}}>
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeBackground}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeBackground(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeBackground,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="blockDark" style={{}}>
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeBlockDark}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeBlockDark(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeBlockDark,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="blockLight">
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeBlockLight}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeBlockLight(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeBlockLight,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="textLight">
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeTextLight}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeTextLight(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeTextLight,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="textDark">
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeTextDark}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeTextDark(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeTextDark,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="textHolder">
            <Row>
              <Col style={{ width: "100px" }}>
                <Input
                  value={currentThemeTextHolder}
                  onChange={(e) => {
                    dispatch(saveCurrentThemeTextHolder(e.target.value));
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    width: "50px",
                    height: "100%",
                    background: currentThemeTextHolder,
                    marginLeft: 10,
                  }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <div
          style={{
            background: currentThemeBackground,
            color: currentThemeTextLight,
            padding: 20,
          }}
        >
          <div
            style={{
              background: currentThemeBlockDark,
              padding: 20,
              margin: 20,
            }}
          >
            blockDark
            <div style={{ color: currentThemeTextLight }}>textLight</div>
            <div style={{ color: currentThemeTextDark }}>textDark</div>
            <div style={{ color: currentThemeTextHolder }}>textHolder</div>
          </div>
          <div
            style={{
              background: currentThemeBlockLight,
              color: currentThemeTextDark,
              padding: 20,
              margin: 20,
            }}
          >
            blockLight
            <div style={{ color: currentThemeTextLight }}>textLight</div>
            <div style={{ color: currentThemeTextDark }}>textDark</div>
            <div style={{ color: currentThemeTextHolder }}>textHolder</div>
          </div>
          background
        </div>
      </Card>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          onClick={() => {
            let params = {
              themeId: "",
              background: currentThemeBackground,
              blockDark: currentThemeBlockDark,
              blockLight: currentThemeBlockLight,
              textDark: currentThemeTextDark,
              textLight: currentThemeTextLight,
              textHolder: currentThemeTextHolder,
              themeName,
            };
            console.log(params);

            if (!themeId) {
              console.log(params);
              apiCreateWebTheme(params)
                .then((res: any) => {
                  if (res.code === 0) {
                    message.success(t("theme.tipSaveSuccess"));
                  } else {
                    message.error(t("syserr." + res.code));
                  }
                })
                .catch(() => {
                  message.error(t("syserr.10001"));
                });
            } else {
              params.themeId = themeId;
              apiUpdateWebTheme(params)
                .then((res: any) => {
                  if (res.code === 0) {
                    message.success(t("theme.tipSaveSuccess"));
                  } else {
                    message.error(t("syserr." + res.code));
                  }
                })
                .catch(() => {
                  message.error(t("syserr.10001"));
                });
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ThemeWebEdit;
