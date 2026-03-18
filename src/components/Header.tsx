import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import vmLogo from '@/assets/vm-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [location]);

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

  return (
    <header className={`fixed ${isHome ? 'top-3' : 'top-0'} left-0 right-0 z-50 transition-all duration-300 ${!isHome ? 'bg-white shadow-md border-b border-border/70' : ''} ${isScrolled && !isHome ? 'bg-white shadow-lg border-b border-border/70' : ''} ${isHome && !isScrolled ? 'bg-transparent' : ''}`}>
      <div className={`container-custom flex items-center justify-between px-4 py-3 lg:px-8 ${isHome ? 'mx-auto max-w-[92%] sm:max-w-5xl rounded-2xl lg:rounded-full bg-card/90 backdrop-blur-md shadow-lg border border-border/70 relative py-2 sm:py-3 px-3 sm:px-4' : ''}`}>
        <Link to="/" className={`flex items-center gap-2 ${isHome ? 'absolute left-1/2 -translate-x-1/2 lg:hidden' : 'ml-0 md:ml-6 lg:ml-10'}`}>
          <img src={vmLogo} alt="VM Star Private Limited" className="h-12 sm:h-14 md:h-[72px] lg:h-[84px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-1 ${isHome ? 'w-full grid grid-cols-[1fr_auto_1fr] items-center' : ''}`}>
          <div className={`flex items-center gap-1 ${isHome ? 'justify-start pl-16' : ''}`}>
            {(isHome ? leftLinks : navLinks).map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-accent font-semibold bg-accent/10'
                  : isHome ? 'text-foreground hover:text-accent hover:bg-muted/70' : 'text-black hover:text-accent hover:bg-muted/70'
                }`}
              >
                <span className={`transition-all duration-300 ${isHome && !isScrolled ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          {isHome && (
            <Link to="/" className="flex items-center justify-center">
              <img src={vmLogo} alt="VM Star Private Limited" className="h-14 md:h-[76px] lg:h-[84px] w-auto" />
            </Link>
          )}
          <div className={`flex items-center gap-1 ${isHome ? 'justify-end' : ''}`}>
            {isHome &&
              rightLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-accent font-semibold bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-muted/70'
                  }`}
                >
                  <span className={`transition-all duration-300 ${isHome && !isScrolled ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            <Link
              to="/contact#quote-form"
              className="ml-2 px-5 py-2.5 rounded-lg gradient-accent text-accent-foreground text-sm font-semibold btn-glow transition-transform hover:scale-105"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`lg:hidden p-2 ${isHome ? 'ml-auto mr-1' : ''}`}>
          {isMobileOpen ? (
            <X className={`w-6 h-6 ${isHome || isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isHome || isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === link.to ? 'text-accent bg-muted' : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact#quote-form"
              className="mt-2 px-5 py-3 rounded-lg gradient-accent text-accent-foreground text-sm font-semibold text-center"
            >
              {t.nav.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
