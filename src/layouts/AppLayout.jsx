import styles from './AppLayout.module.css';

import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';

export default function AppLayout({ children }) {
  if (children)
    return (
      <>
        <Header />
        <div className={styles.contentContainer}>
          <main className={styles.mainContainer}>{children}</main>
        </div>
        <Footer />
      </>
    );
}
