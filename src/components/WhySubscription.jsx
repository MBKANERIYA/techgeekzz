import { useState } from 'react';

const reasons = [
  {
    title: 'Full Coverage',
    subtitle: 'Every channel, one team',
    gradient: '#a500fd',
    description: "Instead of managing separate agencies for SEO, PPC, content, and design, you get a unified team that collaborates internally. Everyone works toward your business results — not isolated KPIs — so strategy, execution, and outcomes stay fully connected.",
  },
  {
    title: 'Unified Strategy',
    subtitle: 'No more disconnected efforts.',
    gradient: '#a500fd',
    description: "We build a single, cohesive plan across channels — so your campaigns support each other, your messaging stays consistent, and every move drives toward one business outcome.",
  },
  {
    title: 'Clarity & Control',
    subtitle: "You always know what's happening — and why.",
    gradient: '#a500fd',
    description: "With crystal-clear billing, weekly updates, and structured task tracking, you have full visibility into progress, priorities, and performance. No hidden hours, no scattered reports.",
  },
  {
    title: 'Time Efficiency',
    subtitle: 'You get a team — without managing one.',
    gradient: '#a500fd',
    description: "No hiring. No micromanagement. Our team runs autonomously, aligned to your goals, and communicates proactively — so you focus on growth, not day-to-day oversight.",
  },
];

// Stagger offsets for bottom-left → top-right (padding-top values)
const staggerOffsets = [300, 220, 130, 40];

const WhyTechGeekz = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold fst-italic mb-5 pb-3" style={{ letterSpacing: '-1px' }}>
          Why Full-Service Digital
          <br />
          Marketing Works Better
          <br />
          Than Traditional Agencies?
        </h2>

        {/* Cards */}
        <div className="row g-0 mb-5">
          {reasons.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                className="col-lg-3 col-md-6"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="ps-4 d-flex flex-column"
                  style={{
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    height: '400px',
                    overflow: 'hidden',
                    justifyContent: isHovered ? 'center' : 'flex-start',
                    paddingTop: isHovered ? '0px' : `${staggerOffsets[index]}px`,
                    transition: 'padding-top 1.1s ease, justify-content 1.1s ease',
                  }}
                >
                  {/* Title */}
                  <h4 className="text-white fw-bold fs-4 mb-2">{item.title}</h4>

                  {/* Subtitle */}
                  <p
                    className="fw-medium mb-0"
                    style={{
                      background: item.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.subtitle}
                  </p>

                  {/* Description - revealed on hover, centered */}
                  <div
                    style={{
                      maxHeight: isHovered ? '250px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 1.2s ease, opacity 1s ease 0.2s',
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    <div className="mt-4 mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" opacity="0.4">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="#666" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="#666" />
                      </svg>
                    </div>
                    <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          className="rounded-4 text-center py-4 px-4 mx-auto"
          style={{
            border: '1px solid transparent',
            borderImage: '#a500fd 1',
            maxWidth: '800px',
          }}
        >
          <p className="text-white mb-1" style={{ fontSize: '0.95rem' }}>
            You don't need a full-time marketing team — you need results.
          </p>
          <p className="mb-0" style={{ fontSize: '0.95rem' }}>
            <span
              style={{
                background: '#a500fd',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              With our full-service model
            </span>
            <span className="text-white">, you get a full team focused on delivering them</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTechGeekz;
