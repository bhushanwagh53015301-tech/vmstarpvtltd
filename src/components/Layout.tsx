import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTopButton from './BackToTopButton';
import StrongCta from './StrongCta';

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="mobile-webapp-shell min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${isHome ? '' : 'pt-24 lg:pt-36'}`}>{children}</main>
      <StrongCta />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
