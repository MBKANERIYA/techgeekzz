import ServicePageTemplate from '../components/services/ServicePageTemplate';
const BrandingPage = () => <ServicePageTemplate config={{
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
    { icon: "", title: "Complete Systems", desc: "Not just a logo — full brand systems with guidelines and templates." },
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
}} />;
export default BrandingPage;
