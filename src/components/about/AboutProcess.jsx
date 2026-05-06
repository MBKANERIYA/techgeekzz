const steps = [
  { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and challenges in a no-pressure intro call.', accent: '#a500fd' },
  { step: '02', title: 'Strategy & Plan', desc: 'We build a custom strategy with clear deliverables, timelines, and KPIs.', accent: '#a500fd' },
  { step: '03', title: 'Execute & Optimize', desc: 'Our team goes to work — launching, testing, and optimizing across all channels.', accent: '#a500fd' },
  { step: '04', title: 'Report & Scale', desc: 'Monthly reports, weekly calls, and continuous improvements to grow your ROI.', accent: '#ec4899' },
];

const AboutProcess = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-white display-6 fw-bold fst-italic mb-2" style={{ letterSpacing: '-1px' }}>
            Our Process is <span className="hero-gradient-text">Simple</span>
          </h2>
          <p className="small mx-auto" style={{ maxWidth: '460px', color: 'rgba(255,255,255,0.4)' }}>From kickoff to results in weeks, not months</p>
        </div>

        <div className="row g-3 position-relative">
          {/* Connecting line */}
          <div className="d-none d-lg-block" style={{
            position: 'absolute', top: '50px', left: '15%', right: '15%', height: '2px',
            background: '#a500fd',
            opacity: 0.15, zIndex: 0,
          }} />

          {steps.map((p, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="rounded-4 p-4 h-100 text-center position-relative"
                style={{
                  background: 'rgba(17,17,24,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.4s ease, transform 0.3s ease',
                  zIndex: 1,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.accent + '25'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Step circle */}
                <div className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                  style={{
                    width: '56px', height: '56px',
                    background: 'rgba(165,0,253,0.1)',
                    border: `1px solid ${p.accent}25`,
                  }}>
                  <span className="fw-bold" style={{ color: p.accent, fontSize: '1.1rem' }}>{p.step}</span>
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '0.95rem' }}>{p.title}</h5>
                <p className="mb-0" style={{ fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
