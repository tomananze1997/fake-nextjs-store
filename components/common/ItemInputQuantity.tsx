import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useCartProducts } from 'providers';
import type { FC } from 'react';
import React from 'react';
import type { Product } from 'types';

type ItemInputQuantityProps = {
  product: Product;
  otherStyles?: string;
};

export const ItemInputQuantity: FC<ItemInputQuantityProps> = ({
  product,
  otherStyles
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, addCartProduct, removeCartProduct] = useCartProducts();

  return (
    <>
      <div className={otherStyles}>
        <div className={'z-50 flex'}>
          <IconButton onClick={() => removeCartProduct(product)}>
            <ArrowBackIos className={'w-4'} />
          </IconButton>
          <span className={'my-auto'}>{product.quantity}</span>
          <IconButton onClick={() => addCartProduct(product)}>
            <ArrowForwardIos className={'w-4'} />
          </IconButton>
        </div>
      </div>
    </>
  );
};
