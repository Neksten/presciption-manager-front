import { FC, PropsWithChildren } from 'react';

import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import Close from '../../assets/Close.tsx';

interface IModalProps extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const Modal: FC<IModalProps> = ({ className, isOpen, onClose, title, children }) => {
  return (
    isOpen &&
    createPortal(
      <>
        <div className={[styles.content, className].join(' ')}>
          <h3 className={styles.title}>{title}</h3>
          {children}
          <button className={styles.close} onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className={styles.overlay} onClick={onClose}></div>
      </>,
      document.querySelector('#portals'),
    )
  );
};

export default Modal;
