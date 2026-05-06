import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "Web Analytics",
  icon: "",
  badge: "Web Analytics & Insights",
  glowColor: "rgba(59,130,246,1)",
  heroImage: '/images/heroes/hero-ai.png',
  heroTitle: "Unlock",
  heroHighlight: "Actionable Insights.",
  heroDescription: "Transform raw data into <strong style='color:#a500fd'>strategic decisions</strong>. Our analytics experts set up, track, and interpret the metrics that actually matter for your business.",
  stats: [
    { value: "500+", label: "Analytics Setups" },
    { value: "99.9%", label: "Tracking Accuracy" },
    { value: "35%", label: "Avg. Decision Speed Boost" },
    { value: "50+", label: "Custom Dashboards" },
  ],
  services: [
    { icon: "", title: "GA4 Implementation", desc: "Full Google Analytics 4 setup with custom events, conversions, and e-commerce tracking." },
    { icon: "", title: "Tag Management", desc: "Google Tag Manager setup, audit, and optimization for clean, reliable data collection." },
    { icon: "", title: "Custom Dashboards", desc: "Real-time dashboards in Looker Studio, Tableau, or Power BI tailored to your KPIs." },
    { icon: "", title: "Attribution Modeling", desc: "Multi-touch attribution to understand which channels truly drive conversions." },
    { icon: "", title: "Data Audits", desc: "Comprehensive audit of your existing analytics to identify gaps, errors, and opportunities." },
    { icon: "", title: "Predictive Analytics", desc: "Machine learning models to forecast trends, predict churn, and identify growth opportunities." },
  ],
  process: [
    { icon: "", title: "Audit & Assessment", desc: "Review your current analytics stack, identify gaps, and define measurement goals." },
    { icon: "", title: "Implementation", desc: "Set up tracking, tags, events, and data layers with precision." },
    { icon: "", title: "Dashboard & Reports", desc: "Build custom dashboards and automated reporting workflows." },
    { icon: "", title: "Insights & Action", desc: "Regular analysis sessions to translate data into strategic recommendations." },
  ],
  whyUs: [
    { icon: "", title: "Certified Experts", desc: "Google Analytics, GTM, and Looker Studio certified professionals." },
    { icon: "", title: "Privacy Compliant", desc: "GDPR, CCPA, and cookie consent compliant implementations." },
    { icon: "", title: "Business-First Approach", desc: "We track what matters to your business, not vanity metrics." },
    { icon: "", title: "Platform Agnostic", desc: "GA4, Adobe Analytics, Mixpanel, Amplitude — we work with all major platforms." },
    { icon: "", title: "Actionable Insights", desc: "Not just dashboards — we deliver strategic recommendations with every report." },
    { icon: "", title: "Ongoing Support", desc: "Continuous monitoring, troubleshooting, and optimization of your analytics stack." },
  ],
  faqs: [
    { q: "Do you help with GA4 migration?", a: "Yes, we specialize in Universal Analytics to GA4 migrations, including event mapping, custom dimensions, and historical data preservation." },
    { q: "Which analytics platforms do you support?", a: "We work with GA4, Adobe Analytics, Mixpanel, Amplitude, Heap, Matomo, and most major analytics platforms." },
    { q: "Can you build custom dashboards?", a: "Absolutely. We build dashboards in Looker Studio, Tableau, Power BI, or any platform you prefer, tailored to your specific KPIs." },
    { q: "How do you ensure data accuracy?", a: "Through rigorous QA processes, tag auditing tools, real-time monitoring, and cross-platform data validation." },
    { q: "Do you handle server-side tracking?", a: "Yes, we implement server-side GTM and first-party data solutions for more accurate tracking in a cookieless world." },
  ],
};

const WebAnalyticsPage = () => <ServicePageTemplate config={config} />;
export default WebAnalyticsPage;
