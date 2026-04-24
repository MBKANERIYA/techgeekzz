import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactOffices from '../components/contact/ContactOffices';
import ContactWhyUs from '../components/contact/ContactWhyUs';
import ContactFAQ from '../components/contact/ContactFAQ';
import ReviewsSection from '../components/ReviewsSection';
import AwardsSection from '../components/AwardsSection';

const GlowDivider = () => (
  <div className="container">
    <hr className="premium-divider" />
  </div>
);

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <GlowDivider />
      <ContactForm />
      <GlowDivider />
      <ContactOffices />
      <GlowDivider />
      <ContactWhyUs />
      <GlowDivider />
      <ReviewsSection />
      <AwardsSection />
      <GlowDivider />
      <ContactFAQ />
    </div>
  );
};

export default ContactPage;
