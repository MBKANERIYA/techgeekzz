const steps = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Meet Your Marketing Expert',
    description: "A single point of contact — fully aligned with your business. You'll be matched with a dedicated strategist who understands your industry, goals, and challenges. They lead your roadmap, brief the team, and make sure everything runs toward real outcomes.",
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" />
      </svg>
    ),
    title: 'Build a Custom Plan',
    description: "A flexible monthly strategy — built around your goals. Together, we prioritize tasks, channels, and focus areas. You get a curated team of SEO, PPC, content, and design pros working under one integrated strategy.",
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
      </svg>
    ),
    title: 'Custom Strategy',
    description: "We design a data-driven plan tailored to scale. Based on your goals and audit findings, we build a high-performance roadmap to drive fast results and set you up for long-term impact.",
  },
  {
    num: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Activate Your Hours',
    description: "Use your time where it drives the most impact. Every month, your bank of hours turns into deliverables: campaigns, creatives, content, audits, and optimizations. Need a push on one channel? We shift instantly.",
  },
  {
    num: '05',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Focus on Results',
    description: "We show exactly what's working — and why. You get clear, ongoing reports tied to your business goals — not vanity metrics. Every campaign adjustment is tracked, explained, and optimized in real time, so you're always in control and always moving toward measurable results.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2
          className="text-white text-center fw-bold fst-italic mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-1px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.2 }}
        >
          Our Full-Service Digital Workflow — Strategy That Scales, Built to Maximize ROI at Every Stage
        </h2>

        <p
          className="text-secondary text-center small fst-italic mb-5 pb-3 mx-auto"
          style={{ maxWidth: '700px', lineHeight: 1.7 }}
        >
          One Process. Every Channel. Fully Managed. We don't just manage tasks — we run your entire digital engine. Our process brings together strategy, execution, and analytics under one system — built to eliminate chaos and drive real results. Here's how it works.
        </p>

        {/* Steps */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="py-4 py-lg-5"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div className="row align-items-center">
                {/* Number */}
                <div className="col-lg-1 col-2 mb-3 mb-lg-0">
                  <span
                    className="fw-light"
                    style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255,255,255,0.25)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="col-lg-4 col-10 mb-3 mb-lg-0">
                  <div className="d-flex align-items-center gap-3">
                    {/* Icon Circle */}
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: '52px',
                        height: '52px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'transparent',
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-white fw-bold fs-5 mb-0">{step.title}</h4>
                  </div>
                </div>

                {/* Description */}
                <div className="col-lg-7">
                  <p
                    className="mb-0 fst-italic"
                    style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.7 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
