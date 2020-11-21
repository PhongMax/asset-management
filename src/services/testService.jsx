import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

const apiEndpoint = baseApiUrl + "/department";
const postQuery = apiEndpoint + ":create";
const deleteQuery = apiEndpoint + ":delete/";
const getAllQuery = apiEndpoint + ":fetchAll";
const putQuery = apiEndpoint + ":update";

// HTTP.handleProtectedAPI();

export function getAllDepartment() {
  console.log("==> get all department " + getAllQuery);
  return HTTP.GET(getAllQuery);
}

// export function getDepartment(departmentId) {
//   return HTTP.get(departmentUrl(departmentId));
// }

export function saveDepartment(department) {
  if (department.id) {
    return HTTP.PUT(putQuery, department);
  }

  return HTTP.POST(postQuery, department);
}

export function deleteDepartment(departmentId) {
  return HTTP.DELETE(`${deleteQuery}/${departmentId}`);
}

export default {
  getAllDepartment,
  saveDepartment,
  deleteDepartment,
};
