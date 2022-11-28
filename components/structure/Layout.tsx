import { Footer } from 'components/structure/Footer';
import { Nav } from 'components/structure/Nav';
import type { FC, ReactNode } from 'react';

//todo types
export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div className='flex h-screen flex-col'>
      <Nav />
      <main>{children}</main>

      <Footer />
    </div>
  </>
);
