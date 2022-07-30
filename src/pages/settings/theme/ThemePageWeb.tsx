import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiListWebTheme } from "../../../api/Api";
import { saveThemeListWeb } from "../../../store/themeSlice";
import ThemeRow from "./ThemeRow";

const ThemePageWeb = () => {
  const themeWebPageIndex = useSelector(
    (state: any) => state.themeSlice.themeWebPageIndex
  );
  const themeWebPageSize = useSelector(
    (state: any) => state.themeSlice.themeWebPageSize
  );
  const themeListWeb = useSelector(
    (state: any) => state.themeSlice.themeListWeb
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    loadAllData();
    return () => {};
  }, [themeWebPageSize]);

  const loadAllData = () => {
    let params = {
      pageIndex: themeWebPageIndex,
      pageSize: themeWebPageSize,
    };
    apiListWebTheme(params).then((res: any) => {
      console.log(res);
      if (res.code === 0) {
        dispatch(saveThemeListWeb(res.data.themeList));
      }
    });
  };
  return (
    <div>
      <Card>
        <Button
          type="primary"
          onClick={() => {
            navigate("/main/ThemeWebEdit", { state: { themeId: null } });
          }}
        >
          Add new theme
        </Button>
      </Card>
      {themeListWeb
        ? themeListWeb.map((item: any, index: any) => (
            <ThemeRow item={item} key={index} />
          ))
        : null}
    </div>
  );
};

export default ThemePageWeb;
