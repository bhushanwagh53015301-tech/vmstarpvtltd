import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { serviceCategoryMap } from '@/lib/serviceCategories';

const ServiceCategory = () => {
  useScrollAnimation();
  const { slug } = useParams();
  const service = slug ? serviceCategoryMap[slug] : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      <section className="gradient-navy pt-32 pb-20 px-4">
        <div className="container-custom">
          <div className="text-primary-foreground/70 text-sm flex items-center gap-2 mb-5">
            <Link to="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>{service.title}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {service.title}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl">{service.summary}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl space-y-8">
          <div className="animate-on-scroll bg-card rounded-2xl border border-border p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-on-scroll bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Key Highlights</h3>
              <div className="space-y-3">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll bg-card rounded-2xl border border-border p-6" style={{ transitionDelay: '0.08s' }}>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Service Scope</h3>
              <div className="space-y-3">
                {service.scope.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll bg-card rounded-2xl border border-border p-6 md:col-span-2 lg:col-span-1" style={{ transitionDelay: '0.16s' }}>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Ideal For</h3>
              <div className="space-y-3">
                {service.industries.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll rounded-2xl p-1 gradient-emerald">
            <div className="rounded-[calc(var(--radius)+6px)] bg-card p-8 border border-border/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Need this service at your site?</h3>
                <p className="text-muted-foreground">We can customize scope, staffing, and schedules for your exact requirements.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold whitespace-nowrap"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCategory;
