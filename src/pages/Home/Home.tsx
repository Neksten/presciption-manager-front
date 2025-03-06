import { useState } from 'react';

import { Layout } from '../../Layouts/Layout';
import { Filters } from './components/Filters';
import { Recipe } from './components/Recipe';

import { Modal } from '../../components/Modal';
import { AddRecipeForm } from './components/AddRecipeForm';
import { useGetRecipesQuery } from '../../store/recipes.api.ts';

import styles from './home.module.css';
import { IHomeFilter } from '../../types';

const Home = () => {
  const [filters, setFilters] = useState<IHomeFilter>({
    sort: 'new',
    category: 'all',
    search: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);
  const { data: recipesData } = useGetRecipesQuery(filters);

  console.log({ filters });
  return (
    <Layout>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Добавить рецепт">
        <AddRecipeForm />
      </Modal>
      <Filters onChange={setFilters} data={filters} onClickAdd={() => setIsOpen(true)} />
      {recipesData && (
        <div className={styles.recipes}>
          {recipesData.map((recipe) => (
            <Recipe key={recipe['_id']} id={recipe['_id']} {...recipe} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
