import { Shield, Sparkles, Users, Dumbbell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import securityImg from '@/assets/Gallery/security4.webp';
import housekeepingImg from '@/assets/Gallery/housekeeping3.jpeg';
import manpowerImg from '@/assets/banner.png';
import bouncerImg from '@/assets/Gallery/security5.webp';
import { serviceCategories } from '@/lib/serviceCategories';

const Services = () => {
  const { t } = useLanguage();
  useScrollAnimation({ blur: false });

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
  const metrics = [
    { label: 'Years in Operations', value: '10+' },
    { label: 'Active Workforce', value: '900+' },
    { label: 'Sites Covered', value: '130+' },
  ];
  const industries = [
    'Residential Societies',
    'Corporate Offices',
    'Hospitals & Clinics',
    'Industrial Units',
    'Retail & Malls',
    'Educational Campuses',
  ];

  return (
    <Layout>
      <Seo
        title="Security, Housekeeping & Manpower Services | VM Star Private Limited"
        description="Explore security guards, housekeeping, manpower and bouncer services across Maharashtra. Customized facility solutions with trained staff."
      />
      {/* Banner */}
      <section className="gradient-navy px-4">
        <div className="container-custom min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center">
          <div className="translate-y-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">{t.services.title}</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-padding -mt-16">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center rounded-[28px] border border-border bg-background/90 p-6 md:p-10 shadow-2xl animate-on-scroll">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Trusted Coverage</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-3">
                A partner built for safety, hygiene, and compliance.
              </h2>
              <p className="text-muted-foreground mt-3">
                PSARA licensed and ISO certified operations with supervisor-led monitoring and reporting.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {['PSARA Licensed', 'ISO 9001/14001/45001', 'Supervisor Audits'].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-muted/60 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border bg-muted/40 p-4">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-foreground text-background p-8 md:p-10 shadow-2xl animate-on-scroll">
              <img
                src={securityImg}
                alt="Security coverage"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/90" />
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Coverage Built for Scale</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">
                  A complete facility partner with measurable outcomes.
                </h2>
                <p className="text-background/75 text-lg leading-relaxed">
                  Every engagement includes staffing plans, compliance documentation, supervisor reporting, and
                  rapid escalation protocols.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-background/70">
                  {['PSARA Licensed', 'ISO Certified', 'Supervisor Audits'].map((item) => (
                    <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 animate-on-scroll">
              {[
                { title: '24/7 Site Coverage', desc: 'Shift rosters, relief planning, and attendance tracking.' },
                { title: 'Quality Audits', desc: 'Supervisor-led checks with actionable reports.' },
                { title: 'Rapid Response', desc: 'Incident escalation and resolution protocols.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-6 shadow-lg">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
                  className="w-full rounded-3xl shadow-2xl object-contain bg-muted/30 h-72 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center shadow-md">
                  <svc.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{svc.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger-grid animate-on-scroll">
                  {svc.benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 bg-muted rounded-lg px-4 py-3">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/contact#quote-form" className="inline-flex items-center px-5 py-2.5 rounded-lg gradient-accent text-accent-foreground font-semibold">
                    Request Service Quote
                  </Link>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-grid animate-on-scroll">
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

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">A clear, compliance-ready process</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4 stagger-grid animate-on-scroll">
            {[
              { step: '01', title: 'Site Assessment', desc: 'Risk mapping, staffing estimates, and scope definition.' },
              { step: '02', title: 'Deployment Plan', desc: 'Roster, SOPs, and supervisor handover.' },
              { step: '03', title: 'Execution', desc: 'Trained staff with live reporting and audits.' },
              { step: '04', title: 'Review', desc: 'Monthly performance and compliance checks.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                <div className="text-sm text-muted-foreground">{item.step}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <div className="animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Industries We Serve</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Coverage tailored by industry</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 stagger-grid animate-on-scroll">
            {industries.map((item) => (
              <span key={item} className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Services;
