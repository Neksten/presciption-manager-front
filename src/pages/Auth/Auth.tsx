import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../ui/Input/Input.tsx';
import { Container } from '../../ui/Container';
import { LoginForm } from '../../components/LoginForm';

import styles from './auth.module.css';
import { Button } from '../../ui/Button';
import { useLazyLoginQuery } from '../../store/auth.api.ts';
import { authLocalStorage } from '../../helpers/auth.ts';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Auth = () => {
  const navigate = useNavigate();
  const { set } = authLocalStorage;
  const [login] = useLazyLoginQuery();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data: any) => {
    const loginData = await login(data);

    if (loginData?.data?.token) {
      set(loginData?.data.token);
    }

    navigate('/', { replace: true });
    reset();
  };

  return (
    <Container>
      <LoginForm
        title="Авторизация"
        className={styles.form}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Input
          {...register('email')}
          className={styles.input}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          {...register('password')}
          className={styles.input}
          placeholder="Пароль"
          type="password"
          required
        />
        <Button type="submit">Войти</Button>
      </LoginForm>
    </Container>
  );
};

export default Auth;
