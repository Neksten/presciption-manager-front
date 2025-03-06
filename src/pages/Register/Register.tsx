import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../ui/Input/Input.tsx';
import { Container } from '../../ui/Container';
import { LoginForm } from '../../components/LoginForm';

import styles from './register.module.css';
import { Button } from '../../ui/Button';
import { useLazyRegisterQuery } from '../../store/auth.api.ts';
import { authLocalStorage } from '../../helpers/auth.ts';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  repeatPassword: yup.string().min(8).max(32).required(),
});

const Register = () => {
  const navigate = useNavigate();
  const { set } = authLocalStorage;
  const [registerReq] = useLazyRegisterQuery();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data: any) => {
    const { password, repeatPassword, ...requestData } = data;

    if (password !== repeatPassword) return;

    const registerData = await registerReq({ password, ...requestData });

    if (registerData?.data?.token) {
      set(registerData?.data?.token);
    }

    navigate('/', { replace: true });
    reset();
  };

  return (
    <Container>
      <LoginForm
        title="Регистрация"
        className={styles.form}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Input
          {...register('fullName')}
          className={styles.input}
          placeholder="ФИО"
          type="fullName"
          required
        />
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
        <Input
          {...register('repeatPassword')}
          className={styles.input}
          placeholder="Повторите пароль"
          type="password"
          required
        />
        <Button type="submit">Зарегестрироваться</Button>
      </LoginForm>
    </Container>
  );
};

export default Register;
