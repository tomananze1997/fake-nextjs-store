import { Layout } from 'components';
import type { AppProps } from 'next/app';
import { CategoriesProvider } from 'providers';
import type { FC } from 'react';
import 'styles/globals.css';

//todo types
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CategoriesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CategoriesProvider>
);

export default App;
