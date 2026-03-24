import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTopButton from './BackToTopButton';
import StrongCta from './StrongCta';
import MobileBottomNav from './MobileBottomNav';

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 pb-20 md:pb-0 ${isHome ? '' : 'pt-24 lg:pt-36'}`}>{children}</main>
      <StrongCta />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <MobileBottomNav />
    </div>
  );
};

export default Layout;
