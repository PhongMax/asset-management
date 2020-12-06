import React , { useState } from "react";
import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import { FormControl, FormHelperText } from "@material-ui/core";

export default function MultipleInput(props) {

  const [chips, setChips] = useState(["react"]);
  const onBeforeAdd = (chip) => {
    return chip.length >= 3;
  }

  const handleAdd  = (chip) => {
    setChips([...chips, chip])
  }

  const handleDelete = (deletedChip) => {

      setChips(
         chips.filter((c) => c !== deletedChip)
      );

  }

      // const error = "Bặn ko thể dùng trùm với lôi ròi";

  // const defaultValue = ["Material UI", "Chips"];
  const showError = true;
  return (
    <div>
      {/* <FormControl variant="outlined" {...(error && { error: true })}> */}
        <ChipInput
          // chipRenderer={chipRenderer}
          onAdd={(chip) => this.handleAdd(chip)}
          value={chips}
          label="Small chips"
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
