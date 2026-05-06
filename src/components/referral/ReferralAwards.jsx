const awards = [
  { logo: "Clutch", desc: "Best Local SEO Companies & Services — Apr 2024 Reviews", style: "serif" },
  { logo: "Forbes", desc: "Top 10 Marketing Agencies to Watch in 2024", style: "normal" },
  { logo: "HOSTINGER", desc: "The 30 Best Digital Marketing Companies to Increase Sales in 2024", style: "tracking" },
  { logo: "Clutch", desc: "#1 Digital Marketing Agency For Startups", style: "serif" },
  { logo: "GoodFirms", desc: "Top Social Media Marketing Agency Worldwide", style: "normal" },
  { logo: "Clutch", desc: "Best PPC Management Company — 2024", style: "serif" },
];

const ReferralAwards = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Recognition</span>
          <h2 className="display-6 fw-bold text-white fst-italic" style={{ letterSpacing: '-1px' }}>Award-Winning <span className="hero-gradient-text">Agency</span></h2>
        </div>

        <div className="row g-4">
          {awards.map((award, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div
                className="rounded-4 text-center position-relative d-flex flex-column align-items-center justify-content-center overflow-hidden glow-card"
                style={{ minHeight: '280px', padding: '40px 28px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Laurel wreath */}
                <svg width="220" height="220" viewBox="0 0 260 260" className="position-absolute top-50 start-50 translate-middle" style={{ opacity: 0.06 }}>
                  <g transform="translate(35, 130)">
                    {[-70, -48, -24, 0, 24, 48, 70].map((y, j) => (
                      <ellipse key={`l${j}`} cx={-4 + Math.abs(y) * 0.08} cy={y} rx={14} ry={24} fill="white" transform={`rotate(${y > 0 ? -y * 0.4 : y * 0.4})`} />
                    ))}
                  </g>
                  <g transform="translate(225, 130)">
                    {[-70, -48, -24, 0, 24, 48, 70].map((y, j) => (
                      <ellipse key={`r${j}`} cx={4 - Math.abs(y) * 0.08} cy={y} rx={14} ry={24} fill="white" transform={`rotate(${y > 0 ? y * 0.4 : -y * 0.4})`} />
                    ))}
                  </g>
                </svg>

                {/* Top glow */}
                <div className="position-absolute" style={{ top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '120px', background: 'transparent', pointerEvents: 'none' }} />

                {/* Logo */}
                <h3 className="text-white fw-bold mb-3 position-relative" style={{
                  fontSize: award.style === "tracking" ? '1.4rem' : '2.2rem',
                  fontFamily: award.style === "serif" ? "'Georgia', serif" : 'inherit',
                  letterSpacing: award.style === "tracking" ? '4px' : '0',
                  zIndex: 1,
                  textShadow: '0 0 30px rgba(255,255,255,0.1)',
                }}>
                  {award.style === "tracking" && <span className="me-2 fw-bold" style={{ fontSize: '1.2rem' }}>╋</span>}
                  {award.logo}
                </h3>

                {/* Divider */}
                <div className="position-relative mb-3" style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', zIndex: 1 }} />

                {/* Description */}
                <p className="position-relative mb-4" style={{ maxWidth: '220px', lineHeight: 1.6, zIndex: 1, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{award.desc}</p>

                {/* Sparkle stars */}
                <div className="d-flex justify-content-center gap-3 position-relative" style={{ zIndex: 1 }}>
                  {[8, 6, 10, 6, 8].map((s, j) => (
                    <svg key={j} width={s} height={s} viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralAwards;
