import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: '', title: 'SEO', titleHref: '/services/seo',
    links: [
      { label: 'Local', href: '/services/seo/local' },
      { label: 'Technical', href: '/services/seo/technical' },
      { label: 'International', href: '/services/seo/international' },
      { label: 'Multilingual', href: '/services/seo/multilingual' },
      { label: 'Generative Engine Optimization', href: '/services/seo/geo' },
    ],
  },
  {
    icon: '', title: 'Paid Advertising', titleHref: '/services/paid-advertising',
    links: [
      { label: 'Google Ads', href: '/services/paid-advertising/google-ads' },
      { label: 'Facebook Ads', href: '/services/paid-advertising/facebook-ads' },
      { label: 'Instagram Ads', href: '/services/paid-advertising/instagram-ads' },
      { label: 'YouTube Ads', href: '/services/paid-advertising/youtube-ads' },
      { label: 'X (Twitter) Ads', href: '/services/paid-advertising/x-ads' },
      { label: 'Amazon Ads', href: '/services/paid-advertising/amazon-ads' },
    ],
  },
  {
    icon: '', title: 'Digital Design', titleHref: '/services/digital-design',
    links: [
      { label: 'Web Design', href: '/services/digital-design/web-design' },
      { label: 'UI/UX Design', href: '/services/digital-design/ui-ux-design' },
      { label: 'Branding', href: '/services/digital-design/branding' },
    ],
  },
];

