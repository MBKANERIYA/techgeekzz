const benefits = [
  {
    icon: "",
    title: "Revenue Growth",
    description: "Unlock new revenue streams through referral commissions, co-selling opportunities, and white-label service delivery.",
    stat: "35%",
    statLabel: "avg. revenue increase",
  },
  {
    icon: "",
    title: "Global Reach",
    description: "Tap into our network spanning 30+ countries. Access new markets and audiences through joint campaigns and shared resources.",
    stat: "30+",
    statLabel: "countries served",
  },
  {
    icon: "",
    title: "Technical Support",
    description: "Dedicated integration engineers, shared documentation, and priority API access to build seamless connected experiences.",
    stat: "24/7",
    statLabel: "partner support",
  },
  {
    icon: "",
    title: "Co-Marketing",
    description: "Joint case studies, webinars, blog content, and event sponsorships. Amplify your brand alongside TechGeekz.",
    stat: "50+",
    statLabel: "co-branded campaigns",
  },
  {
    icon: "",
    title: "Lead Sharing",
    description: "Qualified lead routing and shared pipeline management. We send you leads that match your ICP — and vice versa.",
    stat: "500+",
    statLabel: "leads shared annually",
  },
  {
    icon: "",
    title: "Partner Portal",
    description: "Access exclusive tools, marketing assets, deal registration, training resources, and real-time performance dashboards.",
    stat: "100%",
    statLabel: "self-serve portal",
  },
];

const PartnersBenefits = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Why Partner With Us</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Partnership <span className="hero-gradient-text fst-italic">Benefits</span></h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 520, fontSize: '0.9rem' }}>Everything you need to grow together — from revenue sharing to co-marketing.</p>
        </div>

        <div className="row g-4">
          {benefits.map((b, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="rounded-4 p-4 h-100 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-3" style={{ width: 48, height: 48, background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)' }}>
                    <span style={{ fontSize: '1.3rem' }}>{b.icon}</span>
                  </div>
                  <div className="text-end">
                    <span className="fw-bold hero-gradient-text" style={{ fontSize: '1.3rem' }}>{b.stat}</span>
                    <div className="text-secondary" style={{ fontSize: '0.65rem' }}>{b.statLabel}</div>
                  </div>
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1rem' }}>{b.title}</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBenefits;
