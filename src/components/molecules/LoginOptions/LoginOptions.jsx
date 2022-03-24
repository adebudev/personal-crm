import { Link } from './../../atoms';
import './loginoptions.css'

const LoginOptions = (props) => {
  return (
    <div className={`${props.classes} mol-login-options`}>
      <Link title='Crear cuenta' href='www.google.com'/>
      <Link title='Olvide contraseña' href='www.google.com'/>
    </div>
  );
};

export default LoginOptions;
