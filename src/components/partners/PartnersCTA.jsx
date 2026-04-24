import { useState } from 'react';

const PartnersCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', type: '', message: '' }); }, 4000);
  };

  const inputStyle = { background: 'transparent', borderBottom: '1px solid #ddd', color: '#1a1a1a', fontSize: '0.85rem', outline: 'none', boxShadow: 'none' };

  return (
    <section id="become-partner">
      <div className="container">
        <hr className="premium-divider" />
        <div className="row g-5 align-items-start pt-4">
          <div className="col-lg-5">
            <span className="d-inline-block rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)', color: '#c084fc', fontSize: '0.78rem', fontWeight: 600 }}>Join Us</span>
            <h2 className="display-6 fw-bold text-white mb-4 fst-italic" style={{ letterSpacing: '-1px', lineHeight: 1.15 }}>Become a NinjaPromo Partner</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>Whether you are a technology platform, agency, or consultant — there is a partnership model built for you. Apply today.</p>
            <div className="d-flex flex-column gap-3">
              {["Dedicated partner manager", "Revenue sharing & co-selling", "Marketing assets & portal access", "Priority technical support", "Quarterly business reviews"].map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <span style={{ color: '#8b5cf6', fontSize: '0.8rem' }}>✓</span>
                  <span className="text-secondary" style={{ fontSize: '0.85rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="rounded-4 p-4 p-lg-5" style={{ background: '#ffffff', color: '#1a1a1a' }}>
              <h3 className="text-center fw-bold fs-5 mb-2" style={{ color: '#1a1a1a', letterSpacing: '1px' }}>PARTNER APPLICATION</h3>
              <p className="text-center small mb-4" style={{ color: '#888', fontSize: '0.75rem' }}>Our partnerships team will review and respond within 48 hours</p>

              {submitted ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3rem', marginBottom: 12 }}>🤝</div>
                  <h4 className="fw-bold" style={{ color: '#1a1a1a' }}>Application Submitted!</h4>
                  <p style={{ color: '#666', fontSize: '0.85rem' }}>We will be in touch within 48 hours to discuss next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[
                    { name: 'name', placeholder: 'Full Name*', type: 'text' },
                    { name: 'email', placeholder: 'Work Email*', type: 'email' },
                    { name: 'company', placeholder: 'Company Name*', type: 'text' },
                  ].map((field) => (
                    <div key={field.name} className="mb-3">
                      <input type={field.type} className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder={field.placeholder} required value={formData[field.name]} onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })} style={inputStyle} />
                    </div>
                  ))}
                  <div className="mb-3">
                    <select className="form-control border-0 border-bottom rounded-0 px-0 py-2" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} required style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Partnership Type*</option>
                      <option value="technology">Technology Partner</option>
                      <option value="agency">Agency Partner</option>
                      <option value="strategic">Strategic Alliance</option>
                      <option value="education">Education Partner</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea className="form-control border-0 border-bottom rounded-0 px-0 py-2" rows="2" placeholder="Tell us about the partnership opportunity" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn w-100 rounded-pill py-3 fw-bold text-white mb-3" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc, #e879f9)', border: 'none', fontSize: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,92,246,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >Submit Application</button>
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

export default PartnersCTA;
