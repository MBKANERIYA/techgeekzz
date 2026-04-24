import { useState } from 'react';
import ReviewsSection from '../components/ReviewsSection';
import AwardsSection from '../components/AwardsSection';

const categories = [
  'All', 'AI', 'B2B', 'B2C', 'Crypto', 'Design', 'Digital Marketing', 'Ecommerce',
  'Email', 'Financial', 'Healthcare', 'iGaming', 'Influencer Marketing', 'PPC',
  'PR', 'Real Estate', 'SaaS', 'SEO', 'Social Media', 'Video Production',
];

const featuredMain = {
  img: '/images/blog/thumb-1.png',
  tags: ['Ratings', 'Digital Marketing'],
  title: 'Top 15 Digital Marketing Agencies for Small Businesses in 2026',
  date: 'April 23, 2026',
};

const featuredSidebar = [
  { tag: 'PPC', title: '66 Key PPC Statistics Every Marketer Should Know in 2026', date: 'December 1, 2025' },
  { tag: 'SEO', title: '89 Key SEO Statistics Every Marketer Should Know in 2026', date: 'August 8, 2025' },
  { tag: 'Guides · SEO', title: 'SEO for Startups: From Strategy Creation to Proven Tactics', date: 'July 31, 2025' },
];

const posts = [
  { id: 1, img: '/images/blog/thumb-1.png', tags: ['Ratings', 'PR', 'SaaS'], title: 'Top 6 SaaS PR Agencies for Scalable Public Relations Solutio...', date: 'April 23, 2026', author: 'Sophia Lanier' },
  { id: 2, img: '/images/blog/thumb-2.png', tags: ['Guides', 'Strategies', 'PPC'], title: 'Google Ads for Dentists: Best Strategies to Grow Your Practi...', date: 'April 16, 2026', author: 'Rebeka Meszaros' },
  { id: 3, img: '/images/blog/thumb-3.png', tags: ['Guides', 'Strategies', 'AI'], title: 'AI Content Optimization: Best Practices for High-Performing ...', date: 'April 15, 2026', author: 'Jelena Relic' },
  { id: 4, img: '/images/blog/thumb-4.png', tags: ['Guides', 'Strategies', 'PPC'], title: '9 Top Google Ads Alternatives to Boost Your Reach', date: 'April 2, 2026', author: 'Rebeka Meszaros' },
  { id: 5, img: '/images/blog/thumb-5.png', tags: ['Guides', 'Digital Marketing'], title: 'Multi-Location Business Marketing: How to Master Targeted Di...', date: 'March 30, 2026', author: 'Jelena Relic' },
  { id: 6, img: '/images/blog/thumb-6.png', tags: ['Guides', 'Strategies', 'Social Media'], title: 'Social Media Marketing Pricing: How Much Do SMM Really Cost ...', date: 'March 26, 2026', author: 'Sophia Lanier' },
  { id: 7, img: '/images/blog/thumb-2.png', tags: ['Guides', 'Strategies', 'SEO'], title: '11 Retail SEO Tactics That Turn Search Traffic into Customer...', date: 'March 24, 2026', author: 'Ankit Vora' },
  { id: 8, img: '/images/blog/thumb-3.png', tags: ['Guides', 'B2B'], title: '11 Examples of B2B Marketing KPIs & Metrics Worth Track...', date: 'March 24, 2026', author: 'Margarita Loktionova' },
  { id: 9, img: '/images/blog/thumb-4.png', tags: ['Guides', 'Strategies', 'Digital Marketing'], title: 'Smart Marketing Budget Planning: A Strategic Guide for 2026', date: 'March 20, 2026', author: 'Sophia Lanier' },
  { id: 10, img: '/images/blog/thumb-5.png', tags: ['Guides', 'Strategies', 'PPC'], title: 'Google Ads for Ecommerce: Complete Guide to Profitable Campaigns', date: 'March 18, 2026', author: 'Rebeka Meszaros' },
  { id: 11, img: '/images/blog/thumb-6.png', tags: ['Guides', 'Strategies', 'SEO'], title: "Why Is Your SEO Not Working? Key Reasons and How to Fix Them", date: 'March 15, 2026', author: 'Ankit Vora' },
  { id: 12, img: '/images/blog/thumb-1.png', tags: ['Guides', 'Strategies', 'SEO'], title: 'How to Redesign Your Website Without Losing SEO', date: 'March 12, 2026', author: 'Jelena Relic' },
];

const featured = [
  { outlet: 'Forbes', quote: 'NinjaPromo delivers cutting-edge marketing insights that rival the best in the industry.' },
  { outlet: 'TechCrunch', quote: 'A go-to resource for marketers looking to stay ahead of emerging digital trends.' },
  { outlet: 'Entrepreneur', quote: 'Their data-driven approach to content makes complex marketing strategies accessible.' },
];

