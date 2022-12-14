import type { Context} from 'react';
import { createContext } from 'react';
import type { Product } from 'types';

type CartProductsContextType = {
  cartProducts: Product[];
  addCartProduct: (item: Product) => void | Product[];
  removeProduct: (item: Product) => void;
  removeAllProducts: () => void;
};

export const CartProductsContext: Context<CartProductsContextType> =
  createContext<CartProductsContextType>({
    cartProducts: [],
    addCartProduct: () => [],
    removeProduct: () => [],
    removeAllProducts: () => []
  });
