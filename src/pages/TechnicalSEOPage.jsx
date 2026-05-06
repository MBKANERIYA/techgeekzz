import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "Technical SEO", icon: "", badge: "Technical SEO Services", glowColor: "rgba(165,0,253,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Build a Bulletproof", heroHighlight: "Technical Foundation.",
  heroDescription: "Fix crawlability issues, boost site speed, and ensure search engines can <strong style='color:#a500fd'>perfectly index</strong> every important page on your site.",
  stats: [
    { value: "99+", label: "PageSpeed Score" }, { value: "0", label: "Crawl Errors" },
    { value: "3x", label: "Indexation Speed" }, { value: "200+", label: "Audits Completed" },
  ],
  services: [
    { icon: "", title: "Core Web Vitals", desc: "LCP, FID, and CLS optimization to meet Google performance benchmarks." },
    { icon: "", title: "Crawl Optimization", desc: "Fix crawl budget waste, broken links, redirect chains, and orphan pages." },
    { icon: "", title: "Schema Markup", desc: "Structured data implementation for rich snippets, FAQ, reviews, and more." },
    { icon: "", title: "Site Security", desc: "HTTPS migration, security headers, and vulnerability assessment." },
    { icon: "", title: "Mobile Optimization", desc: "Mobile-first indexing compliance, responsive design, and AMP implementation." },
    { icon: "", title: "Site Architecture", desc: "URL structure, internal linking, silo architecture, and XML sitemaps." },
  ],
  process: [
    { icon: "", title: "Deep Crawl", desc: "Comprehensive crawl using Screaming Frog, Sitebulb, and custom tools." },
    { icon: "", title: "Priority Matrix", desc: "Categorize issues by impact and effort for efficient resolution." },
    { icon: "", title: "Implementation", desc: "Fix critical issues, optimize performance, and implement best practices." },
    { icon: "", title: "Validation", desc: "Verify fixes, monitor Core Web Vitals, and ensure sustained performance." },
  ],
  whyUs: [
    { icon: "", title: "Deep Technical Expertise", desc: "Our team includes developers who understand server configs, CDNs, and rendering." },
    { icon: "", title: "Speed Obsessed", desc: "We routinely achieve 95+ PageSpeed scores on complex, content-heavy sites." },
    { icon: "", title: "Crawl Efficiency", desc: "Maximize crawl budget so Google indexes your important pages faster." },
    { icon: "", title: "Data-Driven Fixes", desc: "Every fix is prioritized by potential traffic impact, not arbitrary checklists." },
    { icon: "", title: "Any Platform", desc: "WordPress, Shopify, Next.js, custom CMS — we handle any tech stack." },
    { icon: "", title: "Measurable Impact", desc: "Before/after metrics on every engagement. See the real impact of technical fixes." },
  ],
  faqs: [
    { q: "What is a technical SEO audit?", a: "A comprehensive analysis of your site covering crawlability, indexation, speed, security, mobile-friendliness, and structured data." },
    { q: "How often should technical SEO be reviewed?", a: "We recommend quarterly audits, with continuous monitoring for critical metrics like Core Web Vitals and crawl errors." },
    { q: "Can you work with our development team?", a: "Absolutely. We provide detailed, developer-friendly documentation and work alongside your team to implement fixes." },
    { q: "Will technical SEO improve my rankings?", a: "Yes. Technical issues can prevent Google from properly crawling and ranking your pages. Fixing them often leads to immediate ranking improvements." },
    { q: "Do you handle site migrations?", a: "Yes, we specialize in SEO-safe site migrations including URL mapping, redirect planning, and post-migration monitoring." },
  ],
};
const TechnicalSEOPage = () => <ServicePageTemplate config={config} />;
export default TechnicalSEOPage;
