import { useState } from 'react';
import ReviewsSection from '../components/ReviewsSection';

const expertise = [
  {
    icon: '📱',
    title: 'Mobile Usability Audit',
    desc: 'We start by evaluating your website\'s mobile layout, touch elements, and overall usability to ensure an optimal experience across all smartphone and tablet devices.',
  },
  {
    icon: '⚡',
    title: 'Page Speed Optimization',
    desc: 'Mobile users expect lightning-fast load times. We optimize images, minify code, and leverage browser caching to drastically reduce your mobile page load speed.',
  },
  {
    icon: '🔍',
    title: 'Mobile-First Indexing',
    desc: 'We structure your site\'s content and metadata to align perfectly with Google\'s mobile-first indexing algorithms, ensuring maximum SERP visibility.',
  },
  {
    icon: '📍',
    title: 'Local SEO Integration',
    desc: 'Since most mobile searches have local intent, we integrate mobile SEO with local search strategies to capture "near me" traffic and drive footfall.',
  },
  {
    icon: '🎯',
    title: 'Mobile UI/UX Refinement',
    desc: 'We analyze user behavior to eliminate frustrating pop-ups, fix unclickable elements, and streamline the mobile conversion funnel for higher sales.',
  },
  {
    icon: '📈',
    title: 'Performance Tracking',
    desc: 'We constantly monitor your mobile search rankings, organic mobile traffic, and user engagement metrics, making data-driven iterations to improve results.',
  },
];

const faqs = [
  {
    q: 'What is Mobile SEO?',
    a: 'Mobile SEO is the practice of optimizing your website for users on smartphones and tablets. It ensures your site looks great, functions flawlessly, and ranks high in search engine results when users search from mobile devices.',
  },
  {
    q: 'Why is Mobile SEO so important?',
    a: 'With over 60% of global web traffic coming from mobile devices, and Google using mobile-first indexing, having a mobile-optimized site is no longer optional. Without it, you lose rankings, traffic, and potential customers.',
  },
  {
    q: 'What does "Mobile-First Indexing" mean?',
    a: 'Mobile-first indexing means Google predominantly uses the mobile version of the content for indexing and ranking. If your site isn\'t optimized for mobile, your desktop rankings will also suffer.',
  },
  {
    q: 'How do you improve mobile page speed?',
    a: 'We improve speed by optimizing server response times, compressing images, minifying CSS and JavaScript, eliminating render-blocking resources, and utilizing Content Delivery Networks (CDNs).',
  },
  {
    q: 'Will Mobile SEO increase my conversion rate?',
    a: 'Absolutely. A frustrating mobile experience drives users to your competitors. By streamlining navigation, improving load times, and making checkout processes seamless on mobile, conversion rates naturally increase.',
  },
];

const MobileSEOPage = () => {
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
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', top: '-10%', right: '-5%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(165,0,253,0.1) 0%, transparent 70%)', bottom: '0%', left: '-5%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-start g-5">
            {/* Left - Content */}
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold text-white mb-4" style={{ lineHeight: 1.1, letterSpacing: '-1px' }}>
                Dominate the Small Screen with <span className="hero-gradient-text">Mobile SEO</span>
              </h1>

              <p className="text-secondary mb-4" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                Did you know that over 60% of all online searches now happen on a mobile device? If your website isn't fully optimized for smartphones and tablets, you are invisible to the majority of your target audience.
              </p>

              <p className="text-secondary mb-5" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                With Google's mobile-first indexing, your mobile experience dictates your overall search engine ranking. TechGeekz delivers cutting-edge Mobile SEO services designed to increase site speed, enhance mobile user experience, and drive high-converting traffic directly to the palm of your customers' hands.
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
                        <option value="mobile-seo" style={{ background: '#1a1a2e' }}>Mobile SEO</option>
                        <option value="ecommerce-seo" style={{ background: '#1a1a2e' }}>E-commerce SEO</option>
                        <option value="local-seo" style={{ background: '#1a1a2e' }}>Local SEO</option>
                        <option value="international-seo" style={{ background: '#1a1a2e' }}>International SEO</option>
                        <option value="seo" style={{ background: '#1a1a2e' }}>General SEO</option>
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
                <img src="/images/mobile-seo-illustration.png" alt="Mobile SEO Services Illustration" className="img-fluid" style={{ maxHeight: 380 }} />
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-lg-7">
              <h2 className="display-6 fw-bold text-white mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                Why Choose <span className="hero-gradient-text fst-italic">TechGeekz?</span>
              </h2>
              <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                TechGeekz is an elite SEO agency with deep expertise in mobile search algorithms. We don't just shrink your desktop site to fit a smaller screen; we re-engineer the mobile user journey. From resolving complex Core Web Vitals issues to ensuring perfect mobile responsive design, our team has a proven track record of boosting mobile rankings across diverse industries.
              </p>
              <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                Our Mobile SEO services are engineered to capture high-intent users on the go. Whether your audience is searching for local services, shopping online, or consuming content, we ensure your mobile presence is fast, flawless, and favored by search engines. Choose TechGeekz to turn smartphone users into loyal customers!
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
            <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px', maxWidth: 800, margin: '0 auto' }}>
              Advantages of <span className="hero-gradient-text fst-italic">Mobile SEO</span>
            </h2>
            <p className="text-secondary mt-3 mx-auto" style={{ fontSize: '0.95rem', maxWidth: 800 }}>
              Mobile optimization is the foundation of modern digital marketing. Discover the key benefits of aligning your website with mobile-first standards.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {[
              {
                icon: '📈',
                title: 'Higher Search Engine Rankings',
                desc: 'Because search engines prioritize mobile-friendly sites, optimizing your mobile experience directly improves your overall domain authority and ranking across all devices.',
              },
              {
                icon: '⚡',
                title: 'Reduced Bounce Rates',
                desc: 'Fast-loading, easy-to-navigate mobile pages prevent users from leaving your site in frustration, drastically lowering your bounce rate and increasing time on site.',
              },
              {
                icon: '🤝',
                title: 'Improved Brand Perception',
                desc: 'A seamless mobile interface builds trust. Users are far more likely to return to and recommend a business that provides a modern, frictionless mobile browsing experience.',
              },
              {
                icon: '💰',
                title: 'Increased Mobile Conversions',
                desc: 'By streamlining mobile checkout flows and touch targets, we remove the friction that stops smartphone users from buying, leading to significant revenue growth.',
              },
            ].map((card, i) => (
              <div key={i} className="col-lg-6 col-md-6">
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
                  <div className="advantage-hover" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, #a500fd, #7b00bd)', borderRadius: 'inherit', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="text-white mb-0" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{card.desc}</p>
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
                <h2 className="display-6 fw-bold text-white mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                  Our Mobile <span className="hero-gradient-text fst-italic">SEO Process</span>
                </h2>
                <p className="text-secondary mb-3" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  We deploy a meticulous, technical approach to ensure your website excels in a mobile-first world.
                </p>
                <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                  From fixing Core Web Vitals to redesigning touch interfaces, our comprehensive methodology guarantees your business captures and converts mobile search traffic effectively.
                </p>
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
                    {[1,2,3,4,5].map(s => (
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
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="d-flex gap-1 mb-3">
                      {[1,2,3,4,5].map(s => (
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
              Ready to dominate the <span className="hero-gradient-text">small screen?</span>
            </h2>
            <p className="text-secondary mx-auto mb-5" style={{ maxWidth: 600, fontSize: '0.95rem', lineHeight: 1.7 }}>
              Let's work together to boost your mobile visibility, drive high-intent mobile users, and grow your revenue on the go.
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

export default MobileSEOPage;
