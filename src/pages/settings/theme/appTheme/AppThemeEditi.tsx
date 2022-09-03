import {Button, Card, Col, Form, Input, message, Row, Switch, Tag} from "antd";
import {
    saveCurrentThemeBackground,
    saveCurrentThemeBlockDark,
    saveCurrentThemeBlockLight,
    saveCurrentThemeColorDanger,
    saveCurrentThemeTextDark,
    saveCurrentThemeTextHolder,
    saveCurrentThemeTextLight, saveDefaultTheme, saveThemeStatus
} from "../../../../store/themeSlice";
import {
    apiCreateAppTheme,
    apiCreateWebTheme, apiGetAppTheme,
    apiGetWebTheme,
    apiUpdateAppTheme,
    apiUpdateWebTheme
} from "../../../../api/Api";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const formLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 18},
};

const AppThemeEdit = () => {
    const {themeId}: any = useLocation().state;
    const [themeName, setThemeName] = useState("");
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
    const currentThemeColorDanger = useSelector(
        (state: any) => state.themeSlice.currentThemeColorDanger
    );
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const navigate = useNavigate();
    const defaultTheme = useSelector((state: any) => state.themeSlice.defaultTheme)
    const themeStatus = useSelector((state: any) => state.themeSlice.themeStatus)

    useEffect(() => {
        loadAllData()
    }, [])

    useEffect(()=>{
        console.log(defaultTheme)

    }, [defaultTheme])

    const loadAllData = () => {
        let params = {
            themeId,
        };
        apiGetAppTheme(params).then((res: any) => {
            if (res.code === 0) {
                dispatch(saveCurrentThemeBackground(res.data.theme.background));
                dispatch(saveCurrentThemeBlockDark(res.data.theme.blockDark));
                dispatch(saveCurrentThemeBlockLight(res.data.theme.blockLight));
                dispatch(saveCurrentThemeTextLight(res.data.theme.textLight));
                dispatch(saveCurrentThemeTextDark(res.data.theme.textDark));
                dispatch(saveCurrentThemeTextHolder(res.data.theme.textHolder));
                dispatch(saveCurrentThemeColorDanger(res.data.theme.colorDanger));
                setThemeName(res.data.theme.themeName);
                dispatch(saveThemeStatus(res.data.theme.status))
                if (res.data.theme.status === 'DEFAULT') {
                    dispatch(saveDefaultTheme(true))
                    console.log('set to default')
                }else{
                    dispatch(saveDefaultTheme(false))
                    console.log('set to active')
                }
            }
        });
    };

    const onSaveTheme = () => {
        let params = {
            themeId,
            background: currentThemeBackground,
            blockDark: currentThemeBlockDark,
            blockLight: currentThemeBlockLight,
            textDark: currentThemeTextDark,
            textLight: currentThemeTextLight,
            textHolder: currentThemeTextHolder,
            colorDanger: currentThemeColorDanger,
            themeName,
            status: themeStatus
        }

        if (themeId) {
            apiUpdateAppTheme(params).then((res: any) => {
                if (res.code === 0) {
                    message.success('Save success')
                    navigate(-1)
                } else {
                    message.error(t('syserr.' + res.code))
                }
            }).catch(() => {
                message.error(t('syserr.10001'))
            })
        } else {
            apiCreateAppTheme(params).then((res: any) => {
                if (res.code === 0) {
                    message.success('Save success')
                } else {
                    message.error(t('syserr.' + res.code))
                }
            }).catch(() => {
                message.error(t('syserr.10001'))
            })
        }
    }
    return (
        <div><Card title="Edit theme">
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
                        <Col style={{width: "100px"}}>
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
                        <Col style={{width: "100px"}}>
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
                        <Col style={{width: "100px"}}>
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
                        <Col style={{width: "100px"}}>
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
                        <Col style={{width: "100px"}}>
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
                        <Col style={{width: "100px"}}>
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
                <Form.Item label="colorDanger">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorDanger}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorDanger(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorDanger,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label={t('theme.isDefault')}>
                    <Row>
                        <Col>sdfss:{themeStatus}</Col>
                        <Col style={{width: "100px"}}>
                            <Switch checked={defaultTheme} onChange={(e) => {
                                console.log(e)
                                if (e) {
                                    dispatch(saveThemeStatus("DEFAULT"))
                                    dispatch(saveDefaultTheme(true))
                                } else {
                                    dispatch(saveThemeStatus('ACTIVE'))
                                    dispatch(saveDefaultTheme(false))
                                }
                            }}/>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    marginLeft: 10,
                                }}
                            >{
                                defaultTheme ? <Tag color="#108ee9">{t('theme.' + themeStatus)}</Tag> :
                                    <Tag color="#ccc">{t('theme.' + themeStatus)}</Tag>
                            }</div>
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
                    <div style={{color: currentThemeTextLight}}>textLight</div>
                    <div style={{color: currentThemeTextDark}}>textDark</div>
                    <div style={{color: currentThemeTextHolder}}>textHolder</div>
                    <div style={{color: currentThemeColorDanger}}>textHolder</div>
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
                    <div style={{color: currentThemeTextLight}}>textLight</div>
                    <div style={{color: currentThemeTextDark}}>textDark</div>
                    <div style={{color: currentThemeTextHolder}}>textHolder</div>
                    <div style={{color: currentThemeColorDanger}}>textHolder</div>
                </div>
                background
            </div>
        </Card>
            <div style={{marginTop: 20, display: "flex", justifyContent: "center"}}>
                <Button
                    type="primary"
                    onClick={() => {
                        onSaveTheme()
                    }}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
export default AppThemeEdit
