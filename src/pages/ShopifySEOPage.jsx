import { useState } from 'react';
import ReviewsSection from '../components/ReviewsSection';

const expertise = [
  { title: 'Shopify Store Technical Audit', desc: 'We perform a complete technical audit of your Shopify store to identify SEO issues affecting your rankings and user experience. As experts in Shopify SEO services in Surat, we analyze theme code, site structure, duplicate content issues, slow-loading apps, and URL optimization to improve your store performance. Our technical expertise in Shopify website development in Surat ensures your store follows SEO best practices and delivers a smooth shopping experience.' },
  { title: 'Product Page Optimization', desc: 'Our team optimizes your product titles, descriptions, images, URLs, and meta tags using high-intent buyer keywords. Through our professional Shopify SEO in Surat services, we help increase product visibility, improve click-through rates, and drive more conversions from organic search traffic.' },
  { title: 'Collection & Category SEO', desc: 'We optimize Shopify collection pages and category structures using keyword-rich content, proper hierarchy, and internal linking strategies. As a trusted provider of Shopify SEO services in Surat, we help your store capture valuable category-level traffic and improve search engine indexing for your products.' },
  { title: 'Shopify App & Speed Optimization', desc: 'Slow websites negatively impact both SEO and conversions. Our Shopify experts audit your installed apps, remove unnecessary code, optimize images, and implement advanced speed optimization techniques to improve page load performance. As specialists in Shopify website development in Surat, we ensure your Shopify store is fast, responsive, and optimized for better rankings and user experience.' },
  { title: 'Schema & Rich Snippets', desc: 'We implement advanced product schema markup, breadcrumb schema, and review snippets to help your Shopify products appear with rich results on Google search pages. Our expert Shopify SEO in Surat services improve search visibility, increase click-through rates, and enhance your store presence in search results. With TechGeekz, your Shopify store gets complete SEO optimization and technical improvements designed to increase organic traffic, improve rankings, and maximize online revenue.' },
];

const faqs = [
  { q: 'What is Shopify SEO?', a: 'Shopify SEO is the process of optimizing your Shopify store to rank higher in search engines. It addresses Shopify-specific challenges like duplicate content from collections, URL structures, and theme optimization.' },
  { q: 'Can Shopify stores rank well on Google?', a: 'Absolutely. With proper SEO optimization, Shopify stores can rank just as well as any other platform. The key is addressing Shopify-specific technical issues and optimizing product and collection pages properly.' },
  { q: 'What Shopify SEO issues do you fix?', a: 'We fix duplicate content from collections and tags, optimize slow-loading themes, configure proper URL structures, implement schema markup for products, and optimize product descriptions for target keywords.' },
  { q: 'Do I need to change my Shopify theme for SEO?', a: 'Not necessarily. We can optimize most Shopify themes for SEO. However, if your theme has significant performance issues or poor code quality, we may recommend a theme upgrade for best results.' },
  { q: 'How long until my Shopify store ranks?', a: 'Results vary based on competition and current site health. Most Shopify stores see measurable ranking improvements within 3-6 months of implementing our SEO recommendations.' },
];



const ShopifySEOPage = () => {
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
                <span className="hero-gradient-text">Shopify SEO</span> Services
              </h1>

              <p className="text-secondary mb-4" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                Is your Shopify store struggling to appear on Google search results? Our professional Shopify SEO services in Surat help optimize every aspect of your online store to increase organic traffic, improve visibility, and boost sales without depending only on paid ads. At TechGeekz, we provide advanced Shopify SEO strategies designed to help your store rank higher for the keywords your customers are actively searching for.
              </p>

              <p className="text-secondary mb-5" style={{ maxWidth: 580, lineHeight: 1.8, fontSize: '1rem' }}>
                As a trusted provider of Shopify SEO in Surat, our expert team understands the Shopify platform inside out, from theme optimization and technical SEO to app performance and product page optimization. Along with SEO, we also specialize in Shopify website development in Surat, helping businesses build fast, responsive, and SEO-friendly Shopify stores that deliver excellent user experience and higher conversions.
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
                        <option value="shopify-seo" style={{ background: '#1a1a2e' }}>Shopify SEO Services</option>
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
                <img src="/images/shopify-seo-illustration.png" alt="Shopify SEO Services Illustration" className="img-fluid" style={{ maxHeight: 380 }} />
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-lg-7">
              <h2 className="display-6 fw-bold text-white mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
                Why Choose TechGeekz for{' '}
                <span className="hero-gradient-text fst-italic">Shopify SEO</span> Services?
              </h2>
              <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                TechGeekz specializes in platform-specific SEO strategies designed exclusively for Shopify stores. As a trusted provider of Shopify SEO services in Surat, we focus on solving common Shopify SEO challenges such as duplicate content issues, collection page optimization, technical SEO problems, and schema markup implementation.
              </p>
              <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                Our experienced SEO experts create customized Shopify SEO strategies that improve your website structure, search engine visibility, and overall store performance. Whether you are launching a new Shopify store or scaling an existing eCommerce business, our professional Shopify SEO in Surat services help your store achieve better rankings, increased traffic, and long-term growth.
              </p>
              <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                As experts in Shopify website development in Surat, we ensure your Shopify store is fully optimized for both search engines and customers, helping you maximize your online sales potential.
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
              Advantages of Our <span className="hero-gradient-text fst-italic">Shopify SEO Services</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: null,
                title: 'Increase Organic Store Traffic',
                desc: 'Our expert Shopify SEO services in Surat help your product pages and collection pages rank higher in search engine results. By optimizing your Shopify store with targeted keywords, SEO-friendly content, and proper technical structure, we help attract a steady stream of shoppers who are actively searching for products like yours.',
              },
              {
                icon: null,
                title: 'Reduce Dependency on Paid Ads',
                desc: 'Strong organic rankings allow your Shopify store to generate consistent traffic without relying heavily on paid advertising campaigns. Our professional Shopify SEO services in Surat help businesses reduce advertising costs while maintaining stable traffic and conversions through organic search results.',
              },
              {
                icon: null,
                title: 'Higher Conversion Rates',
                desc: 'SEO-optimized product pages improve both search visibility and user experience, leading to better conversion rates. Our expert Shopify SEO in Surat services focus on creating compelling product descriptions, optimized titles, fast-loading pages, and proper website structure that encourage visitors to become paying customers.',
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
                  <span className="hero-gradient-text fst-italic">Shopify SEO</span> Services
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

export default ShopifySEOPage;
