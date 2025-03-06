import { IHomeFilter, IRecipe, IRecipeBase } from '../types';
import { apiService } from '../api';

export const recipesApi = apiService
  .enhanceEndpoints({
    addTagTypes: ['Recipes', 'RecipesByID'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getRecipes: build.query<IRecipeBase<string>[], IHomeFilter>({
        query: (filters) => ({ url: '/recipes', params: filters }),
        providesTags: ['Recipes'],
      }),
      getRecipesById: build.query<IRecipe<string>, string>({
        query: (id: string) => ({ url: `/recipes/${id}` }),
        providesTags: ['Recipes', 'RecipesByID'],
      }),
      createRecipes: build.mutation<IRecipe<string>, IRecipe<File>>({
        query: (data) => ({ url: '/recipes', method: 'POST', data }),
        invalidatesTags: ['Recipes'],
      }),
      deleteRecipes: build.mutation<IRecipe<string>, string>({
        query: (id) => ({ url: `/recipes/${id}`, method: 'DELETE' }),
        invalidatesTags: ['Recipes'],
      }),
      updateRecipes: build.mutation<IRecipe<string>, { id: string; data: IRecipe<File> }>({
        query: ({ id, data }) => {
          console.log({ id });
          return { url: `/recipes/${id}`, method: 'PATCH', data };
        },
        invalidatesTags: ['Recipes', 'RecipesByID'],
      }),
    }),
  });

export const {
  useDeleteRecipesMutation,
  useGetRecipesQuery,
  useGetRecipesByIdQuery,
  useCreateRecipesMutation,
  useUpdateRecipesMutation,
} = recipesApi;
