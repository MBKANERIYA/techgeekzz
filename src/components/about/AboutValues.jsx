const values = [
  { icon: '🎯', title: 'Results-Driven', desc: 'We measure everything. Every campaign, every dollar, every outcome — tracked and optimized for maximum ROI.', accent: '#8b5cf6' },
  { icon: '🤝', title: 'Client-First', desc: "Your goals are our goals. We don't just execute tasks — we become an extension of your team.", accent: '#3b82f6' },
  { icon: '🚀', title: 'Innovation', desc: 'We stay ahead of trends, test new channels, and push creative boundaries to keep your brand relevant.', accent: '#ec4899' },
  { icon: '🔬', title: 'Transparency', desc: 'No black boxes. You get full visibility into what we do, why we do it, and the results it drives.', accent: '#10b981' },
];

const AboutValues = () => {
  return (
    <section className="py-5" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div className="container position-relative">
        <h2 className="text-white text-center display-6 fw-bold fst-italic mb-2" style={{ letterSpacing: '-1px' }}>What Drives Us</h2>
        <p className="text-center small mb-5 mx-auto" style={{ maxWidth: '460px', color: 'rgba(255,255,255,0.4)' }}>
          Our core values shape everything we do — from strategy to execution
        </p>
        <div className="row g-3">
          {values.map((val, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="rounded-4 p-4 h-100 text-center position-relative overflow-hidden"
                style={{
                  background: 'rgba(17,17,24,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = val.accent + '30';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px ${val.accent}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Accent glow */}
                <div style={{
                  position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${val.accent}15, transparent)`,
                  pointerEvents: 'none',
                }} />
                <div className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
                  style={{ width: '52px', height: '52px', background: val.accent + '12', fontSize: '1.5rem' }}>
                  {val.icon}
                </div>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: '0.95rem' }}>{val.title}</h5>
                <p className="mb-0" style={{ fontSize: '0.76rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
