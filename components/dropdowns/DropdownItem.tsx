import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCartProducts } from 'providers';
import type { FC } from 'react';
import React, { useState } from 'react';
import type { Product } from 'types';

type DropdownItemProps = {
  product: Product;
  otherStyles?: string;
};

export const DropdownItem: FC<DropdownItemProps> = ({
  product,
  otherStyles
}) => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantity, setQuantity] = useState(
    product.quantity ? product.quantity : null
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, addCartProduct, removeCartProduct] = useCartProducts();
  const shortenString = (element: string): string => {
    if (element.length > 17) {
      return element.substring(0, 14) + '...';
    } else {
      return element;
    }
  };

  return (
    <>
      <div
        className={classNames(
          'flex h-20 w-full items-center justify-start p-2 text-xs',
          otherStyles
        )}
        onClick={() => router.push(`/products/${product.id}`)}
      >
        <div className={'relative h-full w-1/3 p-2'}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill={true}
            className={'object-cover object-center'}
          />
        </div>
        <div className={'ml-3 text-left'}>
          <h1>{shortenString(product.title)}</h1>
          <h1>{product.price}$</h1>

          {product.quantity ? (
            <div className={'z-50 flex'}>
              <IconButton onClick={() => removeCartProduct(product)}>
                <ArrowBackIos className={'w-4'} />
              </IconButton>
              <span className={'my-auto'}>{quantity}</span>
              <IconButton onClick={() => addCartProduct(product)}>
                <ArrowForwardIos className={'w-4'} />
              </IconButton>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
