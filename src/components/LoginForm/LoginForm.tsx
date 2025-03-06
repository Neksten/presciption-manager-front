import { FC, PropsWithChildren } from 'react';

import styles from './loginform.module.css';
import { Link } from 'react-router';
import { PickComponentProps } from '../../types';

interface ILoginFormProps extends PropsWithChildren, PickComponentProps<HTMLFormElement> {
  title: string;
}

const LoginForm: FC<ILoginFormProps> = ({ children, title, className, ...props }) => {
  return (
    <form className={[styles.form, className].join(' ')} {...props}>
      <h3 className={styles.title}>{title}</h3>
      {children}
      <div className={styles.navigation}>
        <Link to="/auth" className={styles.link}>
          Авторизация
        </Link>
        <div className={styles.separator} />
        <Link to="/register" className={styles.link}>
          Регистрация
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
