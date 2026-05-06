import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewsSection from '../components/ReviewsSection';
import AwardsSection from '../components/AwardsSection';
import { blogPosts, slugify, tagColors } from '../data/blogPosts';

const categories = [
  'All', 'SEO', 'PPC', 'Social Media', 'AI', 'Email', 'Design',
  'Ecommerce', 'B2B', 'Content', 'Digital Marketing',
];

const featuredMain = blogPosts[0];
const featuredSidebar = [blogPosts[2], blogPosts[4], blogPosts[7]];

const featured = [
  { outlet: 'Forbes', quote: 'TechGeekz delivers cutting-edge marketing insights that rival the best in the industry.' },
  { outlet: 'TechCrunch', quote: 'A go-to resource for marketers looking to stay ahead of emerging digital trends.' },
  { outlet: 'Entrepreneur', quote: 'Their data-driven approach to content makes complex marketing strategies accessible.' },
];

const tagStyle = { fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' };

const BlogPage = () => {
  const [active, setActive] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.tags.includes(active));
  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '60vh', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container position-relative text-center" style={{ zIndex: 2 }}>
          <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(165,0,253,0.1)', border: '1px solid rgba(165,0,253,0.2)' }}>
            <span style={{ fontSize: '0.85rem' }}></span>
            <span style={{ fontSize: '0.78rem', color: '#a500fd', fontWeight: 600 }}>TechGeekz Academy</span>
          </div>
          <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
            Welcome to the<br /><span className="hero-gradient-text fst-italic fw-normal">TechGeekz Blog</span>
          </h1>
          <p className="text-secondary fs-5 mx-auto mb-0" style={{ maxWidth: 600, lineHeight: 1.7 }}>
            In-depth guides, cutting-edge strategies, and insider insights to help you <strong style={{ color: '#a500fd' }}>stay ahead of the curve</strong>.
          </p>
        </div>
      </section>

      {/* ═══════ TITLE + CATEGORY PILLS ═══════ */}
      <section style={{ padding: '3rem 0 1.5rem' }}>
        <div className="container">
          <h2 className="text-white fw-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            Our articles, guides, <span className="hero-gradient-text">strategies</span>
          </h2>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => { setActive(c); setVisibleCount(8); }}
                className="btn rounded-pill px-3 py-1 fw-medium" style={{
                  fontSize: '0.78rem', border: '1px solid', transition: 'all 0.3s ease',
                  ...(active === c
                    ? { background: '#a500fd', color: '#fff', borderColor: 'transparent' }
                    : { background: 'transparent', color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }),
                }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED SECTION ═══════ */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <Link to={`/blog/post/${slugify(featuredMain.title)}`} className="text-decoration-none">
                <div className="rounded-4 overflow-hidden glow-card h-100" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ height: 340, overflow: 'hidden', position: 'relative' }}>
                    <img src={featuredMain.img} alt={featuredMain.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
                    <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28 }}>
                      <div className="d-flex gap-2 mb-2">
                        {featuredMain.tags.map((t, i) => (
                          <span key={i} className="rounded-pill px-2 py-1" style={{ ...tagStyle, color: '#fff', background: 'rgba(165,0,253,0.4)', fontSize: '0.65rem' }}>{t}</span>
                        ))}
                      </div>
                      <h3 className="text-white fw-bold mb-2" style={{ fontSize: '1.35rem', lineHeight: 1.3 }}>{featuredMain.title}</h3>
                      <p className="mb-0" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{featuredMain.excerpt}</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 28, height: 28, background: '#a500fd', fontSize: '0.7rem', color: '#fff', fontWeight: 700 }}>{featuredMain.author.charAt(0)}</div>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{featuredMain.author}</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{featuredMain.date}</span>
                      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>· {featuredMain.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-5">
              <h5 className="fw-bold mb-3" style={{ color: '#a500fd', fontSize: '1rem' }}>Featured articles</h5>
              <div className="d-flex flex-column gap-3">
                {featuredSidebar.map((a, i) => (
                  <Link key={i} to={`/blog/post/${slugify(a.title)}`} className="text-decoration-none">
                    <div className="rounded-3 p-3 glow-card d-flex gap-3" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s ease' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(165,0,253,0.3)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                      <div style={{ width: 80, height: 80, flexShrink: 0, borderRadius: 10, overflow: 'hidden' }}>
                        <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <div className="d-flex gap-2 mb-1">
                          {a.tags.slice(0, 2).map((t, j) => (
                            <span key={j} style={{ ...tagStyle, color: tagColors[t] || '#a500fd' }}>{t}</span>
                          ))}
                        </div>
                        <h6 className="text-white fw-bold mt-1 mb-2" style={{ fontSize: '0.88rem', lineHeight: 1.35 }}>{a.title}</h6>
                        <div className="d-flex align-items-center gap-2">
                          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{a.date}</span>
                          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>· {a.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BLOG GRID ═══════ */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="row g-4">
            {visible.map(post => (
              <div key={post.id} className="col-xl-3 col-lg-4 col-md-6">
                <Link to={`/blog/post/${slugify(post.title)}`} className="text-decoration-none">
                  <div className="h-100 rounded-4 overflow-hidden glow-card d-flex flex-column" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(165,0,253,0.12)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ height: 180, overflow: 'hidden' }}>
                      <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                    </div>
                    <div className="p-3 d-flex flex-column flex-grow-1">
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {post.tags.map((t, j) => (
                          <span key={j} style={{ ...tagStyle, color: tagColors[t] || '#a500fd' }}>{t}</span>
                        ))}
                      </div>
                      <h6 className="text-white fw-bold mb-2" style={{ fontSize: '0.88rem', lineHeight: 1.4 }}>{post.title}</h6>
                      <p className="mb-3" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.55, flexGrow: 1 }}>{post.excerpt.substring(0, 100)}...</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="d-flex align-items-center gap-2">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 22, height: 22, background: '#a500fd', fontSize: '0.55rem', color: '#fff', fontWeight: 700 }}>{post.author.charAt(0)}</div>
                          <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{post.author}</span>
                        </div>
                        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)' }}>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {visibleCount < filtered.length && (
            <div className="text-center mt-5">
              <button onClick={() => setVisibleCount(prev => prev + 8)} className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white" style={{ fontSize: '0.88rem' }}>Load More Articles</button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ NEWSLETTER ═══════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="rounded-4 p-5 text-center position-relative overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid rgba(165,0,253,0.15)' }}>
            <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Subscribe to our <span className="hero-gradient-text">Newsletter</span></h3>
            <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 500, fontSize: '0.9rem' }}>Get the latest marketing insights, strategies, and industry news delivered to your inbox every week.</p>
            {subscribed ? (
              <div className="d-inline-flex align-items-center gap-2 rounded-pill px-4 py-3" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}>
                <span></span><span className="text-white fw-medium">You&apos;re subscribed! Check your inbox.</span>
              </div>
            ) : (
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"
                  className="form-control rounded-pill px-4 py-3" style={{ maxWidth: 360, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.88rem' }} />
                <button onClick={() => { if (email) setSubscribed(true); }} className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white" style={{ fontSize: '0.88rem' }}>Subscribe</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED IN ═══════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h3 className="text-white fw-bold text-center mb-2" style={{ fontSize: '1.5rem' }}>We&apos;ve been <span className="hero-gradient-text">featured in</span></h3>
          <p className="text-secondary text-center mb-5" style={{ fontSize: '0.85rem' }}>As referenced by leading publications worldwide.</p>
          <div className="row g-4">
            {featured.map((f, i) => (
              <div key={i} className="col-lg-4">
                <div className="rounded-4 p-4 h-100 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h4 className="fw-bold mb-3" style={{ fontSize: '1.6rem', background: '#a500fd', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{f.outlet}</h4>
                  <p className="mb-0 fst-italic" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>&ldquo;{f.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ REVIEWS & AWARDS ═══════ */}
      <div className="container"><hr className="premium-divider" /></div>
      <ReviewsSection />
      <AwardsSection />

      {/* ═══════ CTA ═══════ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="rounded-4 p-5 text-center position-relative overflow-hidden" style={{ background: '#1a1028', border: '1px solid rgba(165,0,253,0.2)' }}>
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h3 className="display-5 fw-bold text-white mb-3">Ready to Take Your Marketing to the <span className="hero-gradient-text fst-italic">Next Level?</span></h3>
              <p className="text-secondary fs-5 mx-auto mb-4" style={{ maxWidth: 550 }}>Let our team of experts create a custom strategy tailored to your business goals.</p>
              <Link to="/contact" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none" style={{ fontSize: '0.95rem' }}>Get a Free Proposal</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
