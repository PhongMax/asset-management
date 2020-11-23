import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

const initialFValues = {
  id: 0,
  campusType: "",
  contactEmail: "",
  contactPhone: "",
  description: "",
  location: "",
  mapUrl: "",
  name: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const getCampusCollection = () => [
  { id: "1", title: "FACILITY" },
  { id: "2", title: "HEADQUARTERS" },
];
export default function Campus(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Trường này là bắt buộc.";
    if ("contactPhone" in fieldValues)
      temp.contactPhone = fieldValues.contactPhone
        ? ""
        : "Trường này là bắt buộc.";
    if ("contactEmail" in fieldValues)
      temp.contactEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(
        fieldValues.contactEmail
      )
        ? ""
        : "Kiểm tra lại email";
    if ("campusType" in fieldValues)
      temp.campusType = fieldValues.campusType
        ? ""
        : "HEADQUARTERS hoặc FACILITY ";
    if ("location" in fieldValues)
      temp.location = fieldValues.location ? "" : "Trường này là bắt buộc.";
    if ("mapUrl" in fieldValues)
      temp.mapUrl = fieldValues.mapUrl ? "" : "Trường này là bắt buộc.";

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

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Nhập tên cơ sở"
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

          <Controls.Select
            name="campusType"
            label="Mã cơ sở"
            value={values.campusType}
            onChange={handleInputChange}
            options={getCampusCollection()}
          />
          <Controls.Input
            name="mapUrl"
            label="Nhập URL Map"
            value={values.mapUrl}
            onChange={handleInputChange}
            error={errors.mapUrl}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Nhập số điện thoại"
            name="contactPhone"
            value={values.contactPhone}
            onChange={handleInputChange}
            error={errors.contactPhone}
          />
          <Controls.Input
            label="Nhập Email"
            name="contactEmail"
            value={values.contactEmail}
            onChange={handleInputChange}
            error={errors.contactEmail}
          />
          <Controls.Input
            label="Nhập địa chỉ"
            name="location"
            value={values.location}
            onChange={handleInputChange}
            error={errors.location}
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
