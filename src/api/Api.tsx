import {post, get} from "./ApiBase";

// const host = "http://192.168.1.3:8003/lifecapsule3_api";
const host = "http://localhost:8003/lifecapsule3_api";
// const host = "http://192.168.43.97:8003/lifecapsule3_api";
// const host = "https://gogorpg.com/lifecapsule3_api";

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

export const apiRemoveTopic = () => {
    return get(`${host}/admin/topic/removeTopic`);
};

export const apiListTopic = (params: any) => {
    return post(`${host}/admin/topic/listTopic`, params);
};
