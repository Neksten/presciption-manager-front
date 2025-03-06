import * as yup from 'yup';

export const getRecipeSchema = () =>
  yup.object().shape({
    imageUrl: yup.mixed().required('Файл обязателен'),
    time: yup.string().required(),
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    products: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required('Название обязательно'),
          value: yup.string().required('Значение обязательно'),
        }),
      )
      .min(1, 'Должен быть хотя бы один продукт'),
    steps: yup
      .array()
      .of(
        yup.object().shape({
          imageUrl: yup.mixed().required('Файл обязателен'),
          description: yup.string().required('Описание шага обязательно'),
        }),
      )
      .min(1, 'Должен быть хотя бы один шаг'),
  });
