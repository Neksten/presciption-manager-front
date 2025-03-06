import { FC } from 'react';

import styles from './iconButton.module.css';
import { PickComponentProps } from '../../types/utility.ts';

interface IButtonProps extends PickComponentProps<HTMLButtonElement> {}

const IconButton: FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={[styles.button, className].join(' ')} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
