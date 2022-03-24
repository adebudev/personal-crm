import { Banner } from '../../../atoms';
import { LoginForm, LoginOptions } from '../../../molecules';
import { About } from '../../../organisms/About';
import './login.css';

const Login = () => {
  return (
    <section className='page'>
      <Banner />
      <div className='login-page-body'>
        <div className='login-page-about'>
          <About classes='wrap-center md-wrap-fit' />
        </div>
        <div className='login-page-user'>
          <LoginForm classes='wrap-center md-wrap-fit'/>
          <LoginOptions classes='wrap-center md-wrap-fit'/>
        </div>

      </div>
    </section>
  );
};

export default Login;
