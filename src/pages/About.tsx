import { CheckCircle2, ClipboardCheck, ShieldCheck, Sparkles, Target, Award, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';
import ownerImg from '@/assets/owner.png';

const About = () => {
  useScrollAnimation();

  const serviceTypes = [
    'Residential societies and apartments',
    'Commercial offices and retail spaces',
    'Industrial units and warehouses',
  ];

  const whyChooseUs = [
    'Highly trained and professional staff',
    'Reliable and punctual services',
    'Use of modern tools and eco-friendly practices',
    'Customized service solutions',
    'Strong focus on safety, hygiene, and client satisfaction',
  ];
  const certifications = [
    {
      title: 'ISO 9001/14001/45001',
      desc: 'Quality, environmental, and occupational safety standards.',
    },
    {
      title: 'PSARA Compliance',
      desc: 'Audit-ready licensing with documented SOPs.',
    },
    {
      title: 'Supervisor-Led Audits',
      desc: 'Daily checks and monthly performance reviews.',
    },
  ];
  const trainingModules = [
    'Fire prevention and emergency response',
    'First aid and incident reporting',
    'Access control and visitor management',
    'Housekeeping quality checklists',
    'Equipment handling and safety drills',
    'Customer etiquette and discipline',
  ];
  const locations = [
    'Chhatrapati Sambhajinagar',
    'Pune',
    'Mumbai',
    'Nashik',
    'Nagpur',
    'Solapur',
  ];

  return (
    <Layout>
      <section className="gradient-navy pt-32 pb-20 px-4">
        <div className="container-custom">
          <h1 className="text-center font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-center text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Your trusted partner for professional security guard and housekeeping services across Maharashtra.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl space-y-10">
          <div className="animate-on-scroll bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-center">
              <img
                src={ownerImg}
                alt="Kalyan Jadhav, Director at VM Star Private Limited"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[320px] mx-auto rounded-2xl object-cover border border-border shadow-sm"
              />
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Director</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kalyan Jadhav serves as a Director at VM Star Private Limited, a company specializing in the
                  provision of security and housekeeping services. Under his directorship, VM Star Private Limited aims
                  to deliver reliable and professional solutions to meet the security and maintenance needs of its
                  clientele. Mr. Jadhav's leadership likely focuses on ensuring operational efficiency, service
                  quality, and client satisfaction within the competitive security and housekeeping sector.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="animate-on-scroll bg-card rounded-2xl p-8 border border-border card-hover shadow-sm">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that security and cleanliness are fundamental to peace of mind and productivity. That is
                why we focus on providing dependable services that protect your property and enhance your environment.
                Our team works with professionalism, discipline, and attention to detail to ensure every aspect of your
                premises is well-managed.
              </p>
            </div>

            <div
              className="animate-on-scroll bg-card rounded-2xl p-8 border border-border card-hover shadow-sm"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Security Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our highly trained security personnel are equipped to handle a wide range of security challenges. From
                vigilant monitoring and access control to emergency response and risk prevention, we ensure that your
                premises remain safe at all times. Our guards are trained in observation, communication, and quick
                decision-making to manage situations effectively while maintaining a courteous and professional approach.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Housekeeping Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              Alongside security, we provide comprehensive housekeeping services designed to maintain cleanliness,
              hygiene, and organization. Our housekeeping staff uses modern equipment, proven techniques, and
              eco-friendly products to deliver a spotless and healthy environment. Whether it is daily maintenance or
              deep cleaning, we ensure your space reflects the highest standards of cleanliness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="animate-on-scroll bg-card rounded-2xl p-8 border border-border shadow-sm card-hover">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Tailored Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every property is different, and so are its needs. We offer customized service plans designed for:
              </p>
              <ul className="space-y-3">
                {serviceTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our flexible approach ensures that you receive exactly the level of service you require.
              </p>
            </div>

            <div
              className="animate-on-scroll bg-card rounded-2xl p-8 border border-border shadow-sm card-hover"
              style={{ transitionDelay: '0.1s' }}
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Why Choose Us</h3>
              <ul className="space-y-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="animate-on-scroll rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Certifications & Compliance</h3>
              </div>
              <div className="grid gap-4">
                {certifications.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-background p-4">
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll rounded-2xl border border-border bg-card p-8 shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Training & Capability</h3>
              </div>
              <ul className="space-y-3">
                {trainingModules.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center">
                <Globe className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">Geographic Footprint</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Multi-city coverage across Maharashtra with rapid response teams and on-ground supervisors.
            </p>
            <div className="flex flex-wrap gap-3">
              {locations.map((item) => (
                <span key={item} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm card-hover">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Media & Gallery</h3>
              <p className="text-muted-foreground mb-5">
                Browse on-site deployments, training sessions, and client coverage visuals.
              </p>
              <Link to="/gallery" className="inline-flex items-center px-5 py-2.5 rounded-lg gradient-emerald text-secondary-foreground font-semibold">
                View Gallery
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm card-hover">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Newsletter & Updates</h3>
              <p className="text-muted-foreground mb-5">
                Operational insights, compliance updates, and service improvements from our team.
              </p>
              <Link to="/blog" className="inline-flex items-center px-5 py-2.5 rounded-lg gradient-accent text-accent-foreground font-semibold">
                Read Updates
              </Link>
            </div>
          </div>

          <div className="animate-on-scroll rounded-2xl p-1 gradient-emerald">
            <div className="rounded-[calc(var(--radius)+6px)] bg-card p-8 border border-border/50">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Promise</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are committed to delivering consistent, high-quality service with integrity and discretion. Our goal
                is to allow you to focus on what matters most while we take care of your safety and cleanliness. With
                us, you can have complete peace of mind knowing that your property is secure, well-maintained, and
                professionally managed at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
