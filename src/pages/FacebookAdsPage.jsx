import ServicePageTemplate from '../components/services/ServicePageTemplate';
const FacebookAdsPage = () => <ServicePageTemplate config={{
  title: "Facebook Ads", icon: "📘", badge: "Facebook Advertising", glowColor: "rgba(66,103,178,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Scale with", heroHighlight: "Facebook Ads.",
  heroDescription: "Reach 3 billion users with <strong style='color:#c084fc'>precision-targeted Facebook campaigns</strong> that drive awareness, engagement, and conversions.",
  stats: [
    { value: "6.2x", label: "Avg. ROAS" }, { value: "$15M+", label: "Meta Spend Managed" },
    { value: "50%", label: "CPA Reduction" }, { value: "3B", label: "Potential Reach" },
  ],
  services: [
    { icon: "🎯", title: "Audience Targeting", desc: "Lookalike audiences, interest targeting, and custom audiences from your data." },
    { icon: "🎨", title: "Creative Production", desc: "Scroll-stopping images, carousels, and video ads designed for the feed." },
    { icon: "🔄", title: "Retargeting", desc: "Dynamic retargeting to re-engage visitors and recover abandoned carts." },
    { icon: "📊", title: "Conversion Campaigns", desc: "Optimized for purchases, leads, or app installs with advanced pixel tracking." },
    { icon: "📱", title: "Stories & Reels Ads", desc: "Vertical-format ads optimized for Stories and Reels placements." },
    { icon: "🛍️", title: "Facebook Shops", desc: "Catalog integration and dynamic product ads for e-commerce brands." },
  ],
  process: [
    { icon: "🔍", title: "Audience Research", desc: "Map your ideal customer profiles and build targeting strategies." },
    { icon: "🎨", title: "Creative & Copy", desc: "Produce ad creatives, write copy, and design landing pages." },
    { icon: "🚀", title: "Launch & Test", desc: "Launch campaigns with structured A/B tests across audiences and creatives." },
    { icon: "📈", title: "Scale Winners", desc: "Identify top performers and scale budget while maintaining ROAS." },
  ],
  whyUs: [
    { icon: "🏆", title: "Meta Business Partner", desc: "Certified Meta partner with dedicated support and early access to features." },
    { icon: "🎨", title: "Creative Excellence", desc: "In-house team producing high-converting ad creatives at scale." },
    { icon: "📊", title: "Advanced Attribution", desc: "Multi-touch attribution beyond last-click for accurate ROAS measurement." },
    { icon: "🧪", title: "Testing Framework", desc: "Structured creative and audience testing methodology for consistent growth." },
    { icon: "💰", title: "Budget Efficiency", desc: "Advanced bid strategies and budget allocation to maximize every dollar." },
    { icon: "📈", title: "Full-Funnel", desc: "Top-of-funnel awareness through bottom-funnel conversion campaigns." },
  ],
  faqs: [
    { q: "What budget do I need for Facebook Ads?", a: "We recommend $3,000+ monthly for meaningful results. This allows enough budget for testing audiences and creatives." },
    { q: "Do you handle creative production?", a: "Yes! Our in-house creative team produces images, carousels, videos, and UGC-style content optimized for Facebook." },
    { q: "How do you handle iOS tracking changes?", a: "We use Conversions API, advanced matching, and first-party data strategies to maintain accurate tracking post-iOS 14.5." },
    { q: "Can you run ads for my Shopify store?", a: "Absolutely. We specialize in e-commerce Facebook Ads with catalog integration, dynamic product ads, and Shopping campaigns." },
    { q: "What ROAS can I expect?", a: "It varies by industry, but our e-commerce clients average 6.2x ROAS. Service businesses typically see $15-50+ per lead." },
  ],
}} />;
export default FacebookAdsPage;
