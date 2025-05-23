import styles from './Input.module.css';

const Input = ({ id = '', className = '', type = 'text', ref = null, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      ref={ref}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
