import { Link, useLocation } from 'react-router-dom';
import { Home, Shield, Phone, BookOpen, Image as ImageIcon } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/services', label: 'Services', Icon: Shield },
  { to: '/gallery', label: 'Gallery', Icon: ImageIcon },
  { to: '/blog', label: 'Blog', Icon: BookOpen },
  { to: '/contact', label: 'Contact', Icon: Phone },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/70 bg-background/95 backdrop-blur-lg"
      aria-label="Primary"
    >
      <div className="flex items-center justify-around h-16 pb-[env(safe-area-inset-bottom)]">
        {navItems.map(({ to, label, Icon }) => {
          const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center gap-1 text-[11px] font-semibold ${
                isActive ? 'text-accent' : 'text-muted-foreground'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
