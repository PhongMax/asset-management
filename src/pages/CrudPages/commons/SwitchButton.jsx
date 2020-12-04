import React from 'react'
import Switch from '@material-ui/core/Switch';
import Tooltip from "@material-ui/core/Tooltip";

export default function SwitchButton(props) {

    // const { name, label, value, error = null, onChange, options } = props;
    const { value, onChange } = props;

    const [state, setState] = React.useState(value);

     // const [state, setState] = React.useState({
    //     checked: true,
    //   });
    
    //   const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //   };

    const handleChange = (event) => {
        setState(event.target.checked );   
        onChange();
      };


    return (
     
        <React.Fragment>
        <Tooltip title={state ? "Chuyển sang chưa hoàn tất" :"Chuyến sang hoàn tất"} arrow>             
        <Switch
          checked={state}
          onChange={handleChange}
          color="primary"
          name="checked"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        </Tooltip>

        </React.Fragment>
  
    )
}
