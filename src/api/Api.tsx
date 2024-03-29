import {post, get} from "./ApiBase";

// const host = "http://192.168.1.3:8003/lifecapsule3_api";
// const host = "http://localhost:8003/lifecapsule3_api";
// const host = "http://192.168.43.97:8003/lifecapsule3_api";
// const host = "https://gogorpg.com/lifecapsule3_api";
// const host = "http://124.217.246.120:8003/lifecapsule3_api";
const host = "https://tellmeafter.com/lifecapsule3_api";

export const apiAdminLogin = (params: any) => {
    return post(`${host}/admin/login/admin_login`, params);
};

export const apiLogin = (params: any) => {
    return post(`${host}/market/marketUser/login`, params);
};

export const apiAdminNoteList = (params: any) => {
    return post(`${host}/admin/note/list_note`, params);
};

/**
 * 查询用户产品用户列表
 */
export const apiListUsers = (params: any) => {
    return post(`${host}/admin/users/listUsers`, params);
};

export const apiListWebTheme = (params: any) => {
    return post(`${host}/admin/theme/listWebTheme`, params);
};

export const apiGetWebTheme = (params: any) => {
    return post(`${host}/admin/theme/getWebTheme`, params);
};

export const apiUpdateWebTheme = (params: any) => {
    return post(`${host}/admin/theme/updateWebTheme`, params);
};

export const apiCreateWebTheme = (params: any) => {
    return post(`${host}/admin/theme/createWebTheme`, params);
};

export const apiListUserLoginLog = (params: any) => {
    return post(`${host}/admin/users/listUserLoginLog`, params);
};

export const apiLoadUserStatistic = () => {
    return get(`${host}/admin/users/loadUserStatistic`);
};

export const apiCreateAppTheme = (params: any) => {
    return post(`${host}/admin/theme/createAppTheme`, params);
};

export const apiUpdateAppTheme = (params: any) => {
    return post(`${host}/admin/theme/updateAppTheme`, params);
};

export const apiListAppTheme = (params: any) => {
    return post(`${host}/admin/theme/listAppTheme`, params);
};

export const apiGetAppTheme = (params: any) => {
    return post(`${host}/admin/theme/getAppTheme`, params);
};

export const apiLoadUserLoginStatistic = (params: any) => {
    return post(`${host}/admin/users/loadUserLoginStatistic`, params);
};

export const apiListTop10Notes = () => {
    return get(`${host}/admin/users/listTop10Notes`);
};

export const apiRemoveTopic = (params: any) => {
    return post(`${host}/admin/topic/removeTopic`, params);
};

export const apiListTopic = (params: any) => {
    return post(`${host}/admin/topic/listTopic`, params);
};

export const apiListMotto = (params: any) => {
    return post(`${host}/admin/motto/listMotto`, params);
};

export const apiGetMotto = (params: any) => {
    return post(`${host}/admin/motto/getMotto`, params);
};

export const apiSetMottoStop = (params: any) => {
    return post(`${host}/admin/motto/setMottoStop`, params);
};

export const apiSetMottoActive = (params: any) => {
    return post(`${host}/admin/motto/setMottoActive`, params);
};

export const apiListUserAct = (params: any) => {
    return post(`${host}/admin/userAct/listUserAct`, params);
};

export const apiGetTopic = (params: any) => {
    return post(`${host}/admin/topic/getTopic`, params);
};

export const apiActiveTopic = (params: any) => {
    return post(`${host}/admin/topic/activeTopic`, params);
};

export const apiLoadUserData = (params: any) => {
    return post(`${host}/admin/users/loadUserData`, params);
};

export const apiListUserBindEmail = (params: any) => {
    return post(`${host}/admin/users/listUserBindEmail`, params);
};
