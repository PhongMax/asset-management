import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
export default function DatePicker(props) {

    const { name, label, value, onChange } = props
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

 
    // const dateToShow = (date) => { 
    //   return  moment(date, 'DD-MM-YYYY hh:mm:ss a').format('MM-DD-YYYY  hh:mm:ss a');
    // };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker variant="inline" inputVariant="outlined"
                label={label}
                format="dd/MM/yyyy"
                margin="normal"
                name={name}
                value={value}
                // value={dateToShow(value)}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
            />
        </MuiPickersUtilsProvider>
    )
}
