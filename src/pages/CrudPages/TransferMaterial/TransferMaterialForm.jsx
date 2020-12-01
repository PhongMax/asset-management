import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../commons/Controls";
import { useForm, Form } from "../commons/useForm";
import * as Utils from "../../../utils/Utils";
import * as authService from "../../../services/authService";

// chỗ này viết 1 cái hàm làm nè...
const initialFValues = (materialId, placeFromId) => {
  return {
    time: new Date(),
    reason: "",
    placeFromId: placeFromId,
    placeTargetId: "",
    materialId: materialId,
    userId: authService.getCurrentUser() && authService.getCurrentUser().id,
  };
};

export default function MaterialForm(props) {
  const { addTransferMaterial, inforTransfer } = props;

  const [DataPlace, setDataPlace] = useState([]);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("placeTargetId" in fieldValues) {
      temp.placeTargetId = fieldValues.placeTargetId
        ? ""
        : "Trường này là bắt buộc.";
    }

    if ("reason" in fieldValues)
      temp.reason = fieldValues.reason.length ? "" : "Trường này là bắt buộc.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues(inforTransfer.id, inforTransfer.placeId),
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addTransferMaterial(values, resetForm);
    }
  };

  useEffect(() => {
    Utils.getDataPlace().then((response) => {
      setDataPlace([...response]);
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item sm={12}>
          <Controls.DatePicker
            name="time"
            label="time"
            value={values.time}
            onChange={handleInputChange}
          />
          {/* <Controls.Select
            name="DataPlace"
            label="DataPlace"
            value={values.DataPlace}
            onChange={handleInputChange}
            options={DataPlace}
          /> */}
          <Controls.AutoCompleteButton
            name="placeTargetId"
            label="placeTargetId"
            value={DataPlace.find((item) => item.id === values.placeTargetId)}
            onChange={handleInputChange}
            options={DataPlace}
            error={errors.placeTargetId}
          />
          <Controls.Input
            name="reason"
            label="reason"
            value={values.reason}
            onChange={handleInputChange}
            error={errors.reason}
          />

          <div>
            <Controls.Button type="submit" text="Thực thi" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
