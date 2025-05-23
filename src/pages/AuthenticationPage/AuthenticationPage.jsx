import styles from './AuthenticationPage.module.css';

import useTitleDivision from '../../shared/hooks/useTitleDivision';
import Logo from '../../shared/assets/Logo/Logo';
import ThemeSwitch from '../../features/ThemeSwitch/ThemeSwitch';
import LoginForm from '../../features/LoginForm/LoginForm';
export default function AuthenticationPage() {
  useTitleDivision('Authentication');

  return (
    <main className={styles.authPageContainer}>
      <div className={styles.themeSwitch}>
        <ThemeSwitch />
      </div>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <div className={styles.mobileAuthFormContainer}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.authFormContainer}>
        <LoginForm />
      </div>
    </main>
  );
}
