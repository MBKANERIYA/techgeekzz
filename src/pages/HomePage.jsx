import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider';
import StatsSection from '../components/StatsSection';
import ChallengesSection from '../components/ChallengesSection';
import WhyTechGeekz from '../components/WhySubscription';
import TeamSection from '../components/TeamSection';
import IndustriesSection from '../components/IndustriesSection';
import OurWorks from '../components/OurWorks';
import ReviewsSection from '../components/ReviewsSection';
import AwardsSection from '../components/AwardsSection';
import FeaturedSection from '../components/FeaturedSection';
import WorkflowSection from '../components/WorkflowSection';
import PricingSection from '../components/PricingSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import LocationsSection from '../components/LocationsSection';
import CTASection from '../components/CTASection';

const GlowDivider = () => (
  <div className="container">
    <hr className="premium-divider" />
  </div>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <GlowDivider />
      <StatsSection />
      <ChallengesSection />
      <GlowDivider />
      <WhyTechGeekz />
      <TeamSection />
      <GlowDivider />
      <IndustriesSection />
      <OurWorks />
      <GlowDivider />
      <ReviewsSection />
      <AwardsSection />
      <FeaturedSection />
      <GlowDivider />
      <WorkflowSection />
      {/* <PricingSection /> */}
      <GlowDivider />
      <BlogSection />
      <FAQSection />
      <GlowDivider />
      <LocationsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
