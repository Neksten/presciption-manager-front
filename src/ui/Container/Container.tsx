import { FC, PropsWithChildren } from 'react';

import styles from './container.module.css';

interface IContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
  return <div className={[styles.container, className].join(' ')}>{children}</div>;
};

export default Container;
