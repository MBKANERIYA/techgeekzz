import { useState, useEffect } from 'react';
import ServicePageTemplate from '../components/services/ServicePageTemplate';

const BrandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Multipliers: last line moves fastest (train departing)
  const line1Offset = scrollY * 0.8;   // "Want to be" — slowest
  const line2Offset = scrollY * 1.6;   // "the next" — medium
  const line3Offset = scrollY * 2.8;   // "viral brand?" — fastest

  return (
  <div>
    {/* ══════ FULL-SCREEN TYPOGRAPHIC HERO ══════ */}
    <section
      className="d-flex align-items-center justify-content-center position-relative"
      style={{
        minHeight: '92vh',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Background brand names wall */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, pointerEvents: 'none', zIndex: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.2rem', opacity: 0.04 }}>
        {[
          ['Nike', 'Apple', 'Coca-Cola', 'Tesla', 'Google', 'Airbnb', 'Netflix', 'Spotify', 'Adidas', 'Amazon', 'Disney', 'Chanel'],
          ['Supreme', 'Zara', 'Red Bull', 'Uber', 'Slack', 'Figma', 'Notion', 'Stripe', 'Patagonia', 'Lego', 'IKEA', 'Rolex'],
          ['Ferrari', 'Samsung', 'Gucci', 'Sony', 'Adobe', 'Shopify', 'Canva', 'Puma', 'Hermès', 'Burberry', 'Louis Vuitton', 'Porsche'],
          ['McDonald\'s', 'Starbucks', 'BMW', 'Intel', 'Oracle', 'Twitch', 'Dior', 'Versace', 'Balenciaga', 'Fendi', 'Prada', 'Tiffany'],
          ['Lamborghini', 'PayPal', 'Visa', 'Mastercard', 'TikTok', 'Pinterest', 'YouTube', 'Twitter', 'LinkedIn', 'Meta', 'Snapchat', 'Reddit'],
        ].map((row, i) => (
          <div key={i} style={{ whiteSpace: 'nowrap', animation: `brandScroll${i % 2 === 0 ? 'Left' : 'Right'} ${50 + i * 5}s linear infinite` }}>
            {[...row, ...row, ...row].map((name, j) => (
              <span key={j} style={{ display: 'inline-block', fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginRight: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '2px' }}>{name}</span>
            ))}
          </div>
        ))}
      </div>
      {/* Subtle scroll indicator */}
      <div
        className="position-absolute"
        style={{
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fadeInUp 1.2s ease 1.5s both',
          opacity: scrollY > 50 ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, rgba(165,0,253,0.6), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      {/* Main text */}
      <div className="text-center px-3 position-relative" style={{ maxWidth: '1100px', zIndex: 1 }}>
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 8.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-4px',
            color: '#fff',
            margin: 0,
          }}
        >
          <div style={{ transform: `translateX(${line1Offset}px)`, willChange: 'transform' }}>
            <span style={{ display: 'block', animation: 'fadeInUp 0.8s ease 0.1s both' }}>
              Want to be
            </span>
          </div>
          <div style={{ transform: `translateX(${line2Offset}px)`, willChange: 'transform' }}>
            <span style={{ display: 'block', animation: 'fadeInUp 0.8s ease 0.35s both' }}>
              the next
            </span>
          </div>
          <div style={{ transform: `translateX(${line3Offset}px)`, willChange: 'transform' }}>
            <span
              style={{
                display: 'block',
                color: '#a500fd',
                fontStyle: 'italic',
                animation: 'fadeInUp 0.8s ease 0.6s both',
              }}
            >
              viral brand?
            </span>
          </div>
        </h1>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%      { opacity: 1;   transform: scaleY(1.3); }
        }
        @keyframes brandScrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.33%); }
        }
        @keyframes brandScrollRight {
          from { transform: translateX(-33.33%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>

    {/* ══════ REST OF THE PAGE (ServicePageTemplate) ══════ */}
    <ServicePageTemplate config={{
      title: "Branding", icon: "", badge: "Brand Identity & Strategy", glowColor: "rgba(168,85,247,1)",
      heroImage: '/images/heroes/hero-design.png',
      heroTitle: "Build an Iconic", heroHighlight: "Brand.",
      heroDescription: "Create a <strong style='color:#a500fd'>memorable brand identity</strong> that resonates with your audience and sets you apart in a crowded marketplace.",
      stats: [
        { value: "200+", label: "Brands Created" }, { value: "95%", label: "Client Retention" },
        { value: "3x", label: "Brand Recognition Lift" }, { value: "50+", label: "Industries" },
      ],
      services: [
        { icon: "", title: "Logo Design", desc: "Distinctive logos that capture your essence and stand the test of time." },
        { icon: "", title: "Visual Identity", desc: "Color palettes, typography, iconography, and imagery guidelines." },
        { icon: "", title: "Brand Guidelines", desc: "Comprehensive style guides ensuring consistency across every touchpoint." },
        { icon: "", title: "Brand Messaging", desc: "Voice, tone, taglines, and messaging frameworks that resonate." },
        { icon: "", title: "Brand Strategy", desc: "Market positioning, audience personas, and competitive differentiation." },
        { icon: "", title: "Brand Collateral", desc: "Business cards, presentations, social templates, and marketing materials." },
      ],
      process: [
        { icon: "", title: "Discovery", desc: "Deep-dive into your business, audience, competitors, and aspirations." },
        { icon: "", title: "Strategy", desc: "Define positioning, personality, values, and messaging platform." },
        { icon: "", title: "Design", desc: "Create logo concepts, visual identity, and brand system." },
        { icon: "", title: "Deliver", desc: "Finalize all assets and comprehensive brand guidelines." },
      ],
      whyUs: [
        { icon: "", title: "200+ Brands Built", desc: "From startups to enterprises, we have created iconic brands across 50+ industries." },
        { icon: "", title: "Strategy First", desc: "We start with strategy, not aesthetics. Beautiful brands that also perform." },
        { icon: "", title: "World-Class Design", desc: "Award-winning designers who create identities that stand out and endure." },
        { icon: "", title: "Complete Systems", desc: "Not just a logo -- full brand systems with guidelines and templates." },
        { icon: "", title: "Market Research", desc: "Every brand built on competitive analysis and audience insights." },
        { icon: "", title: "Collaborative Process", desc: "Multiple concepts, unlimited revisions, and a process you will enjoy." },
      ],
      faqs: [
        { q: "What is included in a branding package?", a: "Logo design, color palette, typography, brand guidelines, business cards, social media templates, and presentation templates." },
        { q: "How long does branding take?", a: "A complete brand identity typically takes 4-6 weeks from discovery to final delivery." },
        { q: "How many logo concepts do you present?", a: "We present 3-5 unique logo concepts, then refine your chosen direction with unlimited revisions." },
        { q: "Can you rebrand our existing company?", a: "Yes! We handle full rebrands including strategy, design, and rollout planning to ensure a smooth transition." },
        { q: "Do you provide brand guidelines?", a: "Yes, every branding project includes a comprehensive style guide covering logo usage, colors, typography, imagery, and tone of voice." },
      ],
    }} />
  </div>
  );
};

export default BrandingPage;
