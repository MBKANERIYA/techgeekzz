const stats = [
  {
    number: '24',
    label: 'Hours Turnaround',
    gradient: '#a500fd',
    description: 'Launch projects in less than a day. Perfect for those tight deadlines and urgent tasks.',
  },
  {
    number: '50%+',
    label: 'Output Growth',
    gradient: '#a500fd',
    description: "Get ready for a major marketing scale-up. Outpace your average agency's output.",
  },
  {
    number: '$100k',
    label: 'Saving',
    gradient: '#a500fd',
    description: 'Average saving on annual agency fees',
  },
  {
    number: '10',
    label: 'Extra Hours/Week',
    gradient: '#a500fd',
    description: 'Reclaim your schedule with simplified management. Take your time back to lead.',
  },
  {
    number: '30+',
    label: 'Services On Tap',
    gradient: '#a500fd',
    description: 'Every design and marketing service you can imagine. Available to you on-demand.',
  },
  {
    number: '1%',
    label: 'Top 1% Global Experts',
    gradient: '#a500fd',
    description: 'Build a ready-to-go vetted team. Watch your ROI shoot sky-high.',
  },
];

const StatsSection = () => {
  return (
    <section className="py-3">
      <div className="container">
        {/* Heading */}
        <h2 className="text-white text-center display-5 fw-semibold fst-italic mb-5 pb-3" style={{ letterSpacing: '-1px' }}>
          Meet the new generation
          <br />
          of digital marketing services
        </h2>

        {/* Stats Grid */}
        <div className="row g-3">
          {stats.map((stat, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="rounded-4 p-4 h-100 d-flex flex-column"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h3 className="text-white fw-bold mb-2" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>
                  {stat.number}
                </h3>
                <p
                  className="fw-semibold mb-3"
                  style={{
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '0.95rem',
                  }}
                >
                  {stat.label}
                </p>
                <p className="text-secondary small mb-0 mt-auto" style={{ lineHeight: 1.6 }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
