import { FC, useState } from 'react';
import { IFilterOption, PickComponentProps } from '../../types';

import styles from './dropdown.module.css';
import Radio from '../Radio/Radio.tsx';

interface IDropdownProps extends PickComponentProps<HTMLButtonElement> {
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
  options: IFilterOption[];
}

const Dropdown: FC<IDropdownProps> = ({
  name,
  selectedValue,
  onChange,
  options,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.dropdown, className].join(' ')}>
      <button onClick={() => setIsOpen((prev) => !prev)} className={styles.button} {...props}>
        {name}
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {options.map(({ name: optionName, value }) => (
            <li key={value}>
              <Radio
                name={name}
                value={value}
                checked={value === selectedValue}
                onChange={() => onChange(value)}
              >
                {optionName}
              </Radio>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
