const ContactHero = () => {
  return (
    <section className="position-relative overflow-hidden" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Glow orbs */}
      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)' }}>
          <span style={{ fontSize: '0.85rem' }}></span>
          <span style={{ fontSize: '0.78rem', color: '#a500fd', fontWeight: 600 }}>Get In Touch</span>
        </div>

        <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
          Let's Start a{' '}
          <span className="hero-gradient-text fst-italic fw-normal">Conversation</span>
        </h1>

        <p className="text-secondary fs-5 mx-auto mb-0" style={{ maxWidth: 580, lineHeight: 1.7 }}>
          Whether you have a question, a project idea, or just want to say hello — we'd love to hear from you. Our team typically responds within <strong style={{ color: '#a500fd' }}>24 hours</strong>.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
