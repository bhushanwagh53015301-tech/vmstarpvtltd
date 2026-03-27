import { Leaf, Heart, Scale, ShieldCheck, Recycle, Zap, Users, FileCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import iso14001 from '@/assets/certifications/ISO 14001  2015.jpg.jpeg';
import iso45001 from '@/assets/certifications/ISO 45001 2018 OHSAS.jpg.jpeg';
import iso9001 from '@/assets/certifications/ISO 9001  2015.jpg.jpeg';
import iso27001 from '@/assets/certifications/ISO IEC 27001  2022.jpg.jpeg';
import psara from '@/assets/certifications/PASARA lin.jpg.jpeg';
import udyam from '@/assets/certifications/Udyam Aadhar.jpg.jpeg';

const ESG = () => {
  const { t } = useLanguage();
  useScrollAnimation({ blur: false });

  const pillars = [
    {
      title: t.esg.environment,
      icon: Leaf,
      color: 'gradient-emerald',
      items: [
        { icon: Recycle, label: 'Eco-friendly cleaning products' },
        { icon: Zap, label: 'Energy-efficient operations' },
        { icon: Leaf, label: 'Waste reduction practices' },
      ],
    },
    {
      title: t.esg.social,
      icon: Heart,
      color: 'gradient-accent',
      items: [
        { icon: Users, label: 'Employee welfare programs' },
        { icon: ShieldCheck, label: 'Fair wages & benefits' },
        { icon: Heart, label: 'Community engagement' },
      ],
    },
    {
      title: t.esg.governance,
      icon: Scale,
      color: 'gradient-navy',
      items: [
        { icon: FileCheck, label: 'ISO certified operations' },
        { icon: Scale, label: 'PSARA compliance' },
        { icon: ShieldCheck, label: 'Transparent reporting' },
      ],
    },
  ];

  const safetyItems = [
    'Regular EHS training for all staff',
    'Safety audits and inspections',
    'Emergency response protocols',
    'PPE compliance for all workers',
    'Incident reporting & analysis',
    'OHSAS 45001 certified practices',
  ];

  const certificates = [
    { src: psara, label: 'PSARA License' },
    { src: iso9001, label: 'ISO 9001:2015' },
    { src: iso14001, label: 'ISO 14001:2015' },
    { src: iso27001, label: 'ISO IEC 27001:2022' },
    { src: iso45001, label: 'ISO 45001:2018 OHSAS' },
    { src: udyam, label: 'Udyam Aadhar' },
  ];

  return (
    <Layout>
      <Seo
        title="ESG & Safety Commitment | VM Star Private Limited"
        description="Our ESG and safety practices include eco-friendly operations, workforce care, and strict compliance across Maharashtra."
      />
      <section className="gradient-navy px-4">
        <div className="container-custom min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">{t.esg.title}</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t.esg.subtitle}</p>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-8 stagger-grid animate-on-scroll">
          {pillars.map((pillar, i) => (
            <div key={i} className="animate-on-scroll bg-card rounded-xl border border-border overflow-hidden card-hover" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`${pillar.color} p-6`}>
                <pillar.icon className="w-10 h-10 text-primary-foreground mb-3" />
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{pillar.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                {pillar.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12 animate-on-scroll">
            <ShieldCheck className="inline w-8 h-8 mr-2 text-accent" />
            {t.esg.safety}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto stagger-grid animate-on-scroll">
            {safetyItems.map((item, i) => (
              <div key={i} className="animate-on-scroll flex items-center gap-3 bg-background rounded-lg p-4 border border-border card-hover" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-6">Certificates</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid animate-on-scroll">
              {certificates.map((cert, i) => (
                <div key={i} className="bg-background rounded-xl border border-border overflow-hidden card-hover">
                  <img
                    src={cert.src}
                    alt={cert.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 md:h-80 object-contain bg-white"
                  />
                  <div className="p-4 text-center text-sm font-medium text-foreground">{cert.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ESG;
