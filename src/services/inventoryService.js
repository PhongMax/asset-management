import HTTP from "./httpService";
import { baseApiUrl } from "../config.json";

// set up Query String
const apiEndpoint = baseApiUrl + "/inventroy";
const postQuery = apiEndpoint + ":create";
const deleteQuery = apiEndpoint + ":delete/";
const getAllQuery = apiEndpoint + ":fetchAll";
const getOneQuery = apiEndpoint + "/";
const putQuery = apiEndpoint + ":update";

HTTP.handleProtectedAPI();

export function getInventory(inventoryId) {
  return HTTP.get(`${getOneQuery}${inventoryId}`);
}

export function getAllInventory() {
  return HTTP.GET(getAllQuery);
}

export function insertInventory(inventroy) {
  return HTTP.POST(postQuery, inventroy);
}

export function updateInventory(inventroy) {
  return HTTP.PUT(putQuery, inventroy);
}

export function deleteInventory(inventoryId) {
  return HTTP.DELETE(`${deleteQuery}${inventoryId}`);
}

export default {
  getInventory,
  getAllInventory,
  insertInventory,
  updateInventory,
  deleteInventory,
};
