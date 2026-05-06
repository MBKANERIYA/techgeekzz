import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getPostBySlug, getRelatedPosts, slugify, tagColors } from '../data/blogPosts';
import CTASection from '../components/CTASection';

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

const BlogPostPage = () => {
  const { postSlug } = useParams();
  const post = getPostBySlug(postSlug);
  const [activeSection, setActiveSection] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!post) return;
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[i];
        if (el && el.offsetTop <= scrollPos) { setActiveSection(i); break; }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  if (!post) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem' }}>
        <h2 className="text-white" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Article Not Found</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>The article you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/blog" style={{ background: '#a500fd', color: '#fff', padding: '12px 32px', borderRadius: 50, textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</Link>
      </div>
    );
  }

  const related = getRelatedPosts(post);
  const bodyData = post.body || { intro: '', sections: [] };
  const tocItems = bodyData.sections ? bodyData.sections.map(s => s.heading) : [];

  const scrollToSection = (idx) => {
    const el = sectionRefs.current[idx];
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <div>
      {/* ═══ BREADCRUMB ═══ */}
      <div style={{ paddingTop: '6.5rem' }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0' }}>
            <Link to="/blog" style={{ color: '#a500fd', fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}>TechGeekz Academy</Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>›</span>
            <Link to="/blog" style={{ color: '#a500fd', fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}>{post.tags[0]}</Link>
          </div>
        </div>
      </div>

      {/* ═══ HERO CARD — Dark card with image on right ═══ */}
      <div style={{ paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div style={{
            background: '#1a1a2e',
            borderRadius: 20, overflow: 'hidden', display: 'flex', minHeight: 320,
            border: '1px solid rgba(165,0,253,0.1)',
          }}>
            <div style={{ flex: 1, padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(165,0,253,0.12)', borderRadius: 50, padding: '6px 16px', marginBottom: 20, alignSelf: 'flex-start', border: '1px solid rgba(165,0,253,0.25)' }}>
                <span style={{ fontSize: '0.72rem', color: '#a500fd', fontWeight: 600 }}> Expert Reviewed</span>
              </div>
              <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 28 }}>{post.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#a500fd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: '#fff', fontWeight: 700, border: '2px solid rgba(255,255,255,0.15)' }}>{post.author.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>Written By</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{post.author}</div>
                  </div>
                </div>
                <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>{post.date}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>· {post.readTime}</span>
              </div>
            </div>
            <div className="d-none d-md-block" style={{ width: '42%', position: 'relative' }}>
              <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #16162a 0%, transparent 30%)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ ARTICLE CONTENT — 3-column layout ═══ */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="row">

            {/* LEFT SIDEBAR — Table of Contents */}
            <div className="col-lg-3 d-none d-lg-block">
              <div style={{ position: 'sticky', top: 100, paddingRight: 20 }}>
                <div style={{ background: '#12121a', borderRadius: 14, padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>Table of content</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span></span> {post.readTime}
                  </div>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {tocItems.map((item, i) => (
                      <button key={i} onClick={() => scrollToSection(i)} style={{
                        all: 'unset', cursor: 'pointer', padding: '7px 10px', fontSize: '0.8rem', lineHeight: 1.4,
                        color: activeSection === i ? '#a500fd' : 'rgba(255,255,255,0.5)',
                        fontWeight: activeSection === i ? 600 : 400,
                        borderLeft: activeSection === i ? '3px solid #a500fd' : '3px solid rgba(255,255,255,0.06)',
                        background: activeSection === i ? 'rgba(165,0,253,0.08)' : 'transparent',
                        borderRadius: '0 6px 6px 0', transition: 'all 0.2s',
                      }}>{item}</button>
                    ))}
                  </nav>
                </div>

                {/* Share */}
                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>Share Article</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[{ label: 'X', bg: '#fff' }, { label: 'in', bg: '#0077b5' }, { label: 'f', bg: '#1877f2' }].map(s => (
                      <button key={s.label} style={{
                        width: 36, height: 36, borderRadius: '50%', background: s.bg === '#fff' ? 'rgba(255,255,255,0.08)' : s.bg,
                        border: '1px solid rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.75rem', fontWeight: 700,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      >{s.label}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER — Article Body */}
            <div className="col-lg-6">
              {/* Tag + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                <span style={{ background: hexToRgba(tagColors[post.tags[0]] || '#a500fd', 0.15), color: tagColors[post.tags[0]] || '#a500fd', padding: '4px 14px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{post.tags[0]}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>UPDATED {post.date.toUpperCase()}</span>
              </div>

              {/* Inline collapsible TOC */}
              <div style={{ background: '#12121a', borderRadius: 12, marginBottom: 28, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <button onClick={() => setTocOpen(!tocOpen)} style={{
                  all: 'unset', cursor: 'pointer', width: '100%', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Table of content</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginLeft: 12 }}> {post.readTime}</span>
                  </div>
                  <span style={{ color: '#a500fd', fontSize: '1.2rem', transform: tocOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▾</span>
                </button>
                {tocOpen && (
                  <div style={{ padding: '0 18px 14px' }}>
                    {tocItems.map((item, i) => (
                      <button key={i} onClick={() => { scrollToSection(i); setTocOpen(false); }} style={{
                        all: 'unset', cursor: 'pointer', display: 'block', padding: '6px 0', fontSize: '0.82rem', color: '#a500fd', fontWeight: 500,
                      }}>{item}</button>
                    ))}
                  </div>
                )}
              </div>

              {/* Intro */}
              {bodyData.intro && (
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginBottom: 36 }}>{bodyData.intro}</p>
              )}

              {/* Sections */}
              {bodyData.sections && bodyData.sections.map((section, i) => (
                <div key={i} ref={el => sectionRefs.current[i] = el} style={{ marginBottom: 44 }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 18 }}>{section.heading}</h2>
                  {section.content.split('\n\n').map((para, j) => (
                    <p key={j} style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 16 }}>{para}</p>
                  ))}
                </div>
              ))}

              {/* Tags */}
              <div style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Tags:</span>
                {post.tags.map((t, i) => {
                  const c = tagColors[t] || '#a500fd';
                  return <Link key={i} to="/blog" style={{ textDecoration: 'none', padding: '5px 14px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600, color: c, background: hexToRgba(c, 0.1), border: `1px solid ${hexToRgba(c, 0.2)}` }}>{t}</Link>;
                })}
              </div>

              {/* Author bio */}
              <div style={{ marginTop: 36, padding: 24, background: '#12121a', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, background: '#a500fd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{post.author.charAt(0)}</div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: 2 }}>{post.author}</div>
                  <div style={{ fontSize: '0.78rem', color: '#a500fd', fontWeight: 600, marginBottom: 6 }}>Contributing Writer at TechGeekz</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>An experienced digital marketing strategist with a passion for data-driven results and emerging industry trends.</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — CTA */}
            <div className="col-lg-3 d-none d-lg-block">
              <div style={{ position: 'sticky', top: 100, paddingLeft: 20 }}>
                <div style={{
                  background: '#a500fd',
                  borderRadius: 16, padding: 28, color: '#fff',
                }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>Build Campaigns That Consistently Bring Returns</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                    {['Target high-intent searches', 'Reduce wasted ad spend', 'Align with revenue-driving services', 'Improve click-to-conversion rate', 'Track what actually works'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '4px 0', fontSize: '0.78rem', lineHeight: 1.5 }}>
                        <span style={{ marginTop: 2 }}>•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{
                    display: 'block', textAlign: 'center', textDecoration: 'none',
                    background: '#fff', color: '#1a1a2e', padding: '12px 0', borderRadius: 8,
                    fontSize: '0.85rem', fontWeight: 700, transition: 'transform 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >Let&apos;s get started</Link>
                </div>

                <div style={{ background: '#12121a', borderRadius: 14, padding: 22, border: '1px solid rgba(255,255,255,0.06)', marginTop: 20 }}>
                  <p style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 600, marginBottom: 10 }}>Get marketing insights weekly</p>
                  <input type="email" placeholder="Your email" style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.82rem', marginBottom: 8, outline: 'none', boxSizing: 'border-box' }} />
                  <button style={{ width: '100%', padding: '9px 0', borderRadius: 8, background: '#a500fd', color: '#fff', border: 'none', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer' }}>Subscribe</button>
                </div>

                <div style={{ marginTop: 20 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Related Topics</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {['SEO', 'PPC', 'Social Media', 'AI', 'Email', 'Content'].map(tag => (
                      <Link key={tag} to="/blog" style={{
                        textDecoration: 'none', padding: '5px 12px', borderRadius: 50, fontSize: '0.72rem', fontWeight: 600,
                        color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#a500fd'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#a500fd'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                      >{tag}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ RELATED ARTICLES ═══ */}
      {related.length > 0 && (
        <section style={{ padding: '3rem 0 4rem' }}>
          <div className="container">
            <div className="container"><hr className="premium-divider mb-5" /></div>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h3 className="text-white" style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-1px' }}>Related <span className="hero-gradient-text">Articles</span></h3>
            </div>
            <div className="row g-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
              {related.map(rp => (
                <div key={rp.id} className="col-lg-4 col-md-6">
                  <Link to={`/blog/post/${slugify(rp.title)}`} style={{ textDecoration: 'none' }}>
                    <div className="glow-card" style={{ background: '#12121a', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', transition: 'transform 0.3s, box-shadow 0.3s', height: '100%' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(165,0,253,0.15)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                      <div style={{ height: 180, overflow: 'hidden' }}>
                        <img src={rp.img} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                      </div>
                      <div style={{ padding: 20 }}>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                          {rp.tags.slice(0, 2).map((t, j) => (
                            <span key={j} style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: tagColors[t] || '#a500fd' }}>{t}</span>
                          ))}
                        </div>
                        <h6 style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.4, marginBottom: 10 }}>{rp.title}</h6>
                        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>{rp.date} · {rp.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
};

export default BlogPostPage;
