import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as categoryService from "../../../services/categoryService";
import * as calculationUnitService from "../../../services/calculationUnitService";

const initialFValues = {
  id: 0,
  origin: "",
  warranty: "",
  timeAllocationType: "",
  name: "",
  description: "",
  embedded: {
    categoryId: 1,
    calculationUnitId: 1,
  },
  allocationDuration: 0,
};

const getProductCollection = () => [
  { id: "YEAR", title: "YEAR" },
  { id: "MONTH", title: "MONTH" },
];

//=================================== XỬ LÝ DATA THEO ĐÚNG FORMAT ĐỂ XỬ DỤNG ========================//
const DataCategory = [];
async function getDataCategory() {
  const result = await categoryService.getAllCategory();
  const data = await result.data;
  data.data.map((x) => {
    return DataCategory.push({ id: x.id, title: x.name });
  });
  return DataCategory;
}
getDataCategory();
const getCategoryCollection = () => DataCategory;

const DataCalculationUnit = [];
async function getDataCalculationUnit() {
  const result = await calculationUnitService.getAllCalculationUnit();
  const data = await result.data;
  data.data.map((x) => {
    return DataCalculationUnit.push({ id: x.id, title: x.name });
  });
  return DataCalculationUnit;
}
getDataCalculationUnit();
const getCalculationUnitCollection = () => DataCalculationUnit;

// ==============================================================================================

export default function ProductForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Trường này là bắt buộc.";
    if ("warranty" in fieldValues)
      temp.warranty = fieldValues.warranty ? "" : "Trường này là bắt buộc.";
    if ("origin" in fieldValues)
      temp.origin = fieldValues.origin ? "" : "Trường này là bắt buộc.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    console.log(initialFValues);
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Nhập tên sản phảm"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            name="description"
            label="Nhập mô tả"
            value={values.description}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="allocationDuration"
            label="allocationDuration"
            type="number"
            value={values.allocationDuration}
            onChange={handleInputChange}
            error={errors.allocationDuration}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Nguồn gốc"
            name="origin"
            value={values.origin}
            onChange={handleInputChange}
            error={errors.origin}
          />
          <Controls.Input
            label="Bảo hành"
            name="warranty"
            value={values.warranty}
            onChange={handleInputChange}
            error={errors.warranty}
          />
          <Controls.Select
            name="timeAllocationType"
            label="Thời hạn"
            value={values.timeAllocationType}
            onChange={handleInputChange}
            options={getProductCollection()}
          />
          <Controls.Select
            name="embedded.categoryId"
            label="Danh mục"
            value={values.embedded.categoryId}
            onChange={handleInputChange}
            options={getCategoryCollection()}
          />
          <Controls.Select
            name="embedded.calculationUnitId"
            label="Đơn vị tính"
            value={values.embedded.calculationUnitId}
            onChange={handleInputChange}
            options={getCalculationUnitCollection()}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