const tagStyle = { fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' };

const BlogPage = () => {
  const [active, setActive] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const filtered = active === 'All' ? posts : posts.filter(p => p.tags.includes(active));

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '60vh', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/heroes/hero-blog.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.95) 100%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', top: '-10%', right: '-5%', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 1 }} />
        <div className="container position-relative text-center" style={{ zIndex: 2 }}>
          <div className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 mb-4" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
            <span style={{ fontSize: '0.85rem' }}>📝</span>
            <span style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: 600 }}>Ninja Academy</span>
          </div>
          <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.05, letterSpacing: '-2px' }}>
            Welcome to the<br /><span className="hero-gradient-text fst-italic fw-normal">Ninja Promo Blog</span>
          </h1>
          <p className="text-secondary fs-5 mx-auto mb-0" style={{ maxWidth: 600, lineHeight: 1.7 }}>
            In-depth guides, cutting-edge strategies, and insider insights to help you <strong style={{ color: '#c084fc' }}>stay ahead of the curve</strong>.
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
              <button key={c} onClick={() => setActive(c)}
                className="btn rounded-pill px-3 py-1 fw-medium" style={{
                  fontSize: '0.78rem', border: '1px solid', transition: 'all 0.3s ease',
                  ...(active === c
                    ? { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', borderColor: 'transparent' }
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
            {/* Left — Big Featured Post */}
            <div className="col-lg-7">
              <div className="rounded-4 overflow-hidden glow-card h-100" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer' }}>
                <div style={{ height: 320, overflow: 'hidden', position: 'relative' }}>
                  <img src={featuredMain.img} alt={featuredMain.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24 }}>
                    <h3 className="text-white fw-bold mb-0" style={{ fontSize: '1.3rem', lineHeight: 1.3 }}>{featuredMain.title}</h3>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    {featuredMain.tags.map((t, i) => (
                      <span key={i} style={{ ...tagStyle, color: '#6366f1' }}>{t}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{featuredMain.date}</span>
                </div>
              </div>
            </div>

            {/* Right — Featured Articles Sidebar */}
            <div className="col-lg-5">
              <h5 className="fw-bold mb-3" style={{ color: '#c084fc', fontSize: '1rem' }}>Featured articles</h5>
              <div className="d-flex flex-column gap-3">
                {featuredSidebar.map((a, i) => (
                  <div key={i} className="rounded-3 p-3 glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', transition: 'border-color 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                    <span style={{ ...tagStyle, color: '#6366f1' }}>{a.tag}</span>
                    <h6 className="text-white fw-bold mt-2 mb-2" style={{ fontSize: '0.92rem', lineHeight: 1.4 }}>{a.title}</h6>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>{a.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BLOG GRID — 4 COLUMNS ═══════ */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="row g-4">
            {filtered.map(post => (
              <div key={post.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="h-100 rounded-4 overflow-hidden glow-card" style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(139,92,246,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ height: 180, overflow: 'hidden' }}>
                    <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  <div className="p-3">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {post.tags.map((t, j) => (
                        <span key={j} style={{ ...tagStyle, color: '#6366f1' }}>{t}</span>
                      ))}
                    </div>
                    <h6 className="text-white fw-bold mb-3" style={{ fontSize: '0.88rem', lineHeight: 1.4 }}>{post.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
                      <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white" style={{ fontSize: '0.88rem' }}>Load More Articles</button>
          </div>
        </div>
      </section>

      {/* ═══════ NEWSLETTER ═══════ */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="rounded-4 p-5 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)', border: '1px solid rgba(139,92,246,0.15)' }}>
            <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', top: '-20%', right: '-5%', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <h3 className="text-white fw-bold mb-3" style={{ fontSize: '1.8rem' }}>Subscribe to our <span className="hero-gradient-text">Newsletter</span></h3>
            <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 500, fontSize: '0.9rem' }}>Get the latest marketing insights, strategies, and industry news delivered to your inbox every week.</p>
            {subscribed ? (
              <div className="d-inline-flex align-items-center gap-2 rounded-pill px-4 py-3" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}>
                <span>✅</span><span className="text-white fw-medium">You&apos;re subscribed! Check your inbox.</span>
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
                  <h4 className="fw-bold mb-3" style={{ fontSize: '1.6rem', background: 'linear-gradient(135deg, #8b5cf6, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{f.outlet}</h4>
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
          <div className="rounded-4 p-5 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1028 0%, #0f0f1a 50%, #1a1028 100%)', border: '1px solid rgba(139,92,246,0.2)' }}>
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', top: '-30%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h3 className="display-5 fw-bold text-white mb-3">Ready to Take Your Marketing to the <span className="hero-gradient-text fst-italic">Next Level?</span></h3>
              <p className="text-secondary fs-5 mx-auto mb-4" style={{ maxWidth: 550 }}>Let our team of experts create a custom strategy tailored to your business goals.</p>
              <a href="/contact" className="btn btn-cta rounded-pill px-5 py-3 fw-semibold text-white text-decoration-none" style={{ fontSize: '0.95rem' }}>Get a Free Proposal</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
