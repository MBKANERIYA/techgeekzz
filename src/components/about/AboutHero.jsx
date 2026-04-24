const AboutHero = () => {
  return (
    <section style={{ padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="d-inline-block rounded-pill px-3 py-1 mb-4" style={{
              background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', fontSize: '0.72rem',
              color: '#c084fc', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600,
            }}>About NinjaPromo</div>

            <h1 className="fw-bold fst-italic mb-4" style={{ lineHeight: 1.08, letterSpacing: '-2px', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)' }}>
              <span style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc, #e879f9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>The Brightest Minds</span>
              <br /><span className="text-white">in Digital at Your</span>
              <br /><span className="text-white">Service</span>
            </h1>
            <p className="mb-4" style={{ maxWidth: '440px', lineHeight: 1.8, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)' }}>
              We help brands connect with their customers by creating personal connections in this digital world. Most of them are still with us.
            </p>
            <a href="#" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none" style={{ fontSize: '0.88rem' }}>
              Book a demo
            </a>

            {/* Trust badges */}
            <div className="d-flex align-items-center gap-4 mt-5">
              {[
                { num: '250+', label: 'Clients' },
                { num: '12', label: 'Offices' },
                { num: '96%', label: 'Retention' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="fw-bold" style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    fontSize: '1.3rem',
                  }}>{s.num}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="position-relative" style={{ width: '400px', height: '400px' }}>
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Animated circles */}
                <circle cx="220" cy="185" r="155" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                <circle cx="220" cy="185" r="125" stroke="rgba(139,92,246,0.08)" strokeWidth="1" fill="none" />
                <circle cx="220" cy="185" r="95" stroke="rgba(139,92,246,0.12)" strokeWidth="1" fill="none" />

                {/* Head Silhouette */}
                <path d="M190 310 L190 280 Q148 268 132 238 Q112 202 122 166 Q128 140 148 122 Q168 105 195 100 Q222 95 247 106 Q272 117 285 142 Q297 168 290 198 Q282 228 255 248 L250 280 L250 310"
                  stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />

                {/* Brain — left */}
                <g transform="translate(185, 130)">
                  <path d="M30 8 Q15 8 10 18 Q5 28 12 38 Q8 42 10 50 Q12 58 22 60 Q20 68 28 72 Q36 76 44 70 Q48 66 48 58"
                    stroke="url(#bg1)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M38 8 Q52 6 60 16 Q68 26 62 38 Q68 42 66 50 Q64 58 54 62 Q56 68 48 72"
                    stroke="url(#bg2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M30 22 Q38 28 46 22" stroke="url(#bg1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M22 40 Q32 46 42 40" stroke="url(#bg2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M28 55 Q38 60 48 55" stroke="url(#bg1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </g>

                {/* Cord + plug */}
                <path d="M250 310 Q290 330 310 320 Q330 310 340 330 Q350 350 360 345"
                  stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <g transform="translate(355, 338)">
                  <rect x="0" y="0" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                  <line x1="18" y1="3" x2="24" y2="3" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="9" x2="24" y2="9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Glow */}
                <circle cx="220" cy="168" r="45" fill="url(#bGlow)" opacity="0.25" />

                <defs>
                  <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#e879f9" />
                  </linearGradient>
                  <radialGradient id="bGlow">
                    <stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
