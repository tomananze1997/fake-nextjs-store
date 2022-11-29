import { CartProductsContext } from './CartProductsContext';
import { useContext } from 'react';

export const useCartProducts = () => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  return { cartProducts, setCartProducts };
};
