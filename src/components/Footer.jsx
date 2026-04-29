import { Link } from 'react-router-dom';

const services = [
  { label: 'SEO', href: '/services/seo' },
  { label: 'Paid Advertising', href: '/services/paid-advertising' },
  { label: 'Digital Design', href: '/services/digital-design' },
  { label: 'Social Media', href: '/services/social-media' },
  { label: 'Email Marketing', href: '/services/email-marketing' },
  { label: 'CRO', href: '/services/cro' },
  { label: 'Public Relations', href: '/services/public-relations' },
  { label: 'Digital Strategy', href: '/services/digital-strategy' },
  { label: 'Web Analytics', href: '/services/web-analytics' },
  { label: 'AI Marketing', href: '/services/ai-marketing' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Referral Program', href: '/referral' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact Us', href: '/contact' },
];

const socialIcons = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'X', path: 'M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L20 4h-2l-5.2 6.4L8 4H4z' },
  { name: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { name: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
  { name: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' },
  { name: 'Behance', path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 2.211 1.752 2.88 3.103 2.88 1.357 0 2.156-.553 2.653-1.851h2zm-8.684-4.512h5.22c-.073-1.424-.881-2.22-2.456-2.22-1.622 0-2.512.882-2.764 2.22zM1 18.5h5.304c3.075 0 4.652-1.617 4.652-3.813 0-2.166-1.376-2.95-2.803-3.205 1.107-.428 2.163-1.31 2.163-2.98 0-1.323-.666-3.502-4.455-3.502H1v13.5zm3.004-5.873h2.7c1.047 0 1.998.463 1.998 1.653 0 1.112-.842 1.738-2.022 1.738H4.004v-3.39zm0-4.404h2.45c.928 0 1.674.508 1.674 1.553 0 1.108-.8 1.628-1.764 1.628H4.004V8.223z' },
];

const Footer = () => {
  return (
    <footer className="pt-5 pb-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="row g-4 mb-5">
          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-4">
              <img
                src="https://techgeekzservices.com/wp-content/uploads/2024/01/Untitled-500-x-300-px-500-x-200-px-1.png"
                alt="TechGeekz Logo"
                height="50"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <a href="mailto:hello@ninjapromo.io" className="d-block text-white text-decoration-none small fw-semibold mb-3" style={{ color: '#4dabf7' }}>
              hello@ninjapromo.io
            </a>

            <div className="d-flex flex-column gap-1 mb-4">
              {['+1 929-492-4413 (US)', '+44 20 3868 4672 (UK)', '+65 3165 4789 (SG)', '+971 54 237 6132 (UAE)'].map((phone, i) => (
                <span key={i} className="text-white small" style={{ fontSize: '0.8rem' }}>{phone}</span>
              ))}
            </div>

            <p className="fw-bold small mb-1" style={{ color: '#4dabf7' }}>Want to Join The Team?</p>
            <a href="mailto:careers@ninjapromo.io" className="d-block text-secondary small text-decoration-none mb-4">careers@ninjapromo.io</a>

            <p className="fw-bold small mb-1" style={{ color: '#4dabf7' }}>Press Inquiries</p>
            <a href="mailto:media@ninjapromo.io" className="text-secondary small text-decoration-none">media@ninjapromo.io</a>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#4dabf7', fontSize: '0.85rem' }}>Services</h6>
            <div className="d-flex flex-column gap-1">
              {services.map((s, i) => (
                <Link key={i} to={s.href} className="text-secondary small text-decoration-none" style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >{s.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#4dabf7', fontSize: '0.85rem' }}>Company</h6>
            <div className="d-flex flex-column gap-1">
              {companyLinks.map((s, i) => (
                <Link key={i} to={s.href} className="text-secondary small text-decoration-none" style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >{s.label}</Link>
              ))}
            </div>

            <h6 className="fw-bold mb-3 mt-4" style={{ color: '#4dabf7', fontSize: '0.85rem' }}>Blog</h6>
            <div className="d-flex flex-column gap-1">
              {[
                { label: 'Guides', slug: 'guides' },
                { label: 'Strategies', slug: 'strategies' },
                { label: 'Ratings', slug: 'ratings' },
                { label: 'Our Authors', slug: 'authors' },
                { label: 'Editorial Standards', slug: 'editorial' },
              ].map((s, i) => (
                <Link key={i} to={`/blog/${s.slug}`} className="text-secondary small text-decoration-none" style={{ fontSize: '0.78rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >{s.label}</Link>
              ))}
            </div>
          </div>

          {/* Social + Badges */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3" style={{ color: '#4dabf7', fontSize: '0.85rem' }}>Follow Us</h6>
            <div className="d-flex gap-3 mb-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                  style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Review Badges */}
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center gap-2 rounded-pill px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="fw-bold text-white" style={{ fontSize: '0.8rem' }}>S|</span>
                <span className="text-white small" style={{ fontSize: '0.75rem' }}>Reviews on Sortlist</span>
                <span className="fw-bold small" style={{ color: '#fbbf24', fontSize: '0.75rem' }}>4.9+ ★</span>
              </div>
              <div className="d-flex align-items-center gap-2 rounded-pill px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="fw-bold" style={{ color: '#ef4444', fontSize: '0.9rem' }}>C</span>
                <span className="text-white small" style={{ fontSize: '0.75rem' }}>Reviews on Clutch</span>
                <span className="fw-bold small" style={{ color: '#fbbf24', fontSize: '0.75rem' }}>4.9+ ★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-secondary mb-0" style={{ fontSize: '0.7rem' }}>
            © 2024-2026 TechGeekz. All rights reserved
          </p>
          <div className="d-flex gap-4">
            {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link, i) => (
              <a key={i} href="#" className="text-secondary text-decoration-none" style={{ fontSize: '0.7rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

