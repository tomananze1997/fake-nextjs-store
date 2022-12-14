import type { Context} from 'react';
import { createContext } from 'react';
import type { Product } from 'types';

type LikedProductsContextType = {
  likedProducts: Product[];
  toggleLikedProduct: (item: Product) => void;
  removeLikedProducts: (item: Product) => void;
};

export const LikedProductsContext: Context<LikedProductsContextType> =
  createContext<LikedProductsContextType>({
    likedProducts: [],
    toggleLikedProduct: () => [],
    removeLikedProducts: () => []
  });
