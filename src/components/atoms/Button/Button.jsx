import { Button as MuiButton } from '@mui/material';
import './button.css';

/* Ejemplos de uso:

  1) default btn: --------  <Button title='Iniciar sesion' />
  2) outlined: -----------  <Button title='Iniciar sesion' variant='outlined' />
  3) outlined + color: ---  <Button title='Iniciar sesion' variant='outlined' color='red'/>
  3) outlined + Hexcolor: ---  <Button title='Iniciar sesion' variant='outlined' color='#434343'/>
*/
const Button = (props) => {
  /*--- button styles ---*/
  const btnVariant = props.variant ? props.variant : 'contained';
  const defaultColor = props.color ? props.color : '#2D8254';
  const backgroundColor = props.variant === 'outlined' ? 'none' : defaultColor;
  const textColor = props.variant === 'outlined' ? defaultColor : 'white';
  const borderColor = props.variant === 'outlined' ? defaultColor : 'none';
  const btnWidth = props.width ? props.width : 'auto';

  const muiBtnStyle = {
    width: btnWidth,
    height: '55px',
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
  };

  return (
    <MuiButton variant={btnVariant} style={muiBtnStyle} disableElevation>
      {props.title}
    </MuiButton>
  );
};

export default Button;
