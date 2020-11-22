import jwtDecode from "jwt-decode";
import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

const apiEndpoint = baseApiUrl + "/auth/login";
const userKey = "user";

HTTP.handleProtectedAPI();

export async function login(userLogin) {
  const { data: user } = await HTTP.POST(apiEndpoint, userLogin);
  if (user.data.token) {
    localStorage.setItem(userKey, JSON.stringify(user.data));
  }
}

export function logout() {
  localStorage.removeItem(userKey);
}

// hàm này viết lại nè, ko cần mã hóa nữa.
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(userKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

// chỗ này thiếu hàm register nè, làm sau

export default {
  login,
  logout,
  getCurrentUser,
};
