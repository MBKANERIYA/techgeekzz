import ServicePageTemplate from '../components/services/ServicePageTemplate';
const WebDesignPage = () => <ServicePageTemplate config={{
  title: "Web Design", icon: "", badge: "Web Design & Development", glowColor: "rgba(165,0,253,1)",
  heroImage: '/images/heroes/hero-design.png',
  heroTitle: "Stunning", heroHighlight: "Web Design.",
  heroDescription: "Custom websites that combine <strong style='color:#a500fd'>award-winning aesthetics</strong> with conversion-optimized performance to grow your business.",
  stats: [
    { value: "300+", label: "Websites Built" }, { value: "40%", label: "Avg. Conversion Lift" },
    { value: "99+", label: "PageSpeed Score" }, { value: "15+", label: "Design Awards" },
  ],
  services: [
    { icon: "", title: "Custom Websites", desc: "Fully custom designs tailored to your brand — no templates." },
    { icon: "", title: "Responsive Design", desc: "Pixel-perfect on every device from mobile to ultrawide monitors." },
    { icon: "", title: "E-Commerce", desc: "Shopify, WooCommerce, and custom e-commerce solutions." },
    { icon: "", title: "Performance", desc: "99+ PageSpeed scores with optimized images, code, and hosting." },
    { icon: "", title: "SEO-Ready", desc: "Clean code, semantic HTML, and technical SEO built into every site." },
    { icon: "", title: "CMS Integration", desc: "WordPress, Webflow, Strapi, or headless CMS for easy content management." },
  ],
  process: [
    { icon: "", title: "Discovery & UX", desc: "Research your audience, map user flows, and create wireframes." },
    { icon: "", title: "Visual Design", desc: "High-fidelity mockups with your brand system applied." },
    { icon: "", title: "Development", desc: "Clean, performant code built with modern frameworks." },
    { icon: "", title: "Launch & Support", desc: "Thorough QA, launch, and ongoing maintenance support." },
  ],
  whyUs: [
    { icon: "", title: "Award-Winning", desc: "Recognized on Awwwards, CSS Design Awards, and design publications." },
    { icon: "", title: "Conversion Focus", desc: "Every design decision is optimized for user engagement and conversion." },
    { icon: "", title: "Blazing Fast", desc: "99+ PageSpeed scores that improve SEO and user experience." },
    { icon: "", title: "No Templates", desc: "100% custom designs — your website will never look like anyone else's." },
    { icon: "", title: "Full-Stack Team", desc: "Designers and developers working together for pixel-perfect implementation." },
    { icon: "", title: "Mobile-First", desc: "Designed mobile-first for the 60%+ of users browsing on phones." },
  ],
  faqs: [
    { q: "How long does a website take to build?", a: "Simple sites take 3-4 weeks. Complex multi-page sites take 6-10 weeks. E-commerce projects take 8-12 weeks." },
    { q: "Which platforms do you build on?", a: "React/Next.js, Webflow, WordPress, and Shopify. We recommend based on your needs and team capabilities." },
    { q: "Do you provide ongoing maintenance?", a: "Yes, we offer monthly maintenance plans covering updates, security, backups, and minor content changes." },
    { q: "Will my website be SEO-optimized?", a: "Yes. Technical SEO is built into every site including semantic HTML, meta tags, sitemaps, and Core Web Vitals optimization." },
    { q: "Can you redesign my existing site?", a: "Absolutely. We audit your current site performance and UX, then redesign for better conversions and aesthetics." },
  ],
}} />;
export default WebDesignPage;
