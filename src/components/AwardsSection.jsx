import { useState } from 'react';

const awards = [
  { logo: 'Clutch', description: 'Best Local SEO Companies & Services — Apr 2024 Reviews' },
  { logo: 'HOSTINGER', description: 'The 30 Best Digital Marketing Companies to Increase Sales in 2024' },
  { logo: 'Clutch', description: '#1 Digital Marketing Agency For Startups' },
  { logo: 'Forbes', description: 'Top 10 Marketing Agencies to Watch in 2024' },
  { logo: 'Clutch', description: 'Best PPC Management Company — 2024' },
  { logo: 'GoodFirms', description: 'Top Social Media Marketing Agency Worldwide' },
];

const LaurelWreath = () => (
  <svg width="260" height="260" viewBox="0 0 260 260" className="position-absolute top-50 start-50 translate-middle" style={{ opacity: 0.08 }}>
    {/* Left branch */}
    <g transform="translate(35, 130)">
      {[-70, -48, -24, 0, 24, 48, 70].map((y, i) => (
        <ellipse key={`l${i}`} cx={-4 + Math.abs(y) * 0.08} cy={y} rx={14} ry={24} fill="white"
          transform={`rotate(${y > 0 ? -y * 0.4 : y * 0.4})`} />
      ))}
    </g>
    {/* Right branch */}
    <g transform="translate(225, 130)">
      {[-70, -48, -24, 0, 24, 48, 70].map((y, i) => (
        <ellipse key={`r${i}`} cx={4 - Math.abs(y) * 0.08} cy={y} rx={14} ry={24} fill="white"
          transform={`rotate(${y > 0 ? y * 0.4 : -y * 0.4})`} />
      ))}
    </g>
  </svg>
);

const AwardsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visible = [
    awards[startIndex % awards.length],
    awards[(startIndex + 1) % awards.length],
    awards[(startIndex + 2) % awards.length],
  ];

  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5 pb-3" style={{ letterSpacing: '-1px' }}>
          We're the Award-Winning Agency
        </h2>

        {/* Awards Grid */}
        <div className="row g-4 mb-5">
          {visible.map((award, i) => (
            <div className="col-lg-4" key={`${startIndex}-${i}`}>
              <div
                className="rounded-4 text-center position-relative d-flex flex-column align-items-center justify-content-center overflow-hidden"
                style={{
                  minHeight: '320px',
                  padding: '50px 30px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(165,0,253,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Laurel Wreath */}
                <LaurelWreath />

                {/* Top glow accent */}
                <div
                  className="position-absolute"
                  style={{
                    top: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '120px',
                    background: 'transparent',
                    pointerEvents: 'none',
                  }}
                />

                {/* Logo */}
                <h3
                  className="text-white fw-bold mb-3 position-relative"
                  style={{
                    fontSize: award.logo === 'HOSTINGER' ? '1.4rem' : award.logo === 'GoodFirms' ? '1.4rem' : '2.2rem',
                    fontFamily: award.logo === 'Clutch' ? "'Georgia', serif" : 'inherit',
                    letterSpacing: award.logo === 'HOSTINGER' ? '4px' : award.logo === 'GoodFirms' ? '1px' : '0',
                    zIndex: 1,
                    textShadow: '0 0 30px rgba(255,255,255,0.1)',
                  }}
                >
                  {award.logo === 'HOSTINGER' && (
                    <span className="me-2 fw-bold" style={{ fontSize: '1.2rem' }}>╋</span>
                  )}
                  {award.logo}
                </h3>

                {/* Divider */}
                <div
                  className="position-relative mb-3"
                  style={{
                    width: '40px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    zIndex: 1,
                  }}
                />

                {/* Description */}
                <p
                  className="position-relative mb-4"
                  style={{
                    maxWidth: '220px',
                    lineHeight: 1.6,
                    zIndex: 1,
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {award.description}
                </p>

                {/* Sparkle stars */}
                <div className="d-flex justify-content-center gap-3 position-relative" style={{ zIndex: 1 }}>
                  {[8, 6, 10, 6, 8].map((s, j) => (
                    <svg key={j} width={s} height={s} viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)">
                      <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{
              width: '44px', height: '44px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
            onClick={() => setStartIndex((p) => (p === 0 ? awards.length - 1 : p - 1))}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{
              width: '44px', height: '44px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
            onClick={() => setStartIndex((p) => (p + 1) % awards.length)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
