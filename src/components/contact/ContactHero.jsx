const ContactHero = () => {
  return (
    <section className="position-relative overflow-hidden" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/heroes/hero-business.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.95) 100%)', pointerEvents: 'none', zIndex: 0 }} />
      {/* Glow orbs */}
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', top: '-15%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />

      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <span style={{ fontSize: '0.85rem' }}>📬</span>
          <span style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 600 }}>Get In Touch</span>
        </div>

        <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
          Let's Start a{' '}
          <span className="hero-gradient-text fst-italic fw-normal">Conversation</span>
        </h1>

        <p className="text-secondary fs-5 mx-auto mb-0" style={{ maxWidth: 580, lineHeight: 1.7 }}>
          Whether you have a question, a project idea, or just want to say hello — we'd love to hear from you. Our team typically responds within <strong style={{ color: '#c084fc' }}>24 hours</strong>.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
