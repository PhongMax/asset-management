import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

// set up Query String
const apiEndpoint = baseApiUrl + "/material";
const postQuery = apiEndpoint + ":create";
const deleteQuery = apiEndpoint + ":delete/";
const getAllQuery = apiEndpoint + ":fetchAll";
const getOneQuery = apiEndpoint + "/";
const putQuery = apiEndpoint + ":update";


HTTP.handleProtectedAPI();

export function getMaterial(materialId) {
  return HTTP.get(`${getOneQuery}${materialId}`;
}

export function getAllMaterial() {
  return HTTP.GET(getAllQuery);
}

export function insertMaterial(material) {
  return HTTP.POST(postQuery, material);
}

export function updateMaterial(material) {
  return HTTP.PUT(putQuery, material);
}

export function deleteMaterial(materialId) {
  return HTTP.DELETE(`${deleteQuery}${materialId}`);
}

export default {
  getMaterial,
  getAllMaterial,
  insertMaterial,
  updateMaterial,
  deleteMaterial,
};