import axios from "axios";

axios.interceptors.request.use(
  config => {
    const newConfig = config;
    if (localStorage.getItem("token") != null) {
      newConfig.headers.Authorization = localStorage.getItem("token");
    }
    return newConfig;
  },
  err => {
    return Promise.reject(err);
  }
);
// axios.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     const originalRequest = error.config;
//     console.log("e");
//     if (error.code !== "ECONNABORTED" && error.response.status === 401) {
//       if (!originalRequest._retry) {
//         originalRequest._retry = true;
//         return axios
//           .post("/tokens/auth", {
//             refreshToken: axios(),
//             grantType: "refresh_token",
//             clientId: "website"
//           })
//           .then(response => {
//             localStorage.authentication = JSON.stringify(response.data);
//             axios();
//             return axios(originalRequest);
//           });
//       } else {
//         localStorage.removeItem("authentication");
//         console.log("go to login!!");
//       }
//     }
//     return Promise.reject(error);
//   }
// );

function ApiRequest() {}

ApiRequest.prototype = {
  get: url => {
    return axios.get(url);
  },
  post: (url, data) => {
    return axios({
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      url,
      data
    });
  },
  put: (url, data) => {
    return axios({
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      url,
      data: JSON.stringify(data)
    });
  },
  delete: (url, data) => {
    return axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      url,
      data: JSON.stringify(data)
    });
  }
};
const api = new ApiRequest();

export default api;
