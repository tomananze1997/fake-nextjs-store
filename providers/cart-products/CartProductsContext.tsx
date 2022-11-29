import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import type { Product } from 'types';

type CartProductsContextType = {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
};

export const CartProductsContext = createContext<CartProductsContextType>({
  cartProducts: [],
  setCartProducts: () => []
});
