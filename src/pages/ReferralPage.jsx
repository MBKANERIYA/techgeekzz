import ReferralHero from '../components/referral/ReferralHero';
import ReferralHowItWorks from '../components/referral/ReferralHowItWorks';
import ReferralTiers from '../components/referral/ReferralTiers';
import ReferralTestimonials from '../components/referral/ReferralTestimonials';
import ReferralReviews from '../components/referral/ReferralReviews';
import ReferralAwards from '../components/referral/ReferralAwards';
import ReferralFAQ from '../components/referral/ReferralFAQ';
import ReferralCTA from '../components/referral/ReferralCTA';
import LocationsSection from '../components/LocationsSection';

const GlowDivider = () => (
  <div className="container">
    <hr className="premium-divider" />
  </div>
);

const ReferralPage = () => {
  return (
    <div>
      <ReferralHero />
      <GlowDivider />
      <ReferralHowItWorks />
      <GlowDivider />
      <ReferralTiers />
      <GlowDivider />
      <ReferralTestimonials />
      <GlowDivider />
      <ReferralReviews />
      <ReferralAwards />
      <GlowDivider />
      <ReferralFAQ />
      <GlowDivider />
      <ReferralCTA />
      <GlowDivider />
      <LocationsSection />
    </div>
  );
};

export default ReferralPage;
