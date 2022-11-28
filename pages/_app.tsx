import {Layout} from 'components';
import {axiosConfig} from 'helpers';
import type {AppProps} from 'next/app';
import {CategoriesProvider, useCategories} from 'providers';
import type {FC} from 'react';
import { useEffect} from 'react';
import 'styles/globals.css';
import type {Category} from 'types';

//todo types
const App: FC<AppProps> = ({Component, pageProps}) =>
        (
            <CategoriesProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CategoriesProvider>
        )

    // export const getStaticProps = async () => {
    //   const response = await axiosConfig.get('/categories');
    //
    //   return {
    //     props: {
    //       categories: response.data
    //     }
    //   };
    // };
;
export default App;
