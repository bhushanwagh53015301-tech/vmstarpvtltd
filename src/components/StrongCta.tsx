import { Link, useLocation } from 'react-router-dom';

const StrongCta = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-background px-6 py-7 md:px-12 md:py-14 shadow-[0_30px_80px_-50px_rgba(13,31,51,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_rgba(255,255,255,0)_55%),linear-gradient(135deg,_rgba(13,31,51,0.12),_rgba(13,31,51,0))]" />
          <div className="absolute -top-16 right-10 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="absolute -bottom-20 left-8 h-60 w-60 rounded-full bg-orange-400/15 blur-3xl" />
          <div className="relative z-10 mb-3 inline-flex rounded-full border border-foreground/15 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-muted-foreground md:absolute md:right-8 md:top-8 md:mb-0 md:text-xs md:tracking-[0.2em]">
            Fast Response
          </div>
          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] leading-relaxed text-muted-foreground">Ready to Secure Your Site?</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:mt-4 md:text-4xl">
                Get a tailored plan with pricing, staffing, and compliance support.
              </h2>
              <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
                Share your site requirements and we will respond with a service blueprint and staffing plan within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {['PSARA Licensed', 'ISO Certified', 'On-site Supervisors'].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-muted/60 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:justify-self-end">
              <Link
                to="/contact#quote-form"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-[1.02]"
              >
                Get Free Consultation in 24 Hours
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-foreground text-background font-semibold hover:opacity-90"
              >
                Call Expert Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrongCta;
