import ServicePageTemplate from '../components/services/ServicePageTemplate';
const YouTubeAdsPage = () => <ServicePageTemplate config={{
  title: "YouTube Ads", icon: "▶", badge: "YouTube Advertising", glowColor: "rgba(255,0,0,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Advertise on", heroHighlight: "YouTube.",
  heroDescription: "Reach 2.5 billion users with <strong style='color:#a500fd'>high-impact video advertising</strong> on the world's second-largest search engine.",
  stats: [
    { value: "2.5B", label: "Monthly Users" }, { value: "70%", label: "View-Through Rate" },
    { value: "3.5x", label: "Avg. ROAS" }, { value: "$10M+", label: "YouTube Spend Managed" },
  ],
  services: [
    { icon: "▶", title: "Skippable In-Stream", desc: "Pre-roll ads that play before videos with the option to skip after 5 seconds." },
    { icon: "⏹", title: "Non-Skippable Ads", desc: "15-second ads that guarantee your full message is seen." },
    { icon: "", title: "Shorts Ads", desc: "Vertical video ads in YouTube Shorts to reach mobile-first audiences." },
    { icon: "", title: "Discovery Ads", desc: "Appear in search results and alongside related videos." },
    { icon: "", title: "Bumper Ads", desc: "6-second non-skippable ads for quick brand awareness." },
    { icon: "", title: "Video Production", desc: "End-to-end video production from scripting to final delivery." },
  ],
  process: [
    { icon: "", title: "Strategy", desc: "Define video ad strategy, audience targeting, and campaign objectives." },
    { icon: "", title: "Production", desc: "Script, shoot, and edit video ads optimized for YouTube formats." },
    { icon: "", title: "Launch", desc: "Deploy campaigns with precise targeting and bidding strategies." },
    { icon: "", title: "Optimize", desc: "Analyze view rates, CTR, and conversions to continuously improve." },
  ],
  whyUs: [
    { icon: "", title: "Video Expertise", desc: "Full in-house video production team from concept to final cut." },
    { icon: "", title: "Precise Targeting", desc: "Target by interests, demographics, keywords, and even specific channels." },
    { icon: "", title: "View-Through Tracking", desc: "Track users who watched your ad and later converted on your site." },
    { icon: "", title: "Cost Efficient", desc: "You only pay when users watch 30+ seconds or engage with your ad." },
    { icon: "", title: "Shorts Pioneers", desc: "Early expertise in YouTube Shorts advertising for mobile audiences." },
    { icon: "", title: "Google Partner", desc: "YouTube ads managed by Google-certified video advertising specialists." },
  ],
  faqs: [
    { q: "How much do YouTube ads cost?", a: "CPV (cost per view) typically ranges from $0.01-$0.10. We recommend a minimum of $3,000/month for meaningful testing." },
    { q: "Do you produce the video ads?", a: "Yes! We offer full video production including scripting, filming, animation, and editing optimized for each YouTube ad format." },
    { q: "What video length performs best?", a: "For skippable ads, 15-30 seconds works best. For brand awareness, 6-second bumpers are very effective." },
    { q: "Can I target specific YouTube channels?", a: "Yes, we can target by specific channels, videos, topics, keywords, and audience segments for precise reach." },
    { q: "How do you measure YouTube ad success?", a: "We track view rate, click-through rate, conversions, view-through conversions, brand lift, and CPV across all campaigns." },
  ],
}} />;
export default YouTubeAdsPage;
