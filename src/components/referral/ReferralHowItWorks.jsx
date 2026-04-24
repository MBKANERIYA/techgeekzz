const steps = [
  { num: "01", title: "Sign Up", desc: "Join our referral program in under 60 seconds — no strings attached.", icon: "✍️" },
  { num: "02", title: "Share Your Link", desc: "Get a unique referral link and share it with your network.", icon: "🔗" },
  { num: "03", title: "They Sign Up", desc: "When someone subscribes through your link, we track it automatically.", icon: "🎯" },
  { num: "04", title: "Earn Rewards", desc: "Receive recurring commissions for every successful referral. Simple.", icon: "💰" },
];

const ReferralHowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Simple Process</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>How It <span className="hero-gradient-text fst-italic">Works</span></h2>
        </div>

        <div className="row g-4 mb-3">
          {steps.map((step, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="rounded-4 p-4 h-100 position-relative glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                  <span className="fw-bold" style={{ color: 'rgba(139,92,246,0.4)', fontSize: '2rem', fontFamily: 'monospace' }}>{step.num}</span>
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '1.05rem' }}>{step.title}</h5>
                <p className="text-secondary mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{step.desc}</p>
                {i < 3 && <div className="d-none d-lg-block position-absolute" style={{ right: -20, top: '50%', transform: 'translateY(-50%)', color: 'rgba(139,92,246,0.25)', fontSize: '1.5rem', fontWeight: 'bold' }}>→</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralHowItWorks;
