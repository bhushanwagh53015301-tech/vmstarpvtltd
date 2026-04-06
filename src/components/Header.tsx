import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import vmLogo from '@/assets/Logo.svg';
import mobileLogo from '@/assets/logo.png';
import brochurePdf from '@/assets/VM Star Updated brochure.pdf';
import { serviceCategories } from '@/lib/serviceCategories';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [location]);
  useEffect(() => setIsServicesOpen(false), [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openServicesMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 120);
  };

  const serviceDropdownItems = serviceCategories
    .filter((item) =>
      ['security-services', 'housekeeping-services', 'manpower-services', 'bouncer-services'].includes(item.slug),
    )
    .map((item) => ({
      to: `/services/${item.slug}`,
      label: item.title,
    }));

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/about', label: t.nav.about },
    { to: '/gallery', label: 'Gallery' },
    { to: '/esg', label: t.nav.esg },
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];
  const galleryIndex = navLinks.findIndex((link) => link.to === '/gallery');
  const leftLinks = galleryIndex >= 0 ? navLinks.slice(0, galleryIndex + 1) : navLinks;
  const rightLinks = galleryIndex >= 0 ? navLinks.slice(galleryIndex + 1) : [];

  const renderDesktopNavLink = (link: { to: string; label: string }) => {
    if (link.to === '/services') {
      return (
        <div
          key={link.to}
          className="relative"
          onMouseEnter={openServicesMenu}
          onMouseLeave={closeServicesMenu}
        >
          <Link
            to={link.to}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              location.pathname.startsWith('/services')
                ? 'text-accent font-semibold bg-accent/10'
                : isHome
                  ? 'text-foreground hover:text-accent hover:bg-muted/70'
                  : 'text-black hover:text-accent hover:bg-muted/70'
            }`}
          >
            <span className={`whitespace-nowrap transition-all duration-300 ${isHome && !isScrolled ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
              {link.label}
            </span>
          </Link>
          <div
            className={`absolute left-0 top-full pt-3 transition-opacity duration-200 ${
              isServicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="w-72 rounded-2xl border border-border bg-card shadow-xl p-3">
              {serviceDropdownItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-2">
                <Link
                  to="/services"
                  className="block rounded-lg px-3 py-2 text-xs font-semibold text-accent hover:bg-muted"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={link.to}
        to={link.to}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          location.pathname === link.to
            ? 'text-accent font-semibold bg-accent/10'
            : isHome
              ? 'text-foreground hover:text-accent hover:bg-muted/70'
              : 'text-black hover:text-accent hover:bg-muted/70'
        }`}
      >
        <span className={`whitespace-nowrap transition-all duration-300 ${isHome && !isScrolled ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
          {link.label}
        </span>
      </Link>
    );
  };

  return (
    <header className={`fixed ${isHome ? 'top-3' : 'top-0'} left-0 right-0 z-50 transition-all duration-300 ${!isHome ? 'bg-white shadow-md border-b border-border/70' : ''} ${isScrolled && !isHome ? 'bg-white shadow-lg border-b border-border/70' : ''} ${isHome && !isScrolled ? 'bg-transparent' : ''}`}>
      <div className={`container-custom flex items-center justify-between px-4 py-3 lg:px-8 ${isHome ? 'mx-auto max-w-[92%] sm:max-w-6xl rounded-2xl lg:rounded-full bg-card/90 backdrop-blur-md shadow-lg border border-border/70 relative py-4 sm:py-5 px-5 sm:px-6 lg:px-8' : ''}`}>
        <Link to="/" className={`flex items-center gap-2 ${isHome ? 'ml-0 lg:hidden' : 'ml-0 md:ml-6 lg:ml-10'}`}>
          <img src={mobileLogo} alt="VM Star Private Limited" className="h-20 sm:h-24 md:h-[96px] lg:h-[112px] w-auto object-contain" />
        </Link>

        <nav className={`hidden lg:flex items-center gap-1 ${isHome ? 'w-full grid grid-cols-[1fr_auto_1fr] items-center' : ''}`}>
          <div className={`flex items-center gap-1 ${isHome ? 'justify-start pl-16' : ''}`}>
            {(isHome ? leftLinks : navLinks).map((link) => renderDesktopNavLink(link))}
          </div>
          {isHome && (
            <Link to="/" className="flex items-center justify-center">
              <img src={vmLogo} alt="VM Star Private Limited" className="h-20 md:h-[100px] lg:h-[112px] w-auto" />
            </Link>
          )}
          <div className={`flex items-center gap-1 ${isHome ? 'justify-end' : ''}`}>
            {isHome && rightLinks.map((link) => renderDesktopNavLink(link))}
            <a
              href={brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-lg border border-accent/35 text-foreground text-sm font-semibold hover:bg-muted transition-colors"
            >
              Brochure
            </a>
            <Link
              to="/contact#quote-form"
              className="ml-2 inline-flex items-center justify-center px-5 py-2.5 rounded-lg gradient-accent text-accent-foreground text-sm font-semibold whitespace-nowrap btn-glow transition-transform hover:scale-105"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </nav>

        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`lg:hidden p-2 ${isHome ? 'ml-auto mr-1' : ''}`}>
          {isMobileOpen ? (
            <X className={`w-6 h-6 ${isHome || isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isHome || isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) =>
              link.to === '/services' ? (
                <div key={link.to} className="space-y-1">
                  <Link
                    to={link.to}
                    className={`px-4 py-3 rounded-md text-sm font-medium ${
                      location.pathname.startsWith('/services') ? 'text-accent bg-muted' : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 grid gap-1">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="px-4 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-md text-sm font-medium ${
                    location.pathname === link.to ? 'text-accent bg-muted' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/contact#quote-form"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg gradient-accent text-accent-foreground text-sm font-semibold whitespace-nowrap text-center"
            >
              {t.nav.getQuote}
            </Link>
            <a
              href={brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-accent/35 text-foreground text-sm font-semibold text-center hover:bg-muted transition-colors"
            >
              Brochure
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
