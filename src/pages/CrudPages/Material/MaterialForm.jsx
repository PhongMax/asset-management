import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";
import * as Utils from "../../../utils/Utils";

const initialFValues = {
  id: 0,
  credentialCode: "",
  status: "",
  timeStartDepreciation: new Date(),
  haveInclude: false,
  parentCode: null,
  productId: "",
  additionalId: "",
  placeId: "",
  userId: "",
};

export default function MaterialForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [DataProduct, setDataProduct] = useState([]);
  const [DataAdditional, setDataAdditional] = useState([]);
  const [DataUser, setDataUser] = useState([]);
  const [DataPlace, setDataPlace] = useState([]);

  const getMaterialStatus = [
    { id: "UN_USED", title: "Không Sử Dụng" },
    { id: "IN_USED", title: "Đang Sử Dụng" },
    { id: "DAMAGED", title: "Bị Hư Hại" },
    { id: "REQUEST_REPAIR", title: "Yêu Cầu Sửa Chữa" },
    { id: "REQUEST_LIQUIDATE", title: "Yêu Cầu Thanh Lý" },
    { id: "NO_LONGER", title: "Không Còn" },
  ];

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("credentialCode" in fieldValues)
      temp.credentialCode = fieldValues.credentialCode ? "" : "Trường này là bắt buộc.";

      if ("placeId" in fieldValues)
      temp.placeId = fieldValues.placeId ? "" : "Trường này là bắt buộc.";

      if ("status" in fieldValues)
      temp.status = fieldValues.status ? "" : "Trường này là bắt buộc.";

      if ("productId" in fieldValues)
      temp.productId = fieldValues.productId ? "" : "Trường này là bắt buộc.";

      if ("userId" in fieldValues)
      temp.userId = fieldValues.userId ? "" : "Trường này là bắt buộc.";

      if ("additionalId" in fieldValues)
      temp.additionalId = fieldValues.additionalId ? "" : "Trường này là bắt buộc.";


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
            label="Mã CSVC"
            value={values.credentialCode}
            onChange={handleInputChange}
            error={errors.credentialCode}
          />
          <Controls.Input
            name="parentCode"
            label="Mã Cơ Sở Vật Chất đi kèm"
            value={values.parentCode}
            onChange={handleInputChange}
            error={errors.parentCode}
          />

          {/* <Controls.Select
            name="additionalId"
            label="additionalId"
            value={values.additionalId}
            onChange={handleInputChange}
            options={DataAdditional}
          /> */}

          {/* <Controls.Select
            name="userId"
            label="userId"
            value={values.userId}
            onChange={handleInputChange}
            options={DataUser}
          /> */}

          <Controls.AutoCompleteButton
            name="additionalId"
            label="Đợt thêm vào"
            value={DataAdditional.find(
              (item) => item.id === values.additionalId
            )}
            onChange={handleInputChange}
            options={DataAdditional}
            error={errors.additionalId}
          />

          <Controls.AutoCompleteButton
            name="userId"
            label="Người thêm"
            value={DataUser.find((item) => item.id === values.userId)}
            onChange={handleInputChange}
            options={DataUser}
            error={errors.userId}
          />
          <Controls.Checkbox
            label="Là Bộ"
            name="haveInclude"
            value={values.haveInclude}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          {/* <Controls.Select
            name="placeId"
            label="placeId"
            value={values.placeId}
            onChange={handleInputChange}
            options={DataPlace}
          /> */}

          <Controls.AutoCompleteButton
            name="placeId"
            label="Vị trí"
            value={DataPlace.find((item) => item.id === values.placeId)}
            onChange={handleInputChange}
            options={DataPlace}
            error={errors.placeId}
          />

          <Controls.DatePicker
            name="timeStartDepreciation"
            label=" Thời gian bắt đầu khấu hao"
            value={values.timeStartDepreciation}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="status"
            label="Trạng thái"
            value={values.status}
            onChange={handleInputChange}
            options={getMaterialStatus}
            error={errors.status}
          />

          {/* <Controls.Select
            name="productId"
            label="productId"
            value={values.productId}
            onChange={handleInputChange}
            options={DataProduct}
          /> */}

          <Controls.AutoCompleteButton
            name="productId"
            label="Sản phẩm"
            value={DataProduct.find((item) => item.id === values.productId)}
            onChange={handleInputChange}
            options={DataProduct}
            error={errors.productId}
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
