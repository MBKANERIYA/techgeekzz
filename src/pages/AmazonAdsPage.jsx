import ServicePageTemplate from '../components/services/ServicePageTemplate';
const AmazonAdsPage = () => <ServicePageTemplate config={{
  title: "Amazon Ads", icon: "📦", badge: "Amazon Advertising", glowColor: "rgba(255,153,0,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Sell More on", heroHighlight: "Amazon.",
  heroDescription: "Dominate Amazon search results and outperform competitors with <strong style='color:#c084fc'>expert Amazon Ads management</strong> that drives sales and profitability.",
  stats: [
    { value: "7.5x", label: "Avg. ROAS" }, { value: "$8M+", label: "Amazon Spend Managed" },
    { value: "60%", label: "Sales Growth" }, { value: "150+", label: "Products Managed" },
  ],
  services: [
    { icon: "🔍", title: "Sponsored Products", desc: "Product-level ads that appear in search results and product pages." },
    { icon: "🏷️", title: "Sponsored Brands", desc: "Brand-level ads with logo, headline, and multiple products." },
    { icon: "🖼️", title: "Sponsored Display", desc: "Retargeting ads on and off Amazon to re-engage shoppers." },
    { icon: "📊", title: "DSP (Demand-Side)", desc: "Programmatic display ads across Amazon and partner sites." },
    { icon: "📝", title: "Listing Optimization", desc: "Keyword-optimized titles, bullets, and A+ content for higher conversion." },
    { icon: "📈", title: "Analytics & Reporting", desc: "ACoS, TACoS, and ROAS tracking with actionable insights." },
  ],
  process: [
    { icon: "🔍", title: "Account Audit", desc: "Audit current campaigns, listings, and competitive positioning." },
    { icon: "📋", title: "Keyword Strategy", desc: "Deep keyword research including long-tail and competitor terms." },
    { icon: "🚀", title: "Launch & Optimize", desc: "Build campaign structure and continuously optimize bids and targeting." },
    { icon: "📈", title: "Scale Profitably", desc: "Scale winning campaigns while maintaining target ACoS." },
  ],
  whyUs: [
    { icon: "📦", title: "Amazon Specialists", desc: "Dedicated Amazon team with deep marketplace expertise." },
    { icon: "📊", title: "Profitability Focus", desc: "We optimize for profit, not just sales — tracking ACoS and TACoS closely." },
    { icon: "📝", title: "Listing + Ads", desc: "We optimize both listings and ads for compound growth." },
    { icon: "🔍", title: "Keyword Mastery", desc: "Advanced keyword research and harvesting techniques for competitive edge." },
    { icon: "🏆", title: "Proven Results", desc: "7.5x average ROAS and 60% average sales growth for our Amazon clients." },
    { icon: "📈", title: "Full Funnel", desc: "Sponsored Products, Brands, Display, and DSP for complete coverage." },
  ],
  faqs: [
    { q: "What is a good ACoS on Amazon?", a: "It depends on your margins, but 15-30% ACoS is typical. We optimize for your target profitability, not just a generic benchmark." },
    { q: "Do you optimize product listings too?", a: "Yes! Ads alone are not enough. We optimize titles, bullets, images, A+ content, and backend keywords for maximum conversion." },
    { q: "How much should I spend on Amazon Ads?", a: "We recommend $3,000+ monthly to start. Budget depends on category competitiveness and number of products." },
    { q: "Can you help launch new products?", a: "Absolutely. We have launch strategies that combine aggressive advertising with listing optimization and review generation." },
    { q: "What is the difference between ACoS and TACoS?", a: "ACoS measures ad spend efficiency. TACoS (Total ACoS) measures ad spend as a percentage of total sales, showing the full impact of ads on organic growth." },
  ],
}} />;
export default AmazonAdsPage;
