import { SingleLikedOrCartItem } from 'components';
import type { NextPage } from 'next';
import { useCartProducts } from 'providers';
import type { Product } from 'types';

const CartItems: NextPage = () => {
  const [cartProducts] = useCartProducts();

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className={'mx-auto mt-10 flex w-4/6 flex-col'}>
          {cartProducts.map((product: Product) => (
            <SingleLikedOrCartItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <h1>No Cart Products!</h1>
        </div>
      )}
    </>
  );
};

export default CartItems;
