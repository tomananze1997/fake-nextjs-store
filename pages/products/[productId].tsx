import { axiosConfig } from '../../helpers';
import classNames from 'classnames';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import type { Product } from 'types';

type ProductIdType = {
  product: Product;
};

const ProductId: NextPage<ProductIdType> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <>
      {product.images && activeImage ? (
        <div>
          <section>
            <div>
              {product.images.map((image: string, idx: number) => (
                <div
                  className={classNames('relative my-4 h-24 w-24', {
                    'border-2 border-black': activeImage === image
                  })}
                  key={idx}
                  onClick={() => {
                    setActiveImage(image);
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.title}, picture ${idx}`}
                    fill={true}
                    className={'object-cover'}
                  />
                </div>
              ))}
            </div>
            <div className={'relative h-96 w-96'}>
              <Image src={activeImage} alt={product.title} fill={true} />
            </div>
          </section>
          <section>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </section>
        </div>
      ) : null}
    </>
  );
};

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
