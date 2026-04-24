const stats = [
  { value: "$2.4M+", label: "Paid to Partners" },
  { value: "1,200+", label: "Active Referrers" },
  { value: "92%", label: "Partner Satisfaction" },
  { value: "48hrs", label: "Avg. Payout Time" },
];

const ReferralHero = () => {
  return (
    <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '85vh', paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Glow orbs */}
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', top: '-10%', right: '-5%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', bottom: '0%', left: '-5%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <span style={{ fontSize: '0.85rem' }}>🤝</span>
              <span style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 600 }}>Partner Program</span>
            </div>

            <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
              Refer Clients.{' '}
              <span className="hero-gradient-text fst-italic fw-normal">Earn Recurring Revenue.</span>
            </h1>

            <p className="text-secondary fs-5 mb-4" style={{ maxWidth: 520, lineHeight: 1.7 }}>
              Join NinjaPromo's referral program and earn up to <strong style={{ color: '#c084fc' }}>20% recurring commission</strong> for every client you send our way. No limits. No hassle.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#join" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none">Join the Program</a>
              <a href="#how-it-works" className="btn rounded-pill px-5 py-3 fw-medium text-white text-decoration-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >Learn More ↓</a>
            </div>
          </div>

          {/* Stats cards */}
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

export default ReferralHero;
