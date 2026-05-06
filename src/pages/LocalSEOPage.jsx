import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "Local SEO", icon: "", badge: "Local Search Optimization", glowColor: "rgba(34,197,94,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Own Your", heroHighlight: "Local Market.",
  heroDescription: "Get found by customers in your area with <strong style='color:#a500fd'>local SEO strategies</strong> that boost your Google Maps visibility and drive foot traffic.",
  stats: [
    { value: "300%", label: "Local Traffic Boost" }, { value: "#1", label: "Map Pack Rankings" },
    { value: "85%", label: "Call Increase" }, { value: "150+", label: "Local Clients" },
  ],
  services: [
    { icon: "", title: "Google Business Profile", desc: "Complete GBP optimization, posts, Q&A management, and review strategy." },
    { icon: "", title: "Local Citations", desc: "NAP consistency across 100+ directories, data aggregators, and industry listings." },
    { icon: "⭐", title: "Review Management", desc: "Reputation monitoring, review generation campaigns, and response templates." },
    { icon: "", title: "Local Content", desc: "Location-specific landing pages, blog posts, and schema markup implementation." },
    { icon: "", title: "Local Link Building", desc: "Community partnerships, local sponsorships, and geo-targeted outreach." },
    { icon: "", title: "Local Analytics", desc: "Track local pack rankings, driving directions, calls, and website visits from local search." },
  ],
  process: [
    { icon: "", title: "Local Audit", desc: "Audit your local presence, citations, reviews, and competitor landscape." },
    { icon: "", title: "Optimize", desc: "Optimize GBP, fix citations, implement local schema, and build location pages." },
    { icon: "⭐", title: "Reviews & Content", desc: "Launch review campaigns and create locally-optimized content." },
    { icon: "", title: "Monitor & Grow", desc: "Track local rankings, analyze performance, and expand to new locations." },
  ],
  whyUs: [
    { icon: "", title: "Local Expertise", desc: "150+ local businesses ranked in the Google Map Pack across multiple industries." },
    { icon: "⭐", title: "Review Strategy", desc: "Proven review generation systems that build trust and boost rankings." },
    { icon: "", title: "Multi-Location", desc: "Scalable strategies for single locations to 500+ franchise networks." },
    { icon: "", title: "Hyperlocal Tracking", desc: "Geo-grid rank tracking to see exactly where you rank in every neighborhood." },
    { icon: "", title: "Quick Results", desc: "Local SEO can show results within weeks, not months." },
    { icon: "", title: "Full Service", desc: "GBP, citations, reviews, content, links — everything managed for you." },
  ],
  faqs: [
    { q: "How long until I rank in the local Map Pack?", a: "Many clients see Map Pack improvements within 4-8 weeks. Competitive markets may take 3-4 months for top-3 placement." },
    { q: "Do you manage Google Business Profile?", a: "Yes! We handle complete GBP optimization including posts, photos, Q&A, review responses, and performance monitoring." },
    { q: "Can you help with multiple locations?", a: "Absolutely. We manage local SEO for businesses with 1 to 500+ locations with scalable processes and reporting." },
    { q: "How important are reviews for local SEO?", a: "Reviews are one of the top 3 ranking factors for local search. We implement review generation campaigns to build your online reputation." },
    { q: "Do you fix citation inconsistencies?", a: "Yes, we audit and correct NAP (Name, Address, Phone) data across 100+ directories to ensure consistency." },
  ],
};
const LocalSEOPage = () => <ServicePageTemplate config={config} />;
export default LocalSEOPage;
