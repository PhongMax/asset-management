import React , { useState, useEffect } from "react";
import ChipInput from "material-ui-chip-input";

export default function MultipleInput(props) {
  const { resetMulInput ,chipCheckList, onChange } = props;
  const [chips, setChips] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setChips([]);
  }, [resetMulInput, setChips]);

  const validate = (chip) => {
    if (chipCheckList.find((item) => item.toLowerCase() === chip.toLowerCase()))
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

  const handleAdd  = (chip) => {
    if (validate(chip)) {
      setChips((prevChips) => [...prevChips, chip]);
    }
  }

  const handleDelete = (deletedChip) => {
   setChips( (prevChips) => prevChips.filter((c) => c !== deletedChip) );
  }


  return (
    <div>
      <div>{onChange(chips)}</div>
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
