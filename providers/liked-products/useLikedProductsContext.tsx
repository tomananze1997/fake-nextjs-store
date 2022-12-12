import { LikedProductsContext } from './LikedProductsContext';
import { useContext } from 'react';

export const useLikedProducts = () => {
  const { likedProducts, toggleLikedProduct, removeLikedProducts } =
    useContext(LikedProductsContext);

  return [likedProducts, toggleLikedProduct, removeLikedProducts] as const;
};
