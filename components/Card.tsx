import { useLikedProducts } from '../providers';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { Product } from 'types';

type CardProps = {
  product: Product;
  styles?: string;
  small?: boolean;
};

export const Card: FC<CardProps> = ({ product, styles, small = false }) => {
  let isItemLiked = false;
  const router = useRouter();
  const { likedProducts, setLikedProducts } = useLikedProducts();

  useEffect(() => {
    checkIfItemIsLiked(product);
  }, [likedProducts, isItemLiked]);

  const checkIfItemIsLiked = (product: Product): void => {
    isItemLiked = likedProducts.some(
      ({ id }: { id: number }) => id === product.id
    );
  };

  const addOrRemoveElementInProvider = (product: Product): void => {
    if (isItemLiked) {
      const newProductsArray: Product[] = likedProducts.filter(
        ({ id }: { id: number }) => id !== product.id
      );
      setLikedProducts(newProductsArray);
    } else {
      setLikedProducts((prevState) => [...prevState, product]);
    }
  };

  const shortenString = (element: string): string => {
    if (small && element.length < 10) {
      return element.substring(0, 9) + '...';
    } else if (!small && element.length < 15) {
      return element.substring(0, 3) + '...';
    } else {
      return element;
    }
  };

  return (
    <>
      {product ? (
        <div
          className={classNames(
            'box relative cursor-pointer hover:scale-105 hover:shadow-lg hover:duration-1000',
            styles,
            {
              'h-56 w-32': small,
              'h-80 w-56': !small
            }
          )}
        >
          <IconButton
            onClick={() => addOrRemoveElementInProvider(product)}
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
                className={'object-cover object-center'}
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
