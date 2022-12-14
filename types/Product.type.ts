import type { Category } from 'types';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  quantity?: number;
};
