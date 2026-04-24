import { useState } from 'react';

const ReferralCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', message: '' }); }, 4000);
  };

  return (
    <section id="join">
      <div className="container">
        <hr className="premium-divider" />
        <div className="row g-5 align-items-start pt-4">
          {/* Left */}
          <div className="col-lg-5">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Start Earning</span>
            <h2 className="display-6 fw-bold text-white mb-4 fst-italic" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>Ready to Turn Your Network into Revenue?</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>Apply below and our partnerships team will get you set up within 24 hours. It's free, fast, and incredibly rewarding.</p>

            <div className="d-flex flex-column gap-3">
              {["Recurring commissions up to 20%", "90-day cookie tracking", "Dedicated partner dashboard", "Payouts within 48 hours"].map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <span style={{ color: '#8b5cf6', fontSize: '0.8rem' }}>✓</span>
                  <span className="text-secondary" style={{ fontSize: '0.85rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="col-lg-7">
            <div className="rounded-4 p-4 p-lg-5" style={{ background: '#ffffff', color: '#1a1a1a' }}>
              <h3 className="text-center fw-bold fs-5 mb-2" style={{ color: '#1a1a1a', letterSpacing: '1px' }}>JOIN THE REFERRAL PROGRAM</h3>
              <p className="text-center small mb-4" style={{ color: '#888', fontSize: '0.75rem' }}>Fill out the form and we'll get you started within 24 hours</p>

              {submitted ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎉</div>
                  <h4 className="fw-bold" style={{ color: '#1a1a1a' }}>Application Received!</h4>
                  <p style={{ color: '#666', fontSize: '0.85rem' }}>Our partnerships team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[
                    { name: 'name', placeholder: 'Full Name*', type: 'text' },
                    { name: 'email', placeholder: 'Work Email*', type: 'email' },
                    { name: 'company', placeholder: 'Company / Website', type: 'text' },
                  ].map((field) => (
                    <div key={field.name} className="mb-3">
                      <input type={field.type} className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder={field.placeholder} required={field.placeholder.includes('*')} value={formData[field.name]} onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        style={{ background: 'transparent', borderBottom: '1px solid #ddd', color: '#1a1a1a', fontSize: '0.85rem', outline: 'none', boxShadow: 'none' }} />
                    </div>
                  ))}
                  <div className="mb-4">
                    <textarea className="form-control border-0 border-bottom rounded-0 px-0 py-2" rows="2" placeholder="How do you plan to refer clients?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ background: 'transparent', borderBottom: '1px solid #ddd', color: '#1a1a1a', fontSize: '0.85rem', outline: 'none', boxShadow: 'none', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn w-100 rounded-pill py-3 fw-bold text-white mb-3" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc, #e879f9)', border: 'none', fontSize: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,92,246,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >Apply Now — It's Free</button>
                  <p className="text-center mb-0" style={{ color: '#999', fontSize: '0.7rem' }}>By submitting, you agree to our <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Partner Terms</a> and <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Privacy Policy</a>.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralCTA;
