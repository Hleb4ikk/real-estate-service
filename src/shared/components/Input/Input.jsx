import styles from './Input.module.css';

const Input = ({ id = '', placeholder = '', className = '', type = 'text', ref = null, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      ref={ref}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
