import { LikedProductsContext } from './LikedProductsContext';
import { useContext } from 'react';

export const useLikedProducts = () => {
  const { likedProducts, setLikedProducts } = useContext(LikedProductsContext);

  return { likedProducts, setLikedProducts };
};
