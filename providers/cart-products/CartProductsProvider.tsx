import { CartProductsContext } from './CartProductsContext';
import { useLocalStorage } from 'hooks';
import type { FC, ReactNode } from 'react';
import type { Product } from 'types';
import { Storage } from 'types';

type CartProductsProviderType = {
  children: ReactNode;
};

export const CartProductsProvider: FC<CartProductsProviderType> = ({
  children
}) => {
  const [products, setProducts] = useLocalStorage<Product[]>(
    Storage.BOUGHT_PRODUCTS,
    []
  );

  const addItem = (item: Product): void => {
    const foundItem: Product | undefined = products.find(
      ({ id }) => id === item.id
    );
    let newItemsArray: Product[];

    if (foundItem) {
      newItemsArray = products.map(({ id }: { id: number }) =>
        item.id === id
          ? { ...foundItem, quantity: foundItem.quantity! + 1 }
          : item
      );
    } else {
      newItemsArray = [...products, { ...item, quantity: 1 }];
    }
    setProducts(newItemsArray);
  };

  const removeItem = (item: Product): void => {
    const foundItem: Product | undefined = products.find(
      ({ id }) => id === item.id
    );
    let newItemsArray: Product[];

    if (!foundItem) return;

    if (foundItem.quantity! > 1) {
      newItemsArray = products.map((item) =>
        item.id === foundItem.id
          ? { ...foundItem, quantity: foundItem.quantity! - 1 }
          : item
      );
    } else {
      newItemsArray = products.filter(({ id }) => id !== foundItem.id);
    }

    setProducts(newItemsArray);
  };

  const removeAllItems = (): void => {
    setProducts([]);
  };

  return (
    <CartProductsContext.Provider
      value={{
        cartProducts: products,
        addCartProduct: addItem,
        removeProduct: removeItem,
        removeAllProducts: removeAllItems
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};
