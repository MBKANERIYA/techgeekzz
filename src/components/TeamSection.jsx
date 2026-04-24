const Avatar = ({ size = 60, initials, glow = false }) => (
  <div
    className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: glow
        ? 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc)'
        : '#1e1e2a',
      border: glow ? 'none' : '2px solid rgba(255,255,255,0.1)',
      boxShadow: glow ? '0 0 40px rgba(139, 92, 246, 0.4)' : 'none',
      fontSize: `${size * 0.3}px`,
      color: '#ccc',
      fontWeight: 600,
    }}
  >
    {initials}
  </div>
);

const TeamMember = ({ name, hours, initials, size = 60, glow = false }) => (
  <div className="text-center">
    <Avatar size={size} initials={initials} glow={glow} />
    <p className="text-white fw-semibold mt-2 mb-0" style={{ fontSize: '0.85rem' }}>
      {name}
    </p>
    <p className="mb-0" style={{ fontSize: '0.8rem', color: '#888' }}>
      {hours} hours
    </p>
  </div>
);

const bottomRow = [
  { name: 'SEO / PPC Specialist', hours: 15, initials: 'SP' },
  { name: 'Analytics Lead', hours: 6, initials: 'AL' },
  { name: 'Copywriter', hours: 30, initials: 'CW' },
  { name: 'Creative Producer\n(Static & Video)', hours: 15, initials: 'CP' },
  { name: 'UX/UI Designer', hours: 5, initials: 'UD' },
  { name: 'Content Distribution\nManager', hours: 8, initials: 'CM' },
];

const TeamSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
          Your Full Subscription-Based Team
        </h2>
        <p className="text-secondary text-center small fst-italic mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
          An estimated schedule of specialists' working hours under the $12,800/month rate is outlined
        </p>

        {/* Org Chart */}
        <div className="position-relative" style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Level 1 - Project Director */}
          <div className="text-center mb-0">
            <TeamMember name="Project Director" hours={11} initials="PD" />
          </div>

          {/* Connector: Director → Middle row */}
          <div className="d-flex justify-content-center">
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
          </div>

          {/* Level 2 - Middle Management */}
          <div className="position-relative">
            {/* Horizontal connector line */}
            <div
              className="position-absolute"
              style={{
                top: '35px',
                left: '20%',
                right: '20%',
                height: '1px',
                background: 'rgba(255,255,255,0.15)',
              }}
            />

            <div className="row align-items-center">
              {/* Project Manager */}
              <div className="col-4 text-center">
                <TeamMember name="Project Manager" hours={50} initials="PM" />
              </div>

              {/* Head of Digital - center, larger, glowing */}
              <div className="col-4 text-center">
                <TeamMember name="Head of Digital" hours={13} initials="HD" size={100} glow={true} />
              </div>

              {/* Digital Strategist */}
              <div className="col-4 text-center">
                <TeamMember name="Digital Strategist" hours={7} initials="DS" />
              </div>
            </div>
          </div>

          {/* Connector: Middle → Bottom row */}
          <div className="d-flex justify-content-center mt-2">
            <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)' }} />
          </div>

          {/* Horizontal branch line for bottom row */}
          <div className="position-relative">
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.15)',
                margin: '0 40px',
              }}
            />
            {/* Vertical drops from branch to each person */}
            <div className="d-flex justify-content-between" style={{ padding: '0 40px' }}>
              {bottomRow.map((_, i) => (
                <div key={i} className="d-flex justify-content-center" style={{ flex: 1 }}>
                  <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Level 3 - Bottom Row */}
          <div className="d-flex justify-content-between" style={{ padding: '0 20px' }}>
            {bottomRow.map((member, i) => (
              <div key={i} className="text-center" style={{ flex: 1, padding: '0 8px' }}>
                <Avatar size={50} initials={member.initials} />
                <p className="text-white fw-semibold mt-2 mb-0" style={{ fontSize: '0.75rem', lineHeight: 1.3 }}>
                  {member.name.split('\n').map((line, j) => (
                    <span key={j}>{line}{j === 0 && member.name.includes('\n') && <br />}</span>
                  ))}
                </p>
                <p className="mb-0" style={{ fontSize: '0.75rem', color: '#888' }}>
                  {member.hours} hours
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
