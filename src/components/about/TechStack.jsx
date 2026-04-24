const tools = [
  { name: 'Google Ads', color: '#4285F4', abbr: 'GA' },
  { name: 'Meta Ads', color: '#0668E1', abbr: 'MA' },
  { name: 'HubSpot', color: '#FF7A59', abbr: 'HS' },
  { name: 'SEMrush', color: '#FF642D', abbr: 'SR' },
  { name: 'Ahrefs', color: '#1A73E8', abbr: 'AH' },
  { name: 'Figma', color: '#A259FF', abbr: 'FG' },
  { name: 'Slack', color: '#611f69', abbr: 'SL' },
  { name: 'Analytics', color: '#E37400', abbr: 'AN' },
];

const TechStack = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-white display-6 fw-bold fst-italic mb-2" style={{ letterSpacing: '-1px' }}>Our Technology Stack</h2>
          <p className="small mx-auto" style={{ maxWidth: '460px', color: 'rgba(255,255,255,0.4)' }}>
            We use the best tools in the industry to drive results
          </p>
        </div>
        <div className="row g-3 justify-content-center">
          {tools.map((tool, i) => (
            <div className="col-lg-3 col-md-4 col-6" key={i}>
              <div className="rounded-4 p-3 d-flex align-items-center gap-3 position-relative overflow-hidden"
                style={{
                  background: 'rgba(17,17,24,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tool.color + '30';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 12px 30px ${tool.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '42px', height: '42px',
                    background: `linear-gradient(135deg, ${tool.color}20, ${tool.color}08)`,
                    border: `1px solid ${tool.color}18`,
                  }}>
                  <span className="fw-bold" style={{ color: tool.color, fontSize: '0.7rem' }}>{tool.abbr}</span>
                </div>
                <div>
                  <span className="text-white fw-semibold" style={{ fontSize: '0.82rem' }}>{tool.name}</span>
                  <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Platform</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
