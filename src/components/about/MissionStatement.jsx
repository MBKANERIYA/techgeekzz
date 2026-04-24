const MissionStatement = () => {
  return (
    <section className="py-5" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{
              background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
              fontSize: '0.68rem', color: '#c084fc', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600,
            }}>Our Story</div>
            <h2 className="text-white display-6 fw-bold fst-italic mb-0" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
              A marketing team that{' '}
              <span className="hero-gradient-text">actually delivers</span>
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="rounded-4 p-4" style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <p className="mb-3" style={{ lineHeight: 1.8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
                We built NinjaPromo because we were tired of the way marketing works. Too many agencies overpromise, underdeliver, and charge premium rates for junior-level work hidden behind polished decks.
              </p>
              <p className="mb-0" style={{ lineHeight: 1.8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
                Our model is different. We give you direct access to senior specialists across every channel — SEO, paid ads, social, creative, web — all under one flexible subscription. No fluff. No lock-ins. Just results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
