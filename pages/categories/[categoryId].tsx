import { axiosConfig } from 'helpers';
import type { NextPage } from 'next';
import type { Product } from 'types';

type CategoriesProps = {
  products: Product[];
};

const Category: NextPage<CategoriesProps> = ({ products }) => (
  <>
    <div>
      {products?.map((product) => (
        <p key={product.id}>{product.title}</p>
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

export const getStaticProps = async (context) => {
  const categoryId: string = context.params.categoryId;
  const response = await axiosConfig.get(`/categories/${categoryId}/products`);

  return {
    props: {
      products: response.data
    }
  };
};
export default Category;
