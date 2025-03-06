import styles from './filters.module.css';
import { ButtonIcon } from '../../../../ui/ButtonIcon';
import Plus from '../../../../assets/Plus.tsx';
import { Dropdown } from '../../../../ui/Dropdown';
import { Dispatch, FC, SetStateAction } from 'react';
import { CATEGORY_FILTERS, SORT_FILTERS } from '../../../../constants/filters.ts';
import { IHomeFilter } from '../../../../types';
import Input from '../../../../ui/Input/Input.tsx';

interface IFiltersProps {
  onClickAdd: () => void;
  onChange: Dispatch<SetStateAction<IHomeFilter>>;
  data: IHomeFilter;
}

const Filters: FC<IFiltersProps> = ({ data, onChange, onClickAdd }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.left}>
        <Dropdown
          onChange={(sort) => onChange((prev) => ({ ...prev, sort }))}
          selectedValue={data.sort}
          name="Сортировка"
          options={SORT_FILTERS}
        />
        <Dropdown
          onChange={(category) => onChange((prev) => ({ ...prev, category }))}
          selectedValue={data.category}
          name="Категория"
          options={CATEGORY_FILTERS}
        />
        <Input
          placeholder="Поиск"
          type="text"
          onChange={(search) => onChange((prev) => ({ ...prev, search: search?.target?.value }))}
          className={styles.input}
        />
      </div>
      <ButtonIcon onClick={onClickAdd} Icon={<Plus />}>
        Добавить
      </ButtonIcon>
    </div>
  );
};

export default Filters;
