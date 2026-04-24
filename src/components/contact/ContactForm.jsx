import { useState } from 'react';

const services = [
  "Social Media Marketing", "Paid Advertising", "SEO", "PR & Outreach",
  "Influencer Marketing", "Web Design & Development", "Branding",
  "Email Marketing", "AI Marketing", "Strategy & Consulting", "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', budget: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', budget: '', service: '', message: '' }); }, 5000);
  };

  const inputStyle = { background: 'transparent', borderBottom: '1px solid #ddd', color: '#1a1a1a', fontSize: '0.85rem', outline: 'none', boxShadow: 'none' };

  return (
    <section>
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left - Info */}
          <div className="col-lg-5">
            <h2 className="text-white fw-bold mb-4 fst-italic" style={{ fontSize: '1.8rem', letterSpacing: '-0.5px', lineHeight: 1.2 }}>Tell us about your project and we'll craft a custom proposal.</h2>
            <p className="text-secondary mb-5" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>Our team of 100+ marketing experts is ready to help you grow. No commitment required — just a conversation.</p>

            <div className="d-flex flex-column gap-4">
              {[
                { icon: "📧", label: "Email Us", value: "hello@ninjapromo.io", href: "mailto:hello@ninjapromo.io" },
                { icon: "📞", label: "Call Us", value: "+1 929-492-4413", href: "tel:+19294924413" },
                { icon: "💬", label: "Live Chat", value: "Available Mon-Fri, 9am-6pm EST", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="d-flex align-items-start gap-3 text-decoration-none rounded-4 p-3" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                >
                  <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0" style={{ width: 44, height: 44, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-white fw-semibold" style={{ fontSize: '0.88rem' }}>{item.label}</div>
                    <div className="text-secondary" style={{ fontSize: '0.78rem' }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-5">
              <p className="text-secondary fw-semibold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Follow Us</p>
              <div className="d-flex gap-3">
                {["Facebook", "X", "LinkedIn", "Instagram", "YouTube"].map((name, i) => (
                  <a key={i} href="#" className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; e.currentTarget.style.color = '#c084fc'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >{name.charAt(0)}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="col-lg-7">
            <div className="rounded-4 p-4 p-lg-5" style={{ background: '#ffffff', color: '#1a1a1a' }}>
              <h3 className="text-center fw-bold fs-5 mb-2" style={{ color: '#1a1a1a', letterSpacing: '1px' }}>GET A FREE PROPOSAL</h3>
              <p className="text-center small mb-4" style={{ color: '#888', fontSize: '0.75rem' }}>Fill in the details and we will get back to you within 24 hours</p>

              {submitted ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
                  <h4 className="fw-bold" style={{ color: '#1a1a1a' }}>Message Sent!</h4>
                  <p style={{ color: '#666', fontSize: '0.85rem' }}>Our team will review your inquiry and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder="Full Name*" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder="Work Email*" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
                    </div>
                  </div>
                  <div className="row g-3 mt-0">
                    <div className="col-md-6">
                      <input type="text" className="form-control border-0 border-bottom rounded-0 px-0 py-2" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} style={inputStyle} />
                    </div>
                    <div className="col-md-6">
                      <select className="form-control border-0 border-bottom rounded-0 px-0 py-2" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="">Monthly Budget</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <select className="form-control border-0 border-bottom rounded-0 px-0 py-2 w-100" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} required style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Service Needed*</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="mt-3 mb-4">
                    <textarea className="form-control border-0 border-bottom rounded-0 px-0 py-2" rows="3" placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn w-100 rounded-pill py-3 fw-bold text-white mb-3" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #c084fc, #e879f9)', border: 'none', fontSize: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,92,246,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >Send Message</button>
                  <p className="text-center mb-0" style={{ color: '#999', fontSize: '0.7rem' }}>By submitting, you agree to our <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Privacy Policy</a>.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
