import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PickComponentProps<T extends HTMLElement> = DetailedHTMLProps<HTMLAttributes<T>, T>;

export interface IInitialStateSlice<T> {
  items: T[];
  status: 'loading' | 'success' | 'error';
}
