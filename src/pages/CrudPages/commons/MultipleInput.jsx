import React , { useState } from "react";
import ChipInput from "material-ui-chip-input";

export default function MultipleInput(props) {

  const [chips, setChips] = useState(["react"]);
  
  const onBeforeAdd = (chip) => {
    return chip.length >= 5 && chip.length <= 100;
  }

  const handleAdd  = (chip) => {
    setChips([...chips, chip])
  }

  const handleDelete = (deletedChip) => {
      setChips(
         chips.filter((c) => c !== deletedChip)
      );
  }

  const showError = true;
  return (
    <div>
  
        <ChipInput
          onAdd={(chip) => this.handleAdd(chip)}
          value={chips}
          label="Nhập danh sách mã CSVC"
          fullWidth
          placeholder="chọn cái gì đó làm did"
          onBeforeAdd={(chip) => onBeforeAdd(chip)}
          onAdd={(chip) => handleAdd(chip)}
          onDelete={(deletedChip) => handleDelete(deletedChip)}
          error  = {showError}
          helperText = {!showError ? "": " At least three chips required." }

        />
         {/* {error && <FormHelperText>{error}</FormHelperText>} */}
        {/* </FormControl> */}
    </div>
  );
}
