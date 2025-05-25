import styles from './LoginForm.module.css';

import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Input/Input';
import SubmitButton from '../../shared/components/SubmitButton/SubmitButton';
import { useEffect, useState, useRef } from 'react';
import Button from '../../shared/components/Button/Button';

const LoginForm = ({ handleRegisterRedirect }) => {
  const [messages, setMessages] = useState(null);

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <div className={`${styles.loginFormContainer}`}>
      <h1 className={styles.formName}>Sign In</h1>
      <Form
        id="loginForm"
        className={styles.loginForm}
      >
        <div className={styles.inputsContainer}>
          <Input
            ref={emailRef}
            placeholder="Email"
            type="email"
            className={styles.inputField}
          />

          <Input
            ref={passwordRef}
            placeholder="Password"
            type="password"
            className={styles.inputField}
          />
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.submitButtonContainer}>
            <SubmitButton>Sign In</SubmitButton>
          </div>
          <div className={styles.registerRedirectRegistrationContainer}>
            Don't have an account? Click{' '}
            <Button
              type="button"
              onClick={handleRegisterRedirect}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
