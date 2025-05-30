import styles from './RegistrationForm.module.css';

import Form from '../../shared/components/Form/Form';
import Input from '../../shared/components/Input/Input';
import SubmitButton from '../../shared/components/SubmitButton/SubmitButton';
import { validateEmail, validatePassword } from '../../shared/lib/form-validation';
import { useState, useRef } from 'react';
import Button from '../../shared/components/Button/Button';
import { createUser } from '../../entities/user/api';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const RegistrationForm = ({ handleLoginRedirect }) => {
  const [messages, setMessages] = useState(null);
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [role, setRole] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const emailErrors = validateEmail(emailRef.current.value);
    const passwordErrors = validatePassword(emailRef.current.value, passwordRef.current.value);
    const roleErrors = !role ? ['Choose a role'] : null;
    const mess = {};

    if (emailErrors) {
      mess.email = { errors: emailErrors };
    }
    if (passwordErrors) {
      mess.password = { errors: passwordErrors };
    }
    if (roleErrors) {
      mess.role = { errors: roleErrors };
    }

    const res = await createUser(emailRef.current.value, await bcrypt.hash(passwordRef.current.value, 10), role);
    const data = await res.json();

    const serverError = data.message;

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data?.user));
      window.location.reload();
    } else {
      mess.server = { error: serverError };
    }
    if (mess?.email || mess?.password || mess?.role || mess?.server) {
      setMessages(mess);
    }
  }

  return (
    <div className={`${styles.loginFormContainer}`}>
      <h1 className={styles.formName}>Sign Up</h1>
      <Form
        onSubmit={handleSubmit}
        id="registrationForm"
        className={styles.loginForm}
      >
        <div className={styles.inputsContainer}>
          <Input
            ref={emailRef}
            placeholder="Email"
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
            placeholder="Password"
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
          <div className={styles.roleContainer}>
            <h1>Who are you?</h1>
            <div className={styles.rolePoint}>
              <Input
                id="realtor"
                type="radio"
                name="choose_role"
                value="realtor"
                onChange={(e) => setRole(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor="realtor">Realtor</label>
            </div>
            <div className={styles.rolePoint}>
              <Input
                id="client"
                type="radio"
                name="choose_role"
                value="client"
                onChange={(e) => setRole(e.target.value)}
                className={styles.radioInput}
              />
              <label htmlFor="client">Client</label>
            </div>
          </div>
          {messages?.role?.errors && (
            <ul>
              {messages?.role?.errors?.map((error, index) => (
                <li
                  key={index}
                  className={styles.errorMessage}
                >
                  {error}
                </li>
              ))}
            </ul>
          )}
          {messages?.server?.error && <p className={styles.errorMessage}>{messages?.server?.error}</p>}
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.submitButtonContainer}>
            <SubmitButton>Sign Up</SubmitButton>
          </div>
          <div className={styles.redirectLoginContainer}>
            Already have an account? Click{' '}
            <Button
              onClick={handleLoginRedirect}
              type="button"
            >
              Sign In
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
