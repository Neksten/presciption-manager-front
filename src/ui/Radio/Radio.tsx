import { FC } from 'react';
import { PickComponentProps } from '../../types';

import styles from './radio.module.css';

interface IRadioProps extends PickComponentProps<HTMLInputElement> {
  value: string;
  name: string;
  checked: boolean;
}

const Radio: FC<IRadioProps> = ({ value, checked, name, children, ...props }) => {
  return (
    <div className={styles.radio}>
      <input type="radio" id={value} name={name} checked={checked} value={value} {...props} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

export default Radio;
