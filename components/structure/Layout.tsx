import { Footer } from 'components/structure/Footer';
import { Nav } from 'components/structure/Nav';
import type { FC, ReactNode } from 'react';

type LayoutTypes = {
  children: ReactNode;
};

export const Layout: FC<LayoutTypes> = ({ children }) => (
  <>
    <div className='flex h-screen flex-col'>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);
