const StarIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ef4444">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const tags = [
  "High-quality work (17)", "Timely (13)", "Communicative (10)",
  "Professional (8)", "Great project management (9)",
];

const reviewDetails = [
  { emoji: "", text: "Digital Marketing" },
  { emoji: "", text: "San Francisco, California" },
  { emoji: "", text: "10,001+ Employees" },
  { emoji: "", text: "$50,000 to $199,999" },
  { emoji: "", text: "Jan 2024 - Ongoing" },
];

const ReferralReviews = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Verified Reviews</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Trusted by <span className="hero-gradient-text fst-italic">Industry Leaders</span></h2>
        </div>

        <div className="row g-4 mb-4">
          {/* Clutch Card */}
          <div className="col-lg-4">
            <div className="rounded-4 p-4 h-100" style={{ background: '#f5f5f0', color: '#1a1a1a' }}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="fw-bold mb-0 fs-2" style={{ fontFamily: 'serif', color: '#1a1a1a' }}>Clutch</h3>
                <a href="#" className="text-decoration-underline small" style={{ color: '#555' }}>View profile</a>
              </div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="fw-bold fs-3" style={{ color: '#1a1a1a' }}>4.9</span>
                <span className="d-inline-flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} size={18} />)}
                </span>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="rounded-pill px-3 py-1" style={{ background: 'rgba(0,0,0,0.06)', fontSize: '0.75rem', color: '#555' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Review Detail */}
          <div className="col-lg-4">
            <div className="rounded-4 p-4 h-100" style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="text-white fw-bold fs-3">5.0</span>
                <span className="d-inline-flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} size={16} />)}
                </span>
              </div>
              <div className="d-flex flex-column gap-3">
                {reviewDetails.map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1rem' }}>{item.emoji}</span>
                    <span className="text-white small">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="col-lg-4">
            <div className="rounded-4 p-4 h-100 d-flex flex-column justify-content-between" style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-white fw-semibold mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                "Their referral program is top-notch. Not only did they deliver exceptional results for my clients, but the commissions I earned exceeded expectations."
              </p>
              <div>
                <h4 className="text-white fw-bold fs-4 mb-2" style={{ letterSpacing: '1px' }}>◆ airbnb</h4>
                <p className="text-secondary small mb-1">Jose Robertson | Distribution Company</p>
                <p className="small mb-0" style={{ color: '#a500fd' }}>Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralReviews;
