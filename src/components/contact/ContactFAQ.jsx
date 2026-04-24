import { useState } from 'react';

const faqs = [
  { q: "What is your typical response time?", a: "We respond to all inquiries within 24 hours during business days. For urgent matters, call us directly or use our live chat." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a complimentary 30-minute strategy call to discuss your goals and explore how we can help. No commitment required." },
  { q: "What is the minimum budget to work with NinjaPromo?", a: "Our subscription plans start at $3,200/month. We also offer custom enterprise packages for larger organizations." },
  { q: "Can I visit your office in person?", a: "Absolutely. We welcome in-person meetings at any of our four global offices. Please schedule in advance so we can prepare for your visit." },
  { q: "Do you work with startups?", a: "Yes! We have dedicated startup packages and have helped 200+ startups scale their marketing from seed to Series C and beyond." },
];

const ContactFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Common Questions</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Before You <span className="hero-gradient-text fst-italic">Reach Out</span></h2>
        </div>

        <div className="mx-auto" style={{ maxWidth: 720 }}>
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-4 mb-3 overflow-hidden" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s', borderColor: openFaq === i ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.06)' }}>
              <button className="w-100 d-flex justify-content-between align-items-center p-4 border-0 bg-transparent text-start" style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span style={{ color: '#8b5cf6', fontSize: '1.2rem', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: 12 }}>+</span>
              </button>
              <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, padding 0.35s ease', padding: openFaq === i ? '0 1.5rem 1.25rem' : '0 1.5rem' }}>
                <p className="text-secondary mb-0" style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
