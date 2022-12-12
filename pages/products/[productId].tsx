import { SingleItemInputs, SingleItemPictures } from 'components';
import { axiosConfig } from 'helpers';
import type { GetStaticProps, NextPage } from 'next';
import type { Product } from 'types';

type ProductIdType = {
  product: Product;
};

const ProductId: NextPage<ProductIdType> = ({ product }) => (
    <>
      {product ? (
        <div className={'m-4 flex justify-center'}>
          <SingleItemPictures product={product} outerStyles={'mr-48'} />
          <SingleItemInputs product={product} />
        </div>
      ) : (
        <div>
          <h1>Error!</h1>
          <h2>Cannot find this product.</h2>
        </div>
      )}
    </>
  );

export const getStaticPaths = async () => {
  const paths: { params: { productId: string } }[] = [];

  const response = await axiosConfig.get('/products');
  response.data.forEach(({ id }: { id: number }) => {
    paths.push({ params: { productId: id.toString() } });
  });

  return {
    paths,
    fallback: false
  };
};

type StaticProps = {
  product: Product;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const productId: string | string[] | undefined = context.params?.productId;
  const response = await axiosConfig.get(`/products/${productId}`);

  return {
    props: {
      product: response.data
    }
  };
};

export default ProductId;
