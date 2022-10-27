import {useLocation} from "react-router-dom";
import {apiGetMotto, apiSetMottoActive, apiSetMottoStop} from "../../api/Api";
import React, {useEffect, useState} from "react";
import {Button, Card, Divider, message} from "antd";
import moment from "moment";
import {useTranslation} from "react-i18next";

const MottoDetail = () => {
    const {mottoId}: any = useLocation().state;
    const [authorName, setAuthorName] = useState('')
    const [content, setContent] = useState('')
    const [createTime, setCreateTime] = useState('')
    const [likes, setLikes] = useState(0)
    const [views, setViews] = useState(0)
    const [status, setStatus] = useState('')
    const {t} = useTranslation()
    console.log(mottoId)

    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            mottoId
        }
        apiGetMotto(params).then((res: any) => {
            if (res.code === 0) {
                let motto = res.data.motto
                setAuthorName(motto.authorName)
                setContent(motto.content)
                setCreateTime(motto.createTime)
                setLikes(motto.likes)
                setViews(motto.views)
                setStatus(motto.status)
            }
        })
    }

    const onSetMottoStop = () => {
        let params = {
            mottoId
        }
        apiSetMottoStop(params).then((res: any) => {
            if (res.code === 0) {
                message.success(t('motto.tipSetMottoStopSuccess'))
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }

    const onSetMottoActive = () => {
        let params = {
            mottoId
        }
        apiSetMottoActive(params).then((res: any) => {
            if (res.code === 0) {
                message.success(t('motto.tipSetMottoActiveSuccess'))
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })

    }
    return (
        <div>
            <Card>
                <div>
                    <div>Author: {authorName}</div>
                    <div>Publish time: {moment(createTime).format('LLLL')}</div>
                    <div style={{display: 'flex', marginTop: 20}}>
                        <div>Views: {views}</div>
                        <div style={{marginLeft: 20}}>Likes: {likes}</div>
                    </div>
                    <div style={{marginTop: 10}}>Status: {status}</div>
                </div>
                <Divider/>
                <div>{content}</div>
            </Card>

            <div style={{marginTop: 20, justifyContent: "space-around", display: 'flex'}}>
                <Button type='primary' style={{background: '#f44460', borderColor: '#f44460'}} onClick={() => {
                    onSetMottoStop()
                }}>Stop</Button>
                <Button type='primary' style={{background: '#32a4a7', borderColor: '#32a4a7'}} onClick={() => {
                    onSetMottoActive()
                }}>Active</Button>
            </div>
        </div>
    )
}
export default MottoDetail
