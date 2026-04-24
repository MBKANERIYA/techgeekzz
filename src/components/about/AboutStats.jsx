const AboutStats = () => {
  const stats = [
    { num: '4,000+', label: 'Campaigns Launched', desc: 'Across SEO, PPC, social, email, and influencer marketing.', accent: '#8b5cf6' },
    { num: '96%', label: 'Client Retention Rate', desc: 'Our clients stay because we consistently deliver measurable growth.', accent: '#3b82f6' },
    { num: '3x', label: 'Average ROI', desc: 'The average return our clients see within the first 6 months.', accent: '#ec4899' },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, i) => (
            <div className="col-lg-4" key={i}>
              <div className="rounded-4 p-4 p-lg-5 h-100 position-relative overflow-hidden"
                style={{
                  background: 'rgba(17,17,24,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.4s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = stat.accent + '25'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Large background number */}
                <div style={{
                  position: 'absolute', top: '-10px', right: '-10px',
                  fontSize: '6rem', fontWeight: 900, color: 'rgba(255,255,255,0.02)',
                  lineHeight: 1, pointerEvents: 'none',
                }}>{stat.num}</div>

                <div className="position-relative">
                  <div className="d-inline-block rounded-pill px-2 py-1 mb-3"
                    style={{ background: stat.accent + '15', fontSize: '0.6rem', color: stat.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                  <h3 className="fw-bold mb-3" style={{
                    background: `linear-gradient(135deg, ${stat.accent}, ${stat.accent}99)`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    fontSize: '2.8rem', letterSpacing: '-1px',
                  }}>{stat.num}</h3>
                  <p className="mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>{stat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
