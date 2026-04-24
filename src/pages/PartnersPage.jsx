import PartnersHero from '../components/partners/PartnersHero';
import PartnersLogos from '../components/partners/PartnersLogos';
import PartnersTypes from '../components/partners/PartnersTypes';
import PartnersBenefits from '../components/partners/PartnersBenefits';
import PartnersProcess from '../components/partners/PartnersProcess';
import PartnersTestimonials from '../components/partners/PartnersTestimonials';
import PartnersCTA from '../components/partners/PartnersCTA';
import AwardsSection from '../components/AwardsSection';
import LocationsSection from '../components/LocationsSection';

const GlowDivider = () => (
  <div className="container">
    <hr className="premium-divider" />
  </div>
);

const PartnersPage = () => {
  return (
    <div>
      <PartnersHero />
      <GlowDivider />
      <PartnersLogos />
      <GlowDivider />
      <PartnersTypes />
      <GlowDivider />
      <PartnersBenefits />
      <GlowDivider />
      <PartnersProcess />
      <GlowDivider />
      <PartnersTestimonials />
      <AwardsSection />
      <GlowDivider />
      <PartnersCTA />
      <GlowDivider />
      <LocationsSection />
    </div>
  );
};

export default PartnersPage;
