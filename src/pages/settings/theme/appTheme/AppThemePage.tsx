import {Button, Card} from "antd";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {apiListAppTheme} from "../../../../api/Api";
import { saveThemeListApp } from "../../../../store/themeSlice";
import AppThemeRow from "./AppThemeRow";

const AppThemePage = () => {
    const navigate = useNavigate()
    const themeListApp = useSelector((state: any) => state.themeSlice.themeListApp)
   const dispatch=useDispatch()

    useEffect(()=>{
        loadAllData()
    },[])

    const loadAllData=()=>{
        let params={}
        apiListAppTheme(params).then((res:any)=>{
            if(res.code===0){
                dispatch(saveThemeListApp(res.data.themeList))
            }
        })
    }
    return (<div>
        <Card>
            <Button
                type="primary"
                onClick={() => {
                    navigate("/main/AppThemeEdit", {state: {themeId: null}});
                }}
            >
                Add new theme
            </Button>
        </Card>
        {themeListApp
            ? themeListApp.map((item: any, index: any) => (
                <AppThemeRow item={item} key={index}/>
            ))
            : null}
    </div>)
}
export default AppThemePage;
