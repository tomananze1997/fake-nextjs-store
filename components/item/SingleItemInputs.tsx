import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import { CustomButton } from 'components';
import { useCartProducts, useLikedProducts } from 'providers';
import type { FC, FormEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { Product } from 'types';

type SingleItemInputsProps = {
  product: Product;
  outerStyles?: string;
};

export const SingleItemInputs: FC<SingleItemInputsProps> = ({
  product,
  outerStyles
}) => {
  const [option, setOption] = useState('M');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, addCartProduct] = useCartProducts();
  const selectOptions: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const [isItemLiked, setIsItemLiked] = useState<boolean>(false);
  const [likedProducts, toggleLikedProduct] = useLikedProducts();

  const checkIfItemIsLiked = useCallback(
    (product: Product) => {
      const newBoolean = likedProducts.some(
        ({ id }: { id: number }) => id === product.id
      );
      setIsItemLiked(newBoolean);
    },
    [likedProducts]
  );

  useEffect(() => {
    checkIfItemIsLiked(product);
  }, [checkIfItemIsLiked, likedProducts, product]);

  const handleLikeClick = (product: Product): void => {
    toggleLikedProduct(product);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addCartProduct(product);
  };

  return (
    <>
      <div className={classNames(outerStyles, 'flex w-64')}>
        <div>
          <h1 className={'text-2xl font-bold'}>{product.title}</h1>
          <h2 className={'text-neutral-600 opacity-75'}>
            {product.category.name.toUpperCase()}
          </h2>
          <p className={'my-4'}>
            <span className={'text-xl'}>{product.price}$ </span>
            <span className={'text-sm text-neutral-600'}>VAT is included</span>
          </p>
          <p>color: N/A</p>
          <p>{product.description}</p>
          <form onSubmit={handleSubmit}>
            <div className={'py-3'}>
              <select
                value={option}
                onChange={(event) => setOption(event.target.value)}
              >
                {selectOptions.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
              <CustomButton customStyles={'bg-green-500 ml-3'}>
                Add To Cart
              </CustomButton>
            </div>
          </form>
        </div>
        <div>
          <IconButton onClick={() => handleLikeClick(product)}>
            {isItemLiked ? (
              <FavoriteIcon className={'hover:text-black'} />
            ) : (
              <FavoriteBorderOutlinedIcon className={'hover:text-black'} />
            )}
          </IconButton>
        </div>
      </div>
    </>
  );
};
