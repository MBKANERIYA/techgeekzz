const testimonials = [
  { name: "Alex Kim", role: "SaaS Founder", text: "I have earned over $12K in just 4 months. The program is incredibly transparent and payouts are lightning fast.", avatar: "AK" },
  { name: "Priya Sharma", role: "Marketing Consultant", text: "I recommend NinjaPromo to my clients anyway — now I get paid for it. The Gold tier perks are amazing.", avatar: "PS" },
  { name: "James Okafor", role: "Agency Owner", text: "Best referral program I have joined. The recurring commissions and dedicated partner manager make all the difference.", avatar: "JO" },
];

const ReferralTestimonials = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Partner Voices</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>What Our Partners <span className="hero-gradient-text fst-italic">Say</span></h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="rounded-4 p-4 h-100 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#fbbf24', fontSize: '0.85rem' }}>★</span>)}
                </div>
                <p className="text-secondary mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.7, fontStyle: 'italic' }}>"{t.text}"</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle fw-bold text-white" style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', fontSize: '0.8rem', flexShrink: 0 }}>{t.avatar}</div>
                  <div>
                    <div className="text-white fw-semibold" style={{ fontSize: '0.88rem' }}>{t.name}</div>
                    <div className="text-secondary" style={{ fontSize: '0.75rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralTestimonials;
