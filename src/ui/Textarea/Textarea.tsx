import { FC } from 'react';

import styles from './textarea.module.css';
import { PickComponentProps } from '../../types/utility.ts';

interface ITextareaProps extends PickComponentProps<HTMLTextAreaElement> {
  label: string;
}

const Textarea: FC<ITextareaProps> = ({ className, label, ...props }) => {
  return (
    <div className={styles.textareaWrapper}>
      <label className={styles.label}>{label}</label>
      <textarea className={[styles.input, className].join(' ')} {...props} />
    </div>
  );
};

export default Textarea;
