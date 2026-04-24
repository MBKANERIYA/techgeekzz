const row1 = [
  { name: 'YVES ROCHER', cls: 'text-uppercase', style: { letterSpacing: '2px', fontSize: '0.9rem' } },
  { name: 'Revolut', cls: 'fw-bold', style: { fontSize: '1.6rem' } },
  { name: 'IronFX', cls: 'fw-bold', style: { fontSize: '1.4rem' } },
  { name: 'HTX', cls: 'fw-bold', style: { fontSize: '1.5rem', letterSpacing: '2px' } },
  { name: 'beko', cls: 'fw-bold', style: { fontSize: '1.6rem' } },
  { name: 'Knight Frank', cls: 'fw-bold', style: { fontSize: '1.2rem' } },
  { name: '+Babbel', cls: 'fw-bold', style: { fontSize: '1.5rem' } },
  { name: 'SAMSUNG', cls: 'fw-bold text-uppercase', style: { fontSize: '1.2rem', letterSpacing: '3px' } },
];

const row2 = [
  { name: 'itransition', cls: 'fw-light', style: { fontSize: '1.3rem', letterSpacing: '1px' } },
  { name: 'pens.com', cls: 'fw-bold fst-italic', style: { fontSize: '1.3rem' } },
  { name: 'ZOOMEX', cls: 'fw-bold text-uppercase', style: { fontSize: '1.4rem', letterSpacing: '2px' } },
  { name: '8x8', cls: 'fw-bold', style: { fontSize: '1.6rem' } },
  { name: 'DUKASCOPY', cls: 'fw-bold text-uppercase', style: { fontSize: '1.1rem', letterSpacing: '3px' } },
  { name: 'B2PRIME', cls: 'fw-bold text-uppercase', style: { fontSize: '1.2rem', letterSpacing: '2px' } },
  { name: 'LEBARA', cls: 'fw-bold text-uppercase', style: { fontSize: '1.2rem', letterSpacing: '4px' } },
  { name: 'logitech', cls: 'fw-light', style: { fontSize: '1.3rem', letterSpacing: '1px' } },
];

const LogoSlider = () => {
  return (
    <section className="py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <p className="text-secondary text-center small mb-5">
          Trusted by 250+ startups and global brands, across 30+ industries.
        </p>

        {/* Row 1 - scrolls left */}
        <div className="marquee-wrapper mb-4">
          <div className="marquee-track d-flex align-items-center">
            {[...row1, ...row1].map((logo, i) => (
              <span
                key={`r1-${i}`}
                className={`text-white text-nowrap d-inline-flex align-items-center mx-4 ${logo.cls}`}
                style={{ ...logo.style, opacity: 0.6 }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="marquee-wrapper">
          <div className="marquee-track-reverse d-flex align-items-center">
            {[...row2, ...row2].map((logo, i) => (
              <span
                key={`r2-${i}`}
                className={`text-white text-nowrap d-inline-flex align-items-center mx-4 ${logo.cls}`}
                style={{ ...logo.style, opacity: 0.6 }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
