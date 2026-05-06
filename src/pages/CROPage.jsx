import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "CRO",
  icon: "",
  badge: "Conversion Rate Optimization",
  glowColor: "rgba(34,197,94,1)",
  heroImage: '/images/heroes/hero-ai.png',
  heroTitle: "Maximize",
  heroHighlight: "Conversions.",
  heroDescription: "Turn more visitors into customers with <strong style='color:#a500fd'>scientific CRO strategies</strong>. We optimize every step of your funnel for measurable revenue growth.",
  stats: [
    { value: "67%", label: "Avg. Conversion Lift" },
    { value: "2,400+", label: "Tests Completed" },
    { value: "$48M+", label: "Revenue Unlocked" },
    { value: "98%", label: "Client Retention" },
  ],
  services: [
    { icon: "", title: "CRO Audits", desc: "Comprehensive analysis of your funnel to identify conversion bottlenecks and quick wins." },
    { icon: "", title: "A/B Testing", desc: "Hypothesis-driven split testing on landing pages, CTAs, forms, and checkout flows." },
    { icon: "", title: "User Journey Mapping", desc: "Map the complete customer journey and optimize every touchpoint for conversion." },
    { icon: "", title: "Heatmap Analysis", desc: "Deep behavioral analysis using Hotjar and FullStory to understand how users interact with your site." },
    { icon: "", title: "Landing Page Optimization", desc: "High-converting landing pages designed with UX best practices and persuasion frameworks." },
    { icon: "", title: "Checkout Optimization", desc: "Reduce cart abandonment and streamline the purchase flow for e-commerce brands." },
  ],
  process: [
    { icon: "", title: "Data Collection", desc: "Install tracking, gather heatmaps, session recordings, and analytics data." },
    { icon: "", title: "Analysis & Hypotheses", desc: "Identify drop-off points and form testable hypotheses for improvement." },
    { icon: "", title: "Test & Validate", desc: "Run statistically significant A/B tests to validate each optimization." },
    { icon: "", title: "Implement & Scale", desc: "Roll out winning variations and move to the next optimization opportunity." },
  ],
  whyUs: [
    { icon: "", title: "Data-Driven Decisions", desc: "No guesswork. Every recommendation is backed by quantitative and qualitative data." },
    { icon: "", title: "Revenue Focus", desc: "We optimize for revenue per visitor, not just conversion rate percentages." },
    { icon: "", title: "Rigorous Testing", desc: "Bayesian statistics ensure we only ship changes that truly outperform." },
    { icon: "", title: "Full-Funnel Approach", desc: "From awareness to checkout, we optimize every step of the customer journey." },
    { icon: "", title: "Fast Iteration", desc: "2-week sprint cycles mean rapid testing and continuous improvement." },
    { icon: "", title: "Tech Agnostic", desc: "We work with any platform: Shopify, WordPress, custom builds, and more." },
  ],
  faqs: [
    { q: "What is Conversion Rate Optimization?", a: "CRO is the systematic process of increasing the percentage of website visitors who take a desired action — buying a product, filling out a form, or signing up." },
    { q: "How long before we see CRO results?", a: "Initial quick wins can be identified within 2 weeks. Significant, validated improvements typically emerge within 6-8 weeks of testing." },
    { q: "What tools do you use for CRO?", a: "We use Google Optimize, VWO, Optimizely for testing, along with Hotjar, FullStory, and GA4 for analysis." },
    { q: "Do you work with e-commerce brands?", a: "Yes! E-commerce CRO is one of our specialties. We optimize product pages, cart flows, and checkout experiences." },
    { q: "What is a good conversion rate?", a: "It varies by industry, but most websites convert at 2-5%. Our clients typically see 30-100% improvement over their baseline." },
  ],
};

const CROPage = () => <ServicePageTemplate config={config} />;
export default CROPage;
