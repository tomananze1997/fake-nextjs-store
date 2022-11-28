import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useCategories } from 'providers';
import type { FC } from 'react';
import type { Category } from 'types';

//todo types
export const Nav: FC = () => {
  const router: NextRouter = useRouter();
  const { categories } = useCategories();

  const linkStyle = 'mx-2 text-lg text-sm font-semibold text-neutral-600';
  const clickableSpan = 'cursor-pointer hover:opacity-70';

  const isItemLiked = false;
  const isBagFilled = false;
  // const isLikedItemOpen = false;
  // const isCartOpen = false;

  return (
    <>
      <div className={'flex justify-between bg-neutral-200 px-24 py-1 text-xs'}>
        <span className={clickableSpan}>Customer Service</span>
        <span className={clickableSpan}>FREE SHIPPING AND RETURNS*</span>
        <span className={clickableSpan}>100-day return period</span>
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
                      router.pathname === `/categories/${category.id}`
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
              <AccountCircleIcon className={'hover:text-black'} />
            </IconButton>
            <IconButton onClick={() => alert('Add liked items modal')}>
              {isItemLiked ? (
                <FavoriteIcon className={'hover:text-black'} />
              ) : (
                <FavoriteBorderOutlinedIcon className={'hover:text-black'} />
              )}
            </IconButton>
            <IconButton onClick={() => alert('Add bag modal')}>
              {isBagFilled ? (
                <ShoppingBagIcon className={'hover:text-black'} />
              ) : (
                <ShoppingBagOutlinedIcon className={'hover:text-black'} />
              )}
            </IconButton>
          </section>
        </div>
      </div>
    </>
  );
};
