import jwtDecode from "jwt-decode";
import http from "./httpService";
import { baseApiUrl } from "../config.json";

const apiEndpoint = baseApiUrl + "/auth/login";
const tokenKey = "token";
console.log(apiEndpoint);

http.setJwt(getJwt());

export async function login(username, password) {
  console.log(username + ":" + password);
  const { data: jwt } = await http.post(apiEndpoint, { username, password });

  console.log(JSON.Stringify(jwt));

  console.log(" data là gì: " + jwt);
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  console.log("hàm get JWT " + localStorage.getItem(tokenKey));
  return localStorage.getItem(tokenKey);
}

// export kiểu đây là export kiểu object bên kia nhận object rồi gọi ra...
// còn bình thường là export kiểu function.
export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
