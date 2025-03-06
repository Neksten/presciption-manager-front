import { FC } from 'react';

import styles from './input.module.css';
import { PickComponentProps } from '../../types/utility.ts';

interface IInputProps extends PickComponentProps<HTMLInputElement> {
  label?: string;
}

const Input: FC<IInputProps> = ({ className, label, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={[styles.input, className].join(' ')} {...props} />
    </div>
  );
};

export default Input;
