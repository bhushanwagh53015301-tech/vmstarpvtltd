import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import vmLogo from '@/assets/vm-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <img src={vmLogo} alt="VM Star Private Limited" className="h-14 md:h-16 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.about}</Link>
              <Link to="/esg" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.esg}</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.blog}</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.nav.contact}</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.ourServices}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.services.security.title}</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.services.housekeeping.title}</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.services.manpower.title}</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{t.services.bouncer.title}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t.footer.contactInfo}</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+917844864486" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +91 7844864486
              </a>
              <a href="tel:+919511935264" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +91 9511935264
              </a>
              <a href="mailto:vmstarpvtltd@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> vmstarpvtltd@gmail.com
              </a>
              <a
                href="https://www.facebook.com/vmstarprivatelimited/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4 shrink-0" /> Facebook
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Plot No. 3, Srinivas Residency, Chhatrapati Sambhajinagar, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
