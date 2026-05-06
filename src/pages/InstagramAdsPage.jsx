import ServicePageTemplate from '../components/services/ServicePageTemplate';
const InstagramAdsPage = () => <ServicePageTemplate config={{
  title: "Instagram Ads", icon: "", badge: "Instagram Advertising", glowColor: "rgba(225,48,108,1)",
  heroImage: '/images/heroes/hero-ads.png',
  heroTitle: "Grow on", heroHighlight: "Instagram.",
  heroDescription: "Captivate 2 billion users with <strong style='color:#a500fd'>visually stunning Instagram ads</strong> across Feed, Stories, Reels, and Explore.",
  stats: [
    { value: "4.8x", label: "Avg. ROAS" }, { value: "2B", label: "Monthly Users" },
    { value: "83%", label: "Discover New Products" }, { value: "200+", label: "Campaigns Run" },
  ],
  services: [
    { icon: "", title: "Feed Ads", desc: "Beautiful photo and carousel ads that blend naturally into the Instagram feed." },
    { icon: "", title: "Stories Ads", desc: "Full-screen vertical ads that capture attention in the Stories format." },
    { icon: "", title: "Reels Ads", desc: "Short-form video ads leveraging Instagram's fastest-growing placement." },
    { icon: "", title: "Explore Ads", desc: "Reach users in discovery mode on the Explore tab." },
    { icon: "", title: "Shopping Ads", desc: "Tag products directly in ads for seamless in-app purchasing." },
    { icon: "", title: "Influencer Amplification", desc: "Boost top-performing influencer content as paid partnership ads." },
  ],
  process: [
    { icon: "", title: "Define Goals", desc: "Set clear KPIs — awareness, engagement, traffic, or conversions." },
    { icon: "", title: "Creative Design", desc: "Produce platform-native content that feels organic, not interruptive." },
    { icon: "", title: "Launch & Engage", desc: "Deploy campaigns and actively manage community engagement." },
    { icon: "", title: "Analyze & Optimize", desc: "Track performance, refine targeting, and scale winning creatives." },
  ],
  whyUs: [
    { icon: "", title: "Visual-First Agency", desc: "Our creative team specializes in Instagram-native content that converts." },
    { icon: "", title: "Platform Specialists", desc: "Deep expertise in Instagram's unique algorithm and ad formats." },
    { icon: "", title: "Influencer Integration", desc: "Combine paid ads with influencer content for maximum authenticity." },
    { icon: "", title: "E-Commerce Focus", desc: "Instagram Shopping setup and optimization for direct sales." },
    { icon: "", title: "Creative Analytics", desc: "Data-driven creative decisions based on engagement and conversion data." },
    { icon: "", title: "Video Production", desc: "In-house video team creating Reels and Stories content at scale." },
  ],
  faqs: [
    { q: "What types of Instagram ads perform best?", a: "Reels ads currently have the highest engagement rates, followed by Stories. We test all formats to find what works for your brand." },
    { q: "Do you create the ad content?", a: "Yes! We produce photos, videos, carousels, and Reels content specifically designed for Instagram advertising." },
    { q: "Can you integrate with our influencer campaigns?", a: "Absolutely. We amplify top influencer content as paid partnership ads for maximum reach and authenticity." },
    { q: "How do Instagram ads compare to Facebook?", a: "Instagram typically has higher engagement rates and CPMs. It excels for visual brands, fashion, beauty, food, and lifestyle products." },
    { q: "Do you handle Instagram Shopping?", a: "Yes, we set up and optimize Instagram Shopping catalogs, product tags, and shoppable content." },
  ],
}} />;
export default InstagramAdsPage;
