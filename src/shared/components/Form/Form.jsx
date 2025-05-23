import styles from './Form.module.css';

const Form = ({ id, onSubmit, action, className, children, ...props }) => {
  return (
    <form
      onSubmit={onSubmit}
      id={id}
      action={action}
      className={className}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
