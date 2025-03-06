import { Link } from 'react-router';
import Logo from '../../assets/Logo.tsx';

import styles from './header.module.css';
import { authLocalStorage } from '../../helpers/auth.ts';
import { useMeQuery } from '../../store/auth.api.ts';

const Header = () => {
  const { data } = useMeQuery();
  const { get, remove } = authLocalStorage;
  const { accessToken } = get();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
      {accessToken && data ? (
        <div className={styles.user}>
          <span>{data.fullName}</span>
          <Link to="/auth" onClick={remove} className={styles.logout}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link to="/auth" className={styles.link}>
          Войти
        </Link>
      )}
    </header>
  );
};

export default Header;
