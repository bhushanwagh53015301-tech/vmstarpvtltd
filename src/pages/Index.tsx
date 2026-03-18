import { Link } from 'react-router-dom';
import { Shield, Sparkles, Users, Award, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounter } from '@/hooks/useCounter';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import heroImg from '@/assets/banner.png';
import securityImg from '@/assets/Gallery/security4.webp';
import housekeepingImg from '@/assets/Gallery/housekeeping3.jpeg';
import bodyguardShowcaseImg from '@/assets/Bodyguard-image.png';
import manpowerImg from '@/assets/banner.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { blogPosts } from '@/data/blogPosts';

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
  useScrollAnimation({ blur: true });

  const whyItems = [
    { icon: Award, ...t.whyChoose.items[0] },
    { icon: Shield, ...t.whyChoose.items[1] },
    { icon: Users, ...t.whyChoose.items[2] },
    { icon: Sparkles, ...t.whyChoose.items[3] },
  ];
  const testimonials = [
    {
      name: 'Facilities Manager, Pune',
      quote:
        'VM Star improved shift discipline and reporting within weeks. We now have clear daily logs and audits.',
    },
    {
      name: 'Operations Head, Retail Chain',
      quote:
        'Their supervisors keep every site aligned. Staffing and replacements are smooth and predictable.',
    },
    {
      name: 'Society Chairperson',
      quote:
        'The guards are punctual and professional. Visitor management has become clean and reliable.',
    },
    {
      name: 'Admin Lead, Corporate Office',
      quote:
        'Escalations are handled quickly and the team follows SOPs exactly. Very dependable coverage.',
    },
    {
      name: 'Plant Manager, Industrial Unit',
      quote:
        'Their shift planning reduced handover issues. We see better incident reporting and accountability.',
    },
    {
      name: 'Hospital Operations Manager',
      quote:
        'Housekeeping quality improved noticeably. The supervisors track checklists daily without reminders.',
    },
  ];
  const secondaryTestimonials = testimonials;
  const faqs = [
    {
      question: 'How fast can you deploy staff?',
      answer: 'Most sites are staffed within 3–7 working days after assessment and documentation.',
    },
    {
      question: 'Do you provide PSARA compliance documentation?',
      answer: 'Yes. We follow PSARA guidelines and maintain all required documents for audits.',
    },
    {
      question: 'Can we customize housekeeping checklists?',
      answer: 'Absolutely. We design checklists by zone, frequency, and hygiene standards.',
    },
    {
      question: 'Do you support emergency coverage?',
      answer: 'Yes. We keep standby staff for urgent replacements and emergency assignments.',
    },
  ];

  return (
    <Layout>
      <Seo
        title="VM Star Private Limited | Security & Housekeeping Services Maharashtra"
        description="PSARA licensed, ISO certified security guard, housekeeping, manpower and bouncer services across Maharashtra. Trusted by commercial and residential clients."
      />
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
          <div className="max-w-3xl fade-up">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
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
        <div className="container-custom px-4 grid grid-cols-2 md:grid-cols-4 gap-8 stagger-grid animate-on-scroll">
          <StatCounter end={10} suffix="+" label={t.stats.years} />
          <StatCounter end={915} suffix="+" label={t.stats.workforce} />
          <StatCounter end={134} suffix="+" label={t.stats.clients} />
          <StatCounter end={7} suffix="+" label={t.stats.cities} />
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Operational Excellence</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              A balanced model: planning, people, and performance.
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4">
              We combine structured coverage with measurable outcomes so your facility stays safe, compliant, and spotless.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
            <div className="space-y-6 animate-on-scroll">
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Coverage Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Shift rosters, relief planning, and attendance tracking to prevent gaps in protection.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Compliance Ready</h3>
                <p className="text-sm text-muted-foreground">
                  PSARA aligned protocols and ISO documentation with supervisor sign-offs.
                </p>
              </div>
            </div>

            <div className="relative animate-on-scroll lg:pt-10 flex flex-col items-center">
              <div className="absolute -top-8 -right-8 h-44 w-44 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-orange-400/20 blur-3xl" />
              <div className="relative rounded-full border border-border bg-background/90 shadow-2xl w-72 h-72 md:w-80 md:h-80 overflow-hidden">
                <img
                  src={bodyguardShowcaseImg}
                  alt="Security team coverage"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-muted-foreground text-center stagger-grid animate-on-scroll">
                {['Briefing', 'Patrol', 'Report'].map((step) => (
                  <div key={step} className="rounded-full border border-border bg-background px-3 py-2">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Daily Quality Checks</h3>
                <p className="text-sm text-muted-foreground">
                  Supervisor audits with actionable reports to keep hygiene and safety on track.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">
                  Escalation SOPs and incident reporting for quick resolution and transparency.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Link to="/contact" className="px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow hover:scale-[1.02]">
              Request a Site Assessment
            </Link>
            <Link to="/services" className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted">
              View Operations Model
            </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid animate-on-scroll">
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

          <div className="grid gap-8 lg:grid-cols-3">
                {[
                  {
                    title: t.services.security.title,
                    desc: t.services.security.desc,
                    benefits: t.services.security.benefits,
                    image: securityImg,
                    tag: '24/7 Protection',
              },
              {
                title: t.services.housekeeping.title,
                desc: t.services.housekeeping.desc,
                benefits: t.services.housekeeping.benefits,
                image: housekeepingImg,
                tag: 'Hygiene First',
              },
              {
                title: t.services.manpower.title,
                desc: t.services.manpower.desc,
                benefits: t.services.manpower.benefits,
                image: manpowerImg,
                tag: 'Skilled Staffing',
              },
                ].map((service, index) => (
                  <article key={service.title} className="group animate-on-scroll rounded-[26px] border border-border bg-background shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${index === 0 ? 'object-top' : ''}`}
                      />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {service.tag}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
                  </div>
                  <ul className="grid gap-2 text-sm text-foreground stagger-grid animate-on-scroll">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
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
          <div className="flex flex-wrap justify-center gap-4 stagger-grid animate-on-scroll">
            {t.locations.cities.map((city, i) => (
              <div key={i} className="flex items-center gap-2 bg-card px-5 py-3 rounded-full border border-border card-hover">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Insights</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Security & Facility Management Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
              Practical advice for safety, housekeeping quality, and compliance-ready operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-grid animate-on-scroll">
            {blogPosts.slice(0, 3).map(post => (
              <div key={post.slug} className="bg-background border border-border rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-muted/80">{tag}</span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-accent font-semibold text-sm hover:underline">
                  Read more
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Clients trust our consistency</h2>
          </div>
          {secondaryTestimonials.length > 0 && (
            <div className="mt-8 overflow-hidden marquee animate-on-scroll">
              <div className="flex gap-6 marquee-track">
                {[...secondaryTestimonials, ...secondaryTestimonials].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="min-w-[260px] sm:min-w-[320px] rounded-3xl border border-border bg-card p-6 shadow-lg"
                  >
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Client Feedback</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">“{item.quote}”</p>
                    <div className="mt-4 text-sm font-semibold text-foreground">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="animate-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">FAQ</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Common questions, clear answers</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Quick clarity on deployment, compliance, and operations. If you need more details, we are happy to help.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {['PSARA', 'ISO', 'Reporting', 'Supervisors'].map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll rounded-[28px] border border-border bg-background p-6 md:p-8 shadow-2xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`}>
                    <AccordionTrigger>
                      <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
