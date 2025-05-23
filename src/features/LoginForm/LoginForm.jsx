import styles from './LoginForm.module.css';

import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Input/Input';
import SubmitButton from '../../shared/components/SubmitButton/SubmitButton';
import { validateEmail, validatePassword } from '../../shared/lib/form-validation';
import { useEffect, useState, useRef } from 'react';
import Button from '../../shared/components/Button/Button';
const LoginForm = () => {
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
    <div className={styles.loginFormContainer}>
      <div className={styles.formName}>Вход в аккаунт</div>
      <Form
        id="loginForm"
        className={styles.loginForm}
      >
        <div className={styles.inputsContainer}>
          <label htmlFor="email">
            Почта:
            <Input
              ref={emailRef}
              id="email"
              type="email"
              className={styles.inputField}
            />
          </label>
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
          <label htmlFor="password">
            Пароль:
            <Input
              ref={passwordRef}
              id="password"
              type="password"
              className={styles.inputField}
            />
          </label>
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
          <div>
            Если у вас нету аккаунта, то нажмите <Button type="button">зарегистрироваться</Button>
          </div>
          <div className={styles.submitButtonContainer}>
            <SubmitButton>Войти</SubmitButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
