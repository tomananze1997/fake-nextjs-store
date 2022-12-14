import type { Context, Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { Category } from 'types';

type CategoriesContextType = {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
};

export const CategoriesContext: Context<CategoriesContextType> =
  createContext<CategoriesContextType>({
    categories: [],
    setCategories: () => []
  });
