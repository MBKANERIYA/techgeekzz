import ServicePageTemplate from '../components/services/ServicePageTemplate';
const XAdsPage = () => <ServicePageTemplate config={{
  title: "X (Twitter) Ads", icon: "🐦", badge: "X Advertising", glowColor: "rgba(29,161,242,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Engage on", heroHighlight: "X (Twitter).",
  heroDescription: "Join real-time conversations and reach engaged audiences with <strong style='color:#c084fc'>strategic X advertising</strong> campaigns.",
  stats: [
    { value: "550M+", label: "Monthly Users" }, { value: "3.2x", label: "Avg. Engagement Lift" },
    { value: "35%", label: "Lower CPE vs Industry" }, { value: "100+", label: "Campaigns Managed" },
  ],
  services: [
    { icon: "📝", title: "Promoted Posts", desc: "Amplify your best tweets to reach audiences beyond your followers." },
    { icon: "📈", title: "Follower Campaigns", desc: "Grow a relevant, engaged follower base with targeted follower ads." },
    { icon: "🔍", title: "Keyword Targeting", desc: "Target users based on the keywords they tweet or engage with." },
    { icon: "🎬", title: "Video Ads", desc: "Auto-playing video ads that capture attention in the timeline." },
    { icon: "📊", title: "Conversion Campaigns", desc: "Drive website visits, app installs, and on-site conversions." },
    { icon: "💬", title: "Engagement Campaigns", desc: "Boost replies, retweets, and likes for maximum brand conversation." },
  ],
  process: [
    { icon: "🔍", title: "Audience Mapping", desc: "Identify target conversations, influencers, and trending topics." },
    { icon: "📝", title: "Content Creation", desc: "Create compelling tweet copy, images, and video content." },
    { icon: "🚀", title: "Campaign Launch", desc: "Deploy campaigns with real-time bidding and audience targeting." },
    { icon: "📊", title: "Real-Time Optimization", desc: "Monitor and optimize campaigns based on live performance data." },
  ],
  whyUs: [
    { icon: "⚡", title: "Real-Time Expertise", desc: "We excel at real-time marketing and trending topic campaigns." },
    { icon: "🎯", title: "Conversation Targeting", desc: "Target users based on the conversations they participate in." },
    { icon: "📊", title: "Performance Focus", desc: "Optimize for meaningful engagement that drives business results." },
    { icon: "📝", title: "Content Strategy", desc: "Organic + paid content strategy for maximum impact on X." },
    { icon: "💰", title: "Cost Efficiency", desc: "Lower cost-per-engagement than most social platforms." },
    { icon: "🏆", title: "Proven Results", desc: "100+ X ad campaigns with consistent engagement and conversion growth." },
  ],
  faqs: [
    { q: "Is X (Twitter) advertising still effective?", a: "Yes! X has 550M+ monthly users and offers unique targeting by conversations and keywords that other platforms lack." },
    { q: "What type of content works best on X?", a: "Short, punchy copy with strong visuals performs best. Video content and poll-style engagement ads also drive high interaction." },
    { q: "What is the minimum budget for X ads?", a: "We recommend at least $2,000/month for meaningful testing and optimization on the platform." },
    { q: "Can you target specific conversations?", a: "Yes, X offers unique conversation and keyword targeting, letting you reach users discussing topics relevant to your brand." },
    { q: "How do X ads compare to other platforms?", a: "X typically offers lower CPE than Meta and LinkedIn, with unique real-time targeting capabilities." },
  ],
}} />;
export default XAdsPage;
