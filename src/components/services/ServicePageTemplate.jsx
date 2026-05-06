import { useState } from 'react';
import ReviewsSection from '../ReviewsSection';
import AwardsSection from '../AwardsSection';

const ServicePageTemplate = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', message: '' }); }, 4000);
  };

  const inputStyle = { background: 'transparent', borderBottom: '1px solid #ddd', color: '#1a1a1a', fontSize: '0.85rem', outline: 'none', boxShadow: 'none' };

  return (
    <div>
      {/* ════════════ HERO ════════════ */}
      <section className="d-flex align-items-center position-relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="d-inline-block rounded-pill px-3 py-1 mb-4" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)', fontSize: '0.78rem', color: '#a500fd', fontWeight: 600 }}>{config.badge}</span>

              <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
                {config.heroTitle}{' '}
                <span className="hero-gradient-text fst-italic fw-normal">{config.heroHighlight}</span>
              </h1>

              <p className="text-secondary fs-5 mb-4" style={{ maxWidth: 540, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: config.heroDescription }} />

              <div className="d-flex flex-wrap gap-3">
                <a href="#cta" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none">Get Started</a>
                <a href="#services" className="btn rounded-pill px-5 py-3 fw-medium text-white text-decoration-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(165,0,253,0.3)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >Learn More ↓</a>
              </div>
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {config.stats.map((s, i) => (
                  <div key={i} className="rounded-4 p-4 text-center glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="fw-bold mb-1 hero-gradient-text" style={{ fontSize: '1.8rem' }}>{s.value}</div>
                    <div className="text-secondary" style={{ fontSize: '0.78rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services">
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>What We Offer</span>
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Our <span className="hero-gradient-text fst-italic">{config.title}</span> Services</h2>
          </div>

          <div className="row g-4">
            {config.services.map((svc, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="rounded-4 p-4 h-100 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1rem' }}>{svc.title}</h5>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Our Process</span>
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>How We <span className="hero-gradient-text fst-italic">Work</span></h2>
          </div>

          <div className="row g-4">
            {config.process.map((step, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="rounded-4 p-4 h-100 position-relative glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="fw-bold d-block mb-3" style={{ color: 'rgba(165,0,253,0.4)', fontSize: '2rem', fontFamily: 'monospace' }}>0{i + 1}</span>
                  <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1.05rem' }}>{step.title}</h5>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{step.desc}</p>
                  {i < 3 && <div className="d-none d-lg-block position-absolute" style={{ right: -20, top: '50%', transform: 'translateY(-50%)', color: 'rgba(165,0,253,0.25)', fontSize: '1.5rem', fontWeight: 'bold' }}>→</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY US ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Why Choose Us</span>
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Why Choose <span className="hero-gradient-text fst-italic">Us</span></h2>
          </div>

          <div className="row g-4">
            {config.whyUs.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="rounded-4 p-4 h-100" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(165,0,253,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1rem' }}>{item.title}</h5>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ REVIEWS & AWARDS ════════════ */}
      <div className="container"><hr className="premium-divider" /></div>
      <ReviewsSection />
      <AwardsSection />

      {/* ════════════ FAQ ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>FAQ</span>
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Frequently <span className="hero-gradient-text fst-italic">Asked</span></h2>
          </div>

          <div className="mx-auto" style={{ maxWidth: 720 }}>
            {config.faqs.map((faq, i) => (
              <div key={i} className="rounded-4 mb-3 overflow-hidden" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s', borderColor: openFaq === i ? 'rgba(165,0,253,0.3)' : 'rgba(255,255,255,0.06)' }}>
                <button className="w-100 d-flex justify-content-between align-items-center p-4 border-0 bg-transparent text-start" style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span style={{ color: '#a500fd', fontSize: '1.2rem', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: 12 }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, padding 0.35s ease', padding: openFaq === i ? '0 1.5rem 1.25rem' : '0 1.5rem' }}>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section id="cta">
        <div className="container">
          <hr className="premium-divider" />
          <div className="row g-5 align-items-start pt-4">
            <div className="col-lg-5">
              <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Get Started</span>
              <h2 className="display-6 fw-bold text-white mb-4 fst-italic" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>Ready to Grow with {config.title}?</h2>
              <p className="text-secondary mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>Tell us about your goals and our team will craft a custom {config.title.toLowerCase()} strategy tailored to your business.</p>
              <div className="d-flex flex-column gap-3">
                {["Free strategy consultation", "Custom proposal within 48hrs", "No lock-in contracts", "Dedicated account manager"].map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <span style={{ color: '#a500fd', fontSize: '0.8rem' }}>&#10003;</span>
                    <span className="text-secondary" style={{ fontSize: '0.85rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="rounded-4 p-4 p-lg-5" style={{ background: '#ffffff', color: '#1a1a1a' }}>
                <h3 className="text-center fw-bold fs-5 mb-2" style={{ color: '#1a1a1a', letterSpacing: '1px' }}>GET A FREE PROPOSAL</h3>
                <p className="text-center small mb-4" style={{ color: '#888', fontSize: '0.75rem' }}>Fill in the details and we will get back to you within 24 hours</p>

                {submitted ? (
                  <div className="text-center py-5">
                    <div style={{ fontSize: '2rem', marginBottom: 12, color: '#a500fd' }}>&#10003;</div>
                    <h4 className="fw-bold" style={{ color: '#1a1a1a' }}>Request Received!</h4>
                    <p style={{ color: '#666', fontSize: '0.85rem' }}>Our team will reach out within 24 hours with your custom proposal.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {[
                      { name: 'name', placeholder: 'Full Name*', type: 'text' },
                      { name: 'email', placeholder: 'Work Email*', type: 'email' },
                      { name: 'company', placeholder: 'Company / Website', type: 'text' },
                    ].map((field) => (
                      <div key={field.name} className="mb-3">
                        <input type={field.type} className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder={field.placeholder} required={field.placeholder.includes('*')} value={formData[field.name]} onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })} style={inputStyle} />
                      </div>
                    ))}
                    <div className="mb-4">
                      <textarea className="form-control border-0 border-bottom rounded-0 px-0 py-2" rows="2" placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn w-100 rounded-pill py-3 fw-bold text-white mb-3" style={{ background: '#a500fd', border: 'none', fontSize: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(165,0,253,0.4)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >Get My Free Proposal</button>
                    <p className="text-center mb-0" style={{ color: '#999', fontSize: '0.7rem' }}>By submitting, you agree to our <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Privacy Policy</a>.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
