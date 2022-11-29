import { LikedProductsContext } from './LikedProductsContext';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import type { Product } from 'types';

type LikedProductsProvider = {
  children: ReactNode;
};

export const LikedProductsProvider: FC<LikedProductsProvider> = ({
  children
}) => {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  return (
    <LikedProductsContext.Provider value={{ likedProducts, setLikedProducts }}>
      {children}
    </LikedProductsContext.Provider>
  );
};
