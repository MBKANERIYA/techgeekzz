import ServicePageTemplate from '../components/services/ServicePageTemplate';
const UIUXDesignPage = () => <ServicePageTemplate config={{
  title: "UI/UX Design", icon: "📱", badge: "UI/UX Design", glowColor: "rgba(236,72,153,1)",
  heroImage: '/images/heroes/hero-design.png',
  heroTitle: "User-Centered", heroHighlight: "Design.",
  heroDescription: "Create intuitive, delightful <strong style='color:#c084fc'>digital experiences</strong> that users love and that drive measurable business outcomes.",
  stats: [
    { value: "200+", label: "UX Projects" }, { value: "45%", label: "Avg. Usability Lift" },
    { value: "60%", label: "Bounce Rate Reduction" }, { value: "98%", label: "Client Satisfaction" },
  ],
  services: [
    { icon: "🔍", title: "UX Research", desc: "User interviews, surveys, analytics review, and competitive analysis." },
    { icon: "🗺️", title: "Information Architecture", desc: "Site maps, user flows, and content hierarchy for intuitive navigation." },
    { icon: "📐", title: "Wireframing", desc: "Low-fidelity wireframes to validate structure before visual design." },
    { icon: "🎨", title: "UI Design", desc: "Beautiful, consistent interfaces with design systems and component libraries." },
    { icon: "🧪", title: "Usability Testing", desc: "User testing sessions to validate designs before development." },
    { icon: "📱", title: "Prototyping", desc: "Interactive prototypes to experience the product before writing code." },
  ],
  process: [
    { icon: "🔍", title: "Research", desc: "Understand users, business goals, and pain points through research." },
    { icon: "📐", title: "Architecture", desc: "Define information architecture, user flows, and wireframes." },
    { icon: "🎨", title: "Design", desc: "Create high-fidelity UI designs with a complete design system." },
    { icon: "🧪", title: "Test & Iterate", desc: "Validate with real users, iterate, and refine before handoff." },
  ],
  whyUs: [
    { icon: "🧠", title: "Research-Led", desc: "Every design decision grounded in user research and data." },
    { icon: "📊", title: "Measurable Impact", desc: "We track usability metrics and conversion rates, not just aesthetics." },
    { icon: "🎨", title: "Design Systems", desc: "Scalable component libraries that ensure consistency as you grow." },
    { icon: "📱", title: "Cross-Platform", desc: "Web, iOS, Android, and SaaS — we design for all platforms." },
    { icon: "🤝", title: "Dev Collaboration", desc: "Organized Figma handoffs with specs, tokens, and assets." },
    { icon: "🧪", title: "Usability Testing", desc: "We validate with real users before development begins." },
  ],
  faqs: [
    { q: "What is the difference between UI and UX?", a: "UX (User Experience) focuses on how a product works — flows, usability, and user satisfaction. UI (User Interface) focuses on how it looks — visual design, typography, and interactions." },
    { q: "Do you conduct user research?", a: "Yes! We conduct user interviews, surveys, analytics reviews, heuristic evaluations, and competitive analysis as part of our UX process." },
    { q: "What deliverables do I receive?", a: "UX research reports, user personas, site maps, wireframes, high-fidelity mockups, interactive prototypes, and a complete design system in Figma." },
    { q: "Can you improve our existing product?", a: "Absolutely. We conduct UX audits to identify usability issues and redesign specific flows or the entire product." },
    { q: "Do you design for mobile apps?", a: "Yes, we design for iOS, Android, and cross-platform apps following each platform's design guidelines." },
  ],
}} />;
export default UIUXDesignPage;
