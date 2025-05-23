import styles from './SubmitButton.module.css';

import Button from '../Button/Button';

const SubmitButton = ({ className = '', children, ...props }) => {
  return (
    <Button
      className={`${styles.button} ${className}`}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
