const industries = [
  {
    icon: '',
    iconBg: '#a500fd',
    title: 'SaaS',
    titleGradient: '#a500fd',
    description: "Your software solves problems -- let's make sure the world knows it. We craft campaigns that dominate user acquisition, build brand authority, and drive signups.",
  },
  {
    icon: '',
    iconBg: '#a500fd',
    title: 'Fintech',
    titleGradient: '#a500fd',
    description: "In a sector built on security and speed, we engineer campaigns that convert skeptics into loyal users. Regulatory-compliant ads, high-ROI funnels, and storytelling that turns complex tech into irresistible value.",
  },
  {
    icon: '',
    iconBg: '#a500fd',
    title: 'eCommerce',
    titleGradient: '#a500fd',
    description: "Turbocharge your store with performance marketing that doesn't just drive traffic — it drives sales. Dynamic ads, AI-powered retargeting, and checkout flows smoother than your best-selling product.",
  },
  {
    icon: '',
    iconBg: '#a500fd',
    title: 'Financial',
    titleGradient: '#a500fd',
    description: "High-trust industries demand high-impact strategies. We build compliant campaigns that turn cold leads into long-term clients. Think wealth management ads that perform as well as your funds.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
          Any Industry. Any Goal. We Make
          <br />
          Performance Marketing Work for You
        </h2>
        <p className="text-secondary text-center small fst-italic mb-5 mx-auto" style={{ maxWidth: '650px', lineHeight: 1.7 }}>
          We invest in understanding your industry so every campaign we run is built on insight, not guesswork. Long-term partnerships, measurable results.
        </p>

        {/* Industry Cards - 2x2 Grid */}
        <div className="row g-4 mb-5">
          {industries.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="d-flex gap-4 p-4 rounded-4 h-100"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(165,0,253,0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Content */}
                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#a500fd', flexShrink: 0 }} />
                    <h3 className="fw-bold fs-3 mb-0 fst-italic" style={{ color: '#a500fd' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#"
            className="btn rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
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
            Show all Industries
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
