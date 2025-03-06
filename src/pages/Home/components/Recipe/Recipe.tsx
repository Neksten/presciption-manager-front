import { FC } from 'react';
import { IRecipeBase } from '../../../../types';

import styles from './recipe.module.css';
import Clock from '../../../../assets/Clock.tsx';
import { Link } from 'react-router';
import { getImageUrl } from '../../../../helpers/getImageUrl.ts';

interface IRecipeProps extends Omit<IRecipeBase, 'id'> {}

const Recipe: FC<IRecipeProps> = ({ id, imageUrl, time, title }) => {
  return (
    <Link to={`/recipe/${id}`} className={styles.recipe}>
      <div className={styles.image}>
        <img src={getImageUrl(imageUrl)} alt="" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.time}>
          <Clock />
          <span>{time}</span>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
