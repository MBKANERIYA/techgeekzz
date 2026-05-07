import { useState } from 'react';
import ReviewsSection from '../components/ReviewsSection';

const expertise = [
  {
    icon: '🎯',
    title: 'Customized Campaigns Focused on the Audience',
    desc: 'Every website health is unique. We develop highly tailored campaigns based on your location, niche, and target audience to ensure maximum visibility and conversions in your specific service area.',
  },
  {
    icon: '🛡️',
    title: 'White-Hat SEO Practices',
    desc: 'As a Google-recognized agency, we prioritize ethical SEO strategies. We build strong, useful citations and high-quality backlinks that support the development of a powerful local brand identity.',
  },
  {
    icon: '⭐',
    title: 'Enhance Your Local Image',
    desc: 'Ratings and client reviews are essential for website legitimacy. Our team works to enhance your online reputation and solicits authentic feedback to give your business more credibility.',
  },
  {
    icon: '📊',
    title: 'Personalised Reporting',
    desc: 'We provide sophisticated, comprehensive, and easily understandable reports so you stay informed of all developments. Real-time insights help you make necessary adjustments to ongoing campaigns.',
  },
  {
    icon: '🔍',
    title: 'Comprehensive Citation Audit',
    desc: 'Our team performs a thorough citation audit to correct erroneous information across the internet and achieve local search dominance. We ensure NAP consistency across 100+ directories.',
  },
];

const faqs = [
  { q: 'What is White Label SEO?', a: 'White Label SEO lets agencies offer professional SEO services under their own brand without doing the work in-house. We handle all the SEO execution while you present the results to your clients as your own.' },
  { q: 'Will my clients know about TechGeekz?', a: 'Never. All reports, communications, and deliverables are branded with your agency logo and identity. We operate completely behind the scenes as your invisible SEO team.' },
  { q: 'What SEO services can I white label?', a: 'You can white label our full range including technical audits, on-page optimization, content creation, link building, local SEO, and monthly reporting - all under your brand.' },
  { q: 'How does pricing work?', a: 'We offer competitive wholesale pricing that allows you to maintain healthy profit margins. Pricing is based on the scope of services and number of client campaigns.' },
  { q: 'Can I scale up or down easily?', a: 'Absolutely. Our white label infrastructure is built to scale with your agency. You can add or remove client campaigns as needed without long-term commitments.' },
];



const WhiteLabelSEOPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '' }); }, 4000);
  };

  return (
    <div>
      {/* ════════════ HERO ════════════ */}
      <section className="position-relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', top: '-10%', right: '-5%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(165,0,253,0.1) 0%, transparent 70%)', bottom: '0%', left: '-5%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-start g-5">
            {/* Left - Content */}
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold text-white mb-4" style={{ lineHeight: 1.1, letterSpacing: '-1px' }}>
                <span className="hero-gradient-text">White Label SEO</span> Services
              </h1>

              <p className="text-secondary mb-4" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                TechGeekz is one of the best SEO companies, offering expert services to boost your rankings, drive traffic, and grow your online presence. With our White Label SEO services, we promise the best conversion rates possible across all search platforms.
              </p>

              <p className="text-secondary mb-5" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                As a leading <strong className="text-white">White Label SEO Company</strong>, TechGeekz brings together an innovation-led approach and search engine-friendly practices to help your website reach and be found by your target users. Our team of <strong className="text-white">White Label SEO Experts</strong> ensures that your business gains visibility and drives more customers and ultimately revenue.
              </p>

              <a href="#cta" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none d-inline-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                Get In Touch <span>→</span>
              </a>
            </div>

            {/* Right - Contact Form */}
            <div className="col-lg-5">
              <div className="rounded-4 overflow-hidden position-relative" style={{ background: 'linear-gradient(145deg, #15152a, #1a1a35)', border: '1px solid rgba(165,0,253,0.15)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                {/* Purple glow accent */}
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(165,0,253,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                {submitted ? (
                  <div className="text-center p-5">
                    <div style={{ marginBottom: 16 }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#a500fd" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h4 className="fw-bold text-white">Request Received!</h4>
                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Our team will reach out within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-4 p-lg-4">
                    {/* Form Header */}
                    <div className="text-center mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: 44, height: 44, background: 'rgba(165,0,253,0.12)', border: '1px solid rgba(165,0,253,0.25)' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a500fd" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <h4 className="text-white fw-bold mb-1" style={{ fontSize: '1.1rem' }}>Get Free Consultation</h4>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.75rem' }}>We'll get back to you within 24 hours</p>
                    </div>

                    {/* Full Name */}
                    <div className="mb-3">
                      <label className="d-block fw-semibold text-white mb-2" style={{ fontSize: '0.78rem', letterSpacing: '0.3px' }}>Full Name <span style={{ color: '#a500fd' }}>*</span></label>
                      <input type="text" placeholder="Enter your full name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-100 rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(165,0,253,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(165,0,253,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="d-block fw-semibold text-white mb-2" style={{ fontSize: '0.78rem', letterSpacing: '0.3px' }}>Email Address <span style={{ color: '#a500fd' }}>*</span></label>
                      <input type="email" placeholder="Enter your email address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-100 rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(165,0,253,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(165,0,253,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="mb-3">
                      <label className="d-block fw-semibold text-white mb-2" style={{ fontSize: '0.78rem', letterSpacing: '0.3px' }}>Mobile Number</label>
                      <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-100 rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(165,0,253,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(165,0,253,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* I would like to */}
                    <div className="mb-4">
                      <label className="d-block fw-semibold text-white mb-2" style={{ fontSize: '0.78rem', letterSpacing: '0.3px' }}>I would like to</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-100 rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: formData.service ? '#fff' : 'rgba(255,255,255,0.4)', fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease', appearance: 'auto' }}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(165,0,253,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(165,0,253,0.08)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; }}
                      >
                        <option value="" style={{ background: '#1a1a2e' }}>Select a service...</option>
                        <option value="white-label-seo" style={{ background: '#1a1a2e' }}>White Label SEO Services</option>
                        <option value="seo" style={{ background: '#1a1a2e' }}>SEO Service</option>
                        <option value="web-dev" style={{ background: '#1a1a2e' }}>Website Development</option>
                        <option value="digital-marketing" style={{ background: '#1a1a2e' }}>Digital Marketing</option>
                        <option value="ui-ux" style={{ background: '#1a1a2e' }}>UI/UX Designing</option>
                      </select>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn w-100 py-3 fw-bold text-white rounded-3" style={{ background: 'linear-gradient(135deg, #a500fd, #8b00d4)', border: 'none', fontSize: '0.95rem', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(165,0,253,0.25)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(165,0,253,0.4)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(165,0,253,0.25)'; }}
                    >Submit →</button>

                    <p className="text-center text-secondary mt-3 mb-0" style={{ fontSize: '0.68rem' }}>🔒 Your data is secure & will never be shared</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="row align-items-center g-5 pt-4">
            {/* Left - Illustration */}
            <div className="col-lg-5">
              <div className="rounded-4 p-4 text-center" style={{ background: 'rgba(165,0,253,0.03)' }}>
                <img src="/images/white-label-seo-illustration.png" alt="White Label SEO Services Illustration" className="img-fluid" style={{ maxHeight: 380 }} />
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-lg-7">
              <h2 className="display-6 fw-bold text-white mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                Why Choose TechGeekz, for{' '}
                <span className="hero-gradient-text fst-italic">White Label SEO</span> Services?
              </h2>
              <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                TechGeekz is here to assist you with the most advanced SEO solutions available. We will create high-quality local citations to raise your overall SEO health. As one of the most well-known White Label SEO agencies, TechGeekz specializes in both building a strong online presence and listing your company for search performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ ADVANTAGES ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>
              Advantages of our <span className="hero-gradient-text fst-italic">White Label SEO services</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a500fd" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 13l3 3 7-7" />
                    <path d="M3 9h18" />
                    <circle cx="6" cy="6" r="1" fill="#a500fd" />
                    <circle cx="9" cy="6" r="1" fill="#a500fd" />
                  </svg>
                ),
                title: 'Brings more visitors to your website',
                desc: 'With the help of our White Label SEO services for small business, your website will rank higher and receive more visitors from search performance. People rarely care to look at Google\'s second-page results, so if your website is on the first page, you will receive clicks and your website will gain more visibility.',
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a500fd" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.38" />
                    <path d="M17 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                    <path d="M7 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                    <path d="M12 22V12" />
                    <path d="M8 16l4-4 4 4" />
                  </svg>
                ),
                title: 'Aids in attracting actionable insights for your company',
                desc: 'Our White Label SEO strategies target customers who are actively searching for services in your area. By optimizing your Google Business Profile and local listings, we connect your business directly with high-intent local buyers ready to convert.',
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a500fd" strokeWidth="1.5">
                    <rect x="4" y="12" width="4" height="8" rx="1" />
                    <rect x="10" y="8" width="4" height="12" rx="1" />
                    <rect x="16" y="4" width="4" height="16" rx="1" />
                    <circle cx="6" cy="10" r="2" fill="none" stroke="#a500fd" />
                  </svg>
                ),
                title: 'Increases leads and conversions',
                desc: 'White Label SEO drives highly targeted traffic that converts at a much higher rate. When customers find your business at the top of local results, they are more likely to call, visit, or make a purchase — directly boosting your revenue and ROI.',
              },
            ].map((card, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div
                  className="advantage-card rounded-4 p-5 h-100 text-center position-relative overflow-hidden"
                  style={{
                    background: '#12121a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    minHeight: 260,
                  }}
                >
                  {/* Default state - icon + title */}
                  <div className="advantage-default" style={{ transition: 'opacity 0.3s ease' }}>
                    <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4" style={{ width: 80, height: 80, border: '2px solid rgba(165,0,253,0.25)', background: 'rgba(165,0,253,0.05)' }}>
                      <span className="fw-bold" style={{ color: '#a500fd', fontSize: '1.8rem', fontFamily: 'monospace' }}>0{i + 1}</span>
                    </div>
                    <h5 className="text-white fw-bold" style={{ fontSize: '1rem', lineHeight: 1.4 }}>{card.title}</h5>
                  </div>

                  {/* Hover state - description */}
                  <div className="advantage-hover" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, #a500fd, #7b00bd)', borderRadius: 'inherit', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="text-white mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise">
        <div className="container">
          <hr className="premium-divider" />
          <div className="row g-5 pt-4">
            {/* Left - Sticky Heading */}
            <div className="col-lg-4">
              <div style={{ position: 'sticky', top: '120px' }}>
                <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                  Our Expertise in{' '}
                  <span className="hero-gradient-text fst-italic">White Label SEO</span> Services
                </h2>
              </div>
            </div>

            {/* Right - Timeline */}
            <div className="col-lg-8">
              <div className="position-relative" style={{ paddingLeft: 40 }}>
                {/* Vertical line */}
                <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, rgba(165,0,253,0.3), rgba(165,0,253,0.05))' }} />

                {expertise.map((item, i) => (
                  <div key={i} className="position-relative mb-5" style={{ paddingLeft: 30 }}>
                    {/* Circle icon on timeline */}
                    <div className="position-absolute d-flex align-items-center justify-content-center rounded-circle" style={{ left: -40, top: 0, width: 44, height: 44, background: '#0a0a0f', border: '2px solid rgba(165,0,253,0.3)', zIndex: 2 }}>
                      <span style={{ fontSize: '1rem', color: '#a500fd', fontWeight: 'bold', fontFamily: 'monospace' }}>0{i + 1}</span>
                    </div>

                    {/* Content */}
                    <h4 className="text-white fw-bold mb-3" style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                    <p className="text-secondary mb-0" style={{ fontSize: '0.88rem', lineHeight: 1.75 }}>{item.desc}</p>

                    {/* Divider between items */}
                    {i < expertise.length - 1 && (
                      <hr style={{ borderColor: 'rgba(255,255,255,0.05)', marginTop: '2rem' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ REVIEWS ════════════ */}
      <div className="container"><hr className="premium-divider" /></div>
      <ReviewsSection />

      {/* ════════════ OUR WORK ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>
              Our work <span className="hero-gradient-text fst-italic">is in action!</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              { img: '/images/case-studies/navitas-solar.png', name: 'Navitas Solar' },
              { img: '/images/case-studies/maanvi-homes.png', name: 'Maanvi Homes' },
              { img: '/images/case-studies/bubnas-ias.png', name: 'Bubnas IAS' },
              { img: '/images/case-studies/21by72.png', name: '21by72.com' },
              { img: '/images/case-studies/prescient-strategist.png', name: 'Prescient Strategist' },
              { img: '/images/case-studies/vijay-dairy.png', name: 'Vijay Dairy' },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="rounded-4 overflow-hidden h-100" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(165,0,253,0.25)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(165,0,253,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <img src={item.img} alt={item.name} className="w-100" style={{ height: 200, objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: '1rem' }}>{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center mb-5 pt-4">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>FAQ</span>
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Frequently <span className="hero-gradient-text fst-italic">Asked</span></h2>
          </div>

          <div className="mx-auto" style={{ maxWidth: 720 }}>
            {faqs.map((faq, i) => (
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

      {/* ════════════ CLIENT REVIEWS ════════════ */}
      <section>
        <div className="container">
          <hr className="premium-divider" />
          <div className="row align-items-start g-5 pt-4">
            {/* Left - Heading + Company Info */}
            <div className="col-lg-4">
              <h2 className="display-6 fw-bold text-white mb-3" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                What Our Clients <span className="hero-gradient-text fst-italic">Says?</span>
              </h2>
              <p className="text-secondary mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
                TechGeekz is the best SEO service provider, and they said that! Take a look.
              </p>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 48, height: 48, background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#a500fd" stroke="#a500fd" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div>
                  <h5 className="text-white fw-bold mb-0" style={{ fontSize: '0.95rem' }}>TechGeekz - SEO & Web Development</h5>
                  <div className="d-flex align-items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                    <span className="text-secondary ms-1" style={{ fontSize: '0.75rem' }}>102 Google reviews</span>
                  </div>
                </div>
              </div>

              <a href="#" className="btn rounded-pill px-4 py-2 fw-medium text-white text-decoration-none mt-2" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', fontSize: '0.85rem', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#a500fd'; e.currentTarget.style.background = 'rgba(165,0,253,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
              >Write a review</a>
            </div>

            {/* Right - Review Cards */}
            <div className="col-lg-8">
              <div className="d-flex gap-3 overflow-auto pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                {[
                  { name: 'Chemox Pharma', initial: 'C', color: '#ef4444', time: '2 months ago', text: 'We have been taking SEO and website services from TechGeekz for over one year, and the experience has been excellent. Their team has done a great job with SEO and successfully ranked our website on the first page of Google.' },
                  { name: 'Maruti Exim', initial: 'M', color: '#a500fd', time: '2 months ago', text: 'When I met the team from TechGeekz for developing my websites, the experience was excellent. The team clearly understood my requirements and delivered the websites exactly the way I wanted.' },
                  { name: 'Parag Four Pillars', initial: 'P', color: '#3b82f6', time: '3 months ago', text: 'Within 2 months we started getting organic enquiries we never got before. Highly recommend for any business looking for professional website development and SEO services.' },
                  { name: 'Dhruv Singh', initial: 'D', color: '#22c55e', time: '1 month ago', text: 'As a manufacturing company, we never focused much on digital marketing. TechGeekz helped us understand the importance of SEO for B2B growth. They optimized our website and improved keyword rankings.' },
                  { name: 'Pooja Thakar', initial: 'P', color: '#f59e0b', time: '3 months ago', text: 'They redesigned the entire UI/UX, and our enquiry rate literally doubled in the first month. The attention to detail is genuinely impressive.' },
                ].map((review, i) => (
                  <div key={i} className="flex-shrink-0 rounded-4 p-4" style={{ width: 300, background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', scrollSnapAlign: 'start', transition: 'border-color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(165,0,253,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center rounded-circle fw-bold text-white" style={{ width: 36, height: 36, background: review.color, fontSize: '0.85rem' }}>
                          {review.initial}
                        </div>
                        <div>
                          <h6 className="text-white fw-bold mb-0" style={{ fontSize: '0.82rem' }}>{review.name}</h6>
                          <span className="text-secondary" style={{ fontSize: '0.7rem' }}>{review.time}</span>
                        </div>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="d-flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-secondary mb-2" style={{ fontSize: '0.8rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {review.text}
                    </p>
                    <span style={{ color: '#a500fd', fontSize: '0.75rem', cursor: 'pointer' }}>Read more</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section id="cta">
        <div className="container">
          <hr className="premium-divider" />
          <div className="text-center pt-4 pb-5">
            <h2 className="display-5 fw-bold text-white mb-4 fst-italic" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
              Ready to dominate your <span className="hero-gradient-text">website health?</span>
            </h2>
            <p className="text-secondary mx-auto mb-5" style={{ maxWidth: 600, fontSize: '0.95rem', lineHeight: 1.7 }}>
              Let's work together to boost your local visibility, drive more customers, and grow your revenue.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none" style={{ fontSize: '1rem' }}>Work With Us</a>
              <a href="#" className="btn rounded-pill px-5 py-3 fw-medium text-white text-decoration-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(165,0,253,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >Book Intro Call</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelSEOPage;
