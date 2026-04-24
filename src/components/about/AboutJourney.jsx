const milestones = [
  { year: '2017', event: 'Founded with a vision to disrupt traditional agency models', dot: '#6366f1' },
  { year: '2018', event: 'Reached 50+ active clients across 3 continents', dot: '#8b5cf6' },
  { year: '2019', event: 'Launched subscription-based marketing model', dot: '#a855f7' },
  { year: '2020', event: 'Grew to 100+ team members, fully remote', dot: '#c084fc' },
  { year: '2021', event: 'Featured in Forbes as top marketing innovator', dot: '#d946ef' },
  { year: '2022', event: 'Expanded to 12 global offices', dot: '#ec4899' },
  { year: '2023', event: 'Surpassed $50M in managed ad spend for clients', dot: '#f43f5e' },
  { year: '2024', event: 'Named #1 Digital Marketing Agency for Startups on Clutch', dot: '#f97316' },
];

const AboutJourney = () => {
  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="text-white text-center display-6 fw-bold fst-italic mb-2" style={{ letterSpacing: '-1px' }}>Our Journey</h2>
        <p className="text-center small mb-5 mx-auto" style={{ maxWidth: '400px', color: 'rgba(255,255,255,0.4)' }}>
          From startup to global agency in 7 years
        </p>
        <div className="position-relative">
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '28px', top: 0, bottom: 0, width: '2px',
            background: 'linear-gradient(to bottom, #6366f1, #ec4899, #f97316)',
            opacity: 0.2, borderRadius: '1px',
          }} />

          {milestones.map((m, i) => (
            <div key={i} className="d-flex align-items-start gap-4 mb-1 position-relative"
              style={{ paddingLeft: '10px' }}
            >
              {/* Dot */}
              <div className="flex-shrink-0 d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%', background: m.dot,
                  boxShadow: `0 0 12px ${m.dot}40`,
                }} />
              </div>

              {/* Content card */}
              <div className="flex-grow-1 rounded-3 p-3 mb-2"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = m.dot + '20'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; }}
              >
                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold" style={{ color: m.dot, fontSize: '0.9rem', minWidth: '40px' }}>{m.year}</span>
                  <p className="mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.5)' }}>{m.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
