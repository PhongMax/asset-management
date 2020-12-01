import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

const apiEndpoint = baseApiUrl + "/auth/login";
const userKey = "user";

HTTP.handleProtectedAPI();

export async function login(userLogin) {
  const { data: user } = await HTTP.POST(apiEndpoint, userLogin);
  if (user.data.token) {
    localStorage.removeItem(userKey);
    localStorage.setItem(userKey, JSON.stringify(user.data));
  }
}

export function logout() {
  localStorage.removeItem(userKey);
}

export function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem(userKey));
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
