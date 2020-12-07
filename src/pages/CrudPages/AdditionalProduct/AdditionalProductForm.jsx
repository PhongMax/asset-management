import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as Utils from "../../../utils/Utils";

const initialFValues = {
    additionalId: "",
    productId: "",
    price: "",
    listMaterialCode: [""],
};

export default function AdditionalProductForm(props) {
  const [DataAdditional, setDataAdditional] = useState([]);
  const [DataProduct, setDataProduct] = useState([]);
 
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});


  const validate = (fieldValues = values) => {
    let temp = { ...errors };
   
      if ("productId" in fieldValues)
      temp.productId = fieldValues.productId ? "" : "Trường này là bắt buộc.";
      
      if ("additionalId" in fieldValues)
      temp.additionalId = fieldValues.additionalId ? "" : "Trường này là bắt buộc.";

      if ("price" in fieldValues)
      temp.price = /^([0-9.])+$/.test(
        fieldValues.price
      )
        ? ""
        : "Trường này không hợp lệ.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  const handleInputChange = e => {
//     const { name, value } = e.target

 
//     setValues({
//         ...values,
//         [name]: value
//     })
//     if (validateOnChange)
//         validate({ [name]: value })
}
 const handleContinue = () =>
 {
   
 }
  useEffect(() => {
    Utils.getDataAdditional().then((response) => {
      setDataAdditional([...response]);
    });
    Utils.getDataProduct().then((response) => {
      setDataProduct([...response]);
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={6}>
      <Controls.AutoCompleteButton
            name="additionalId"
            label="Chọn đợt bổ sung"
            value={DataAdditional.find(
              (item) => item.id === values.additionalId
            )}
            onChange={handleInputChange}
            options={DataAdditional}
            error={errors.additionalId}
          />

          <Controls.AutoCompleteButton
            name="productId"
            label="Chọn sản phẩm"
            value={DataProduct.find((item) => item.id === values.productId)}
            onChange={handleInputChange}
            options={DataProduct}
            error={errors.productId}
          />

            <Controls.Input
            name="price"
            label="Giá"
            value={values.allocationDuration}
            onChange={handleInputChange}
            error={errors.allocationDuration}
          />
      <div>
          <Controls.Button type="submit" text="Submit" />
          <Controls.Button text="Continue" color="default" onClick={handleContinue} />
        </div>
      </Grid>
      <Grid item xs={6}>
      <Controls.MultipleInput
          />

        
      </Grid>
    </Grid>
  </Form>
  );
  
}
