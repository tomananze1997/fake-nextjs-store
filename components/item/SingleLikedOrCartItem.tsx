import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { ItemInputQuantity } from 'components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';
import type { Product } from 'types';

type SingleLikedItemProps = {
  product: Product;
  toggleLiked?: (item: Product) => void;
};

export const SingleLikedOrCartItem: FC<SingleLikedItemProps> = ({
  product,
  toggleLiked
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className={
          'relative m-3  flex h-64 w-full cursor-pointer border border-2 border-black p-4 transition hover:scale-105 hover:shadow-2xl'
        }
        onClick={() => router.push(`/products/${product.id}`)}
      >
        <div className={'relative h-full w-1/3'}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill={true}
            className={'object-cover '}
          />
        </div>

        <div className={'m-3'}>
          <h1 className={'text-2xl font-bold'}>{product.title}</h1>
          <h2 className={'my-2 text-xl font-bold text-neutral-600'}>
            {product.category.name}
          </h2>
          <h3 className={'text-neutral-700'}>{product.price} $</h3>

          {product.quantity ? (
            <ItemInputQuantity product={product} otherStyles={'text-xl mt-3'} />
          ) : (
            <div
              className={'group !absolute right-2 top-3 z-10 '}
              onClick={() => toggleLiked!(product)}
            >
              <span>Remove item</span>
              <IconButton className={'group-hover:text-black'}>
                <FavoriteIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
