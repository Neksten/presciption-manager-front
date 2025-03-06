import axios from 'axios';
import { authLocalStorage } from '../helpers/auth.ts';

const { get } = authLocalStorage;

const instance = axios.create({
  baseURL: 'http://localhost:4444',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const { accessToken } = get(); // Получаем токен из локального хранилища

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
