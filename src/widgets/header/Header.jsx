import styles from './Header.module.css';
import { NavigationMenu, NavigationItemList } from '../../features/NavigationMenu/NavigationMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <img
        src="a"
        alt="Logo"
      /> */}

      <NavigationMenu>
        <NavigationItemList />
      </NavigationMenu>
      {/* <div className={styles.rightHeaderBlockContainer}>
        <div>
          <Search />
        </div>
        <Button className={styles.authButton}>Sign In</Button>
      </div> */}
    </header>
  );
}
