import * as departmentService from "../services/departmentService";
import * as calculationUnitService from "../services/calculationUnitService";
import * as categoryService from "../services/categoryService";
import * as userService from "../services/userService";
import * as organizationService from "../services/organizationService";

// ============== Dùng để truyền vào các component như select v.v.v==========================
export const getDataDepartment = async () => {
  const { data: responseData } = await departmentService.getAllDepartment();
  const { data: Departments } = responseData;
  return Departments.map((item) => {
    return { id: item.id, title: item.name };
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
    return { id: item.id, title: item.name };
  });
};

export const getDataUser = async () => {
  const { data: responseData } = await userService.getAllUser();
  const { data: Users } = responseData;
  return Users.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataOrganization = async () => {
  const { data: responseData } = await organizationService.getAllOrganization();
  const { data: Organizations } = responseData;
  return Organizations.map((item) => {
    return { id: item.id, title: item.name };
  });
};

//==========================================================================================
export const convertDateTime = (epochTime) => {
  const dateConverted = new Date(epochTime);
  return dateConverted.toLocaleString();
};

export default {
  convertDateTime,
  getDataDepartment,
};
