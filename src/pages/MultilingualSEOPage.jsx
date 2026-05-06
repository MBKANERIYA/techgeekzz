import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "Multilingual SEO", icon: "", badge: "Multilingual SEO", glowColor: "rgba(34,197,94,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Speak Your Audience's", heroHighlight: "Language.",
  heroDescription: "Reach global audiences in their native language with <strong style='color:#a500fd'>multilingual SEO</strong> that goes beyond translation to true localization.",
  stats: [
    { value: "20+", label: "Languages" }, { value: "350%", label: "Multilingual Traffic Growth" },
    { value: "50+", label: "Localization Projects" }, { value: "98%", label: "Client Satisfaction" },
  ],
  services: [
    { icon: "", title: "Native Keyword Research", desc: "Keyword research by native speakers who understand local search behavior." },
    { icon: "", title: "Content Localization", desc: "Culturally adapted content that resonates with local audiences, not just translations." },
    { icon: "", title: "Technical Multilingual Setup", desc: "Hreflang, language selectors, and CMS configuration for multilingual sites." },
    { icon: "", title: "Multilingual Link Building", desc: "Authority building with language-specific publications and media." },
    { icon: "", title: "Performance Tracking", desc: "Per-language rank tracking, traffic analytics, and conversion monitoring." },
    { icon: "", title: "Cultural Consulting", desc: "Ensure messaging, imagery, and UX are culturally appropriate for each market." },
  ],
  process: [
    { icon: "", title: "Language Audit", desc: "Assess current multilingual setup and identify optimization opportunities." },
    { icon: "", title: "Localization Plan", desc: "Define priority languages, keyword targets, and content adaptation strategy." },
    { icon: "", title: "Create & Optimize", desc: "Produce localized content with native speakers and optimize for local search." },
    { icon: "", title: "Track & Expand", desc: "Monitor per-language performance and add new languages as you grow." },
  ],
  whyUs: [
    { icon: "", title: "Native Speakers", desc: "Content created by native speakers in 20+ languages, never machine-translated." },
    { icon: "", title: "Cultural Depth", desc: "We understand cultural nuances that impact search behavior and conversion." },
    { icon: "", title: "Technical Excellence", desc: "Perfect hreflang implementations and multilingual site architecture." },
    { icon: "", title: "Per-Language Analytics", desc: "Granular reporting showing performance for each language separately." },
    { icon: "", title: "CMS Expertise", desc: "WPML, Weglot, custom setups — we work with any multilingual CMS solution." },
    { icon: "", title: "Proven Growth", desc: "350%+ average traffic growth across multilingual campaigns." },
  ],
  faqs: [
    { q: "What languages do you support?", a: "We have native speakers for 20+ languages including Spanish, French, German, Portuguese, Chinese, Japanese, Arabic, Korean, and more." },
    { q: "Is machine translation okay for SEO?", a: "No. Machine translation misses cultural nuances and local search intent. We always use native speakers with SEO training for best results." },
    { q: "How do you handle right-to-left languages?", a: "We have experience with RTL languages like Arabic and Hebrew, including proper CSS, font selection, and UX considerations." },
    { q: "Can you localize our existing content?", a: "Yes! We audit existing translations, fix SEO issues, and optimize for local keywords rather than literal translations." },
    { q: "What CMS do you recommend for multilingual sites?", a: "It depends on your needs. WordPress with WPML, Webflow with Weglot, or headless CMS solutions all work well with proper implementation." },
  ],
};
const MultilingualSEOPage = () => <ServicePageTemplate config={config} />;
export default MultilingualSEOPage;
