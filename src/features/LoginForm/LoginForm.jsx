import styles from './LoginForm.module.css';

import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Input/Input';
import SubmitButton from '../../shared/components/SubmitButton/SubmitButton';
import { validateEmail, validatePassword } from '../../shared/lib/form-validation';
import { useEffect, useState, useRef } from 'react';
import Button from '../../shared/components/Button/Button';

const LoginForm = ({ className = '' }) => {
  const [messages, setMessages] = useState(null);

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      const mess = {
        email: {
          errors: validateEmail(emailRef.current.value),
        },
        password: {
          errors: validatePassword(emailRef.current.value, passwordRef.current.value),
        },
      };

      if (mess.email.errors) {
        event.preventDefault();
      }
      if (mess.password.errors) {
        event.preventDefault();
      }
      setMessages(mess);
    });
  }, [messages]);

  return (
    <div className={`${styles.loginFormContainer} ${className}`}>
      <h1 className={styles.formName}>Вход </h1>
      <Form
        id="loginForm"
        className={styles.loginForm}
      >
        <div className={styles.inputsContainer}>
          <Input
            ref={emailRef}
            placeholder="Электронная почта"
            type="email"
            className={styles.inputField}
          />
          {messages?.email?.errors && (
            <ul>
              {messages?.email?.errors?.map((error, index) => (
                <li
                  key={index}
                  className={styles.errorMessage}
                >
                  {error}
                </li>
              ))}
            </ul>
          )}

          <Input
            ref={passwordRef}
            placeholder="Пароль"
            type="password"
            className={styles.inputField}
          />
          {messages?.password?.errors && (
            <ul>
              {messages?.password?.errors?.map((error, index) => (
                <li
                  key={index}
                  className={styles.errorMessage}
                >
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.submitButtonContainer}>
            <SubmitButton>Войти</SubmitButton>
          </div>
          <div className={styles.registerRedirectRegistrationContainer}>
            Нету аккаунта? Нажмите <Button type="button">зарегистрироваться</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
