import axios from "axios";

export const post = (api: String, params: any) => {
  const token = localStorage.getItem("lifecapsule3_admin_token") || "";
  return new Promise((resolve, reject) => {
    axios
      .post(`${api}`, params, {
        headers: {
          token,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const get = (api: String) => {
  const token = localStorage.getItem("lifecapsule3_admin_token") || "";
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
