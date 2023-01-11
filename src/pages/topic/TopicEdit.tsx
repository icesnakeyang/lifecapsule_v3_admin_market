import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiActiveTopic, apiGetTopic, apiRemoveTopic} from "../../api/Api";
import {Button, Card, Form, Input, message, Modal} from "antd";
import {useTranslation} from "react-i18next";
import moment from "moment";
import FormItem from "antd/es/form/FormItem";

const TopicEdit = () => {
    const {topicId}: any = useLocation().state;
    const {t} = useTranslation()

    const [authorName, setAuthorName] = useState('')
    const [comments, setComments] = useState(0)
    const [content, setContent] = useState('')
    const [createTime, setCreateTime] = useState(null)
    const [pid, setPid] = useState('')
    const [status, setStatus] = useState('')
    const [title, setTitle] = useState('')
    const [views, setViews] = useState(0)
    const [modalDelete, setModalDelete] = useState(false)


    useEffect(() => {
        loadAllData()
    }, [])

    const loadAllData = () => {
        let params = {
            topicId
        }
        console.log(params)
        apiGetTopic(params).then((res: any) => {
            if (res.code === 0) {
                setAuthorName(res.data.topic.authorName)
                setComments(res.data.topic.comments)
                setContent(res.data.topic.content)
                setCreateTime(res.data.topic.createTime)
                setPid(res.data.topic.pid)
                setStatus(res.data.topic.status)
                setTitle(res.data.topic.title)
                setViews(res.data.topic.views)
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }

    const onConfirmDelete = () => {
        if (status === 'ADMIN_REMOVE') {
            return
        }
        let params = {
            topicId
        }
        console.log(params)
        apiRemoveTopic(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Remove success')
                setModalDelete(false)
                loadAllData()
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }

    const onActiveTopic = () => {
        if (status !== 'ADMIN_REMOVE') {
            return
        }
        let params = {
            topicId
        }
        apiActiveTopic(params).then((res: any) => {
            if (res.code === 0) {
                message.success('Active success')
                loadAllData()
            } else {
                message.error(t('syserr.' + res.code))
            }
        }).catch(() => {
            message.error(t('syserr.10001'))
        })
    }

    return (<div>
        <div style={{height: 100, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            {status === 'ACTIVE' ?
                <Button type='primary' style={{color: '#fff', background: 'red', borderColor: 'red'}} onClick={() => {
                    setModalDelete(true)
                }}>Delete</Button> :
                status === 'ADMIN_REMOVE' ?
                    <Button type='primary' style={{}}
                            onClick={() => {
                                onActiveTopic()
                            }}>Active</Button> : null
            }
        </div>
        <Card title='Topic Information'>
            <Form>
                <FormItem>
                    <Input value={title}/>
                </FormItem>
                <FormItem>
                    <Input value={authorName}/>
                </FormItem>
                <FormItem label='Create time'>
                    <div>{moment(createTime).format('LLL')}</div>
                </FormItem>
                <FormItem label='Views'>
                    <div>{views}</div>
                </FormItem>
                <FormItem label='Status'>
                    <div>{status}</div>
                </FormItem>
                <FormItem>
                    <Input.TextArea value={content} autoSize/>
                </FormItem>
            </Form>
        </Card>

        <Modal visible={modalDelete} onCancel={() => {
            setModalDelete(false)
        }} onOk={() => {
            onConfirmDelete()
        }}>
            <div>Are you sure to delete this topic?</div>
        </Modal>
    </div>)
}
export default TopicEdit
