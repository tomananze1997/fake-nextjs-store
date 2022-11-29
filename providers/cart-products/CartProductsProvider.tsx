import { CartProductsContext } from './CartProductsContext';
import type { FC, ReactNode } from 'react';
import { useContext } from 'react';

type CartProductsProviderType = {
  children: ReactNode;
};

export const CartProductsProvider: FC<CartProductsProviderType> = ({
  children
}) => {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartProductsContext.Provider>
  );
};
