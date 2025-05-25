'use client';

import styles from './AuthenticationPage.module.css';

import useTitleDivision from '../../shared/hooks/useTitleDivision';
import Logo from '../../shared/assets/Logo/Logo';
import ThemeSwitch from '../../features/ThemeSwitch/ThemeSwitch';
import LoginForm from '../../features/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import { ChevronsLeft } from 'lucide-react';
import Button from '../../shared/components/Button/Button';
import { useState } from 'react';
import RegistrationForm from '../../features/RegistrationForm/RegistrationForm';

export default function AuthenticationPage() {
  useTitleDivision('Authentication');
  const navigate = useNavigate();
  const [formType, setFormType] = useState('login');

  return (
    <main className={styles.authPageContainer}>
      <div className={styles.themeSwitchContainer}>
        <ThemeSwitch className={styles.themeSwitch} />
      </div>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.authFormContainer}>
        {formType === 'login' ? (
          <LoginForm handleRegisterRedirect={() => setFormType('register')} />
        ) : (
          <RegistrationForm handleLoginRedirect={() => setFormType('login')} />
        )}
        <Button
          className={styles.returnPreviousPageButton}
          onClick={() => navigate(-1)}
        >
          <ChevronsLeft className={styles.chevronsLeftIcon} />
          Go back
        </Button>
      </div>
    </main>
  );
}
