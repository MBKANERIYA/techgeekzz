import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "Digital Strategy",
  icon: "",
  badge: "Digital Marketing Strategy",
  glowColor: "rgba(165,0,253,1)",
  heroImage: '/images/heroes/hero-ai.png',
  heroTitle: "Build a Winning",
  heroHighlight: "Digital Strategy.",
  heroDescription: "Get a comprehensive digital marketing roadmap that aligns every channel with your <strong style='color:#a500fd'>business objectives</strong> and drives predictable growth.",
  stats: [
    { value: "300+", label: "Strategies Built" },
    { value: "4.2x", label: "Avg. ROI Delivered" },
    { value: "92%", label: "Client Satisfaction" },
    { value: "15+", label: "Industries Covered" },
  ],
  services: [
    { icon: "", title: "Go-To-Market Strategy", desc: "Launch plans for new products, markets, and audiences with clear KPIs and timelines." },
    { icon: "", title: "Competitive Analysis", desc: "Deep-dive into competitor positioning, ad spend, content strategy, and market gaps." },
    { icon: "", title: "Audience Research", desc: "Data-driven personas, customer journey mapping, and behavioral segmentation." },
    { icon: "", title: "Channel Strategy", desc: "Identify the highest-ROI channels for your business and allocate budget accordingly." },
    { icon: "", title: "Content Strategy", desc: "Editorial calendars, content pillars, and distribution plans across all channels." },
    { icon: "", title: "Performance Frameworks", desc: "KPI dashboards, attribution modeling, and reporting cadences for accountability." },
  ],
  process: [
    { icon: "", title: "Discovery", desc: "Understand your business, goals, audience, and competitive landscape." },
    { icon: "", title: "Research & Analysis", desc: "Market research, competitor audits, and data analysis to inform strategy." },
    { icon: "", title: "Strategy Development", desc: "Build a comprehensive roadmap with tactics, timelines, and budgets." },
    { icon: "", title: "Execute & Iterate", desc: "Launch, measure, learn, and continuously refine the strategy." },
  ],
  whyUs: [
    { icon: "", title: "Strategic Thinking", desc: "We think like your CMO. Big-picture vision with tactical precision." },
    { icon: "", title: "Data-First Approach", desc: "Every recommendation supported by market data, not assumptions." },
    { icon: "", title: "Cross-Channel Expertise", desc: "SEO, paid, social, email, PR — we orchestrate all channels as one." },
    { icon: "", title: "Proven Frameworks", desc: "Battle-tested strategic frameworks refined across 300+ engagements." },
    { icon: "", title: "Actionable Deliverables", desc: "Not just a 100-page deck. Clear, executable plans with priorities." },
    { icon: "", title: "Ongoing Advisory", desc: "Monthly strategy reviews and quarterly planning sessions included." },
  ],
  faqs: [
    { q: "What is included in a digital marketing strategy?", a: "A full strategy includes audience research, competitive analysis, channel recommendations, content pillars, KPI frameworks, budget allocation, and a phased implementation roadmap." },
    { q: "How long does it take to build a strategy?", a: "A comprehensive strategy typically takes 3-4 weeks, including research, analysis, and presentation. Quick-start strategies can be delivered in 2 weeks." },
    { q: "Do you execute the strategy or just plan it?", a: "Both! We can deliver strategy-only engagements or handle full execution across all channels as your outsourced marketing team." },
    { q: "How do you measure strategy success?", a: "We define clear KPIs upfront and track them through custom dashboards. Monthly reviews ensure we stay on track and adapt as needed." },
    { q: "Can you work with our in-house team?", a: "Absolutely. We often work alongside in-house teams, providing strategic direction while your team handles day-to-day execution." },
  ],
};

const DigitalStrategyPage = () => <ServicePageTemplate config={config} />;
export default DigitalStrategyPage;
