import styles from './Search.module.css';

import Input from '../../shared/components/Input/Input';
import Button from '../../shared/components/Button/Button';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Input className={styles.searchInput} />
      <Button className={styles.searchButton}>Search</Button>
    </div>
  );
};

export default Search;
