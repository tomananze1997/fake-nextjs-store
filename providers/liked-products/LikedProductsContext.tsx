import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Product } from 'types';

type LikedProductsContextType = {
  likedProducts: Product[];
  setLikedProducts: Dispatch<SetStateAction<Product[]>>;
};

export const LikedProductsContext = createContext<LikedProductsContextType>({
  likedProducts: [],
  setLikedProducts: () => []
});