const servicesRight = [
  { icon: '', title: 'Social Media', href: '/services/social-media' },
  { icon: '', title: 'Email Marketing', href: '/services/email-marketing' },
  { icon: '', title: 'CRO', href: '/services/cro' },
  { icon: '', title: 'Public Relations', href: '/services/public-relations' },
  { icon: '', title: 'Digital Marketing Strategy', href: '/services/digital-strategy' },
  { icon: '', title: 'Web Analytics', href: '/services/web-analytics' },
  { icon: '', title: 'AI Marketing', href: '/services/ai-marketing' },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const closeDropdown = () => setOpenDropdown(null);

  const navLinkStyle = {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.88rem',
    transition: 'color 0.3s ease',
  };

  const simpleDropdown = (name, items) => (
    <ul className={`dropdown-menu border-0 shadow-lg rounded-4 p-2 ${openDropdown === name ? 'show' : ''}`}
      style={{ background: '#141420', border: '1px solid rgba(255,255,255,0.06)' }}>
      {items.map((item, i) => (
        <li key={i}><a className="dropdown-item rounded-3 py-2 text-white" href="#" style={{ fontSize: '0.85rem' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(165,0,253,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >{item}</a></li>
      ))}
    </ul>
  );

  return (
    <header className="position-fixed top-0 start-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <nav
        className="navbar navbar-expand-lg rounded-pill px-4 py-2 mx-auto"
        style={{
          maxWidth: '1320px',
          background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(10, 10, 15, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.15)',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container-fluid px-0">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="/">
            <img 
              src="https://techgeekzservices.com/wp-content/uploads/2024/01/Untitled-500-x-300-px-500-x-200-px-1.png" 
              alt="TechGeekz Logo" 
              height="44" 
              style={{ objectFit: 'contain', transition: 'opacity 0.3s' }}
            />
          </a>

          {/* Mobile Toggle */}
          <button className="navbar-toggler border-0" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>

          {/* Nav Links */}
          <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-1">

              {/* ===== OUR SERVICES MEGA MENU ===== */}
              <li
                className="nav-item position-static"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link fw-medium px-3 dropdown-toggle" href="#" style={navLinkStyle}
                  onClick={(e) => e.preventDefault()}>
                  Our Services
                </a>

                {/* Mega Menu */}
                <div
                  className={`position-absolute rounded-4 ${openDropdown === 'services' ? 'd-block' : 'd-none'}`}
                  style={{
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '900px',
                    maxWidth: '95vw',
                    background: '#0f0f1a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    padding: '28px 32px',
                    marginTop: '8px',
                    animation: 'fadeInUp 0.2s ease-out',
                  }}
                >
                  <div className="d-flex gap-4">
                    {/* Left Columns - Services with sub-links */}
                    <div className="d-flex gap-4" style={{ flex: 3 }}>
                      {servicesData.map((cat, i) => (
                        <div key={i} style={{ minWidth: '140px' }}>
                          <Link to={cat.titleHref} onClick={closeDropdown} className="d-flex align-items-center gap-2 mb-3 text-decoration-none">
                            <span style={{ fontSize: '0.7rem' }}>{cat.icon}</span>
                            <span className="text-white fw-bold" style={{ fontSize: '0.85rem' }}>{cat.title}</span>
                          </Link>
                          <div className="d-flex flex-column gap-1">
                            {cat.links.map((link, j) => (
                              <Link
                                key={j}
                                to={link.href}
                                onClick={closeDropdown}
                                className="text-decoration-none d-flex align-items-center gap-1"
                                style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#a500fd'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                              >
                                <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)' }}>•</span>
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column - Single link services */}
                    <div style={{ flex: 1, borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '24px' }}>
                      <div className="d-flex flex-column gap-2">
                        {servicesRight.map((svc, i) => (
                          <Link
                            key={i}
                            to={svc.href}
                            onClick={closeDropdown}
                            className="d-flex align-items-center gap-2 text-decoration-none py-1 px-2 rounded-3"
                            style={{ color: '#fff', fontSize: '0.82rem', transition: 'background 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(165,0,253,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            <span style={{ fontSize: '0.7rem' }}>{svc.icon}</span>
                            <span className="fw-medium">{svc.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>


              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#" style={navLinkStyle}>Success Stories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium px-3" href="#" style={navLinkStyle}>Our people</a>
              </li>


              {/* ===== BLOG LINK + DROPDOWN ===== */}
              <li
                className="nav-item position-static"
                onMouseEnter={() => handleMouseEnter('blog')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="nav-link fw-medium px-3 dropdown-toggle" to="/blog" style={navLinkStyle}>Blog</Link>

                <div
                  className={`position-absolute rounded-4 ${openDropdown === 'blog' ? 'd-block' : 'd-none'}`}
                  style={{
                    top: '100%',
                    right: '10%',
                    width: '520px',
                    maxWidth: '95vw',
                    background: '#0f0f1a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    padding: '28px 32px',
                    marginTop: '8px',
                    animation: 'fadeInUp 0.2s ease-out',
                  }}
                >
                  <div className="d-flex gap-4">
                    <div style={{ flex: 1, borderRight: '1px solid rgba(255,255,255,0.06)', paddingRight: '24px' }}>
                      <h5 className="text-white fw-bold mb-3" style={{ fontSize: '1.1rem' }}>TechGeekz Academy</h5>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                        Access in-depth guides, cutting-edge strategies, and insider insights to stay ahead of the curve.
                      </p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="d-flex flex-column gap-2">
                        {[
                          { label: 'Guides', slug: 'guides' },
                          { label: 'Strategies', slug: 'strategies' },
                          { label: 'Ratings', slug: 'ratings' },
                          { label: 'Our Authors', slug: 'authors' },
                          { label: 'Editorial Standards', slug: 'editorial' },
                        ].map((link, j) => (
                          <Link key={j} to={`/blog/${link.slug}`} onClick={closeDropdown} className="text-decoration-none fw-medium py-1"
                            style={{ color: '#fff', fontSize: '0.85rem', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#a500fd'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                          >{link.label}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* ===== COMPANY MEGA MENU ===== */}
              <li
                className="nav-item position-static"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <a className="nav-link fw-medium px-3 dropdown-toggle" href="#" style={navLinkStyle}
                  onClick={(e) => e.preventDefault()}>Company</a>

                <div
                  className={`position-absolute rounded-4 ${openDropdown === 'company' ? 'd-block' : 'd-none'}`}
                  style={{
                    top: '100%',
                    right: '5%',
                    width: '560px',
                    maxWidth: '95vw',
                    background: '#0f0f1a',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                    padding: '28px 32px',
                    marginTop: '8px',
                    animation: 'fadeInUp 0.2s ease-out',
                  }}
                >
                  <div className="d-flex gap-4">
                    {/* Left - Description */}
                    <div style={{ flex: 1, borderRight: '1px solid rgba(255,255,255,0.06)', paddingRight: '24px' }}>
                      <h5 className="text-white fw-bold mb-3" style={{ fontSize: '1.1rem' }}>Company</h5>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                        Our strength lies in our people. We foster a culture of creativity, collaboration, and continuous learning to tackle the industry's biggest challenges.
                      </p>
                    </div>

                    {/* Right - Links */}
                    <div style={{ flex: 1 }}>
                      <div className="d-flex flex-column gap-2">
                        {[{ label: 'About Us', href: '/about' }, { label: 'Referral Program', href: '/referral' }, { label: 'Rewards And Recognition', href: '#' }, { label: 'Marketing And Technology Partners', href: '/partners' }, { label: 'Careers', href: '#' }, { label: 'Events', href: '#' }, { label: 'Contacts', href: '/contact' }].map((link, j) => (
                          <Link key={j} to={link.href} className="text-decoration-none fw-medium py-1"
                            style={{ color: '#fff', fontSize: '0.85rem', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#a500fd'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                            onClick={closeDropdown}
                          >{link.label}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <a href="#" className="btn btn-cta rounded-pill px-4 py-2 fw-semibold text-white text-decoration-none" style={{ fontSize: '0.85rem' }}>
              Book Intro Call
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
