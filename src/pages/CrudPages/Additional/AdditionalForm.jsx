import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as Utils from "../../../utils/Utils";

const initialFValues = {
  id: 0,
  time: new Date(),
  userId: 1,
  organizationId: 0,
};

export default function AdditionalForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [Users, setUsers] = useState([]);
  const [Organizations, setOrganizations] = useState([]);

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
    Utils.getDataOrganization().then((response) => {
      setOrganizations([...response]);
    });
    Utils.getDataUser().then((response) => {
      setUsers([...response]);
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Select
            name="userId"
            label="userId"
            value={values.userId}
            onChange={handleInputChange}
            options={Users}
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
            name="organizationId"
            label="organizationId"
            value={values.organizationId}
            onChange={handleInputChange}
            options={Organizations}
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
