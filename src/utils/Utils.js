import moment from "moment";
import * as departmentService from "../services/departmentService";
import * as calculationUnitService from "../services/calculationUnitService";
import * as categoryService from "../services/categoryService";
import * as userService from "../services/userService";
import * as organizationService from "../services/organizationService";
import * as campusService from "../services/campusService";
import * as typePlaceService from "../services/typePlaceService";
import * as placeService from "../services/placeService";
import * as additionalService from "../services/additionalService";
import * as productService from "../services/productService";
import * as groupService from "../services/groupService";
import * as liquidateService from "../services/liquidateService";


export const getDataDepartment = async () => {
  const { data: responseData } = await departmentService.getAllDepartment();
  const { data: Departments } = responseData;
  return Departments.map((item) => {
    return { id: item.id, title: item.description };
  });
};

export const getDataCalculationUnit = async () => {
  const {
    data: responseData,
  } = await calculationUnitService.getAllCalculationUnit();
  const { data: CalculationUnits } = responseData;
  return CalculationUnits.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataCategory = async () => {
  const { data: responseData } = await categoryService.getAllCategory();
  const { data: Categorys } = responseData;
  return Categorys.map((item) => {
    return { id: item.id, title: item.description };
  });
};

export const getDataUser = async () => {
  const { data: responseData } = await userService.getAllUser();
  const { data: Users } = responseData;
  return Users.map((item) => {
    return { id: item.id, title: item.fullName };
  });
};

export const getDataOrganization = async () => {
  const { data: responseData } = await organizationService.getAllOrganization();
  const { data: Organizations } = responseData;
  return Organizations.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataCampus = async () => {
  const { data: responseData } = await campusService.getAllCampus();
  const { data: Campus } = responseData;
  return Campus.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataTypePlace = async () => {
  const { data: responseData } = await typePlaceService.getAllTypePlace();
  const { data: typePlaces } = responseData;
  return typePlaces.map((item) => {
    return { id: item.id, title: item.name };
  });
};
export const getDataPlace = async () => {
  const { data: responseData } = await placeService.getAllPlace();
  const { data: typePlaces } = responseData;
  return typePlaces.map((item) => {
    return { id: item.id, title: item.nameSpecification };
  });
};
export const getDataAdditional = async () => {
  const { data: responseData } = await additionalService.getAllAdditional();
  const { data: typePlaces } = responseData;
  return typePlaces.map((item) => {
    return { id: item.id, title: convertDateTime(item.time) };
  });
};
export const getDataProduct = async () => {
  const { data: responseData } = await productService.getAllProduct();
  const { data: typePlaces } = responseData;
  return typePlaces.map((item) => {
    return { id: item.id, title: item.description };
  });
};

export const getDataGroup = async () => {
  const { data: responseData } = await groupService.getAllGroup();
  const { data: groups } = responseData;
  return groups.map((item) => {
    return { id: item.id, title: item.description };
  });
};

export const getDataLiquidate = async () => {
  const { data: responseData } = await liquidateService.getAllLiquidate();
  let { data: liquidate } = responseData;
  liquidate= liquidate.filter((item) => (item.done.toString() === "false"));
  return liquidate.map((item) => {
    return { id: item.id, title: convertDateTime(item.time) };
  });
};
//==========================================================================================
export const convertDateTime = (epochTime) => {

  // return moment.unix(epochTime).format('DD/MM/YYYY hh:mm:ss A').utc();

  // const dateConverted = new Date(epochTime * 1000);
  // return dateConverted.toLocaleString();

  return moment.unix(epochTime).format('DD/MM/YYYY hh:mm:ss A');
};

export default {
  convertDateTime,
  getDataDepartment,
};
