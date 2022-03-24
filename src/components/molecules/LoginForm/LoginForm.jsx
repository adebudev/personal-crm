import { TextField, Button } from '../../atoms';
import './loginform.css';

const LoginForm = (props) => {
  return (
    <div className={`${props.classes} mol-form-login`}>
      <div className='mol-form-login__field'>
        <TextField label='Email' className='test' />
      </div>
      <div className='mol-form-login__field'>
        <TextField label='Password' className='test' />
      </div>
      <Button title='Iniciar sesion' />
    </div>
  );
};

export default LoginForm;
