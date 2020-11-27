import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as Utils from "../../../utils/Utils";

const initialFValues = {
  id: 0,
  origin: "",
  timeAllocationType: "",
  name: "",
  description: "",
  categoryId: 0,
  calculationUnitId: 0,
  allocationDuration: 0,
  type: "",
};

const getProductCollection = () => [
  { id: "YEAR", title: "YEAR" },
  { id: "MONTH", title: "MONTH" },
];

const getProductTypeCollection = () => [
  { id: "ASSET", title: "ASSET" },
  { id: "TOOL", title: "TOOL" },
];

export default function ProductForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [CalculationUnits, setCalculationUnits] = useState([]);
  const [Categories, setCategories] = useState([]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Trường này là bắt buộc.";

    if ("origin" in fieldValues)
      temp.origin = fieldValues.origin ? "" : "Trường này là bắt buộc.";

    if ("timeAllocationType" in fieldValues)
      temp.timeAllocationType = fieldValues.timeAllocationType
        ? ""
        : "Trường này là bắt buộc.";
    if ("type" in fieldValues)
      temp.type = fieldValues.type ? "" : "Trường này là bắt buộc.";

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

  useEffect(() => {
    Utils.getDataCalculationUnit().then((response) => {
      setCalculationUnits([...response]);
    });

    Utils.getDataCategory().then((response) => {
      setCategories([...response]);
    });
  }, []);

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
            label="Nguồn gốc"
            name="origin"
            value={values.origin}
            onChange={handleInputChange}
            error={errors.origin}
          />

          <Controls.Input
            name="allocationDuration"
            label="allocationDuration"
            value={values.allocationDuration}
            onChange={handleInputChange}
            error={errors.allocationDuration}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="timeAllocationType"
            label="Thời hạn"
            value={values.timeAllocationType}
            onChange={handleInputChange}
            options={getProductCollection()}
            error={errors.timeAllocationType}
          />
          <Controls.Select
            name="type"
            label="Loại tài sản"
            value={values.type}
            onChange={handleInputChange}
            options={getProductTypeCollection()}
            error={errors.type}
          />

          <Controls.Select
            name="categoryId"
            label="Danh mục"
            value={values.categoryId}
            onChange={handleInputChange}
            options={Categories}
          />
          <Controls.Select
            name="calculationUnitId"
            label="Đơn vị tính"
            value={values.calculationUnitId}
            onChange={handleInputChange}
            options={CalculationUnits}
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
