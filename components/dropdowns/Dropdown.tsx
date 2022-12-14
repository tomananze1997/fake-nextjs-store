import { DropdownItem } from './DropdownItem';
import classNames from 'classnames';
import { CustomButton } from 'components';
import type { LegacyRef } from 'react';
import type { Product } from 'types';

type DropdownProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  isOpen: boolean;
  products?: Product[];
};

export const Dropdown = ({ innerRef, isOpen, products }: DropdownProps) => (
  <div
    ref={innerRef}
    className={classNames(
      'absolute top-8 right-4 z-40 flex h-80 w-56 flex-col overflow-y-auto border border-2 border-black bg-white shadow ',
      { 'hidden ': !isOpen },
      { 'flex h-20': products && products.length === 0 }
    )}
  >
    {products && products.length > 0 ? (
      <>
        {products.map((product: Product) => (
          <DropdownItem key={product.id} product={product} />
        ))}

        <CustomButton
          onCLickRoute={products[0].quantity ? '/cart-items' : '/liked-items'}
          customStyles={'mt-auto text-xs mx-3 mb-2'}
        >
          {products[0].quantity ? 'View full cart' : 'View all liked items'}
        </CustomButton>
      </>
    ) : (
      <h1 className={'m-auto text-xl font-bold text-red-600'}>
        No Selected Items!
      </h1>
    )}
  </div>
);
