import styles from './Footer.module.css';
import Logo from '../../shared/assets/Logo/Logo';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <Logo className={styles.logo} />© 2025 REAL ESTATE SERVICES
        </div>
        <div className={styles.menuContainer}></div>
      </div>
    </footer>
  );
}
