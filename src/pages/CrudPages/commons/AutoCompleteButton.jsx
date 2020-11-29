import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function AutoCompleteButton(props) {
  const { name, label, value, onChange, error = null, options } = props;

  const convertToDefEventPara = (event, name, values) => {
    if (values) {
      return {
        target: {
          name,
          value: values.id,
        },
      };
    } else {
      return {
        target: {
          name,
          value: "0",
        },
      };
    }
  };
  return (
    <Autocomplete
      name={name}
      value={value || null}
      options={options}
      getOptionLabel={(option) => option.title}
      getOptionSelected={(option, value) =>
        value && option.title === value.title
      }
      onChange={(event, values) =>
        onChange(convertToDefEventPara(event, name, values))
      }
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}
