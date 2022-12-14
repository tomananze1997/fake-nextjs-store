import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLikedProducts } from 'providers';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { Product } from 'types';

type CardProps = {
  product: Product;
  styles?: string;
};

export const Card: FC<CardProps> = ({ product, styles }) => {
  const [isItemLiked, setIsItemLiked] = useState<boolean>(false);
  const router = useRouter();
  const [likedProducts, toggleLikedProduct] = useLikedProducts();

  const checkIfItemIsLiked = useCallback(
    (product: Product) => {
      const newBoolean = likedProducts.some(
        ({ id }: { id: number }) => id === product.id
      );
      setIsItemLiked(newBoolean);
    },
    [likedProducts]
  );

  useEffect(() => {
    checkIfItemIsLiked(product);
  }, [checkIfItemIsLiked, likedProducts, product]);

  const handleLikeClick = (product: Product): void => {
    toggleLikedProduct(product);
  };

  const shortenString = (element: string): string => {
    if (element.length > 30) {
      return element.substring(0, 27) + '...';
    } else {
      return element;
    }
  };

  return (
    <>
      {product && product.images[0].includes('https://api.lorem') ? (
        <div
          className={classNames(
            'box relative h-80 w-56 cursor-pointer hover:scale-105 hover:shadow-lg hover:duration-1000',
            styles
          )}
        >
          <IconButton
            onClick={() => handleLikeClick(product)}
            className={'!absolute right-2 top-3 z-10 bg-white hover:bg-white'}
          >
            {isItemLiked ? (
              <FavoriteIcon className={'hover:text-black'} />
            ) : (
              <FavoriteBorderOutlinedIcon className={'hover:text-black'} />
            )}
          </IconButton>

          <div
            className={'h-full'}
            onClick={() => router.push(`/products/${product.id}`)}
          >
            <div className={'relative h-2/3 w-full'}>
              <Image
                src={product.images[0]}
                alt={product.title}
                fill={true}
                className={'object-cover'}
              />
            </div>
            <h1>{shortenString(product.title)}</h1>
            <span>{product.price} $</span>
          </div>
        </div>
      ) : null}
    </>
  );
};
