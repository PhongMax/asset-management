import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

// set up Query String
const apiEndpoint = baseApiUrl + "/material";
const postQuery = apiEndpoint + ":create";
const deleteQuery = apiEndpoint + ":delete/";
const getAllQuery = apiEndpoint + ":fetchAll";
const getOneQuery = apiEndpoint + "/";
const putQuery = apiEndpoint + ":update";
const exportQuery = baseApiUrl +  "/statistical/";

HTTP.handleProtectedAPI();

export function getMaterial(materialId) {
  return HTTP.GET(`${getOneQuery}${materialId}`);
}

export function getExportMaterial(year) {
  console.log(`${exportQuery}${year}`, " xem thử");
  return HTTP.GET(`${exportQuery}${year}`);
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
  getExportMaterial,
};
