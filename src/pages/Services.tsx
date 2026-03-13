import { Shield, Sparkles, Users, Dumbbell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';
import securityImg from '@/assets/Gallery/security4.webp';
import housekeepingImg from '@/assets/Gallery/housekeeping3.jpeg';
import manpowerImg from '@/assets/banner.png';
import bouncerImg from '@/assets/Gallery/security5.webp';
import { serviceCategories } from '@/lib/serviceCategories';

const Services = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  const securityServiceOfferings = [
    'Unarmed Security Guards',
    'Armed Security Guards',
    'Bouncer Services',
    'Event Security',
    'Industrial Security',
    'Residential / Society Security',
    'Corporate Office Security',
    'CCTV Monitoring',
    'Lady Security Guards',
  ];

  const services = [
    { icon: Shield, img: securityImg, ...t.services.security, benefits: securityServiceOfferings },
    { icon: Sparkles, img: housekeepingImg, ...t.services.housekeeping },
    { icon: Users, img: manpowerImg, ...t.services.manpower },
    { icon: Dumbbell, img: bouncerImg, ...t.services.bouncer },
  ];

  return (
    <Layout>
      {/* Banner */}
      <section className="gradient-navy pt-32 pb-20 px-4">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">{t.services.title}</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding">
        <div className="container-custom space-y-20">
          {services.map((svc, i) => (
            <div key={i} className={`animate-on-scroll flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}>
              <div className="w-full lg:w-1/2 relative group">
                <img
                  src={svc.img}
                  alt={svc.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl shadow-lg object-contain bg-muted/30 h-72 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center shadow-md">
                  <svc.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{svc.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {svc.benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 bg-muted rounded-lg px-4 py-3">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Specialized Service Categories</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our extended services. Each category has a dedicated page with detailed scope and delivery model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCategories.map((category, index) => (
              <div
                key={category.slug}
                className="animate-on-scroll rounded-xl border border-border bg-background p-6 card-hover"
                style={{ transitionDelay: `${(index % 9) * 0.06}s` }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 rounded-lg object-contain bg-muted/30 mb-4 border border-border"
                />
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{category.summary}</p>
                <Link
                  to={`/services/${category.slug}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg gradient-emerald text-secondary-foreground font-semibold text-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
