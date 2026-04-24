const blogPosts = [
  {
    title: 'Google Ads for Dentists: Best Strategies to Grow Y...',
    readTime: '17 MINS READ',
    category: 'BLOG',
    date: 'April 16, 2026',
    gradient: 'linear-gradient(135deg, #1e1b4b, #4338ca)',
  },
  {
    title: 'Social Media Marketing Pricing: How Much Do SMM Re...',
    readTime: null,
    category: 'BLOG',
    date: 'March 26, 2026',
    gradient: 'linear-gradient(135deg, #78350f, #d97706)',
  },
  {
    title: 'AI Content Optimization: Best Practices for High-P...',
    readTime: '17 MINS READ',
    category: 'BLOG',
    date: 'April 15, 2026',
    gradient: 'linear-gradient(135deg, #7e22ce, #c084fc)',
  },
  {
    title: '11 Retail SEO Tactics That Turn Search Traffic int...',
    readTime: '17 MINS READ',
    category: 'BLOG',
    date: 'March 24, 2026',
    gradient: 'linear-gradient(135deg, #064e3b, #10b981)',
  },
  {
    title: '9 Top Google Ads Alternatives to Boost Your Reach',
    readTime: '10 MINS READ',
    category: 'BLOG',
    date: 'April 2, 2026',
    gradient: 'linear-gradient(135deg, #ea580c, #fbbf24)',
  },
  {
    title: '11 Examples of B2B Marketing KPIs & Metrics W...',
    readTime: '17 MINS READ',
    category: 'BLOG',
    date: 'March 24, 2026',
    gradient: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
];

const BlogSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5" style={{ letterSpacing: '-1px' }}>
          What's the latest?
        </h2>

        {/* Blog Grid */}
        <div className="row g-3 mb-5">
          {blogPosts.map((post, i) => (
            <div className="col-lg-6" key={i}>
              <a
                href="#"
                className="text-decoration-none d-flex rounded-4 overflow-hidden h-100"
                style={{
                  background: '#141420',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer',
                  minHeight: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Placeholder */}
                <div
                  className="flex-shrink-0 d-flex align-items-center justify-content-center position-relative overflow-hidden"
                  style={{
                    width: '40%',
                    background: post.gradient,
                    minHeight: '180px',
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'rgba(255,255,255,0.08)',
                      top: '20%',
                      left: '10%',
                    }}
                  />
                  <div
                    className="position-absolute rounded"
                    style={{
                      width: '60px',
                      height: '40px',
                      background: 'rgba(255,255,255,0.1)',
                      bottom: '20%',
                      right: '15%',
                      borderRadius: '8px',
                    }}
                  />
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)" className="position-relative" style={{ zIndex: 1 }}>
                    <rect x="3" y="3" width="18" height="18" rx="3" fill="rgba(255,255,255,0.15)" />
                    <path d="M8 12h8M12 8v8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-4 d-flex flex-column justify-content-between" style={{ width: '60%' }}>
                  <div>
                    {/* Meta */}
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {post.readTime && (
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
                          {post.readTime}
                        </span>
                      )}
                      {post.readTime && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem' }}>·</span>}
                      <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px' }}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>
                      {post.title}
                    </h5>
                  </div>

                  {/* Date */}
                  <p className="mb-0 mt-3" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                    {post.date}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3">
          <a
            href="#"
            className="btn rounded-pill px-4 py-2 fw-semibold text-white text-decoration-none"
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
            View all posts
          </a>

          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{ width: '40px', height: '40px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{ width: '40px', height: '40px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
