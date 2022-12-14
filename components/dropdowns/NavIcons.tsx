import {
  AccountCircle,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBag,
  ShoppingBagOutlined
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Dropdown } from 'components';
import { useOnClickOutside } from 'hooks';
import { useCartProducts, useLikedProducts } from 'providers';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';

export const NavIcons: FC = () => {
  const iconStyle = 'hover:text-black';

  const [likedProducts] = useLikedProducts();
  const [cartProducts] = useCartProducts();
  const likedDropdownRef = useRef<HTMLDivElement>(null);
  const cartDropdownRef = useRef<HTMLDivElement>(null);

  const [isLikedItemOpen, setLikedItemOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  useOnClickOutside(likedDropdownRef, () => setLikedItemOpen(false));
  useOnClickOutside(cartDropdownRef, () => setLikedItemOpen(false));

  return (
    <>
      <div>
        <IconButton
          onClick={() => alert('Add login modal')}
          className={'relative'}
        >
          <AccountCircle className={iconStyle} />
        </IconButton>

        <IconButton onClick={() => setLikedItemOpen(!isLikedItemOpen)}>
          {likedProducts.length > 0 && typeof window !== 'undefined' ? (
            <Favorite className={iconStyle} />
          ) : (
            <FavoriteBorderOutlined className={iconStyle} />
          )}
          {isLikedItemOpen && (
            <Dropdown
              innerRef={likedDropdownRef}
              isOpen={isLikedItemOpen}
              products={likedProducts}
            />
          )}
        </IconButton>

        <IconButton onClick={() => setCartOpen(!isCartOpen)}>
          {cartProducts.length > 0 && typeof window !== 'undefined' ? (
            <ShoppingBag className={iconStyle} />
          ) : (
            <ShoppingBagOutlined className={iconStyle} />
          )}
          {isCartOpen && (
            <Dropdown
              innerRef={cartDropdownRef}
              isOpen={isCartOpen}
              products={cartProducts}
            />
          )}
        </IconButton>
      </div>
    </>
  );
};
