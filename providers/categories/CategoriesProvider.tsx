import { axiosConfig } from '../../helpers';
import { CategoriesContext } from './CategoriesContext';
import { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import type { Category } from 'types';

type CategoriesProvider = {
  children: ReactNode;
};

export const CategoriesProvider: FC<CategoriesProvider> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = () => {
    axiosConfig.get('/categories').then(({ data }: { data: Category[] }) => {
      setCategories(data);
    });
  };

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
