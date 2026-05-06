const teamLeaders = [
  { name: 'Alex Chen', role: 'CEO & Co-Founder', gradient: '#a500fd', accent: '#a500fd' },
  { name: 'Sarah Kim', role: 'COO & Co-Founder', gradient: '#a500fd', accent: '#a855f7' },
  { name: 'Michael Torres', role: 'CTO', gradient: '#a500fd', accent: '#10b981' },
  { name: 'Emily Davis', role: 'CMO', gradient: '#a500fd', accent: '#d97706' },
];

const teamMembers = [
  { name: 'James Wilson', role: 'Head of SEO', gradient: '#a500fd' },
  { name: 'Anna Park', role: 'Head of PPC', gradient: '#a500fd' },
  { name: 'David Brown', role: 'Head of Design', gradient: '#a500fd' },
  { name: 'Lisa Wang', role: 'Head of Content', gradient: '#a500fd' },
  { name: 'Ryan Clark', role: 'Sr. Strategist', gradient: '#a500fd' },
  { name: 'Sophie Miller', role: 'Sr. Developer', gradient: '#a500fd' },
  { name: 'Tom Anderson', role: 'Account Director', gradient: '#a500fd' },
  { name: 'Nina Patel', role: 'PR Manager', gradient: '#a500fd' },
];

const AboutTeam = () => {
  return (
    <>
      {/* Leadership */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{
              background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)',
              fontSize: '0.68rem', color: '#a500fd', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600,
            }}>Leadership</div>
            <h2 className="text-white display-6 fw-bold fst-italic mb-2" style={{ letterSpacing: '-1px' }}>Meet the Leadership</h2>
            <p className="small mx-auto" style={{ maxWidth: '420px', color: 'rgba(255,255,255,0.4)' }}>
              The people behind the strategy, the vision, and the results
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {teamLeaders.map((member, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="rounded-4 overflow-hidden text-center"
                  style={{
                    background: '#111118', border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease', cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${member.accent}15`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div className="d-flex align-items-center justify-content-center position-relative" style={{ height: '200px', background: member.gradient }}>
                    {/* Subtle pattern overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(0,0,0,0.3), transparent 60%)' }} />
                    <div className="rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: '90px', height: '90px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" /></svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h5 className="text-white fw-bold mb-1" style={{ fontSize: '0.92rem' }}>{member.name}</h5>
                    <p className="mb-0" style={{ fontSize: '0.7rem', color: member.accent }}>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-white text-center display-6 fw-bold fst-italic mb-5" style={{ letterSpacing: '-1px' }}>Our Experts</h2>
          <div className="row g-3">
            {teamMembers.map((member, i) => (
              <div className="col-lg-3 col-md-4 col-6" key={i}>
                <div className="rounded-4 overflow-hidden text-center"
                  style={{
                    background: '#111118', border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s ease, transform 0.3s ease', cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div className="d-flex align-items-center justify-content-center" style={{ height: '140px', background: member.gradient }}>
                    <div className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 10-16 0" /></svg>
                    </div>
                  </div>
                  <div className="p-3">
                    <h6 className="text-white fw-bold mb-0" style={{ fontSize: '0.8rem' }}>{member.name}</h6>
                    <p className="mb-0" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
