import teamEvent1 from '../assets/team-event-1.png';
import teamEvent2 from '../assets/team-event-2.png';

const Hero = () => {
  return (
    <section className="py-4 d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '77vh' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/heroes/hero-business.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.95) 100%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container">
        <div className="row align-items-start overflow-visible">
          {/* Left Content */}
          <div className="col-lg-7 overflow-visible pe-lg-5">
            <div className="w-100 overflow-visible">
              <h1 className="display-2 fw-bold text-white mb-4 overflow-visible" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
                All your marketing
                <br />
                needs <span className="hero-gradient-text fst-italic fw-normal">in one single monthly subscription</span>
              </h1>

              <p className="text-secondary mb-4 fs-5" style={{ lineHeight: 1.7 }}>
                Crystal-clear hourly billing and hundreds of marketing and creative
                experts at your disposal. That's what you get when you sign up for
                NinjaPromo's all-in-one marketing service.
              </p>

              <div className="d-flex align-items-center gap-3 flex-wrap">
                <a href="#" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none fs-6">Book a demo</a>
                <p className="text-muted mb-0" style={{ maxWidth: '240px', fontSize: '0.9rem' }}>
                  Design, develop, create ads, and more within
                  one handy marketing subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="d-grid gap-3" style={{ gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: 'auto auto auto' }}>
              {/* Large Image Card - spans 2 rows */}
              <div style={{ gridColumn: 1, gridRow: '1 / 3' }}>
                <div className="rounded-4 overflow-hidden" style={{ height: '380px', background: '#1a1a24' }}>
                  <img src={teamEvent1} alt="Team at Seamless Dubai" className="w-100 h-100 object-fit-cover d-block" />
                </div>
                <div className="d-flex align-items-center gap-2 mt-3 ps-1">
                  <span className="text-white fw-semibold">Seamless</span>
                  <span className="text-white-50 small d-flex align-items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Dubai
                  </span>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="rounded-4 p-4 d-flex align-items-center gap-3" style={{ background: '#1e1e2a', gridColumn: 2, gridRow: 1 }}>
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="white" stroke="#333" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="5" fill="#ff3d2e"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white fw-bold fs-4">4.9+ <span style={{ color: '#ff3d2e' }}>★</span></div>
                  <div className="text-secondary small">rating on Clutch</div>
                </div>
              </div>

              {/* Small Image Card */}
              <div style={{ gridColumn: 2, gridRow: 2 }}>
                <div className="rounded-4 overflow-hidden" style={{ height: '200px', background: '#1a1a24' }}>
                  <img src={teamEvent2} alt="Team at Gitex Berlin" className="w-100 h-100 object-fit-cover d-block" />
                </div>
                <div className="d-flex align-items-center gap-2 mt-3 ps-1">
                  <span className="text-white fw-semibold">Gitex</span>
                  <span className="text-white-50 small d-flex align-items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Berlin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
