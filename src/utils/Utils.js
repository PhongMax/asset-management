import * as departmentService from "../services/departmentService";
import * as calculationUnit from "../services/calculationUnitService";
import * as category from "../services/categoryService";

export const getDataDepartment = async () => {
  const { data: responseData } = await departmentService.getAllDepartment();
  const { data: Departments } = responseData;
  return Departments.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataCalculationUnit = async () => {
  const { data: responseData } = await calculationUnit.getAllCalculationUnit();
  const { data: CalculationUnits } = responseData;
  return CalculationUnits.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const getDataCategory = async () => {
  const { data: responseData } = await category.getAllCategory();
  const { data: Categorys } = responseData;
  return Categorys.map((item) => {
    return { id: item.id, title: item.name };
  });
};

export const convertDateTime = (epochTime) => {
  const dateConverted = new Date(epochTime);
  return dateConverted.toLocaleString();
};

export default {
  convertDateTime,
  getDataDepartment,
};
