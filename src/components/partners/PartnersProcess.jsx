const steps = [
  { num: "01", title: "Apply", desc: "Fill out the partner application form. Tell us about your company and how you envision the partnership.", icon: "" },
  { num: "02", title: "Review", desc: "Our partnerships team evaluates your application within 48 hours and schedules an intro call.", icon: "" },
  { num: "03", title: "Onboard", desc: "Complete onboarding with dedicated partner manager. Access portal, assets, and integration docs.", icon: "" },
  { num: "04", title: "Grow", desc: "Launch joint initiatives, share leads, and track performance through your partner dashboard.", icon: "" },
];

const PartnersProcess = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Getting Started</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>How to <span className="hero-gradient-text fst-italic">Partner</span></h2>
        </div>

        <div className="row g-4 mb-3">
          {steps.map((step, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="rounded-4 p-4 h-100 position-relative glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                  <span className="fw-bold" style={{ color: 'rgba(165,0,253,0.4)', fontSize: '2rem', fontFamily: 'monospace' }}>{step.num}</span>
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1.05rem' }}>{step.title}</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{step.desc}</p>
                {i < 3 && <div className="d-none d-lg-block position-absolute" style={{ right: -20, top: '50%', transform: 'translateY(-50%)', color: 'rgba(165,0,253,0.25)', fontSize: '1.5rem', fontWeight: 'bold' }}>→</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersProcess;
