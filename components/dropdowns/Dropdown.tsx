import { DropdownItem } from './DropdownItem';
import classNames from 'classnames';
import type { Dispatch, LegacyRef, SetStateAction } from 'react';
import type { Product } from 'types';

type DropdownProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  products?: Product[];
};

export const Dropdown = ({
  innerRef,
  isOpen,
  setOpen,
  products
}: DropdownProps) => (
  <div
    ref={innerRef}
    className={classNames(
      'absolute top-8 right-4 z-40 h-80 w-56 overflow-y-auto border border-2 border-black bg-white shadow ',
      { 'hidden ': !isOpen },
      { 'flex h-20': products && products.length === 0 }
    )}
  >
    {products && products.length > 0 ? (
      products.map((product: Product) => (
        <DropdownItem key={product.id} product={product} />
      ))
    ) : (
      <h1 className={'m-auto text-xl font-bold text-red-600'}>
        No Selected Items!
      </h1>
    )}
  </div>
);
