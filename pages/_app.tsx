import { Layout } from 'components';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {
  CartProductsProvider,
  CategoriesProvider,
  LikedProductsProvider
} from 'providers';
import 'styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <CartProductsProvider>
      <LikedProductsProvider>
        <CategoriesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CategoriesProvider>
      </LikedProductsProvider>
    </CartProductsProvider>
  </>
);

export default App;
