import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

// như vậy là mỗi lần gọi api nó sẽ get JWT này ...
// viêt như này thì hàm này nó chạy luôn
// viết như dưới kia thì nó còn gọi ở bên file khác.
http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
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
