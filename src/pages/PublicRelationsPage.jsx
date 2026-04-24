import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "Public Relations",
  icon: "📰",
  badge: "Public Relations & PR",
  glowColor: "rgba(239,68,68,1)",
  heroImage: '/images/heroes/hero-pr.png',
  heroTitle: "Shape Your",
  heroHighlight: "Public Narrative.",
  heroDescription: "Build credibility, earn media coverage, and manage your reputation with <strong style='color:#c084fc'>strategic PR campaigns</strong> that put your brand in the spotlight.",
  stats: [
    { value: "5,000+", label: "Media Placements" },
    { value: "850+", label: "Journalist Contacts" },
    { value: "320%", label: "Avg. Brand Visibility Lift" },
    { value: "150+", label: "Brands Represented" },
  ],
  services: [
    { icon: "📰", title: "Media Relations", desc: "Build and maintain relationships with top-tier journalists and media outlets in your industry." },
    { icon: "✍️", title: "Press Release Writing", desc: "Compelling press releases that get picked up by major publications and news wires." },
    { icon: "🎤", title: "Thought Leadership", desc: "Position your executives as industry experts through speaking, bylines, and interviews." },
    { icon: "🛡️", title: "Crisis Management", desc: "Rapid response protocols and strategic communication to protect your brand during crises." },
    { icon: "📊", title: "PR Analytics", desc: "Media monitoring, sentiment analysis, and coverage reports to measure PR impact." },
    { icon: "🎬", title: "Event PR", desc: "Media coverage, press kits, and influencer outreach for product launches and events." },
  ],
  process: [
    { icon: "🔍", title: "Brand Audit", desc: "Assess current media presence, reputation, and identify opportunities." },
    { icon: "📋", title: "PR Strategy", desc: "Develop messaging, target media list, and campaign calendar." },
    { icon: "📤", title: "Outreach & Pitching", desc: "Targeted media pitching, journalist outreach, and story placement." },
    { icon: "📊", title: "Monitor & Report", desc: "Track coverage, measure impact, and refine strategy based on results." },
  ],
  whyUs: [
    { icon: "🌐", title: "Global Network", desc: "Relationships with 850+ journalists across tech, business, finance, and lifestyle media." },
    { icon: "📰", title: "Top-Tier Placements", desc: "Coverage in Forbes, TechCrunch, Bloomberg, The Verge, and more." },
    { icon: "⚡", title: "Fast Turnaround", desc: "Press releases drafted in 48 hours. Media lists built within a week." },
    { icon: "🎯", title: "Targeted Approach", desc: "We pitch stories to the right journalists, not spray-and-pray mass emails." },
    { icon: "📈", title: "Measurable Results", desc: "Track media mentions, reach, sentiment, and domain authority impact." },
    { icon: "🛡️", title: "Crisis Ready", desc: "24/7 crisis communication support when your brand reputation is on the line." },
  ],
  faqs: [
    { q: "How quickly can you get media coverage?", a: "Depending on the news angle, initial coverage can happen within 1-2 weeks. Sustained PR campaigns build momentum over 2-3 months." },
    { q: "Which publications can you get us into?", a: "We regularly secure placements in Forbes, TechCrunch, Bloomberg, Business Insider, and industry-specific outlets relevant to your niche." },
    { q: "Do you handle crisis communication?", a: "Yes, we have a dedicated crisis management team available 24/7 for rapid response and strategic communication during sensitive situations." },
    { q: "Can PR help with SEO?", a: "Absolutely. Quality media placements generate high-authority backlinks, which significantly boost your domain authority and search rankings." },
    { q: "How do you measure PR success?", a: "We track media mentions, share of voice, domain authority growth, referral traffic, and sentiment analysis through our PR analytics dashboard." },
  ],
};

const PublicRelationsPage = () => <ServicePageTemplate config={config} />;
export default PublicRelationsPage;
