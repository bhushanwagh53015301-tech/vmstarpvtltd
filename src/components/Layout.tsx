import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTopButton from './BackToTopButton';
import StrongCta from './StrongCta';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <StrongCta />
    <Footer />
    <WhatsAppButton />
    <BackToTopButton />
  </div>
);

export default Layout;
