import { IFilterOption } from '../types';

export const SORT_FILTERS: IFilterOption[] = [
  {
    name: 'Новые',
    value: 'new',
  },
  {
    name: 'Старые',
    value: 'old',
  },
];

export const CATEGORY_FILTERS: IFilterOption[] = [
  {
    name: 'Все',
    value: 'all',
  },
  {
    name: 'Завтрак',
    value: 'breakfast',
  },
  {
    name: 'Обед',
    value: 'lunch',
  },
  {
    name: 'Ужин',
    value: 'dinner',
  },
];
