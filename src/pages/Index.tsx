import { Link } from 'react-router-dom';
import { Shield, Sparkles, Users, Award, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounter } from '@/hooks/useCounter';
import Layout from '@/components/Layout';
import heroImg from '@/assets/banner.png';
import securityImg from '@/assets/Gallery/security4.webp';
import housekeepingImg from '@/assets/Gallery/housekeeping3.jpeg';
import bodyguardShowcaseImg from '@/assets/Bodyguard-image.png';

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent">{count}{suffix}</div>
      <div className="text-primary-foreground/70 text-sm mt-2">{label}</div>
    </div>
  );
};

const Index = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  const whyItems = [
    { icon: Award, ...t.whyChoose.items[0] },
    { icon: Shield, ...t.whyChoose.items[1] },
    { icon: Users, ...t.whyChoose.items[2] },
    { icon: Sparkles, ...t.whyChoose.items[3] },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={heroImg}
          alt="VM Star Security Team"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-custom px-4 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <Link to="/services" className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-navy py-16">
        <div className="container-custom px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={10} suffix="+" label={t.stats.years} />
          <StatCounter end={915} suffix="+" label={t.stats.workforce} />
          <StatCounter end={134} suffix="+" label={t.stats.clients} />
          <StatCounter end={7} suffix="+" label={t.stats.cities} />
        </div>
      </section>

      <section className="ops-showcase section-padding">
        <div className="container-custom">
          <div className="ops-header animate-on-scroll">
            <p className="ops-kicker">Transforming your workplace safe, efficient, and sustainable everyday</p>
            <h2 className="ops-title">Elevating Asset and Maintenance Management</h2>
            <p className="ops-copy">
              Experience unified operations and maintenance support through smart execution and proactive planning.
              Our digitized processes help maintain productive environments, optimize asset performance, and reduce
              operational disruption at every stage.
            </p>
          </div>

          <div className="ops-visual-wrap animate-on-scroll">
            <div className="ops-ring ops-ring-1" />
            <div className="ops-ring ops-ring-2" />
            <div className="ops-dashboard" />


            <div className="ops-card ops-card-left">
              <h4>Facilities Overview</h4>
              <p>Team efficiency and planned maintenance metrics at a glance.</p>
            </div>
            <div className="ops-card ops-card-right">
              <h4>Maintenance Summary</h4>
              <p>100% on-time checks with measurable response performance.</p>
            </div>
            <div className="ops-card ops-card-bottom">
              <h4>Check the Coolant</h4>
              <p>Assigned to site supervisor with live status visibility.</p>
            </div>

            <img
              src={bodyguardShowcaseImg}
              alt="Bodyguard in surveillance environment"
              loading="lazy"
              decoding="async"
              className="ops-main-image"
            />

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{t.whyChoose.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.whyChoose.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <div key={i} className="animate-on-scroll bg-card rounded-xl p-6 text-center card-hover border border-border" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          {/* Alternating layout */}
          <div className="space-y-16">
            <div className="animate-on-scroll flex flex-col lg:flex-row items-center gap-10">
              <img
                src={securityImg}
                alt="Security"
                loading="lazy"
                decoding="async"
                className="w-full lg:w-1/2 rounded-xl shadow-lg object-contain bg-muted/30 h-64 lg:h-80"
              />
              <div className="lg:w-1/2">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{t.services.security.title}</h3>
                <p className="text-muted-foreground mb-4">{t.services.security.desc}</p>
                <ul className="space-y-2">
                  {t.services.security.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="animate-on-scroll flex flex-col lg:flex-row-reverse items-center gap-10">
              <img
                src={housekeepingImg}
                alt="Housekeeping"
                loading="lazy"
                decoding="async"
                className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover h-64 lg:h-80"
              />
              <div className="lg:w-1/2">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{t.services.housekeeping.title}</h3>
                <p className="text-muted-foreground mb-4">{t.services.housekeeping.desc}</p>
                <ul className="space-y-2">
                  {t.services.housekeeping.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3.5 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-105">
              {t.hero.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding">
        <div className="container-custom text-center animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{t.locations.title}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {t.locations.cities.map((city, i) => (
              <div key={i} className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border border-border card-hover">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-emerald section-padding">
        <div className="container-custom text-center animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">{t.ctaBanner.title}</h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">{t.ctaBanner.subtitle}</p>
          <Link to="/contact" className="inline-block px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold transition-transform hover:scale-105">
            {t.ctaBanner.button}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
