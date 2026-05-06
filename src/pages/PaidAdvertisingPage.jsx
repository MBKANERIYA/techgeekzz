import ServicePageTemplate from '../components/services/ServicePageTemplate';
const config = {
  title: "Paid Advertising", icon: "", badge: "Paid Media & PPC", glowColor: "rgba(249,115,22,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Scale Fast with", heroHighlight: "Paid Advertising.",
  heroDescription: "Drive immediate results with <strong style='color:#a500fd'>high-ROI paid campaigns</strong> across Google, Meta, YouTube, Amazon, and every major ad platform.",
  stats: [
    { value: "$50M+", label: "Ad Spend Managed" }, { value: "5.2x", label: "Avg. ROAS" },
    { value: "300+", label: "Campaigns Launched" }, { value: "40%", label: "Avg. CPA Reduction" },
  ],
  services: [
    { icon: "", title: "Google Ads", desc: "Search, Display, Shopping, and Performance Max campaigns for maximum visibility." },
    { icon: "", title: "Facebook Ads", desc: "Full-funnel campaigns from awareness to conversion on the world's largest social platform." },
    { icon: "", title: "Instagram Ads", desc: "Visual-first campaigns leveraging Stories, Reels, and Shopping features." },
    { icon: "▶", title: "YouTube Ads", desc: "Video advertising from pre-rolls to discovery ads for brand awareness and conversions." },
    { icon: "", title: "X (Twitter) Ads", desc: "Promoted tweets, trends, and follower campaigns for real-time engagement." },
    { icon: "", title: "Amazon Ads", desc: "Sponsored Products, Brands, and Display campaigns to dominate marketplace search." },
  ],
  process: [
    { icon: "", title: "Audit & Research", desc: "Analyze current campaigns, competitors, and market opportunity." },
    { icon: "", title: "Strategy & Setup", desc: "Build campaign structure, create ads, and configure tracking." },
    { icon: "", title: "Launch & Test", desc: "Launch campaigns, A/B test creatives, audiences, and bidding strategies." },
    { icon: "", title: "Optimize & Scale", desc: "Continuously optimize for lower CPA and higher ROAS, then scale winners." },
  ],
  whyUs: [
    { icon: "", title: "$50M+ Managed", desc: "Deep experience managing large-scale ad budgets across all platforms." },
    { icon: "", title: "Data-Driven", desc: "Every decision backed by data. We optimize for revenue, not vanity metrics." },
    { icon: "", title: "Creative Team", desc: "In-house designers and copywriters creating high-converting ad creatives." },
    { icon: "", title: "Platform Certified", desc: "Google Premier Partner, Meta Business Partner, and Amazon Ads certified." },
    { icon: "", title: "Fast Results", desc: "See results from day one. Paid advertising delivers immediate traffic and leads." },
    { icon: "", title: "Transparent ROAS", desc: "Clear attribution and ROI reporting so you know exactly what every dollar earns." },
  ],
  faqs: [
    { q: "What is your minimum ad spend requirement?", a: "We typically work with clients spending $5,000+ per month on ads. This ensures enough budget for meaningful testing and optimization." },
    { q: "Which ad platform should I use?", a: "It depends on your audience and goals. Google Ads captures high-intent search traffic, Meta excels at awareness and retargeting, and Amazon is ideal for e-commerce." },
    { q: "How quickly will I see results?", a: "Paid advertising can drive traffic from day one. Optimization for peak ROAS typically takes 2-4 weeks of data collection and testing." },
    { q: "Do you handle creative production?", a: "Yes! Our in-house creative team produces ad copy, images, videos, and landing pages optimized for conversion." },
    { q: "What is ROAS and what should I expect?", a: "ROAS (Return on Ad Spend) measures revenue per dollar spent. Our clients average 5.2x ROAS, though this varies by industry and model." },
  ],
};
const PaidAdvertisingPage = () => <ServicePageTemplate config={config} />;
export default PaidAdvertisingPage;
