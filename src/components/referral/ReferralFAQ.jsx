import { useState } from 'react';

const faqs = [
  { q: "How much can I earn per referral?", a: "You earn between 5% and 20% recurring commission depending on your tier. Top partners earn $5,000+ per month." },
  { q: "When do I get paid?", a: "Commissions are paid out within 48 hours of the referred client's first payment. We support PayPal, wire transfer, and crypto." },
  { q: "Is there a limit on referrals?", a: "Absolutely not. The more you refer, the higher your tier and commission rate. There is no cap on earnings." },
  { q: "Do I need to be a current client?", a: "No. Anyone can join our referral program — clients, partners, influencers, or industry professionals." },
  { q: "How long does the referral cookie last?", a: "Our tracking cookie lasts 90 days, so you get credit even if your referral signs up weeks later." },
];

const ReferralFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Got Questions?</span>
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
  );
};

export default ReferralFAQ;
