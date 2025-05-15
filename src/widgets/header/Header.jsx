import styles from './Header.module.css';
import { NavigationMenu, NavigationItemList } from '../../shared/components/NavigationMenu/NavigationMenu';
import { navigationItems } from '../../utils/navigation-items';
import Button from '../../shared/components/basic/Button/Button';
import Search from '../../shared/components/Search/Search';
export default function Header() {
  return (
    <header className={styles.header}>
      {/* <img
        src="a"
        alt="Logo"
      /> */}

      <NavigationMenu>
        <NavigationItemList navigationItems={navigationItems} />
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
