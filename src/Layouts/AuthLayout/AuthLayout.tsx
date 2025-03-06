import React, { FC, PropsWithChildren, useEffect } from 'react';
import { authLocalStorage } from '../../helpers/auth.ts';
import { useLocation, useNavigate } from 'react-router';

interface IAuthLayoutProps extends PropsWithChildren {}

const AVAILABLE_PATHS = ['/auth', '/register'];

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { get } = authLocalStorage;

  useEffect(() => {
    const { accessToken } = get();

    if (!accessToken && !AVAILABLE_PATHS.includes(pathname)) {
      navigate('/auth', { replace: true });
    }
  }, [pathname]);

  return <>{children}</>;
};

export default AuthLayout;
