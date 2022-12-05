import { Card } from 'components';
import { axiosConfig } from 'helpers';
import type { GetStaticProps, NextPage } from 'next';
import type { Product } from 'types';

type CategoriesProps = {
  products: Product[];
};

const Category: NextPage<CategoriesProps> = ({ products }) => (
  <>
    <div className={'m-6 flex flex-wrap justify-center'}>
      {products?.map((product) => (
        <Card key={product.id} product={product} styles={'m-2'} />
      ))}
    </div>
  </>
);

export const getStaticPaths = async () => {
  const paths: { params: { categoryId: string } }[] = [];

  const response = await axiosConfig.get('/categories');
  response.data.forEach(({ id }: { id: number }) => {
    paths.push({ params: { categoryId: id.toString() } });
  });

  return {
    paths,
    fallback: false
  };
};

type StaticProps = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const categoryId: string | string[] | undefined = context.params?.categoryId;
  const response = await axiosConfig.get(`/categories/${categoryId}/products`);

  return {
    props: {
      products: response.data
    }
  };
};
export default Category;
