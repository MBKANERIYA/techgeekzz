import ServicePageTemplate from '../components/services/ServicePageTemplate';

const config = {
  title: "Email Marketing",
  icon: "",
  badge: "Email Marketing",
  glowColor: "rgba(249,115,22,1)",
  heroImage: '/images/heroes/hero-email.png',
  heroTitle: "Master",
  heroHighlight: "Email Marketing.",
  heroDescription: "Turn your email list into a revenue machine with <strong style='color:#a500fd'>personalized campaigns</strong>, automated workflows, and data-driven optimization.",
  stats: [
    { value: "45%", label: "Avg. Open Rate" },
    { value: "8.2%", label: "Avg. Click Rate" },
    { value: "$42", label: "ROI per $1 Spent" },
    { value: "150M+", label: "Emails Sent" },
  ],
  services: [
    { icon: "", title: "Email Strategy", desc: "Full-funnel email strategies from welcome series to win-back campaigns." },
    { icon: "", title: "Copywriting & Design", desc: "Conversion-focused copy and pixel-perfect templates that reflect your brand." },
    { icon: "", title: "Marketing Automation", desc: "Drip campaigns, triggers, and behavioral automation using Klaviyo, HubSpot, and Mailchimp." },
    { icon: "", title: "A/B Testing", desc: "Subject lines, send times, layouts — we test everything to maximize performance." },
    { icon: "", title: "Analytics & Reporting", desc: "Deliverability monitoring, engagement tracking, and revenue attribution dashboards." },
    { icon: "", title: "List Segmentation", desc: "Dynamic segmentation based on behavior, demographics, and purchase history." },
  ],
  process: [
    { icon: "", title: "List Audit", desc: "Analyze your current list health, deliverability, and engagement metrics." },
    { icon: "", title: "Strategy Build", desc: "Design email flows, content calendar, and segmentation framework." },
    { icon: "", title: "Launch & Automate", desc: "Deploy campaigns and set up automated workflows and triggers." },
    { icon: "", title: "Test & Optimize", desc: "Continuous A/B testing and optimization for higher conversions." },
  ],
  whyUs: [
    { icon: "", title: "Certified Experts", desc: "Our team holds certifications from Klaviyo, HubSpot, and Mailchimp." },
    { icon: "", title: "Revenue Focus", desc: "We optimize for revenue, not just opens and clicks. Real business impact." },
    { icon: "", title: "Beautiful Templates", desc: "Custom-designed templates that look stunning across all email clients." },
    { icon: "", title: "Deliverability First", desc: "We maintain 99%+ inbox placement rates through best-practice compliance." },
    { icon: "", title: "Quick Setup", desc: "Get your first automated flow live within 2 weeks of kickoff." },
    { icon: "", title: "Transparent Reporting", desc: "Weekly reports with revenue attribution so you see exactly what email drives." },
  ],
  faqs: [
    { q: "Which email platforms do you work with?", a: "We are certified partners of Klaviyo, HubSpot, Mailchimp, ActiveCampaign, and can work with most major ESPs." },
    { q: "How do you improve deliverability?", a: "Through proper authentication (SPF, DKIM, DMARC), list hygiene, engagement-based segmentation, and gradual IP warming." },
    { q: "Can you migrate us from our current platform?", a: "Yes, we handle full platform migrations including templates, automations, lists, and historical data." },
    { q: "How many emails should we send per week?", a: "It depends on your audience and goals. Typically 2-4 campaigns per week plus automated flows perform best." },
    { q: "Do you handle transactional emails too?", a: "Yes, we can design and optimize transactional emails like order confirmations, shipping updates, and receipts." },
  ],
};

const EmailMarketingPage = () => <ServicePageTemplate config={config} />;
export default EmailMarketingPage;
