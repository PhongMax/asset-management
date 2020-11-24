import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as userService from "../../../services/userService";
import * as organizationService from "../../../services/organizationService";

const initialFValues = {
  id: 0,
  time: "2015-06-02T21:34:33.616Z",
  embedded: {
    userId: 1,
    organizationId: 1,
  },
};

//=================================== XỬ LÝ DATA THEO ĐÚNG FORMAT ĐỂ XỬ DỤNG ========================//
const DataUser = [];
async function getDataUser() {
  const result = await userService.getAllUser();
  const data = await result.data;
  data.data.map((x) => {
    return DataUser.push({ id: x.id, title: x.fullName });
  });
  return DataUser;
}
getDataUser();
const getUserCollection = () => DataUser;

const DataOrganization = [];
async function getDataOrganization() {
  const result = await organizationService.getAllOrganization();
  const data = await result.data;
  data.data.map((x) => {
    return DataOrganization.push({ id: x.id, title: x.name });
  });
  return DataOrganization;
}
getDataOrganization();
const getOrganizationCollection = () => DataOrganization;

// ==============================================================================================

export default function AdditionalForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

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
    console.log(initialFValues, "adasdas");
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
          <Controls.Select
            name={initialFValues.embedded.userId}
            label="userId"
            value={values.embedded.userId}
            onChange={handleInputChange}
            options={getUserCollection()}
          />
          <Controls.DatePicker
            name="time"
            label="time"
            value={values.time}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name={initialFValues.embedded.organizationId}
            label="organizationId"
            value={values.embedded.organizationId}
            onChange={handleInputChange}
            options={getOrganizationCollection()}
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
