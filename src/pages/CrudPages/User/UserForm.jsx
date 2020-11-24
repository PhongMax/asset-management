import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";

import * as departmentService from "../../../services/departmentService";

// KHỎI TẠO GIÁ TRỊ COMBOX ROLE
const roles = [
  { id: "1", title: "ROLE_ACCOUNTANT" },
  { id: "2", title: "ROLE_CHIEF_ACCOUNTANT" },
  { id: "3", title: "ROLE_LECTURES" },
  { id: "4", title: "ROLE_ADMIN" },
];

//  KHỎI TẠO GIÁ TRỊ CỦA STATE THUỘC
const initialFValues = {
  id: 0,
  fullName: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  active: true,
  roles: [],
  departmentId: 0,
};

//=================================== XỬ LÝ DATA THEO ĐÚNG FORMAT ĐỂ XỬ DỤNG ========================//

const DataDepartment = [];
async function getDataDepartment() {
  const result = await departmentService.getAllDepartment();
  const data = await result.data;
  data.data.map((x) => {
    return DataDepartment.push({ id: x.id, title: x.name });
  });
  return DataDepartment;
}
getDataDepartment();
const getDepartmentCollection = () => DataDepartment;

// ==============================================================================================

// COMPONENT : FORM SỬA , UPDATE EMPLOYEE
export default function UserForm(props) {
  // Khởi tạo state
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName
        ? ""
        : "Trường dữ liệu không được để trống.";
    }

    if ("email" in fieldValues)
      temp.email = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(
        fieldValues.email
      )
        ? ""
        : "Email không hợp lệ.";
    if ("phone" in fieldValues)
      temp.phone = /((05[5|8|9]|08[1|2|3|4|5|86|9]|03[2|3|4|5|6|7|8|9]|07[0|9|7|6|8]|09[0|2|1|4|3|6|7|8|9]|01[2|9])+([0-9]{7,8})\b)/g.test(
        fieldValues.phone
      )
        ? ""
        : "Số điện thoại không hợp lệ.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0
          ? ""
          : "Trường này không được để trống.";

    if ("username" in fieldValues)
      temp.username =
        fieldValues.username.length !== 0
          ? ""
          : "Trường này không được để trống.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length !== 0
          ? ""
          : "Trường này không được để trống.";

    if ("username" in fieldValues)
      temp.username =
        fieldValues.username.length !== 0
          ? ""
          : "Trường này không được để trống.";

    if ("roles" in fieldValues)
      temp.roles =
        fieldValues.roles.length !== 0 ? "" : "Trường này không được để trống.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  // đoạn code này dùng để get các state, hàm từ hàm use form
  // tách ra như thế giúp cho việc reusable lại ở các component khác
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  // sử lý sự kiện ở nút submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  const handleInputChangeMultipleSeclect = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

    validate({ [event.target.name]: event.target.value });
  };
  // dùng reactHook để get giá trị record for edit
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  // render lại form
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Họ tên"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Số điện thoại"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <Controls.Select
            name="departmentId"
            label="Bộ phận"
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartmentCollection()}
            error={errors.departmentId}
          />

          <Controls.Checkbox
            name="active"
            label="Trạng thái hoạt động"
            value={values.active}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Tên đăng nhập"
            name="username"
            value={values.username}
            onChange={handleInputChange}
            error={errors.username}
          />
          <Controls.Input
            label="Mật khẩu"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
          />

          <Controls.MultipleSelect
            name="roles"
            label="Danh sách các quyền"
            value={values.roles}
            onChange={handleInputChangeMultipleSeclect}
            options={roles}
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
