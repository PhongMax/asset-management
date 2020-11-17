import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

const apiEndpoint = baseApiUrl + "/campus/1";
const userKey = "user";

HTTP.handleProtectedAPI();

// - - - - - - - - - CRUD --------------
export function getCampus() {
  console.log("Here campus");
  return HTTP.GET(apiEndpoint);
}

export default {
  getCampus,
};
