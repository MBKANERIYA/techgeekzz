import ServicePageTemplate from '../components/services/ServicePageTemplate';
const DigitalDesignPage = () => <ServicePageTemplate config={{
  title: "Digital Design", icon: "", badge: "Digital Design & Branding", glowColor: "rgba(168,85,247,1)",
  heroImage: '/images/heroes/hero-design.png',
  heroTitle: "Design That", heroHighlight: "Converts.",
  heroDescription: "From stunning websites to cohesive brand identities, our <strong style='color:#a500fd'>design team creates experiences</strong> that look beautiful and drive results.",
  stats: [
    { value: "500+", label: "Projects Delivered" }, { value: "95%", label: "Client Satisfaction" },
    { value: "40%", label: "Avg. Conversion Lift" }, { value: "15+", label: "Design Awards" },
  ],
  services: [
    { icon: "", title: "Web Design", desc: "Custom websites that look stunning, load fast, and convert visitors into customers." },
    { icon: "", title: "UI/UX Design", desc: "User-centered interfaces designed for intuitive navigation and maximum engagement." },
    { icon: "", title: "Branding", desc: "Complete brand identities from logo to guidelines that make your business unforgettable." },
    { icon: "", title: "Landing Pages", desc: "High-converting landing pages designed with persuasion frameworks and CRO principles." },
    { icon: "", title: "Product Design", desc: "SaaS and app interface design that delights users and reduces churn." },
    { icon: "", title: "Motion Design", desc: "Animations, micro-interactions, and video graphics that bring your brand to life." },
  ],
  process: [
    { icon: "", title: "Discovery", desc: "Understand your brand, audience, goals, and competitive landscape." },
    { icon: "", title: "Wireframes", desc: "Low-fidelity wireframes and user flows to nail the structure." },
    { icon: "", title: "Visual Design", desc: "High-fidelity mockups with your brand colors, typography, and imagery." },
    { icon: "", title: "Build & Launch", desc: "Pixel-perfect development, QA testing, and launch." },
  ],
  whyUs: [
    { icon: "", title: "Award-Winning", desc: "15+ design awards from Awwwards, CSS Design Awards, and Clutch." },
    { icon: "", title: "Conversion-Focused", desc: "Every design decision is backed by UX research and conversion data." },
    { icon: "", title: "Premium Quality", desc: "Pixel-perfect designs that set your brand apart from competitors." },
    { icon: "", title: "Fast Delivery", desc: "Landing pages in 1 week, full websites in 4-6 weeks." },
    { icon: "", title: "Dev-Ready Files", desc: "Organized Figma files with design systems that developers love." },
    { icon: "", title: "Collaborative", desc: "Transparent process with regular reviews and unlimited revision rounds." },
  ],
  faqs: [
    { q: "What design tools do you use?", a: "We primarily use Figma for UI/UX, Adobe Creative Suite for branding, and Webflow/custom code for development." },
    { q: "How long does a website design take?", a: "Landing pages take 1-2 weeks. Full websites typically take 4-8 weeks depending on complexity." },
    { q: "Do you handle development too?", a: "Yes! We offer end-to-end design-to-development services. Our developers build in React, Next.js, Webflow, and WordPress." },
    { q: "How many revision rounds are included?", a: "We include unlimited revisions during the design phase. We work collaboratively to get it right." },
    { q: "Can you redesign our existing website?", a: "Absolutely. We audit your current site, identify UX issues, and redesign for better performance and aesthetics." },
  ],
}} />;
export default DigitalDesignPage;
