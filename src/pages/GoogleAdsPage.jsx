import ServicePageTemplate from '../components/services/ServicePageTemplate';
const c = (t, i, b, g, ht, hh, hd, st, sv, pr, wu, fq) => ({ title:t, icon:i, badge:b, glowColor:g, heroTitle:ht, heroHighlight:hh, heroDescription:hd, stats:st, services:sv, process:pr, whyUs:wu, faqs:fq });

const GoogleAdsPage = () => <ServicePageTemplate config={{
  title: "Google Ads", icon: "", badge: "Google Ads Management", glowColor: "rgba(66,133,244,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Dominate", heroHighlight: "Google Search.",
  heroDescription: "Capture high-intent customers at the exact moment they search with <strong style='color:#a500fd'>expert Google Ads management</strong> that maximizes every dollar.",
  stats: [
    { value: "5.8x", label: "Avg. ROAS" }, { value: "$30M+", label: "Google Spend Managed" },
    { value: "45%", label: "CPC Reduction" }, { value: "200+", label: "Accounts Managed" },
  ],
  services: [
    { icon: "", title: "Search Campaigns", desc: "High-intent keyword targeting to capture customers actively searching for your solution." },
    { icon: "", title: "Display Network", desc: "Visual banner ads across 2M+ websites for awareness and retargeting." },
    { icon: "", title: "Shopping Ads", desc: "Product listing ads that showcase your products directly in search results." },
    { icon: "", title: "Performance Max", desc: "AI-powered campaigns that optimize across all Google channels simultaneously." },
    { icon: "", title: "App Campaigns", desc: "Drive app installs and in-app actions across Google Search, Play, and YouTube." },
    { icon: "", title: "Remarketing", desc: "Re-engage visitors who left without converting with targeted follow-up ads." },
  ],
  process: [
    { icon: "", title: "Account Audit", desc: "Comprehensive audit of existing campaigns, quality scores, and wasted spend." },
    { icon: "", title: "Strategy Build", desc: "Keyword research, campaign structure, and bidding strategy development." },
    { icon: "", title: "Launch & Test", desc: "Deploy campaigns with A/B testing on ads, landing pages, and audiences." },
    { icon: "", title: "Optimize Daily", desc: "Daily bid adjustments, negative keywords, and continuous optimization." },
  ],
  whyUs: [
    { icon: "", title: "Google Premier Partner", desc: "Top 3% of Google Ads agencies worldwide with exclusive support and beta access." },
    { icon: "", title: "Quality Score Focus", desc: "We optimize for Quality Score to get you more clicks at lower costs." },
    { icon: "", title: "Conversion Tracking", desc: "Pixel-perfect tracking setup so every conversion is accurately attributed." },
    { icon: "", title: "Budget Efficiency", desc: "Aggressive negative keyword management to eliminate wasted ad spend." },
    { icon: "", title: "Always Testing", desc: "Continuous A/B testing on ads, extensions, and landing pages." },
    { icon: "", title: "Transparent Reports", desc: "Weekly reports with spend, conversions, ROAS, and actionable recommendations." },
  ],
  faqs: [
    { q: "Are you a Google Premier Partner?", a: "Yes, we are a certified Google Premier Partner, placing us in the top 3% of agencies worldwide with direct Google support." },
    { q: "How much should I budget for Google Ads?", a: "We recommend starting with at least $5,000/month. This allows enough data for optimization. We scale budgets as we prove ROI." },
    { q: "What is a good Quality Score?", a: "A Quality Score of 7+ is good, 8+ is excellent. Higher scores mean lower CPCs and better ad positions. We optimize all factors that influence it." },
    { q: "Do you manage Shopping campaigns?", a: "Yes! We manage Google Shopping/Product Listing Ads including feed optimization, bidding, and negative keyword management." },
    { q: "How do you reduce wasted spend?", a: "Through aggressive negative keyword lists, search term monitoring, audience exclusions, and dayparting optimizations." },
  ],
}} />;
export default GoogleAdsPage;
