const industries = [
  {
    icon: '☁️',
    iconBg: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    title: 'SaaS',
    titleGradient: 'linear-gradient(135deg, #60a5fa, #93c5fd)',
    description: "Your software solves problems — let's make sure the world knows it. We craft campaigns that dominate user acquisition, slash churn, and scale subscriptions.",
  },
  {
    icon: '🏛️',
    iconBg: 'linear-gradient(135deg, #a855f7, #c084fc)',
    title: 'Fintech',
    titleGradient: 'linear-gradient(135deg, #c084fc, #e9d5ff)',
    description: "In a sector built on security and speed, we engineer campaigns that convert skeptics into loyal users. Regulatory-compliant ads, high-ROI funnels, and storytelling that turns complex tech into irresistible value.",
  },
  {
    icon: '🛒',
    iconBg: 'linear-gradient(135deg, #ef4444, #f87171)',
    title: 'eCommerce',
    titleGradient: 'linear-gradient(135deg, #f87171, #fca5a5)',
    description: "Turbocharge your store with performance marketing that doesn't just drive traffic — it drives sales. Dynamic ads, AI-powered retargeting, and checkout flows smoother than your best-selling product.",
  },
  {
    icon: '💲',
    iconBg: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    title: 'Financial',
    titleGradient: 'linear-gradient(135deg, #fbbf24, #fde68a)',
    description: "High-trust industries demand high-impact strategies. We build compliant campaigns that turn cold leads into long-term clients. Think wealth management ads that perform as well as your funds.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
          Any Industry. Any Goal. We Make
          <br />
          Performance Marketing Work for You
        </h2>
        <p className="text-secondary text-center small fst-italic mb-5 mx-auto" style={{ maxWidth: '650px', lineHeight: 1.7 }}>
          We don't need to compromise on quality for short-term profit because our subscription model is built on long-term, mutually beneficial partnerships with hourly billing.
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
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                {/* Icon */}
                <div
                  className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: item.iconBg,
                    fontSize: '3rem',
                    boxShadow: `0 8px 30px ${item.iconBg.includes('#3b82f6') ? 'rgba(59,130,246,0.3)' : item.iconBg.includes('#a855f7') ? 'rgba(168,85,247,0.3)' : item.iconBg.includes('#ef4444') ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="d-flex flex-column justify-content-center">
                  <h3
                    className="fw-bold fs-3 mb-2 fst-italic"
                    style={{
                      background: item.titleGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.title}
                  </h3>
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
