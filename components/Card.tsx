import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
import type { Product } from 'types';

type CardProps = {
  product: Product;
  styles?: string;
  small?: boolean;
};

export const Card: FC<CardProps> = ({ product, styles, small = false }) => {
  const isItemLiked = false;

  const shortenString: string = (element: string) => {
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
            'box  relative cursor-pointer hover:scale-105 hover:shadow-lg hover:duration-1000',
            styles,
            {
              'h-56 w-32': small,
              'h-80 w-56': !small
            }
          )}
        >
          <IconButton
            onClick={() => alert('Add liked items modal')}
            className={'absolute right-2 top-3 z-10'}
          >
            {isItemLiked ? (
              <FavoriteIcon className={'hover:text-black'} />
            ) : (
              <FavoriteBorderOutlinedIcon className={'hover:text-black'} />
            )}
          </IconButton>
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
      ) : null}
    </>
  );
};
