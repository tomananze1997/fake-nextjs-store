import { Layout } from 'components';
import type { AppProps } from 'next/app';
import {
  CartProductsProvider,
  CategoriesProvider,
  LikedProductsProvider
} from 'providers';
import type { FC } from 'react';
import 'styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CartProductsProvider>
    <LikedProductsProvider>
      <CategoriesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CategoriesProvider>
    </LikedProductsProvider>
  </CartProductsProvider>
);

export default App;
