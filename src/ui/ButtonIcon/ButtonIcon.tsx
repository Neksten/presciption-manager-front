import { FC, ReactNode } from 'react';

import styles from './button.module.css';
import { PickComponentProps } from '../../types/utility.ts';

interface IButtonProps extends PickComponentProps<HTMLButtonElement> {
  Icon: ReactNode;
}

const ButtonIcon: FC<IButtonProps> = ({ children, className, Icon, ...props }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      <span>{children}</span>
      {Icon}
    </button>
  );
};

export default ButtonIcon;
