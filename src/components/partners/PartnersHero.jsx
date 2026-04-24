const stats = [
  { value: "120+", label: "Active Partners" },
  { value: "45+", label: "Integrations" },
  { value: "$18M+", label: "Partner Revenue" },
  { value: "30+", label: "Countries" },
];

const PartnersHero = () => {
  return (
    <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '85vh', paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/heroes/hero-business.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.95) 100%)', pointerEvents: 'none', zIndex: 0 }} />
      {/* Glow orbs */}
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', top: '-10%', left: '-5%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', bottom: '5%', right: '-5%', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 1 }} />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <span style={{ fontSize: '0.85rem' }}>🤝</span>
              <span style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 600 }}>Partner Ecosystem</span>
            </div>

            <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
              Marketing &{' '}
              <span className="hero-gradient-text fst-italic fw-normal">Technology Partners</span>
            </h1>

            <p className="text-secondary fs-5 mb-4" style={{ maxWidth: 540, lineHeight: 1.7 }}>
              We collaborate with <strong style={{ color: '#c084fc' }}>world-class platforms</strong> and marketing leaders to deliver integrated solutions that drive measurable results for our clients.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#become-partner" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none">Become a Partner</a>
              <a href="#partner-types" className="btn rounded-pill px-5 py-3 fw-medium text-white text-decoration-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >Explore Partners ↓</a>
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
              {stats.map((s, i) => (
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
  );
};

export default PartnersHero;
