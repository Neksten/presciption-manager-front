import { Layout } from '../../Layouts/Layout';

import styles from './recipe.module.css';
import { Link, useParams } from 'react-router';
import { useGetRecipesByIdQuery } from '../../store/recipes.api.ts';
import { getImageUrl } from '../../helpers/getImageUrl.ts';
import { DeleteRecipe } from './components/DeleteRecipe';
import { UpdateRecipe } from './components/UpdateRecipe';

const Recipe = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetRecipesByIdQuery(id || '');

  console.log(data);

  if (!data || !id) return null;

  const { title, description, steps, products, imageUrl } = data;

  return (
    <Layout containerClassName={styles.container}>
      <Link to="/" className={styles.homepage}>
        На главную
      </Link>
      <div className={styles.navbar}>
        <DeleteRecipe id={id} />
        <UpdateRecipe id={id} defaultValues={data} isLoading={isLoading} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainImage}>
          <img src={getImageUrl(imageUrl)} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.products}>
            <h3 className={styles.subtitle}>Продукты</h3>
            <ul className={styles.productsList}>
              {products.map(({ name, value }, index) => (
                <li key={index} className={styles.product}>
                  <span>{name}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.steps}>
            {steps.map(({ imageUrl, description }, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.stepName}>Шаг {index + 1}</div>
                <div className={styles.stepImage}>
                  <img src={getImageUrl(imageUrl)} alt={description} />
                </div>
                <p className={styles.stepDescription}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
