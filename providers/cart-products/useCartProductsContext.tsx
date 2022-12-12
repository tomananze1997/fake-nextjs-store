import { CartProductsContext } from './CartProductsContext';
import { useContext } from 'react';

export const useCartProducts = () => {
  const { cartProducts, addCartProduct, removeProduct, removeAllProducts } =
    useContext(CartProductsContext);

  return [
    cartProducts,
    addCartProduct,
    removeProduct,
    removeAllProducts
  ] as const;
};
