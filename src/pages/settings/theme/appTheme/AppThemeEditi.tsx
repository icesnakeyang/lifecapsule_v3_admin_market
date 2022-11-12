import {Button, Card, Col, Form, Input, message, Row, Switch, Tag} from "antd";
import {
    saveCurrentThemeBackground,
    saveCurrentThemeBlockDark,
    saveCurrentThemeBlockLight, saveCurrentThemeColor1,
    saveCurrentThemeColor2,
    saveCurrentThemeColor3,
    saveCurrentThemeColor4,
    saveCurrentThemeColorDanger, saveCurrentThemeColorDanger2, saveCurrentThemeColorDark,
    saveCurrentThemeColorDark2,
    saveCurrentThemeColorLight,
    saveCurrentThemeColorLight2,
    saveCurrentThemeColorMedium,
    saveCurrentThemeColorMedium2,
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
    const currentThemeColorDanger2 = useSelector(
        (state: any) => state.themeSlice.currentThemeColorDanger2
    );
    const currentThemeColorDark = useSelector(
        (state: any) => state.themeSlice.currentThemeColorDark
    );
    const currentThemeColorDark2 = useSelector(
        (state: any) => state.themeSlice.currentThemeColorDark2
    );
    const currentThemeColorMedium = useSelector(
        (state: any) => state.themeSlice.currentThemeColorMedium
    );
    const currentThemeColorMedium2 = useSelector(
        (state: any) => state.themeSlice.currentThemeColorMedium2
    );
    const currentThemeColorLight = useSelector(
        (state: any) => state.themeSlice.currentThemeColorLight
    );
    const currentThemeColorLight2 = useSelector(
        (state: any) => state.themeSlice.currentThemeColorLight2
    );
    const currentThemeColor1 = useSelector(
        (state: any) => state.themeSlice.currentThemeColor1
    );
    const currentThemeColor2 = useSelector(
        (state: any) => state.themeSlice.currentThemeColor2
    );
    const currentThemeColor3 = useSelector(
        (state: any) => state.themeSlice.currentThemeColor3
    );
    const currentThemeColor4 = useSelector(
        (state: any) => state.themeSlice.currentThemeColor4
    );
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const navigate = useNavigate();
    const defaultTheme = useSelector((state: any) => state.themeSlice.defaultTheme)
    const themeStatus = useSelector((state: any) => state.themeSlice.themeStatus)

    useEffect(() => {
        loadAllData()
    }, [])

    useEffect(() => {
        console.log(defaultTheme)

    }, [defaultTheme])

    const loadAllData = () => {
        let params = {
            themeId,
        };
        apiGetAppTheme(params).then((res: any) => {
            if (res.code === 0) {
                console.log(res)
                dispatch(saveCurrentThemeBackground(res.data.theme.background));
                dispatch(saveCurrentThemeBlockDark(res.data.theme.blockDark));
                dispatch(saveCurrentThemeBlockLight(res.data.theme.blockLight));
                dispatch(saveCurrentThemeTextLight(res.data.theme.textLight));
                dispatch(saveCurrentThemeTextDark(res.data.theme.textDark));
                dispatch(saveCurrentThemeTextHolder(res.data.theme.textHolder));
                dispatch(saveCurrentThemeColorDanger(res.data.theme.colorDanger));
                dispatch(saveCurrentThemeColorDanger2(res.data.theme.colorDanger2));
                dispatch(saveCurrentThemeColorDark(res.data.theme.colorDark));
                dispatch(saveCurrentThemeColorDark2(res.data.theme.colorDark2));
                dispatch(saveCurrentThemeColorMedium(res.data.theme.colorMedium));
                dispatch(saveCurrentThemeColorMedium2(res.data.theme.colorMedium2));
                dispatch(saveCurrentThemeColorLight(res.data.theme.colorLight));
                dispatch(saveCurrentThemeColorLight2(res.data.theme.colorLight2));
                dispatch(saveCurrentThemeColor1(res.data.theme.color1));
                dispatch(saveCurrentThemeColor2(res.data.theme.color2));
                dispatch(saveCurrentThemeColor3(res.data.theme.color3));
                dispatch(saveCurrentThemeColor4(res.data.theme.color4));
                setThemeName(res.data.theme.themeName);
                dispatch(saveThemeStatus(res.data.theme.status))
                if (res.data.theme.status === 'DEFAULT') {
                    dispatch(saveDefaultTheme(true))
                    console.log('set to default')
                } else {
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
            colorDanger2: currentThemeColorDanger2,
            colorDark: currentThemeColorDark,
            colorDark2: currentThemeColorDark2,
            colorMedium: currentThemeColorMedium,
            colorMedium2: currentThemeColorMedium2,
            colorLight: currentThemeColorLight,
            colorLight2: currentThemeColorLight2,
            color1: currentThemeColor1,
            color2: currentThemeColor2,
            color3: currentThemeColor3,
            color4: currentThemeColor4,
            themeName,
            status: themeStatus
        }

        console.log(params)
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
                <Form.Item label="colorDanger2">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorDanger2}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorDanger2(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorDanger2,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorDark">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorDark}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorDark(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorDark,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorMedium">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorMedium}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorMedium(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorMedium,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorLight">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorLight}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorLight(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorLight,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorDark2">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorDark2}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorDark2(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorDark2,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorMedium2">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorMedium2}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorMedium2(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorMedium2,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="colorLight2">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColorLight2}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColorLight2(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColorLight2,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="color1">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColor1}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColor1(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColor1,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="color2">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColor2}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColor2(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColor2,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="color3">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColor3}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColor3(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColor3,
                                    marginLeft: 10,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item label="color4">
                    <Row>
                        <Col style={{width: "100px"}}>
                            <Input
                                value={currentThemeColor4}
                                onChange={(e) => {
                                    dispatch(saveCurrentThemeColor4(e.target.value));
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "50px",
                                    height: "100%",
                                    background: currentThemeColor4,
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
                    <div style={{color: currentThemeColorDanger}}>colorDanger</div>
                    <div style={{color: currentThemeColorDanger2}}>colorDanger2</div>
                    <div style={{color: currentThemeColorDark}}>colorDark</div>
                    <div style={{color: currentThemeColorDark2}}>colorDark2</div>
                    <div style={{color: currentThemeColorMedium}}>colorMedium</div>
                    <div style={{color: currentThemeColorMedium2}}>colorMedium2</div>
                    <div style={{color: currentThemeColorLight}}>colorLight</div>
                    <div style={{color: currentThemeColorLight2}}>colorLight2</div>
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
                    <div style={{color: currentThemeColorDanger}}>colorDanger</div>
                    <div style={{color: currentThemeColorDanger2}}>colorDanger2</div>
                    <div style={{color: currentThemeColorDark}}>colorDark</div>
                    <div style={{color: currentThemeColorDark2}}>colorDark2</div>
                    <div style={{color: currentThemeColorMedium}}>colorMedium</div>
                    <div style={{color: currentThemeColorMedium2}}>colorMedium2</div>
                    <div style={{color: currentThemeColorLight}}>colorLight</div>
                    <div style={{color: currentThemeColorLight2}}>colorLight2</div>
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
