import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "International SEO", icon: "", badge: "International SEO", glowColor: "rgba(236,72,153,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Expand", heroHighlight: "Globally.",
  heroDescription: "Reach new markets with <strong style='color:#a500fd'>international SEO strategies</strong> that adapt your content and technical setup for global search dominance.",
  stats: [
    { value: "30+", label: "Countries Served" }, { value: "50+", label: "Markets Entered" },
    { value: "400%", label: "Intl. Traffic Growth" }, { value: "20+", label: "Languages" },
  ],
  services: [
    { icon: "", title: "Hreflang Implementation", desc: "Correct hreflang setup to serve the right language/region to each user." },
    { icon: "", title: "Geo-Targeting Strategy", desc: "ccTLD, subdomain, or subdirectory — we choose the best structure for your goals." },
    { icon: "", title: "Localized Content", desc: "Content adapted for local culture, search intent, and regional keywords." },
    { icon: "", title: "Regional Link Building", desc: "Build authority with country-specific backlinks and local media placements." },
    { icon: "", title: "Market Research", desc: "Search demand analysis, competitor mapping, and opportunity sizing per market." },
    { icon: "", title: "Technical Setup", desc: "CDN configuration, server location, and international site architecture." },
  ],
  process: [
    { icon: "", title: "Market Analysis", desc: "Identify highest-opportunity markets based on search demand and competition." },
    { icon: "", title: "Architecture", desc: "Design the optimal international site structure and technical setup." },
    { icon: "", title: "Localize", desc: "Create and optimize localized content for each target market." },
    { icon: "", title: "Launch & Scale", desc: "Roll out market by market, measure performance, and expand." },
  ],
  whyUs: [
    { icon: "", title: "Global Experience", desc: "Successfully launched SEO campaigns in 30+ countries across 6 continents." },
    { icon: "", title: "Native Speakers", desc: "Content created by native speakers, not machine translated." },
    { icon: "", title: "Technical Precision", desc: "Flawless hreflang, canonical, and geo-targeting implementations." },
    { icon: "", title: "Market Intelligence", desc: "Deep understanding of regional search engines beyond just Google." },
    { icon: "", title: "Local Connections", desc: "Link building networks in key markets worldwide." },
    { icon: "", title: "Scalable Approach", desc: "Frameworks that scale from 2 markets to 50+ efficiently." },
  ],
  faqs: [
    { q: "Should I use subdomains or subdirectories?", a: "It depends on your resources and goals. Subdirectories consolidate domain authority while ccTLDs send the strongest geo-signals. We recommend based on your situation." },
    { q: "Do you handle content translation?", a: "We go beyond translation — we do full content localization with native speakers who understand local search intent and culture." },
    { q: "Which countries do you cover?", a: "We have experience in 30+ countries including the US, UK, Germany, France, Spain, Japan, Brazil, UAE, and many more." },
    { q: "How do you handle different search engines?", a: "Beyond Google, we optimize for Baidu (China), Yandex (Russia), Naver (Korea), and Yahoo Japan based on target markets." },
    { q: "What is hreflang and why does it matter?", a: "Hreflang tags tell search engines which language/region version of a page to show. Incorrect implementation can cause duplicate content and traffic loss." },
  ],
};
const InternationalSEOPage = () => <ServicePageTemplate config={config} />;
export default InternationalSEOPage;
