import type { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { AxiosError, type AxiosRequestConfig } from 'axios';

import instance from './instance.ts';

export const axiosBaseQuery =
  <T>(): BaseQueryFn<AxiosRequestConfig, T> =>
  async (config: AxiosRequestConfig<T>) => {
    try {
      return await instance(config);
    } catch (axiosError) {
      return {
        error: (axiosError as AxiosError).response?.data,
      };
    }
  };
