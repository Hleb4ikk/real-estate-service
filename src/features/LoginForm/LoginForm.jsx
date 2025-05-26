import styles from './LoginForm.module.css';

import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Input/Input';
import SubmitButton from '../../shared/components/SubmitButton/SubmitButton';
import { useEffect, useState, useRef } from 'react';
import Button from '../../shared/components/Button/Button';
import { login } from '../../entities/user/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ handleRegisterRedirect }) => {
  const [message, setMessage] = useState(null);

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value.length === 0 || emailRef.current.value.length === 0) {
      return;
    }

    const res = await login(emailRef.current.value, passwordRef.current.value);
    const data = await res.json();
    console.log(data.message);

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data?.user));
      navigate('/catalog');
    } else {
      setMessage({ error: data.message });
    }
  }

  return (
    <div className={`${styles.loginFormContainer}`}>
      <h1 className={styles.formName}>Sign In</h1>
      <Form
        onSubmit={handleSubmit}
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
          {message?.error && <p className={styles.errorMessage}>{message?.error}</p>}
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
