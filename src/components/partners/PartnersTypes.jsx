const types = [
  {
    icon: "",
    title: "Technology Partners",
    description: "Integrate your platform with TechGeekz to offer joint solutions. We embed your tools into our workflows and co-market to shared audiences.",
    benefits: ["API & SDK integration support", "Co-branded documentation", "Joint webinars & events", "Dedicated integration engineer"],
    color: "#a500fd",
  },
  {
    icon: "",
    title: "Agency Partners",
    description: "White-label our services or refer overflow work. We act as your silent growth engine while you maintain client relationships.",
    benefits: ["White-label fulfillment", "Revenue sharing model", "Shared Slack channel", "Priority SLA guarantees"],
    color: "#3b82f6",
  },
  {
    icon: "",
    title: "Strategic Alliance",
    description: "For enterprise-level collaborations. Joint go-to-market strategies, shared pipelines, and exclusive co-selling opportunities.",
    benefits: ["Joint GTM strategy", "Co-selling & pipeline sharing", "Executive sponsor pairing", "Quarterly business reviews"],
    color: "#ec4899",
  },
  {
    icon: "",
    title: "Education Partners",
    description: "Collaborate on thought leadership, training programs, and certification courses. Build the next generation of digital marketers together.",
    benefits: ["Co-authored research", "Guest lecture programs", "Certification pathways", "Student internship pipeline"],
    color: "#10b981",
  },
];

const PartnersTypes = () => {
  return (
    <section id="partner-types">
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Partnership Models</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Find Your <span className="hero-gradient-text fst-italic">Partnership Fit</span></h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 520, fontSize: '0.9rem' }}>Choose the partnership model that best aligns with your goals and capabilities.</p>
        </div>

        <div className="row g-4">
          {types.map((type, i) => (
            <div key={i} className="col-lg-6">
              <div
                className="rounded-4 p-4 p-lg-5 h-100 position-relative overflow-hidden"
                style={{
                  background: '#12121a',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.3)`;
                  e.currentTarget.style.borderColor = `${type.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Corner glow */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'transparent', pointerEvents: 'none' }} />

                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: 52, height: 52, background: `${type.color}15`, border: `1px solid ${type.color}30` }}>
                      <span style={{ fontSize: '1.4rem' }}>{type.icon}</span>
                    </div>
                    <h3 className="text-white fw-bold mb-0" style={{ fontSize: '1.15rem' }}>{type.title}</h3>
                  </div>

                  <p className="text-secondary mb-4" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{type.description}</p>

                  <div className="row g-2">
                    {type.benefits.map((benefit, j) => (
                      <div key={j} className="col-6">
                        <div className="d-flex align-items-center gap-2">
                          <span style={{ color: type.color, fontSize: '0.7rem' }}></span>
                          <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersTypes;
