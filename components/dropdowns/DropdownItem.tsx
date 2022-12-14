import classNames from 'classnames';
import { ItemInputQuantity } from 'components';
import { useShortenedString } from 'hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';
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
            className={'object-cover'}
          />
        </div>
        <div className={'ml-3 text-left'}>
          <h1>{useShortenedString(product.title, 18)}</h1>
          <h1>{product.price}$</h1>

          {product.quantity ? <ItemInputQuantity product={product} /> : null}
        </div>
      </div>
    </>
  );
};
