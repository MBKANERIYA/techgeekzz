import { useState } from 'react';

const mediaCards = [
  { name: 'Analytics Insight', icon: '⊞', article: 'What Artificial Intelligence Can Bring to Digital Marketing in 2024' },
  { name: 'CoinPedia.', icon: '', article: 'State of User Acquisition 2024 in Web3' },
  { name: 'Cryptopolitan', icon: '◎', article: "What's Holding Up The Next Bull Run in 2024, and What Trends Will Fuel It" },
  { name: 'Bitcoin.com', icon: '₿', article: 'Game-Changing Subscription Model for Marketing Services Unveiled by Ninjapromo.io' },
  { name: 'TechCrunch', icon: '⚡', article: 'How Subscription Marketing Agencies Are Disrupting the Traditional Model' },
  { name: 'Entrepreneur', icon: '🅔', article: '5 Reasons Performance Marketing Will Dominate 2025' },
];

const FeaturedSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visible = mediaCards.slice(startIndex, startIndex + 4).length === 4
    ? mediaCards.slice(startIndex, startIndex + 4)
    : [...mediaCards.slice(startIndex), ...mediaCards.slice(0, 4 - (mediaCards.length - startIndex))];

  return (
    <section className="py-3">
      <div className="container">
        {/* Top - Forbes Feature */}
        <div className="row align-items-center mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {/* Left - Heading + Forbes Logo */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="text-white fs-4 fw-semibold mb-4">We are featured in</p>
            <h2
              style={{
                fontSize: 'clamp(5rem, 10vw, 8rem)',
                fontFamily: "'Georgia', 'Times New Roman', serif",
                color: 'rgba(255,255,255,0.2)',
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '-2px',
              }}
            >
              Forbes
            </h2>
          </div>

          {/* Right - Description + CTA */}
          <div className="col-lg-6 d-flex flex-column align-items-lg-start">
            <p className="text-secondary mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '420px' }}>
              NinjaPromo's founders shared insights with Forbes on the strategic advantages of partnering over contracting with service providers.
            </p>
            <a
              href="#"
              className="btn rounded-pill px-4 py-2 fw-semibold text-white text-decoration-none"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Read the article
            </a>
          </div>
        </div>

        {/* Bottom - Other Media */}
        <h3 className="text-white fs-4 fw-semibold mb-4">And other media</h3>

        <div className="row g-3 mb-4">
          {visible.map((card, i) => (
            <div className="col-lg-3 col-md-6" key={`${startIndex}-${i}`}>
              <div
                className="rounded-4 p-4 h-100"
                style={{
                  background: '#141420',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  minHeight: '180px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Media Logo */}
                <h5 className="text-white fw-bold mb-3" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
                  {card.icon && <span className="me-1" style={{ fontSize: '0.9rem' }}>{card.icon}</span>}
                  {card.name}
                </h5>

                {/* Article Title */}
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {card.article}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Right Aligned */}
        <div className="d-flex justify-content-end gap-2">
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{ width: '40px', height: '40px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            onClick={() => setStartIndex((p) => (p === 0 ? mediaCards.length - 1 : p - 1))}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{ width: '40px', height: '40px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            onClick={() => setStartIndex((p) => (p + 1) % mediaCards.length)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
