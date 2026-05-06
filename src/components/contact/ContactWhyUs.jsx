const reasons = [
  { icon: "", title: "Fast Turnaround", desc: "Get a custom proposal within 48 hours of your initial consultation." },
  { icon: "", title: "Tailored Strategy", desc: "No cookie-cutter plans. Every strategy is built around your unique goals." },
  { icon: "", title: "Transparent Reporting", desc: "Real-time dashboards and weekly reports so you always know what is happening." },
  { icon: "", title: "Proven Results", desc: "4.9/5 on Clutch with 80+ verified reviews. Results speak louder than promises." },
  { icon: "", title: "Global Team", desc: "100+ specialists across 4 offices covering every timezone and market." },
  { icon: "", title: "No Lock-in Contracts", desc: "Flexible engagements with no lock-in contracts. Stay because you want to, not because you have to." },
];

const ContactWhyUs = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Why Choose Us</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Why Brands <span className="hero-gradient-text fst-italic">Choose Us</span></h2>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="rounded-4 p-4 h-100 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 48, height: 48, background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)' }}>
                  <span style={{ fontSize: '1.3rem' }}>{r.icon}</span>
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1rem' }}>{r.title}</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactWhyUs;
