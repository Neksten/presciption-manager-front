export interface IRecipeBase<T> {
  _id: number;
  imageUrl: T;
  title: string;
  time: string;
}

export interface IProduct {
  name: string;
  value: string;
}

export interface IStep<T> {
  imageUrl: T;
  description: string;
}

export interface IRecipe<T> extends IRecipeBase<T> {
  description: string;
  products: IProduct[];
  steps: IStep<T>[];
}
