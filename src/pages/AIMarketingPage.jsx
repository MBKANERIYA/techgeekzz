import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "AI Marketing",
  icon: "🤖",
  badge: "AI-Powered Marketing",
  glowColor: "rgba(139,92,246,1)",
  heroImage: '/images/heroes/hero-ai.png',
  heroTitle: "Supercharge Growth with",
  heroHighlight: "AI Marketing.",
  heroDescription: "Harness the power of <strong style='color:#c084fc'>artificial intelligence</strong> to automate, personalize, and optimize your marketing at unprecedented scale and efficiency.",
  stats: [
    { value: "5x", label: "Productivity Boost" },
    { value: "60%", label: "Cost Reduction" },
    { value: "280%", label: "Personalization Lift" },
    { value: "100+", label: "AI Campaigns Launched" },
  ],
  services: [
    { icon: "🤖", title: "AI Content Generation", desc: "AI-assisted content creation for blogs, ads, emails, and social posts at scale." },
    { icon: "🎯", title: "Predictive Targeting", desc: "Machine learning models to identify and target your highest-value prospects." },
    { icon: "💬", title: "AI Chatbots & Assistants", desc: "Intelligent conversational AI for customer support, lead qualification, and sales." },
    { icon: "📊", title: "AI Analytics", desc: "Automated insights, anomaly detection, and predictive forecasting for smarter decisions." },
    { icon: "✉️", title: "AI Email Personalization", desc: "Dynamic content, send-time optimization, and subject line generation powered by AI." },
    { icon: "🎨", title: "AI Creative Optimization", desc: "Automated A/B testing, creative generation, and performance prediction for ad campaigns." },
  ],
  process: [
    { icon: "🔍", title: "AI Readiness Audit", desc: "Assess your data, tech stack, and marketing processes for AI integration potential." },
    { icon: "🧠", title: "Model Development", desc: "Build and train custom AI models tailored to your business data and objectives." },
    { icon: "⚙️", title: "Integration & Deployment", desc: "Seamlessly integrate AI tools into your existing marketing workflows." },
    { icon: "📈", title: "Monitor & Refine", desc: "Continuously monitor AI performance, retrain models, and expand use cases." },
  ],
  whyUs: [
    { icon: "🧠", title: "AI-Native Team", desc: "Our team includes data scientists, ML engineers, and AI-savvy marketers." },
    { icon: "🔧", title: "Custom Solutions", desc: "We build bespoke AI solutions, not just plug-and-play tool subscriptions." },
    { icon: "🤝", title: "Human + AI Approach", desc: "AI augments human creativity — not replaces it. The best of both worlds." },
    { icon: "📊", title: "Measurable ROI", desc: "Clear before-and-after metrics to prove AI impact on your bottom line." },
    { icon: "🔒", title: "Data Privacy First", desc: "All AI implementations follow strict data privacy and security protocols." },
    { icon: "🚀", title: "Future-Ready", desc: "Stay ahead of the curve as we continuously adopt the latest AI advancements." },
  ],
  faqs: [
    { q: "What AI tools do you use?", a: "We leverage OpenAI, Claude, Midjourney, custom ML models, and platform-specific AI features from Google, Meta, and HubSpot." },
    { q: "Is AI marketing suitable for small businesses?", a: "Absolutely. AI tools can actually level the playing field, allowing small businesses to compete with larger companies through automation and personalization." },
    { q: "Will AI replace our marketing team?", a: "No. AI enhances your team by automating repetitive tasks, generating insights, and enabling personalization at scale. Your team focuses on strategy and creativity." },
    { q: "How do you handle data privacy with AI?", a: "We follow strict data governance protocols, ensure GDPR/CCPA compliance, and never share your proprietary data with third-party AI models without consent." },
    { q: "How quickly can we implement AI marketing?", a: "Quick wins like AI content and chatbots can be live within 2 weeks. Custom predictive models typically take 4-8 weeks to develop and deploy." },
  ],
};

const AIMarketingPage = () => <ServicePageTemplate config={config} />;
export default AIMarketingPage;
