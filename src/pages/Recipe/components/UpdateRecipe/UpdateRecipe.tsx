import { FC, useState } from 'react';
import { IconButton } from '../../../../ui/IconButton';
import { Modal } from '../../../../components/Modal';
import Edit from '../../../../assets/Edit.tsx';
import { UpdateRecipeForm } from '../UpdateRecipeForm';
import { IRecipe } from '../../../../types';

interface IUpdateRecipeProps {
  id: string;
  defaultValues: IRecipe<string>;
}

const UpdateRecipe: FC<IUpdateRecipeProps> = ({ id, defaultValues }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <Edit />
      </IconButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Редактировать рецепт">
        <UpdateRecipeForm id={id} defaultValues={defaultValues} />
      </Modal>
    </>
  );
};

export default UpdateRecipe;
