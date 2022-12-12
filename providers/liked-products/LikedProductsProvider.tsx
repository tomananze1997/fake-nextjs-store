import { LikedProductsContext } from './LikedProductsContext';
import { useLocalStorage } from 'hooks';
import type { FC, ReactNode } from 'react';
import type { Product } from 'types';
import { Storage } from 'types';

type LikedProductsProvider = {
  children: ReactNode;
};

export const LikedProductsProvider: FC<LikedProductsProvider> = ({
  children
}) => {
  const [products, setProducts] = useLocalStorage<Product[]>(
    Storage.LIKED_PRODUCTS,
    []
  );

  const toggleItem = (item: Product): void => {
    const exists: boolean = products.some(({ id }) => id === item.id);
    let itemArray: Product[];

    if (exists) {
      itemArray = products.filter(({ id }) => id !== item.id);
    } else {
      itemArray = [...products, item];
    }

    setProducts(itemArray);
  };

  const removeItems = (): void => {
    setProducts([]);
  };

  return (
    <LikedProductsContext.Provider
      value={{
        likedProducts: products,
        toggleLikedProduct: toggleItem,
        removeLikedProducts: removeItems
      }}
    >
      {children}
    </LikedProductsContext.Provider>
  );
};
