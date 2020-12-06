import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as Utils from "../../../utils/Utils";

const initialFValues = {
  id: 0,
  price: "",
  userId: 1,
  organizationId: 0,
};

export default function AdditionalProductForm(props) {

  return (
    <Controls.MultipleInput />
  );
  // const { addOrEdit, recordForEdit } = props;
  // const [Product, setProduct] = useState([]);
  // const [Additional, setAdditional] = useState([]);
  // const validate = (fieldValues = values) => {
  //   let temp = { ...errors };

  //   setErrors({
  //     ...temp,
  //   });

  //   if (fieldValues === values)
  //     return Object.values(temp).every((x) => x === "");
  // };

  // const {
  //   values,
  //   setValues,
  //   errors,
  //   setErrors,
  //   handleInputChange,
  //   resetForm,
  // } = useForm(initialFValues, true, validate);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     addOrEdit(values, resetForm);
  //   }
  // };

  // useEffect(() => {
  //   if (recordForEdit != null)
  //     setValues({
  //       ...recordForEdit,
  //     });
  // }, [recordForEdit, setValues]);

  // useEffect(() => {
  //   Utils.getDataAdditional().then((response) => {
  //     setAdditional([...response]);
  //   });
  //   Utils.getDataProduct().then((response) => {
  //     setProduct([...response]);
  //   });
  // }, []);

  // return (
  //   <Form onSubmit={handleSubmit}>
  //     <Grid container>
  //       <Grid item xs={6}>
  //         <Controls.Select
  //           name="additionalId"
  //           label="additionalId"
  //           value={values.additionalId}
  //           onChange={handleInputChange}
  //           options={Additional}
  //         />
  //         <Controls.input
  //           name="price"
  //           label="price"
  //           value={values.price}
  //           onChange={handleInputChange}
  //         />
  //       </Grid>
  //       <Grid item xs={6}>
  //         <Controls.ChipInput
  //         />
  //         <div>
  //           <Controls.Button type="submit" text="Submit" />
  //           <Controls.Button text="Reset" color="default" onClick={resetForm} />
  //         </div>
  //       </Grid>
  //     </Grid>
  //   </Form>
  // );
}
