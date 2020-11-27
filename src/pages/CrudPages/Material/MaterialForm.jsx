import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";
import * as Utils from "../../../utils/Utils";

const initialFValues = {
  id: 0,
  credentialCode: "",
  status: "",
  allocationDuration: 1,
  timeStartDepreciation: new Date(),
  haveInclude: false,
  parentCode: null,
  productId: 1,
  additionalId: 1,
  placeId: 1,
  userId: 1,
};

export default function MaterialForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [DataProduct, setDataProduct] = useState([]);
  const [DataAdditional, setDataAdditional] = useState([]);
  const [DataUser, setDataUser] = useState([]);
  const [DataPlace, setDataPlace] = useState([]);
  const getMaterialStatus = [
    { id: "UN_USED", title: "UN_USED" },
    { id: "IN_USED", title: "IN_USED" },
    { id: "DAMAGED", title: "DAMAGED" },
    { id: "REQUEST_REPAIR", title: "REQUEST_REPAIR" },
    { id: "REQUEST_LIQUIDATE", title: "REQUEST_LIQUIDATE" },
    { id: "NO_LONGER", title: "NO_LONGER" },
  ];

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // if ("name" in fieldValues)
    //   temp.name = fieldValues.name ? "" : "Trường này là bắt buộc.";
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
    Utils.getDataProduct().then((response) => {
      setDataProduct([...response]);
    });

    Utils.getDataAdditional().then((response) => {
      setDataAdditional([...response]);
    });
    Utils.getDataUser().then((response) => {
      setDataUser([...response]);
    });
    Utils.getDataPlace().then((response) => {
      setDataPlace([...response]);
    });
  }, []);
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="credentialCode"
            label="credentialCode"
            value={values.credentialCode}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="parentCode"
            label="parentCode"
            value={values.parentCode}
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            label="haveInclude"
            name="haveInclude"
            value={values.haveInclude}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="timeStartDepreciation"
            label="Danh mục"
            value={values.timeStartDepreciation}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="status"
            label="status"
            value={values.status}
            onChange={handleInputChange}
            options={getMaterialStatus}
          />
          <Controls.Select
            name="productId"
            label="productId"
            value={values.productId}
            onChange={handleInputChange}
            options={DataProduct}
          />
          <Controls.Select
            name="additionalId"
            label="additionalId"
            value={values.additionalId}
            onChange={handleInputChange}
            options={DataAdditional}
          />

          <Controls.Select
            name="userId"
            label="userId"
            value={values.userId}
            onChange={handleInputChange}
            options={DataUser}
          />
          <Controls.Select
            name="placeId"
            label="placeId"
            value={values.placeId}
            onChange={handleInputChange}
            options={DataPlace}
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
