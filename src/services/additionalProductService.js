import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

// set up Query String
const apiEndpoint = baseApiUrl + "/additionalProduct";
const postQuery = apiEndpoint + ":create";
const deleteQuery = apiEndpoint + ":delete/";
const getAllQuery = apiEndpoint + ":fetchAll";
const getOneQuery = apiEndpoint + "/";
const putQuery = apiEndpoint + ":update";


HTTP.handleProtectedAPI();

export function getAdditionalProduct(additionalProductId) {
  return HTTP.get(`${getOneQuery}${additionalProductId}`;
}

export function getAllAdditionalProduct() {
  return HTTP.GET(getAllQuery);
}

export function insertAdditionalProduct(additionalProduct) {
  return HTTP.POST(postQuery, additionalProduct);
}

export function updateAdditionalProduct(additionalProduct) {
  return HTTP.PUT(putQuery, additionalProduct);
}

export function deleteAdditionalProduct(additionalProductId) {
  return HTTP.DELETE(`${deleteQuery}${additionalProductId}`);
}

export default {
  getAdditionalProduct,
  getAllAdditionalProduct,
  insertAdditionalProduct,
  updateAdditionalProduct,
  deleteAdditionalProduct,
};
