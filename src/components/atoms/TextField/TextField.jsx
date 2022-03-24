import { TextField as MuiTextField } from '@mui/material';
import './textfield.css';

const TextField = (props) => {
  return (
    <MuiTextField id='outlined-basic' label={props.label} variant='outlined' style={{width: '100%'}}/>
  );
};

export default TextField;
