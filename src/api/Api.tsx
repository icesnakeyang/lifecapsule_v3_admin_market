import { post } from "./ApiBase";

// const host = "http://192.168.1.3:8003/lifecapsule3_api";
const host = "http://192.168.1.28:8003/lifecapsule3_api";
// const host = "http://192.168.43.97:8003/lifecapsule3_api";

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
