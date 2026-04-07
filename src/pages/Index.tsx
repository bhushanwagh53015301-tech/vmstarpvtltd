import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounter } from '@/hooks/useCounter';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import securityFacebookBanner from '@/assets/Navy and Yellow Modern Security Guard Service Facebook Cover (1200 x 600 px).png';
import darkBlueOrangeBanner from '@/assets/Dark Blue and Orange Modern Security Guard Services Facebook Cover (1200 x 600 px).png';
import securityImg from '@/assets/Gallery/security4.webp';
import housekeepingImg from '@/assets/Gallery/housekeeping3.jpeg';
import bodyguardShowcaseImg from '@/assets/Bodyguard-image.png';
import manpowerImg from '@/assets/banner.png';
import { blogPosts } from '@/data/blogPosts';

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(end);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold tracking-[-0.025em] text-accent">
        {count}
        {suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm mt-2 font-medium">{label}</div>
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  const { t } = useLanguage();
  useScrollAnimation({ blur: true });
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCount = 9;
  const heroSlides = [securityFacebookBanner, darkBlueOrangeBanner];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialCount);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [testimonialCount]);

  const whyPowerTrio = [
    {
      title: 'PSARA Licensed & Compliant',
      copy: 'We operate with full statutory compliance, documented SOPs, and audit-ready records across every deployment.',
      icon: Shield,
    },
    {
      title: 'Tech-Enabled Vigilance',
      copy: 'We don’t just deploy guards; we deploy solutions with monitoring visibility, accountability, and responsive escalation.',
      icon: Sparkles,
    },
    {
      title: 'Specialized Training Academy',
      copy: 'Our staff undergoes rigorous training in discipline, response protocols, and client-facing professionalism.',
      icon: Users,
    },
  ];

  const testimonials = [
    {
      name: 'Rohan Mehta',
      role: 'Facility Manager, Pune Tech Park',
      quote:
        'VM Star upgraded our security posture in under a month. The discipline on-ground and reporting quality are exactly what corporate leadership expects.',
    },
    {
      name: 'Dr. S. Kulkarni',
      role: 'Director Operations, Sterling Care Hospital',
      quote:
        'Response time and escalation ownership improved immediately. Their team is structured, calm under pressure, and consistently compliant.',
    },
    {
      name: 'Anjali Sharma',
      role: 'Admin Head, Orion Corporate Towers',
      quote:
        'From front-desk conduct to after-hours vigilance, VM Star feels premium and dependable. We finally have a facility partner we can trust at scale.',
    },
    {
      name: 'Vikram Deshpande',
      role: 'Operations Lead, Westline Logistics Hub',
      quote:
        'Their deployment team mapped our risk zones quickly and improved gate control within days. Incident logging is now clear and audit-friendly.',
    },
    {
      name: 'Priya Nair',
      role: 'HR & Admin, Silverline Business Center',
      quote:
        'VM Star brought professionalism to every touchpoint, from reception etiquette to floor patrol discipline. The consistency is impressive.',
    },
    {
      name: 'Amit Patil',
      role: 'Plant Administrator, Nova Manufacturing Unit',
      quote:
        'Shift coverage and escalation handling are much tighter now. We have better visibility and faster supervisor response on every concern.',
    },
    {
      name: 'Nisha Gokhale',
      role: 'Community Manager, Greenview Residences',
      quote:
        'Residents noticed the difference immediately. Team behavior is courteous, alert, and dependable, especially during late-night operations.',
    },
    {
      name: 'Sandeep Rao',
      role: 'Procurement Head, Meridian Retail Group',
      quote:
        'Service quality has stayed stable month after month. Their reporting and follow-through make vendor reviews straightforward for our management team.',
    },
    {
      name: 'Farah Khan',
      role: 'Compliance Officer, Axis Meditech Campus',
      quote:
        'Documentation standards, briefing routines, and on-ground execution are all aligned. VM Star made our compliance checks significantly smoother.',
    },
  ];

  const featuredBlogSlugs = [
    'cost-of-security-services-maharashtra',
    'how-to-choose-security-agency',
    'housekeeping-checklist-for-companies',
  ];

  const featuredBlogs = featuredBlogSlugs.map((slug) => {
    const post = blogPosts.find((entry) => entry.slug === slug);
    return {
      slug,
      title: post?.title ?? '',
      excerpt: post?.excerpt ?? '',
      date: post?.date ?? '',
      tags: post?.tags ?? [],
      image: post?.image ?? securityImg,
    };
  });

  return (
    <Layout>
      <Seo
        title="VM Star Private Limited | Security & Housekeeping Services Maharashtra"
        description="PSARA licensed, ISO certified security guard, housekeeping, manpower and bouncer services across Maharashtra. Trusted by commercial and residential clients."
      />

      <section className="relative w-full aspect-[2/1] mt-20 md:mt-0 overflow-hidden bg-[#082b63]">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroSlides[activeHeroSlide]}
            src={heroSlides[activeHeroSlide]}
            alt="VM Star banner"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              onClick={() => setActiveHeroSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === activeHeroSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
              aria-label={`Go to banner slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="gradient-navy py-8 md:py-16">
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-foreground mt-3">
              A balanced model: planning, people, and performance.
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4 font-medium">
              We combine structured coverage with measurable outcomes so your facility stays safe, compliant, and spotless.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
            <div className="space-y-6 animate-on-scroll">
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold tracking-[-0.025em] text-foreground mb-2">Coverage Planning</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Shift rosters, relief planning, and attendance tracking to prevent gaps in protection.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold tracking-[-0.025em] text-foreground mb-2">Compliance Ready</h3>
                <p className="text-sm text-muted-foreground font-medium">
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
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-muted-foreground text-center stagger-grid animate-on-scroll font-medium">
                {['Briefing', 'Patrol', 'Report'].map((step) => (
                  <div key={step} className="rounded-full border border-border bg-background px-3 py-2">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold tracking-[-0.025em] text-foreground mb-2">Daily Quality Checks</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Supervisor audits with actionable reports to keep hygiene and safety on track.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold tracking-[-0.025em] text-foreground mb-2">Rapid Response</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Escalation SOPs and incident reporting for quick resolution and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-24 gradient-navy">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold tracking-[-0.025em] text-3xl md:text-4xl text-primary-foreground mb-4">
              Why VM Star is the Corporate Choice
            </h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto text-base md:text-lg font-medium">
              A focused operating model designed for compliant coverage, visible control, and trust at executive level.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyPowerTrio.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-7 transition-all duration-300 hover:shadow-[0_0_36px_rgba(56,189,248,0.35)]"
              >
                <div className="mb-5 relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/15 border border-white/30">
                  <motion.svg
                    viewBox="0 0 56 56"
                    className="absolute inset-0 w-full h-full text-sky-200/70"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    <circle cx="28" cy="28" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                  </motion.svg>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold tracking-[-0.025em] text-xl text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/85 leading-7 font-medium">{item.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-foreground mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t.services.subtitle}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: t.services.security.title, desc: t.services.security.desc, benefits: t.services.security.benefits, image: securityImg, tag: '24/7 Protection' },
              { title: t.services.housekeeping.title, desc: t.services.housekeeping.desc, benefits: t.services.housekeeping.benefits, image: housekeepingImg, tag: 'Hygiene First' },
              { title: t.services.manpower.title, desc: t.services.manpower.desc, benefits: t.services.manpower.benefits, image: manpowerImg, tag: 'Skilled Staffing' },
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
                    <h3 className="font-heading text-xl font-bold tracking-[-0.025em] text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">{service.desc}</p>
                  </div>
                  <ul className="grid gap-2 text-sm text-foreground stagger-grid animate-on-scroll">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 font-medium">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-4 md:pt-14 md:pb-8">
        <div className="container-custom text-center animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-foreground mb-8">{t.locations.title}</h2>
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

      <section className="px-4 pt-6 pb-8 md:pt-10 md:pb-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Testimonials</p>
            <h2 className="font-heading font-bold tracking-[-0.025em] text-3xl md:text-4xl text-foreground mt-3">
              High-Trust Client Experiences
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={testimonials[activeTestimonial].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border border-border/70 p-8 md:p-10 shadow-[0_28px_80px_-34px_rgba(15,23,42,0.35)]"
              >
                <div className="text-7xl leading-none text-slate-300 font-serif">"</div>
                <p className="text-lg md:text-xl leading-8 text-foreground font-medium -mt-3">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <h3 className="font-heading font-bold tracking-[-0.025em] text-xl text-foreground">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
                    Verified Client
                  </span>
                </div>
                <p className="text-sm md:text-base font-medium mt-2 text-[#64748b]">
                  {testimonials[activeTestimonial].role}
                </p>
              </motion.article>
            </AnimatePresence>
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2.5 w-8 rounded-full transition-colors ${index === activeTestimonial ? 'bg-accent' : 'bg-slate-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-border bg-white text-foreground hover:bg-muted transition-colors inline-flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-border bg-white text-foreground hover:bg-muted transition-colors inline-flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-24 bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Insights</p>
            <h2 className="font-heading font-bold tracking-[-0.025em] text-3xl md:text-4xl text-foreground mt-3">
              Premium Facility Management Insights
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredBlogs.map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="group h-full bg-card border border-border rounded-3xl overflow-hidden shadow-lg flex flex-col">
                <div className="relative aspect-video bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
                    {post.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-muted/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 min-h-[56px] leading-7">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 min-h-[72px] leading-6">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                    <span>वाचन वेळ: ४ मिनिटे</span>
                    <Link to={`/blog/${post.slug}`} className="text-accent font-semibold hover:underline">
                      अधिक वाचा
                    </Link>
                  </div>
                </div>
              <div className="h-1 w-full bg-gradient-to-r from-emerald-400/60 via-accent/70 to-emerald-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-lg gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_16px_32px_-16px_rgba(251,146,60,0.75)] transition-transform hover:scale-105"
            >
              Read More Blogs
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-24 gradient-navy">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 md:p-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Security Audit</p>
              <h2 className="font-heading font-bold tracking-[-0.025em] text-3xl md:text-4xl text-primary-foreground mt-3">
                Get a Professional Risk Review for Your Facility
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mt-4 font-medium leading-7">
                Share your work email and our team will connect with a free baseline audit covering manpower deployment, compliance posture, and immediate risk gaps.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  className="w-full sm:w-[420px] rounded-xl border border-white/30 bg-white px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60"
                />
                <button
                  type="submit"
                  className="rounded-xl gradient-accent px-7 py-3.5 text-accent-foreground font-semibold shadow-[0_16px_32px_-16px_rgba(251,146,60,0.75)]"
                >
                  Get My Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

