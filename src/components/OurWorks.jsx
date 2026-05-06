import { useState } from 'react';

const categories = [
  'All Cases', 'AI', 'B2B', 'B2C', 'Ecommerce', 'Fintech', 'Forex',
  'Gaming', 'Healthcare', 'iGaming', 'IT & Software', 'Real Estate', 'SaaS', 'Web3',
];

const caseStudies = [
  {
    brand: 'HTX',
    tagline: '$20M revenue in 180 days with HTX',
    gradient: '#a500fd',
    stats: [
      { value: '$20M', label: 'in deposits' },
      { value: '16.8%', label: 'conversion rate' },
      { value: '30%', label: 'engagement rate increase' },
      { value: '1.5M', label: 'reach through PR' },
    ],
  },
  {
    brand: 'Revolut',
    tagline: '500K new users in 90 days with Revolut',
    gradient: '#a500fd',
    stats: [
      { value: '500K', label: 'new users' },
      { value: '42%', label: 'lower CPA' },
      { value: '12x', label: 'ROAS achieved' },
      { value: '85%', label: 'retention rate' },
    ],
  },
  {
    brand: 'Samsung',
    tagline: '3x engagement boost for Samsung campaign',
    gradient: '#a500fd',
    stats: [
      { value: '3x', label: 'engagement boost' },
      { value: '2.1M', label: 'impressions' },
      { value: '18%', label: 'CTR increase' },
      { value: '45%', label: 'brand recall' },
    ],
  },
];

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('All Cases');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5" style={{ letterSpacing: '-1px' }}>
          Our works
        </h2>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm rounded-pill px-3 py-1 fw-medium ${activeCategory === cat ? 'text-white' : 'text-secondary'}`}
              style={{
                background: activeCategory === cat
                  ? '#a500fd'
                  : 'transparent',
                border: activeCategory === cat
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.12)',
                fontSize: '0.8rem',
                transition: 'all 0.2s ease',
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div
          className="rounded-4 p-4 p-lg-5 mb-5"
          style={{
            background: '#141420',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="row align-items-center g-4">
            {/* Left - Brand Card */}
            <div className="col-lg-5">
              <div
                className="rounded-4 p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  background: currentCase.gradient,
                  minHeight: '280px',
                }}
              >
                {/* Brand Logo */}
                <div>
                  <h3 className="text-white fw-bold fs-2 mb-0" style={{ letterSpacing: '2px' }}>
                    ◆ {currentCase.brand}
                  </h3>
                </div>

                {/* Decorative Circle */}
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.08)',
                    right: '-30px',
                    bottom: '-30px',
                  }}
                />
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: 'rgba(255,255,255,0.06)',
                    right: '60px',
                    bottom: '40px',
                  }}
                />

                {/* Tagline */}
                <p className="text-white fw-semibold fs-5 mb-0 position-relative" style={{ zIndex: 1 }}>
                  {currentCase.tagline}
                </p>
              </div>
            </div>

            {/* Right - Stats + Read More */}
            <div className="col-lg-7">
              <div className="row g-3 mb-4">
                {currentCase.stats.map((stat, i) => (
                  <div className="col-6" key={i}>
                    <div
                      className="pb-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <span className="text-white fw-bold fs-3">{stat.value}</span>
                      <span className="text-secondary small ms-2">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="btn rounded-pill px-4 py-2 fw-medium text-white text-decoration-none"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3">
          <a
            href="#"
            className="btn rounded-pill px-4 py-2 fw-medium text-white text-decoration-none"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '0.9rem',
            }}
          >
            See More Success Stories
          </a>

          {/* Navigation Arrows */}
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
            }}
            onClick={handlePrev}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
            }}
            onClick={handleNext}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
