const techPartners = [
  { name: "Google", category: "Advertising", tier: "Premier" },
  { name: "Meta", category: "Social Media", tier: "Business" },
  { name: "HubSpot", category: "CRM & Marketing", tier: "Solutions" },
  { name: "Salesforce", category: "CRM", tier: "Consulting" },
  { name: "Shopify", category: "E-Commerce", tier: "Plus" },
  { name: "Semrush", category: "SEO & Analytics", tier: "Agency" },
  { name: "Klaviyo", category: "Email Marketing", tier: "Master" },
  { name: "Ahrefs", category: "SEO Tools", tier: "Enterprise" },
  { name: "Stripe", category: "Payments", tier: "Certified" },
  { name: "AWS", category: "Cloud Infrastructure", tier: "Partner" },
  { name: "Figma", category: "Design", tier: "Professional" },
  { name: "Webflow", category: "Web Development", tier: "Expert" },
];

const marketingPartners = [
  { name: "Mailchimp", category: "Email Automation" },
  { name: "Mixpanel", category: "Product Analytics" },
  { name: "Hotjar", category: "UX Analytics" },
  { name: "Zapier", category: "Workflow Automation" },
  { name: "Intercom", category: "Customer Messaging" },
  { name: "Drift", category: "Conversational AI" },
  { name: "Moz", category: "SEO Platform" },
  { name: "Unbounce", category: "Landing Pages" },
];

const PartnersLogos = () => {
  return (
    <section id="partner-logos">
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Our Ecosystem</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Technology <span className="hero-gradient-text fst-italic">Partners</span></h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 520, fontSize: '0.9rem' }}>Certified partnerships with the platforms that power modern marketing.</p>
        </div>

        {/* Technology Partners Grid */}
        <div className="row g-3 mb-5">
          {techPartners.map((partner, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <div
                className="rounded-4 p-4 h-100 text-center position-relative overflow-hidden glow-card"
                style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Logo placeholder */}
                <div className="d-flex align-items-center justify-content-center mb-3 mx-auto rounded-3" style={{ width: 56, height: 56, background: 'rgba(165,0,253,0.12)', border: '1px solid rgba(165,0,253,0.2)' }}>
                  <span className="fw-bold text-white" style={{ fontSize: '1.1rem' }}>{partner.name.charAt(0)}</span>
                </div>
                <h6 className="text-white fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{partner.name}</h6>
                <p className="text-secondary mb-2" style={{ fontSize: '0.72rem' }}>{partner.category}</p>
                <span className="d-inline-block rounded-pill px-2 py-1" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.65rem', fontWeight: 600 }}>{partner.tier}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Partners */}
        <div className="text-center mb-4">
          <h3 className="text-white fw-bold" style={{ fontSize: '1.3rem' }}>Marketing <span className="hero-gradient-text fst-italic">Integrations</span></h3>
        </div>
        <div className="row g-3">
          {marketingPartners.map((partner, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <div className="rounded-4 p-3 text-center glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center justify-content-center mb-2 mx-auto rounded-circle" style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="fw-bold" style={{ color: '#a500fd', fontSize: '0.95rem' }}>{partner.name.charAt(0)}</span>
                </div>
                <h6 className="text-white fw-semibold mb-0" style={{ fontSize: '0.82rem' }}>{partner.name}</h6>
                <p className="text-secondary mb-0" style={{ fontSize: '0.7rem' }}>{partner.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogos;
