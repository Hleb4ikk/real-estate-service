import styles from './Search.module.css';

import Input from '../basic/Input/Input';
import Button from '../basic/Button/Button';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Input className={styles.searchInput} />
      <Button className={styles.searchButton}>Search</Button>
    </div>
  );
};

export default Search;
