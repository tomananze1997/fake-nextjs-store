import { SingleLikedOrCartItem } from 'components';
import { useLikedProducts } from 'providers';

const LikedItems = () => {
  const [likedProducts, toggleLikedProduct] = useLikedProducts();

  return (
    <>
      {likedProducts.length > 0 && typeof window !== 'undefined' ? (
        <div className={'mx-auto mt-10 flex w-4/6 flex-col'}>
          {likedProducts.map((product) => (
            <SingleLikedOrCartItem
              key={product.id}
              product={product}
              toggleLiked={toggleLikedProduct}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>No Liked Products!</h1>
        </div>
      )}
    </>
  );
};

export default LikedItems;
