import { FC } from 'react';
import { IconButton } from '../../../../../ui/IconButton';
import Plus from '../../../../../assets/Plus.tsx';
import Minus from '../../../../../assets/Minus.tsx';

import styles from './header.module.css';

interface IHeaderCounterProps {
  title: string;
  value: number;
  append: () => void;
  remove: () => void;
}

const HeaderCounter: FC<IHeaderCounterProps> = ({ title, value, append, remove }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.counter}>
        <span>{value}</span>
        <IconButton onClick={append}>
          <Plus />
        </IconButton>
        <IconButton onClick={remove}>
          <Minus />
        </IconButton>
      </div>
    </div>
  );
};

export default HeaderCounter;
