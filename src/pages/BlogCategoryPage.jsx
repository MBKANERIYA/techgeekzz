import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewsSection from '../components/ReviewsSection';
import AwardsSection from '../components/AwardsSection';
import CTASection from '../components/CTASection';
import { blogPosts, slugify, tagColors } from '../data/blogPosts';

const categoryMeta = {
  guides: { title: 'Guides', desc: 'Step-by-step guides to master every area of digital marketing.' },
  strategies: { title: 'Strategies', desc: 'Proven strategies and frameworks used by top-performing brands.' },
  ratings: { title: 'Ratings', desc: 'Honest ratings and comparisons of tools, platforms, and agencies.' },
  authors: { title: 'Our Authors', desc: 'Meet the experts behind our award-winning marketing content.' },
  editorial: { title: 'Editorial Standards', desc: 'How we research, fact-check, and maintain content quality.' },
};

const filters = ['All', 'Guides', 'Ratings', 'Strategies'];

const tagStyle = { fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' };

const BlogCategoryPage = () => {
  const { slug } = useParams();
  const meta = categoryMeta[slug] || { title: slug, desc: '' };
  const [active, setActive] = useState(meta.title === 'Guides' || meta.title === 'Strategies' || meta.title === 'Ratings' ? meta.title : 'All');
  const [search, setSearch] = useState('');

  let filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.tags.includes(active));
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)));
  }

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section className="position-relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div className="container position-relative text-center" style={{ zIndex: 2 }}>
          {/* Breadcrumb */}
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <Link to="/blog" className="text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a500fd'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>TechGeekz Academy</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>›</span>
            <span style={{ color: '#a500fd', fontSize: '0.82rem', fontWeight: 600 }}>{meta.title}</span>
          </div>

          <h1 className="display-4 fw-bold text-white mb-3" style={{ letterSpacing: '-2px' }}>{meta.title}</h1>
          {meta.desc && <p className="text-secondary mx-auto mb-0" style={{ maxWidth: 500, fontSize: '0.9rem' }}>{meta.desc}</p>}

          {/* Filter pills */}
          {(slug === 'guides' || slug === 'strategies' || slug === 'ratings') && (
            <div className="d-flex justify-content-center gap-2 mt-4">
              {filters.map(f => (
                <button key={f} onClick={() => setActive(f)} className="btn rounded-pill px-4 py-2 fw-medium" style={{
                  fontSize: '0.8rem', border: '1px solid', transition: 'all 0.3s ease',
                  ...(active === f
                    ? { background: '#a500fd', color: '#fff', borderColor: 'transparent' }
                    : { background: 'transparent', color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.12)' }),
                }}>{f}</button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════ SEARCH BAR ═══════ */}
      <section style={{ padding: '2rem 0 1rem' }}>
        <div className="container">
          <div className="d-flex align-items-center rounded-pill px-4" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.08)', height: 52 }}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="SEARCH ..."
              className="flex-grow-1 border-0" style={{ background: 'transparent', color: '#fff', fontSize: '0.85rem', outline: 'none', letterSpacing: '1px' }} />
            <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 34, height: 34, background: '#a500fd', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ POSTS GRID ═══════ */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-secondary fs-5">No articles found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="row g-4">
              {filtered.map(post => (
                <div key={post.id} className="col-xl-3 col-lg-4 col-md-6">
                  <Link to={`/blog/post/${slugify(post.title)}`} className="text-decoration-none">
                    <div className="h-100 rounded-4 overflow-hidden glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(165,0,253,0.12)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                      <div style={{ height: 180, overflow: 'hidden' }}>
                        <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <div className="p-3">
                        <div className="d-flex flex-wrap gap-2 mb-2">
                          {post.tags.map((t, j) => (
                            <span key={j} style={{ ...tagStyle, color: '#a500fd' }}>{t}</span>
                          ))}
                        </div>
                        <h6 className="text-white fw-bold mb-3" style={{ fontSize: '0.88rem', lineHeight: 1.4 }}>{post.title}</h6>
                        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-5">
            <button className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white" style={{ fontSize: '0.88rem' }}>Load More Articles</button>
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
              <a href="/contact" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none" style={{ fontSize: '0.95rem' }}>Get a Free Proposal</a>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

    </div>


  );
};

export default BlogCategoryPage;
