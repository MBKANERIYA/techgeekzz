const MissionStatement = () => {
  return (
    <section className="py-5" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)',
        width: '300px', height: '300px',
        background: 'transparent',
        pointerEvents: 'none',
      }} />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{
              background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)',
              fontSize: '0.68rem', color: '#a500fd', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600,
            }}>Our Story</div>
            <h2 className="text-white display-6 fw-bold fst-italic mb-0" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
              A creative agency that{' '}
              <span className="hero-gradient-text">gets results</span>
            </h2>
          </div>
          <div className="col-lg-7">
            <div className="rounded-4 p-4" style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <p className="mb-3" style={{ lineHeight: 1.8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
                TechGeekz was founded with a simple belief: businesses deserve a creative partner that cares about their growth as much as they do. We focus on what matters -- building brands that connect, campaigns that convert, and strategies that scale.
              </p>
              <p className="mb-0" style={{ lineHeight: 1.8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
                From branding and SEO to paid advertising and social media management, we bring senior-level expertise to every project. No outsourcing, no runarounds -- just a dedicated team focused on your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
