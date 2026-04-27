import { useState } from 'react';

const reviews = [
  {
    rating: 5.0,
    industry: 'eCommerce',
    location: 'San Francisco, California',
    employees: '10,001+ Employees',
    budget: '$10,000 to $49,999',
    period: 'July 2022 - August 2023',
    quote: "\"We're highly impressed by their innovative strategies and seamless execution!\"",
    company: 'airbnb',
    reviewer: 'Jose Robertson | Distribution Company',
    role: 'Head of Marketing',
  },
  {
    rating: 5.0,
    industry: 'SaaS',
    location: 'New York, NY',
    employees: '1,001-5,000 Employees',
    budget: '$50,000 to $199,999',
    period: 'Jan 2023 - Dec 2023',
    quote: "\"NinjaPromo transformed our digital presence. The ROI exceeded our expectations by 300%.\"",
    company: 'Revolut',
    reviewer: 'Sarah Chen | Fintech Platform',
    role: 'VP of Growth',
  },
  {
    rating: 4.9,
    industry: 'Fintech',
    location: 'London, UK',
    employees: '501-1,000 Employees',
    budget: '$25,000 to $99,999',
    period: 'Mar 2023 - Nov 2023',
    quote: "\"Exceptional team that delivers results consistently. They became an extension of our marketing department.\"",
    company: 'HTX',
    reviewer: 'Michael Torres | Crypto Exchange',
    role: 'CMO',
  },
];

const tags = [
  'High-quality work (17)',
  'Timely (13)',
  'Communicative (10)',
  'Professional (8)',
  'Great project management (9)',
];

const StarRating = ({ count = 5, size = 16 }) => (
  <span className="d-inline-flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#ef4444">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const current = reviews[currentSlide];

  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5" style={{ letterSpacing: '-1px' }}>
          Our rating based on 80+
          <br />
          verified client reviews
        </h2>

        {/* Cards Row */}
        <div className="row g-4 mb-4">
          {/* Left - Clutch Card (Light) */}
          <div className="col-lg-4">
            <div
              className="rounded-4 p-4 h-100"
              style={{ background: '#f5f5f0', color: '#1a1a1a' }}
            >
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="fw-bold mb-0 fs-2" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>
                  Clutch
                </h3>
                <a href="#" className="text-decoration-underline small" style={{ color: '#555' }}>
                  View our profile
                </a>
              </div>

              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="fw-bold fs-3" style={{ color: '#1a1a1a' }}>4.9</span>
                <StarRating count={5} size={18} />
              </div>

              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-pill px-3 py-1"
                    style={{
                      background: 'rgba(0,0,0,0.06)',
                      fontSize: '0.75rem',
                      color: '#555',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Middle - Review Details */}
          <div className="col-lg-4">
            <div
              className="rounded-4 p-4 h-100"
              style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="text-white fw-bold fs-3">{current.rating}</span>
                <StarRating count={5} size={16} />
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1rem' }}>🏢</span>
                  <span className="text-white small">{current.industry}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1rem' }}>📍</span>
                  <span className="text-white small">{current.location}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1rem' }}>👥</span>
                  <span className="text-white small">{current.employees}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1rem' }}>💰</span>
                  <span className="text-white small">{current.budget}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1rem' }}>📅</span>
                  <span className="text-white small">{current.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Testimonial Quote */}
          <div className="col-lg-4">
            <div
              className="rounded-4 p-4 h-100 d-flex flex-column justify-content-between"
              style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-white fw-semibold mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                {current.quote}
              </p>

              <div>
                <h4 className="text-white fw-bold fs-4 mb-2" style={{ letterSpacing: '1px' }}>
                  ◆ {current.company}
                </h4>
                <p className="text-secondary small mb-1">{current.reviewer}</p>
                <p className="small mb-0" style={{ color: '#8b5cf6' }}>{current.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
            }}
            onClick={() => setCurrentSlide((p) => (p === 0 ? reviews.length - 1 : p - 1))}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
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
            onClick={() => setCurrentSlide((p) => (p === reviews.length - 1 ? 0 : p + 1))}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
