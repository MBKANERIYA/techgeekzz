import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "GEO", icon: "🤖", badge: "Generative Engine Optimization", glowColor: "rgba(139,92,246,1)",
  heroImage: '/images/heroes/hero-seo.png',
  heroTitle: "Get Found in", heroHighlight: "AI Search.",
  heroDescription: "Optimize your brand for <strong style='color:#c084fc'>AI-powered search engines</strong> like ChatGPT, Perplexity, Google AI Overviews, and the future of search.",
  stats: [
    { value: "40%", label: "Of Search Going AI" }, { value: "100+", label: "GEO Campaigns" },
    { value: "5x", label: "AI Citation Growth" }, { value: "#1", label: "Early Mover Advantage" },
  ],
  services: [
    { icon: "🤖", title: "AI Search Audit", desc: "Analyze how AI models currently perceive and cite your brand." },
    { icon: "📝", title: "Entity Optimization", desc: "Build your brand as a recognized entity across knowledge graphs and AI training data." },
    { icon: "📊", title: "Citation Tracking", desc: "Monitor when and how AI search engines cite your brand in responses." },
    { icon: "✍️", title: "AI-Optimized Content", desc: "Content structured for AI comprehension with clear facts, statistics, and authority signals." },
    { icon: "🔗", title: "Authority Building", desc: "Strengthen E-E-A-T signals that AI models use to determine trustworthiness." },
    { icon: "📈", title: "Performance Monitoring", desc: "Track AI search visibility, citation frequency, and brand sentiment in AI responses." },
  ],
  process: [
    { icon: "🔍", title: "AI Visibility Audit", desc: "Test how ChatGPT, Perplexity, and Google SGE currently reference your brand." },
    { icon: "📋", title: "GEO Strategy", desc: "Build a strategy to increase AI citations, entity recognition, and authority signals." },
    { icon: "🚀", title: "Optimize", desc: "Implement content, schema, and authority improvements for AI search." },
    { icon: "📊", title: "Monitor & Iterate", desc: "Track AI citations, refine approach, and stay ahead of AI search evolution." },
  ],
  whyUs: [
    { icon: "🧠", title: "AI-First Thinking", desc: "We understand how LLMs process and rank information differently from traditional search." },
    { icon: "🚀", title: "Early Movers", desc: "One of the first agencies to specialize in GEO — giving you a competitive edge." },
    { icon: "📊", title: "Proprietary Tools", desc: "Custom tools to track AI citations and brand mentions across AI platforms." },
    { icon: "📝", title: "Content Expertise", desc: "We know how to structure content that AI models prefer to cite and reference." },
    { icon: "🔗", title: "Authority Focus", desc: "Building the trust signals that make AI engines recommend your brand." },
    { icon: "📈", title: "Future-Proof", desc: "Strategies that adapt as AI search technology continues to evolve." },
  ],
  faqs: [
    { q: "What is Generative Engine Optimization?", a: "GEO is the practice of optimizing your online presence to be cited and recommended by AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews." },
    { q: "Is GEO different from traditional SEO?", a: "Yes. While traditional SEO optimizes for search rankings, GEO focuses on being cited in AI-generated answers. Both are complementary and important." },
    { q: "Which AI search engines do you optimize for?", a: "We optimize for ChatGPT, Perplexity AI, Google AI Overviews (SGE), Microsoft Copilot, and emerging AI search platforms." },
    { q: "How do you track AI search performance?", a: "We use proprietary tools to monitor when AI models mention your brand, track citation frequency, and analyze sentiment in AI responses." },
    { q: "Is GEO worth investing in now?", a: "Absolutely. AI search is growing rapidly — 40%+ of searches will involve AI by 2025. Early movers gain significant competitive advantage." },
  ],
};
const GEOPage = () => <ServicePageTemplate config={config} />;
export default GEOPage;
