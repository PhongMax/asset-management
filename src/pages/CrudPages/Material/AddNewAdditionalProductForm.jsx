import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import {  Form } from "../commons/useForm";

import * as Utils from "../../../utils/Utils";

const initialFValues = {
    additionalId: "",
    productId: "",
    price: "",
    timeStartDepreciation:  new Date(),
    placeId: "",
};
// let valueToUpdate = {};
let valueToUpdate = {
  embedded: {
    additionalId: "",
    recordList: []
  }
};

export default function AddNewAdditionalProductForm(props) {
  const { addNewAdditionalProduct } = props;
  
  const [values, setValues] = useState(initialFValues);
  const [resetMulInput, setResetMulInput] = useState(false);
  const [errors, setErrors] = useState({});
  const [disableAdditionInput, setDisableAdditionInput] = useState(false);
  const [DataAdditional, setDataAdditional] = useState([]);
  const [DataProduct, setDataProduct] = useState([]);
  const [DataCredentialCode, setDataCredentialCode] = useState([]);
  const [DataPlace, setDataPlace] = useState([]);

  const [isEmptyMultiInput, setIsEmptyMultiInput] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  let listCode  = [];
  
  const getRecordList = () =>
  {
   return {
      productId: values.productId,
      price: values.price,
      listMaterialCode: [...listCode]
    }
   
  }

  const getValueToUpdate = () =>
  {
   valueToUpdate.embedded.additionalId = values.additionalId;
   valueToUpdate.embedded.recordList.push(getRecordList());
  }

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

  // fake : dùng để fix tự động gọi onSubmit event khi nhấn enter trong chip input component
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const validateMultiInput = () =>
  {
    if (!listCode.toString())
    {
    
      setIsEmptyMultiInput(true);
      return false;
    }else
    {
     
      setIsEmptyMultiInput(false);
      return true;
    }
  }
  // đây mới thực sự gọi là hàm xử lý sự kiện submit
  const handleSubmitOnClick = (e) => {
    e.preventDefault();
   
    if (validate() && validateMultiInput() ) {
        // fix lỗi ko update value affteer set , lỗi async của state
        //https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state
        //  setValues({...values, listMaterialCode : [...listCode]})
          getValueToUpdate();
          addNewAdditionalProduct(valueToUpdate);
          setIsSubmited(!isSubmited);
      
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
        ...values,
        [name]: value
    })

   validate({ [name]: value })
}

const handleMultipleInputChange = (e) =>
{
  listCode = [...e];
}

// xử lý việc nhập tiếp theo ...
 const handleContinue = () =>
 {
    setDisableAdditionInput(true);
    setResetMulInput(!resetMulInput);
    getValueToUpdate();
    listCode =[];
 }

 useEffect(() => {
    Utils.getDataAdditional().then((response) => {
      setDataAdditional([...response]);
    });
    Utils.getDataPlace().then((response) => {
      setDataPlace([...response]);
    });

    Utils.getDataProduct().then((response) => {
      setDataProduct([...response]);
    });
    Utils.getDataCredentialCode().then((response) => {
      setDataCredentialCode([...response]);
    });

    // cập nhật lại value
    valueToUpdate = {
      embedded: {
        additionalId: "",
        recordList: []
      }
    };
  }, []);

  useEffect(() => {
    // fix lỗi unmount component
    if (values.additionalId) {
        addNewAdditionalProduct(valueToUpdate);
      }

  }, [isSubmited])

  return (
    <Form onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={6}>
      <Controls.AutoCompleteButton
            name="additionalId"
            disabled = {disableAdditionInput}
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
            value={values.price}
            onChange={handleInputChange}
            error={errors.price}
          />
      <div>
      <Controls.Button text="Tiếp tục" color="secondary" onClick={handleContinue} />
      <Controls.Button onClick = {handleSubmitOnClick} text="Submit" />
      </div>
      </Grid>
      <Grid item xs={6}>
      <Controls.AutoCompleteButton
            name="placeId"
            label="Chọn nơi phân bổ"
            value={DataPlace.find((item) => item.id === values.placeId)}
            onChange={handleInputChange}
            options={DataPlace}
            error={errors.placeId}
          />

      <Controls.DatePicker
            name="timeStartDepreciation"
            label="Nhập thời gian bắt đầu tính khấu hao"
            value={values.timeStartDepreciation}
            onChange={handleInputChange}
            error={errors.timeStartDepreciation}
          />
      <Controls.MultipleInput
        resetMulInput = {resetMulInput}
        chipCheckList = {DataCredentialCode}
        onChange ={handleMultipleInputChange}
        isEmptyMultiInput={isEmptyMultiInput}
      />
      </Grid>
    </Grid>
  </Form>
  );
  
}
