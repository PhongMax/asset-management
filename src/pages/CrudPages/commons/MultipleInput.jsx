import React , { useState, useEffect } from "react";
import ChipInput from "material-ui-chip-input";

export default function MultipleInput(props) {
  const { resetMulInput ,chipCheckList, onChange } = props;
  const [chips, setChips] = useState([]);
  const [error, setError] = useState(false);
  let tempValue = [];

  useEffect(() => {
    setChips([]);
  }, [resetMulInput, setChips]);

  const validate = (chip) => {
    if (chipCheckList.find((item) => item === chip))
    {
      
      setError(true);
      return false;
    }else
    {
      setError(false);
      return true;
    }
    
  }

  const onBeforeAdd = (chip) => {
    return chip.length >= 5 && chip.length <= 100;
  }
  const xxxx = () =>
  {
    console.log(chips, " check thử nó bị lỗi gì");
  }
  const handleAdd  = (chip) => {
    if (validate(chip)) {
      tempValue = [...chips, chip];
      setChips( [...chips, chip]);
      onChange(chip);
      
    }
   
  }


  const handleDelete = (deletedChip) => {
   setChips( chips.filter((c) => c !== deletedChip) );
   tempValue( chips.filter((c) => c !== deletedChip));
  }


  return (
    <div>
        <ChipInput
          onAdd={(chip) => this.handleAdd(chip)}
          value={chips}
          label="Nhập danh sách mã CSVC"
          fullWidth
          placeholder="Nhập danh sách ..."
          onBeforeAdd={(chip) => onBeforeAdd(chip)}
          onAdd={(chip) => handleAdd(chip)}
          onDelete={(deletedChip) => handleDelete(deletedChip)}
          error  = {error}
          helperText = {!error ? "": " Mã CSVC đã bị trùng với dữ liệu trong hệ thống hoặc bị trống." }

        />
      
    </div>
  );
}
