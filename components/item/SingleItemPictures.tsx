import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import type { FC } from 'react';
import type { Product } from 'types';

type SingleItemPicturesType = {
  product: Product;
  outerStyles?: string;
};

export const SingleItemPictures: FC<SingleItemPicturesType> = ({
  product,
  outerStyles
}) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <>
      <div className={classNames('flex', outerStyles)}>
        <section className={'flex'}>
          <div>
            {product.images.map((image: string, idx: number) => (
              <div
                className={classNames('relative mb-4 mr-6 h-24 w-24', {
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
      </div>
    </>
  );
};
