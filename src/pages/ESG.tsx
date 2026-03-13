import { Leaf, Heart, Scale, ShieldCheck, Recycle, Zap, Users, FileCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';

const ESG = () => {
  const { t } = useLanguage();
  useScrollAnimation();

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

  return (
    <Layout>
      <section className="gradient-navy pt-32 pb-20 px-4">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">{t.esg.title}</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t.esg.subtitle}</p>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-8">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {safetyItems.map((item, i) => (
              <div key={i} className="animate-on-scroll flex items-center gap-3 bg-background rounded-lg p-4 border border-border card-hover" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ESG;
