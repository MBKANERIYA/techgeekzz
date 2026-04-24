import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "Social Media",
  icon: "📱",
  badge: "Social Media Marketing",
  glowColor: "rgba(59,130,246,1)",
  heroImage: '/images/heroes/hero-social.png',
  heroTitle: "Dominate",
  heroHighlight: "Social Media.",
  heroDescription: "Build a powerful social presence that drives engagement, grows your audience, and converts followers into loyal customers with <strong style='color:#c084fc'>data-driven strategies</strong>.",
  stats: [
    { value: "500M+", label: "Impressions Generated" },
    { value: "12M+", label: "Followers Grown" },
    { value: "340%", label: "Avg. Engagement Lift" },
    { value: "200+", label: "Brands Managed" },
  ],
  services: [
    { icon: "📊", title: "Social Media Strategy", desc: "Custom strategies aligned with your business goals, target audience, and competitive landscape." },
    { icon: "📝", title: "Content Creation", desc: "Scroll-stopping visuals, videos, and copy crafted by our in-house creative team." },
    { icon: "👥", title: "Community Management", desc: "Active engagement, comment moderation, and community building across all platforms." },
    { icon: "📈", title: "Paid Social Campaigns", desc: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, TikTok, and X for maximum ROI." },
    { icon: "🤝", title: "Influencer Collaborations", desc: "Strategic partnerships with relevant influencers to amplify your brand message." },
    { icon: "📉", title: "Analytics & Reporting", desc: "Detailed monthly reports with actionable insights and KPI tracking dashboards." },
  ],
  process: [
    { icon: "🔍", title: "Audit & Research", desc: "Deep-dive into your current social presence, competitors, and audience insights." },
    { icon: "📋", title: "Strategy & Planning", desc: "Develop a content calendar, campaign roadmap, and growth framework." },
    { icon: "🚀", title: "Execution", desc: "Launch campaigns, publish content, and actively manage your communities." },
    { icon: "📊", title: "Optimize & Scale", desc: "Analyze performance data, A/B test, and scale what works best." },
  ],
  whyUs: [
    { icon: "🎨", title: "Creative Excellence", desc: "Our in-house designers and copywriters create thumb-stopping content that stands out in crowded feeds." },
    { icon: "🎯", title: "Platform Expertise", desc: "Specialized teams for each platform — Facebook, Instagram, TikTok, LinkedIn, X, and YouTube." },
    { icon: "📊", title: "Data-Driven Approach", desc: "Every decision backed by analytics. We track, measure, and optimize for continuous improvement." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Content calendars delivered weekly. Campaign launches in days, not weeks." },
    { icon: "🏆", title: "Proven Track Record", desc: "4.9/5 on Clutch with 80+ verified reviews. Trusted by 200+ global brands." },
    { icon: "🔒", title: "No Lock-in Contracts", desc: "Month-to-month subscriptions. Stay because of results, not contracts." },
  ],
  faqs: [
    { q: "Which social media platforms do you manage?", a: "We manage all major platforms including Facebook, Instagram, TikTok, LinkedIn, X (Twitter), YouTube, Pinterest, and Snapchat." },
    { q: "How many posts per week do you create?", a: "Our standard plans include 3-5 posts per platform per week, but we customize frequency based on your goals and audience." },
    { q: "Do you handle paid social advertising too?", a: "Yes! We offer integrated organic + paid social strategies. Our media buyers are certified across all major ad platforms." },
    { q: "How quickly will I see results?", a: "Organic growth typically shows meaningful results within 2-3 months. Paid campaigns can deliver results within the first week." },
    { q: "Can I approve content before it goes live?", a: "Absolutely. We use a collaborative approval workflow so you review and approve all content before publication." },
  ],
};

const SocialMediaPage = () => <ServicePageTemplate config={config} />;
export default SocialMediaPage;
