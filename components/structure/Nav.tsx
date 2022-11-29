import {
  AccountCircle,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBag,
  ShoppingBagOutlined
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useCategories } from 'providers';
import type { FC } from 'react';
import type { Category } from 'types';

export const Nav: FC = () => {
  const router: NextRouter = useRouter();
  const { categories } = useCategories();

  const linkStyle = 'mx-2 text-lg text-sm font-semibold text-neutral-600';
  const clickableSpanStyle = 'cursor-pointer hover:opacity-70';
  const iconStyle = 'hover:text-black';

  const isItemLiked = false;
  const isBagFilled = false;
  // const isLikedItemOpen = false;
  // const isCartOpen = false;

  return (
    <>
      <div className={'flex justify-between bg-neutral-200 px-24 py-1 text-xs'}>
        <span className={clickableSpanStyle}>Customer Service</span>
        <span className={clickableSpanStyle}>FREE SHIPPING AND RETURNS*</span>
        <span className={clickableSpanStyle}>100-day return period</span>
      </div>

      <div className='bg-gradient-to-t from-orange-400 to-neutral-200 '>
        <Image
          src={'/logo.png'}
          alt={'logo'}
          width={100}
          height={100}
          className={'mx-auto cursor-pointer'}
          onClick={() => router.push('/')}
        />

        <div className={'flex items-center'}>
          <nav className={'px-3'}>
            {categories?.map((category: Category) => (
              <Link
                className={classNames(
                  linkStyle,
                  "trans relative before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition before:duration-300 before:ease-in-out before:content-[''] hover:text-neutral-900 before:hover:scale-x-100",
                  {
                    'text-neutral-900 underline decoration-2 underline-offset-2':
                      router.asPath === `/categories/${category.id}`
                  }
                )}
                prefetch={false}
                key={category.id}
                href={`/categories/${category.id}`}
              >
                {category.name.toUpperCase()}
              </Link>
            ))}
          </nav>
          <section className={'ml-auto mr-3'}>
            <IconButton onClick={() => alert('Add login modal')}>
              <AccountCircle className={iconStyle} />
            </IconButton>
            <IconButton onClick={() => alert('Add liked items modal')}>
              {isItemLiked ? (
                <Favorite className={iconStyle} />
              ) : (
                <FavoriteBorderOutlined className={iconStyle} />
              )}
            </IconButton>
            <IconButton onClick={() => alert('Add bag modal')}>
              {isBagFilled ? (
                <ShoppingBag className={iconStyle} />
              ) : (
                <ShoppingBagOutlined className={iconStyle} />
              )}
            </IconButton>
          </section>
        </div>
      </div>
    </>
  );
};
