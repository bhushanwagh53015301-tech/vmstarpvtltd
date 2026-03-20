import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

const Contact = () => {
  const { t } = useLanguage();
  useScrollAnimation({ blur: false });

  const [form, setForm] = useState({
    name: '',
    mobileNumber: '',
    companyName: '',
    location: '',
    serviceType: '',
    guardsRequired: '',
    serviceDuration: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: '',
    address: '',
    role: '',
    phoneNumber: '',
    age: '',
  });
  const [joinErrors, setJoinErrors] = useState<Record<string, string>>({});
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [isJoinSubmitting, setIsJoinSubmitting] = useState(false);

  const whatsappNumber = '917844864486';
  const quoteFormEndpoint =
    'https://script.google.com/macros/s/AKfycbxFpSgi4t3J9sBeVus-Rr44ylZVAy7Pa0uPHcJmMjsBf7swkssamKP-oRLZe5jUgqGa7Q/exec';
  const joinFormEndpoint =
    'https://script.google.com/macros/s/AKfycbwUSWWyIQKc3rHYLLa4YDymb3f2gmxCcMtsd2R61NLpz8SYRv3UeRdumKED1RWA3Jo/exec';

  const openWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!/^[0-9]{10}$/.test(form.mobileNumber)) errs.mobileNumber = 'Enter a valid 10-digit mobile number';
    if (!form.companyName.trim()) errs.companyName = 'Required';
    if (!form.location.trim()) errs.location = 'Required';
    if (!form.serviceType.trim()) errs.serviceType = 'Required';
    if (!form.guardsRequired.trim() || Number(form.guardsRequired) < 1) errs.guardsRequired = 'Enter a valid number';
    if (!form.serviceDuration.trim()) errs.serviceDuration = 'Required';
    if (!form.message.trim()) errs.message = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const quoteBody = new URLSearchParams({
          name: form.name,
          mobileNumber: form.mobileNumber,
          companyName: form.companyName,
          location: form.location,
          serviceType: form.serviceType,
          guardsRequired: form.guardsRequired,
          serviceDuration: form.serviceDuration,
          message: form.message,
        });

        await fetch(quoteFormEndpoint, {
          method: 'POST',
          body: quoteBody,
          mode: 'no-cors',
        });

        setSubmitted(true);
        setForm({
          name: '',
          mobileNumber: '',
          companyName: '',
          location: '',
          serviceType: '',
          guardsRequired: '',
          serviceDuration: '',
          message: '',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validateJoinForm = () => {
    const errs: Record<string, string> = {};
    if (!joinForm.name.trim()) errs.name = 'आवश्यक आहे';
    if (!joinForm.address.trim()) errs.address = 'आवश्यक आहे';
    if (!/^[0-9]{10}$/.test(joinForm.phoneNumber)) errs.phoneNumber = '१० अंकी योग्य मोबाईल नंबर टाका';
    if (!joinForm.age.trim() || Number(joinForm.age) < 18 || Number(joinForm.age) > 100) errs.age = 'योग्य वय टाका (18-100)';
    setJoinErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleJoinSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateJoinForm()) {
      setIsJoinSubmitting(true);
      try {
        const joinBody = new URLSearchParams({
          name: joinForm.name,
          address: joinForm.address,
          role: joinForm.role,
          phoneNumber: joinForm.phoneNumber,
          age: joinForm.age,
        });

        await fetch(joinFormEndpoint, {
          method: 'POST',
          body: joinBody,
          mode: 'no-cors',
        });

        setJoinSubmitted(true);
        setJoinForm({
          name: '',
          address: '',
          role: '',
          phoneNumber: '',
          age: '',
        });
      } finally {
        setIsJoinSubmitting(false);
      }
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact VM Star Private Limited | Get a Quote"
        description="Request a consultation for security, housekeeping, manpower or bouncer services across Maharashtra."
      />
      <section className="gradient-navy px-4">
        <div className="container-custom min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center">
          <div className="translate-y-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">{t.contact.title}</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll space-y-6">
            <div id="quote-form" className="scroll-mt-32">
              {joinSubmitted ? (
                <div className="bg-secondary/10 border border-secondary rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">फॉर्म यशस्वीरित्या सबमिट झाला</h3>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5">
                  <h3 className="font-heading text-2xl font-bold text-foreground">जॉइन होण्यासाठी फॉर्म</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">नाव *</label>
                      <input
                        type="text"
                        value={joinForm.name}
                        onChange={e => setJoinForm(p => ({ ...p, name: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-lg border ${joinErrors.name ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                      />
                      {joinErrors.name && <span className="text-xs text-destructive mt-1">{joinErrors.name}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">पत्ता *</label>
                      <input
                        type="text"
                        value={joinForm.address}
                        onChange={e => setJoinForm(p => ({ ...p, address: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-lg border ${joinErrors.address ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                      />
                      {joinErrors.address && <span className="text-xs text-destructive mt-1">{joinErrors.address}</span>}
                    </div>
                    
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-1.5">Position Applied For *</label>
                      <select
                        value={joinForm.role}
                        onChange={e => setJoinForm(p => ({ ...p, role: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-lg border ${joinErrors.role ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                      >
                        <option value="">Select a role</option>
                        <option value="Housekeeping">Housekeeping</option>
                        <option value="Ward Boy">Ward Boy</option>
                        <option value="Ward Mavshi">Ward Mavshi</option>
                        <option value="Security Guard">Security Guard</option>
                      </select>
                      {joinErrors.role && <span className="text-xs text-destructive mt-1">{joinErrors.role}</span>}
                    </div>

                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">मोबाईल नंबर *</label>
                      <input
                        type="tel"
                        value={joinForm.phoneNumber}
                        onChange={e => {
                          const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setJoinForm(p => ({ ...p, phoneNumber: digitsOnly }));
                        }}
                        inputMode="numeric"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-lg border ${joinErrors.phoneNumber ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                      />
                      {joinErrors.phoneNumber && <span className="text-xs text-destructive mt-1">{joinErrors.phoneNumber}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">वय *</label>
                      <input
                        type="number"
                        min="18"
                        max="100"
                        value={joinForm.age}
                        onChange={e => setJoinForm(p => ({ ...p, age: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-lg border ${joinErrors.age ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                      />
                      {joinErrors.age && <span className="text-xs text-destructive mt-1">{joinErrors.age}</span>}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isJoinSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    सबमिट करा
                  </button>
                </form>
              )}
            </div>

            {submitted ? (
              <div className="bg-secondary/10 border border-secondary rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{t.contact.success}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5">
                <h3 className="font-heading text-2xl font-bold text-foreground">Get a Quote</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.name && <span className="text-xs text-destructive mt-1">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      value={form.mobileNumber}
                      onChange={e => {
                        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setForm(p => ({ ...p, mobileNumber: digitsOnly }));
                      }}
                      inputMode="numeric"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.mobileNumber ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.mobileNumber && <span className="text-xs text-destructive mt-1">{errors.mobileNumber}</span>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={e => setForm(p => ({ ...p, companyName: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.companyName ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.companyName && <span className="text-xs text-destructive mt-1">{errors.companyName}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.location && <span className="text-xs text-destructive mt-1">{errors.location}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Type *</label>
                  <select
                    value={form.serviceType}
                    onChange={e => setForm(p => ({ ...p, serviceType: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.serviceType ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                  >
                    <option value="">Select a service</option>
                    <option value="Security">Security</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Bouncer">Bouncer</option>
                  </select>
                  {errors.serviceType && <span className="text-xs text-destructive mt-1">{errors.serviceType}</span>}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Number of Guards Required</label>
                    <input
                      type="number"
                      min="1"
                      value={form.guardsRequired}
                      onChange={e => setForm(p => ({ ...p, guardsRequired: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.guardsRequired ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.guardsRequired && <span className="text-xs text-destructive mt-1">{errors.guardsRequired}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Date</label>
                    <input
                      type="date"
                      value={form.serviceDuration}
                      onChange={e => setForm(p => ({ ...p, serviceDuration: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.serviceDuration ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
                    />
                    {errors.serviceDuration && <span className="text-xs text-destructive mt-1">{errors.serviceDuration}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-destructive' : 'border-border'} bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none`}
                  />
                  {errors.message && <span className="text-xs text-destructive mt-1">{errors.message}</span>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg gradient-accent text-accent-foreground font-semibold btn-glow transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : t.contact.send}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">{t.contact.address}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Plot No. 3, Group No. 139/P, Flat No. 01, Srinivas Residency, Chhatrapati Nagar, Beed By Pass, Devlai Area, Chhatrapati Sambhajinagar</span>
                </div>
                <a href="tel:+917844864486" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" /> +91 7844864486
                </a>
                <a href="tel:+919511935264" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" /> +91 9511935264
                </a>
                <a href="mailto:vmstarpvtltd@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" /> vmstarpvtltd@gmail.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1773739580965!6m8!1m7!1sBO0Jy4cw1_aQHjC-OOz8_g!2m2!1d19.84785033320317!2d75.35092994026054!3f310.41!4f-5.590000000000003!5f1.1924812503605782"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VM Star Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
