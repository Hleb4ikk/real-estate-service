import styles from './Header.module.css';
import { NavigationMenu, NavigationItemList } from '../../features/NavigationMenu/NavigationMenu';
import Image from '../../shared/components/Image/Image';
import logo from '../../shared/assets/logo.svg';
import Avatar from '../../shared/components/Avatar/Avatar';
import ava from '../../shared/assets/ava.jpg';
import ThemeSwitch from '../../features/ThemeSwitch/ThemeSwitch';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={logo}
      />
      <div className={styles.menuContainer}>
        <NavigationMenu>
          <NavigationItemList />
        </NavigationMenu>
        <ThemeSwitch />
        <Avatar
          src={ava}
          alt="avatar"
          username="hlebor"
        />
      </div>
    </header>
  );
}
