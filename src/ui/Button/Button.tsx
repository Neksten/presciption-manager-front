import { FC } from 'react';

import styles from './button.module.css';
import { PickComponentProps } from '../../types/utility.ts';

interface IButtonProps extends PickComponentProps<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
