import React from 'react';
import { Textarea } from '../../../../ui/Textarea';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../../../ui/Input/Input.tsx';
import styles from '../../../Auth/auth.module.css';
import { ImageUpload } from '../../../../components/ImageUpload';
import { HeaderCounter } from './HeaderCounter';
import { Button } from '../../../../ui/Button';
import { useCreateRecipesMutation } from '../../../../store/recipes.api.ts';
import { toFormData } from 'axios';
import { IconButton } from '../../../../ui/IconButton';
import Minus from '../../../../assets/Minus.tsx';
import { getRecipeSchema } from '../../../../helpers/getRecipeSchema.ts';
import { Dropdown } from '../../../../ui/Dropdown';
import { CATEGORY_FILTERS, SORT_FILTERS } from '../../../../constants/filters.ts';

const AddRecipeForm = () => {
  const [createRecipe] = useCreateRecipesMutation();
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(getRecipeSchema()),
    mode: 'onSubmit',
    defaultValues: {
      category: 'lunch',
      products: [{ name: '', value: '' }],
      steps: [{ imageUrl: '', description: '' }],
    },
  });

  const {
    fields: products,
    append: appendProducts,
    remove: removeProducts,
  } = useFieldArray({
    control,
    name: 'products',
  });

  const {
    fields: steps,
    append: appendSteps,
    remove: removeSteps,
  } = useFieldArray({
    control,
    name: 'steps',
  });

  const onSubmitHandler = (data: any) => {
    createRecipe(toFormData(data));
    reset();
  };

  const category = useWatch({ control, name: 'category' });

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <ImageUpload
        name="imageUrl"
        text="Главное изображение"
        control={control}
        setValue={setValue}
        className={styles.input}
        error={errors.imageUrl?.message}
      />
      <Dropdown
        onChange={(sort) => setValue('category', sort)}
        selectedValue={category}
        name="Категория"
        options={CATEGORY_FILTERS}
        className={styles.dropdown}
      />
      <Input
        {...register('time')}
        label="Время"
        placeholder="Введите время"
        type="text"
        className={styles.input}
      />
      <Input
        {...register('title')}
        label="Заголовок"
        placeholder="Введите заголовок"
        type="text"
        className={styles.input}
      />
      <Textarea {...register('description')} label="Описание" placeholder="Введите писание" />
      <div className={styles.products}>
        <HeaderCounter
          title="Продукты"
          value={products.length}
          append={() => appendProducts({ name: '', value: '' })}
          remove={removeProducts}
        />
        {products.map((field, index) => (
          <div key={field.id} className={styles.productRow}>
            <Input
              {...register(`products.${index}.name`)}
              label="Название"
              placeholder="Введите название"
            />
            <Input
              {...register(`products.${index}.value`)}
              label="Грамовка"
              placeholder="Введите грамовку"
            />
          </div>
        ))}
      </div>
      <div className={styles.steps}>
        <HeaderCounter
          title="Шаги"
          value={steps.length}
          append={() => appendSteps({ imageUrl: '', description: '' })}
          remove={removeSteps}
        />
        {steps.map((field, index) => (
          <div key={field.id} className={styles.step}>
            <span>{index + 1}.</span>
            <div className={styles.stepFields}>
              <ImageUpload
                name={`steps.${index}.imageUrl`}
                text="Изображение"
                control={control}
                setValue={setValue}
                className={styles.input}
                error={errors.steps?.[index]?.imageUrl?.message}
              />
              <Textarea
                {...register(`steps.${index}.description`)}
                label="Описание"
                placeholder="Введите описание"
              />
            </div>
            <IconButton className={styles.removeStep} onClick={() => removeSteps(index)}>
              <Minus />
            </IconButton>
          </div>
        ))}
      </div>
      <Button>Добавить</Button>
    </form>
  );
};

export default AddRecipeForm;
