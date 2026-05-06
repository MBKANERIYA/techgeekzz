const bulletPoints = [
  'How TechGeekz can elevate your brand',
  'A custom strategy tailored to your goals and budget',
  'How our team handles branding, SEO, ads, and social media end-to-end',
  'Clear timelines, deliverables, and results you can measure',
];

const brands = ['Logitech', 'Bitcoin.com', 'Stripe', 'Samsung', 'HubSpot', 'BurgerKing'];

const CTASection = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left - Content */}
          <div className="col-lg-5">
            <h2 className="text-white display-6 fw-bold fst-italic mb-4" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>
              Ready to Take Your Marketing to the Next Level?
            </h2>

            <p className="text-white fw-bold mb-3" style={{ fontSize: '0.9rem' }}>Get a look at:</p>

            <ul className="list-unstyled mb-5">
              {bulletPoints.map((point, i) => (
                <li key={i} className="d-flex align-items-start gap-2 mb-2">
                  <span className="text-secondary mt-1" style={{ fontSize: '0.5rem' }}>●</span>
                  <span className="text-secondary small" style={{ lineHeight: 1.6 }}>{point}</span>
                </li>
              ))}
            </ul>

            {/* Brand Logos */}
            <div className="d-flex flex-wrap gap-4 align-items-center">
              {brands.map((brand, i) => (
                <span
                  key={i}
                  className="fw-bold"
                  style={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: brand === 'Bitcoin.com' ? '0.85rem' : '0.8rem',
                    fontFamily: brand === 'Samsung' ? 'inherit' : 'inherit',
                    letterSpacing: brand === 'Samsung' ? '3px' : '0.5px',
                    textTransform: brand === 'Samsung' ? 'uppercase' : 'none',
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="col-lg-7">
            <div
              className="rounded-4 p-4 p-lg-5"
              style={{ background: '#ffffff', color: '#1a1a1a' }}
            >
              <h3 className="text-center fw-bold fs-5 mb-2" style={{ color: '#1a1a1a', letterSpacing: '1px' }}>
                BOOK A CALL WITH US
              </h3>
              <p className="text-center small mb-4" style={{ color: '#888', fontSize: '0.75rem' }}>
                (Please wait a few seconds for the calendar to load after clicking the button)
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* First Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                    placeholder="First Name*"
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid #ddd',
                      color: '#1a1a1a',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                    placeholder="Last Name"
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid #ddd',
                      color: '#1a1a1a',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                </div>

                {/* Work Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                    placeholder="Work Email*"
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid #ddd',
                      color: '#1a1a1a',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between" style={{ borderBottom: '1px solid #ddd' }}>
                    <div className="d-flex align-items-center gap-2 py-2">
                      <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
                      <span className="small" style={{ color: '#888' }}>▾</span>
                      <span style={{ color: '#1a1a1a', fontSize: '0.85rem' }}>+91</span>
                    </div>
                    <span className="small" style={{ color: '#aaa' }}>(optional)</span>
                  </div>
                </div>

                {/* What are you trying to solve */}
                <div className="mb-4">
                  <label className="small mb-1 d-block" style={{ color: '#888', fontSize: '0.8rem' }}>
                    What are you trying to solve?
                  </label>
                  <textarea
                    className="form-control border-0 border-bottom rounded-0 px-0 py-2"
                    rows="2"
                    placeholder="Lead gen, positioning, paid ads, SEO, creatives, website, analytics"
                    style={{
                      background: 'transparent',
                      borderBottom: '1px solid #ddd',
                      color: '#1a1a1a',
                      fontSize: '0.85rem',
                      outline: 'none',
                      boxShadow: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-100 rounded-pill py-3 fw-bold text-white mb-3"
                  style={{
                    background: '#a500fd',
                    border: 'none',
                    fontSize: '1rem',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(165,0,253,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Book a Free Call
                </button>

                {/* Privacy */}
                <p className="text-center mb-2" style={{ color: '#999', fontSize: '0.7rem', lineHeight: 1.5 }}>
                  By clicking, you agree to receive communications from TechGeekz
                  in accordance with our <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Privacy Policy</a>
                </p>

                <p className="text-center fw-bold mb-0" style={{ color: '#1a1a1a', fontSize: '0.8rem' }}>
                  No sales pitch. Just goals and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
