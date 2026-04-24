const testimonials = [
  { name: "David Park", role: "VP Partnerships, Semrush", text: "NinjaPromo is one of our most active agency partners. Their team consistently delivers outstanding results using our platform.", avatar: "DP" },
  { name: "Laura Mitchell", role: "Partner Manager, HubSpot", text: "The collaboration has been seamless. NinjaPromo brings strategic depth that elevates how clients use our tools.", avatar: "LM" },
  { name: "Carlos Mendez", role: "Head of Alliances, Shopify", text: "Their e-commerce expertise combined with our platform creates incredible value. A true strategic partnership.", avatar: "CM" },
];

const PartnersTestimonials = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Partner Voices</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>What Partners <span className="hero-gradient-text fst-italic">Say</span></h2>
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

export default PartnersTestimonials;
