import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "SEO", icon: "🔍", badge: "Search Engine Optimization", glowColor: "rgba(59,130,246,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Dominate", heroHighlight: "Search Rankings.",
  heroDescription: "Drive organic traffic and outrank competitors with <strong style='color:#c084fc'>data-driven SEO strategies</strong> that deliver sustainable, long-term growth.",
  stats: [
    { value: "500%", label: "Avg. Traffic Growth" }, { value: "10K+", label: "Keywords Ranked" },
    { value: "200+", label: "Clients Served" }, { value: "4.9/5", label: "Clutch Rating" },
  ],
  services: [
    { icon: "📍", title: "Local SEO", desc: "Dominate local search results, Google Maps, and 'near me' queries for your service area." },
    { icon: "⚙️", title: "Technical SEO", desc: "Site speed, crawlability, indexation, schema markup, and Core Web Vitals optimization." },
    { icon: "🌍", title: "International SEO", desc: "Multi-region strategies with hreflang, geo-targeting, and localized content." },
    { icon: "🗣️", title: "Multilingual SEO", desc: "Native-language keyword research, translation optimization, and cultural adaptation." },
    { icon: "🤖", title: "Generative Engine Optimization", desc: "Optimize for AI-powered search engines like ChatGPT, Perplexity, and Google SGE." },
    { icon: "📊", title: "SEO Analytics", desc: "Custom dashboards, rank tracking, and ROI attribution for full transparency." },
  ],
  process: [
    { icon: "🔍", title: "Audit", desc: "Comprehensive technical, on-page, and off-page SEO audit of your website." },
    { icon: "📋", title: "Strategy", desc: "Keyword research, competitor analysis, and custom SEO roadmap creation." },
    { icon: "🚀", title: "Execute", desc: "On-page optimization, content creation, link building, and technical fixes." },
    { icon: "📈", title: "Scale", desc: "Monitor rankings, refine strategy, and scale what drives the most traffic." },
  ],
  whyUs: [
    { icon: "🏆", title: "Proven Results", desc: "500%+ average organic traffic growth across 200+ client engagements." },
    { icon: "🧠", title: "Full-Stack SEO", desc: "Technical, on-page, off-page, local, and international — we cover it all." },
    { icon: "📊", title: "Transparent Reporting", desc: "Weekly rank tracking and monthly performance reports with clear ROI metrics." },
    { icon: "⚡", title: "Fast Implementation", desc: "Quick wins within 30 days, sustainable growth within 3-6 months." },
    { icon: "🔧", title: "Platform Agnostic", desc: "WordPress, Shopify, Webflow, custom builds — we optimize any platform." },
    { icon: "🤝", title: "Dedicated Team", desc: "SEO strategist, content writer, and link builder dedicated to your account." },
  ],
  faqs: [
    { q: "How long does SEO take to show results?", a: "Quick wins can appear within 30 days. Significant organic traffic growth typically takes 3-6 months of consistent effort." },
    { q: "Do you guarantee first page rankings?", a: "No ethical SEO agency can guarantee specific rankings. We guarantee a data-driven approach and transparent reporting on progress." },
    { q: "What is your link building approach?", a: "We focus on high-quality, white-hat link building through digital PR, guest posting, and content-driven outreach." },
    { q: "Do you work with e-commerce sites?", a: "Yes! E-commerce SEO is one of our specialties, including product page optimization, category structure, and schema markup." },
    { q: "Can you recover from a Google penalty?", a: "Yes. We have extensive experience with manual action recovery, algorithm penalty diagnosis, and site rehabilitation." },
  ],
};
const SEOPage = () => <ServicePageTemplate config={config} />;
export default SEOPage;
