import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 400,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 4,
  },
}));

// const names = [
//   'ROLE_ACCOUNTANT',
//   'ROLE_CHIEF_ACCOUNTANT',
//   'ROLE_LECTURES',
//   'ROLE_ADMIN',
// ];

function getStyles(name, value, theme) {
  return {
    fontWeight:
      value.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const classes = useStyles();
  const { name, label, value, error = null, onChange, options } = props;

  const theme = useTheme();
  return (
    <div>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        {...(error && { error: true })}
      >
        <InputLabel id="demo-mutiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          label={label}
          id="demo-mutiple-chip"
          multiple
          name={name}
          value={value}
          onChange={onChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, value, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </div>
  );
}
