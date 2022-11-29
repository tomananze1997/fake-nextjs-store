import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import { useCategories } from 'providers';
import { useEffect, useState } from 'react';

export const Carousel = () => {
  const router: NextRouter = useRouter();
  const { categories } = useCategories();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(1);

  const randomColorIndex = Math.floor(Math.random() * 5);
  const backgroundColorArray = [
    'bg-red-500',
    'bg-amber-400',
    'bg-orange-300',
    'bg-yellow-300',
    'bg-purple-400',
    'bg-rose-600'
  ];

  const carouselInterval = () => {
    setInterval(() => {
      nextCarouselImage();
    }, 3000);
  };

  useEffect(() => {
    categories.length > 0 && carouselInterval();

    return clearInterval(carouselInterval);
  }, []);

  const nextCarouselImage = (next = true) => {
    console.log(next, currentCategoryIndex, categories.length);

    if (categories.length === 0) return;

    if (next && currentCategoryIndex < categories.length) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      console.log('first');
    } else if (next && currentCategoryIndex >= categories.length) {
      setCurrentCategoryIndex(1);
      console.log('second');
    } else if (!next && currentCategoryIndex > 1) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
      console.log('third');
    } else if (!next && currentCategoryIndex === 1) {
      setCurrentCategoryIndex(categories.length);
      console.log('forth');
    }

    console.log(
      'length: ',
      categories.length,
      'current index: ',
      currentCategoryIndex
    );
  };

  const handleClick = (next = true) => {
    clearInterval(carouselInterval);
    nextCarouselImage(next);
    carouselInterval();
  };

  return (
    <>
      <div className={'relative mx-auto mt-16 flex h-80 w-4/6'}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              onClick={() => router.push(`/categories/${category.id}`)}
              className={classNames(
                'absolute flex h-full w-full cursor-pointer duration-1000 ease-in',
                {
                  'visible ': currentCategoryIndex === category.id,
                  'invisible ': currentCategoryIndex !== category.id
                }
              )}
            >
              <div className={'relative h-full w-4/5'}>
                <IconButton
                  onClick={() => handleClick(false)}
                  className={classNames(
                    { 'hidden ': categories.length === 0 },
                    'absolute left-2 top-1/3 z-10 h-2/6'
                  )}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleClick()}
                  className={classNames(
                    { 'hidden ': categories.length === 0 },
                    'absolute right-2 top-1/3 z-10 h-2/6'
                  )}
                >
                  <ArrowForwardIosIcon />
                </IconButton>

                <Image
                  src={category.image}
                  alt={category.name}
                  fill={true}
                  className={'object-cover object-center'}
                />
              </div>
              <div
                className={classNames(
                  'w-1/5 px-4',
                  backgroundColorArray[randomColorIndex]
                )}
              >
                <h1 className={'my-4 text-center text-xl font-bold'}>
                  {category.name}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  consequatur culpa eius ex ipsam laborum laudantium nam
                  provident totam voluptatem.
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>No Categories!</h1>
          </div>
        )}
      </div>
    </>
  );
};
