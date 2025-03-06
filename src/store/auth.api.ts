import { apiService } from '../api';
import { IAuthResponse, ILogin, IRegister, IUser } from '../types';

export const recipesApi = apiService
  .enhanceEndpoints({
    addTagTypes: ['Recipes'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      me: build.query<IUser, void>({
        query: () => ({ url: '/auth/me' }),
      }),
      login: build.query<IAuthResponse, ILogin>({
        query: (data) => ({ url: '/auth/login', method: 'POST', data }),
      }),
      register: build.query<IAuthResponse, IRegister>({
        query: (data) => ({ url: '/auth/register', method: 'POST', data }),
      }),
    }),
  });

export const { useMeQuery, useLazyLoginQuery, useLazyRegisterQuery } = recipesApi;
