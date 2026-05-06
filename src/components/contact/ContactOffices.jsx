const offices = [
  {
    city: "New York",
    country: "United States",
    flag: "🇺🇸",
    address: "1411 Broadway, 16th Floor, New York, NY 10018",
    phone: "+1 929-492-4413",
    email: "us@TechGeekz.io",
    timezone: "EST (UTC-5)",
  },
  {
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
    phone: "+44 20 3868 4672",
    email: "uk@TechGeekz.io",
    timezone: "GMT (UTC+0)",
  },
  {
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    address: "68 Circular Road, #02-01, Singapore 049422",
    phone: "+65 3165 4789",
    email: "sg@TechGeekz.io",
    timezone: "SGT (UTC+8)",
  },
  {
    city: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
    address: "Business Bay, Al Manara Tower, Office 2105, Dubai",
    phone: "+971 54 237 6132",
    email: "uae@TechGeekz.io",
    timezone: "GST (UTC+4)",
  },
];

const ContactOffices = () => {
  return (
    <section>
      <div className="container">
        <hr className="premium-divider" />
        <div className="text-center mb-5 pt-4">
          <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.15)', color: '#a500fd', fontSize: '0.78rem', fontWeight: 600 }}>Global Presence</span>
          <h2 className="display-6 fw-bold text-white" style={{ letterSpacing: '-1px' }}>Our <span className="hero-gradient-text fst-italic">Offices</span></h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 480, fontSize: '0.9rem' }}>With teams across 4 continents, we are always within reach.</p>
        </div>

        <div className="row g-4">
          {offices.map((office, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div
                className="rounded-4 p-4 h-100 glow-card"
                style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{office.flag}</span>
                  <div>
                    <h5 className="text-white fw-bold mb-0" style={{ fontSize: '1.05rem' }}>{office.city}</h5>
                    <span className="text-secondary" style={{ fontSize: '0.72rem' }}>{office.country}</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3 mt-3">
                  <div>
                    <div className="text-secondary mb-1" style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Address</div>
                    <div className="text-white" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>{office.address}</div>
                  </div>
                  <div>
                    <div className="text-secondary mb-1" style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Phone</div>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-white text-decoration-none" style={{ fontSize: '0.8rem' }}>{office.phone}</a>
                  </div>
                  <div>
                    <div className="text-secondary mb-1" style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Email</div>
                    <a href={`mailto:${office.email}`} className="text-decoration-none" style={{ fontSize: '0.8rem', color: '#a500fd' }}>{office.email}</a>
                  </div>
                  <div className="rounded-pill px-2 py-1 d-inline-block mt-1" style={{ background: 'rgba(165,0,253,0.08)', border: '1px solid rgba(165,0,253,0.12)', width: 'fit-content' }}>
                    <span className="text-secondary" style={{ fontSize: '0.68rem' }}> {office.timezone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOffices;
