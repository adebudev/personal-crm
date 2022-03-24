import React, { useEffect } from 'react';

/*
 * Components
 */
import { LoginForm, LoginOptions } from '../../../molecules';
/*
 * Styles
 */
import './login.scss';

import { Text } from '../../../atoms/Text';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <>
      <Text size={30} weight='500' text='Login' />

      <LoginForm classes='wrap-center md-wrap-fit' />
      <LoginOptions classes='wrap-center md-wrap-fit' />
    </>
  );
};

export default Login;
