import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";
import * as employeeService from "../../../services/employeeService";

// KHỎI TẠO GIÁ TRỊ COMBOX GENDER
const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

const roles = [
  { id: "1", title: "ROLE_ACCOUNTANT" },
  { id: "2", title: "ROLE_CHIEF_ACCOUNTANT" },
  { id: "3", title: "ROLE_LECTURES" },
  { id: "4", title: "ROLE_ADMIN" },
];

const valueRole = [
  "ROLE_ACCOUNTANT",
  "ROLE_CHIEF_ACCOUNTANT",
  "ROLE_LECTURES",
  "ROLE_ADMIN",
];
//  KHỎI TẠO GIÁ TRỊ CỦA STATE THUỘC
const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm(props) {
  // Khởi tạo state
  const { addOrEdit, recordForEdit } = props;

  // khu vực validate các thuộc tính của Employee, nếu ko bị lỗi trả về true, bị lội trả về false
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
    if ("mobile" in fieldValues)
      temp.mobile = /((05[5|8|9]|08[1|2|3|4|5|86|9]|03[2|3|4|5|6|7|8|9]|07[0|9|7|6|8]|09[0|2|1|4|3|6|7|8|9]|01[2|9])+([0-9]{7,8})\b)/g.test(
        fieldValues.mobile
      )
        ? ""
        : "Số điện thoại không hợp lệ.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0
          ? ""
          : "Trường này không được để trống.";
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

  // dùng reactHook để get giá trị record for edit
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  //======================================FAKE DATA =============================================

  const [ValueRole, setValueRole] = useState(valueRole);
  const handleInputChange1 = (event) => {
    setValueRole(event.target.value);
  };

  //==============================================================================================
  // render lại form
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
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
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />

          <Controls.MultipleSelect
            name="Role"
            label="Quyền hạn"
            value={ValueRole}
            onChange={handleInputChange1}
            options={roles}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
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
