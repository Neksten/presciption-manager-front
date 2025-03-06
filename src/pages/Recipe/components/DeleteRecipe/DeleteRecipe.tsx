import { FC, useState } from 'react';
import { IconButton } from '../../../../ui/IconButton';
import styles from './modal.module.css';
import Trash from '../../../../assets/Trash.tsx';
import { Modal } from '../../../../components/Modal';
import { Button } from '../../../../ui/Button';
import { useDeleteRecipesMutation } from '../../../../store/recipes.api.ts';
import { useNavigate } from 'react-router';

interface IDeleteRecipe {
  id: string;
}

const DeleteRecipe: FC<IDeleteRecipe> = ({ id }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [remove] = useDeleteRecipesMutation();

  const handleClickRemove = () => {
    remove(id);
    navigate('/', { replace: true });
  };

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} className={styles.trash}>
        <Trash />
      </IconButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Вы точно хотите удалить данный рецепт?"
        className={styles.modal}
      >
        <Button onClick={handleClickRemove}>Удалить</Button>
      </Modal>
    </>
  );
};

export default DeleteRecipe;
