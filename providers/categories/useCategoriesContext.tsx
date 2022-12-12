import { CategoriesContext } from './CategoriesContext';
import { useContext } from 'react';

export const useCategories = () => {
  const { categories, setCategories } = useContext(CategoriesContext);

  return [categories, setCategories] as const;
};
