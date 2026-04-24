import AboutHero from '../components/about/AboutHero';
import MissionVenn from '../components/about/MissionVenn';
import MissionStatement from '../components/about/MissionStatement';
import AboutValues from '../components/about/AboutValues';
import AboutTeam from '../components/about/AboutTeam';
import AboutStats from '../components/about/AboutStats';
import AboutJourney from '../components/about/AboutJourney';
import AboutProcess from '../components/about/AboutProcess';
import TechStack from '../components/about/TechStack';
import AwardsSection from '../components/AwardsSection';
import ReviewsSection from '../components/ReviewsSection';
import LocationsSection from '../components/LocationsSection';
import CTASection from '../components/CTASection';

const GlowDivider = () => (
  <div className="container">
    <hr className="premium-divider" />
  </div>
);

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <MissionVenn />
      <GlowDivider />
      <MissionStatement />
      <GlowDivider />
      <AboutValues />
      <GlowDivider />
      <AboutTeam />
      <GlowDivider />
      <AboutStats />
      <GlowDivider />
      <AboutJourney />
      <GlowDivider />
      <AboutProcess />
      <GlowDivider />
      <ReviewsSection />
      <AwardsSection />
      <GlowDivider />
      <TechStack />
      <GlowDivider />
      <LocationsSection />
      <GlowDivider />
      <CTASection />
    </div>
  );
};

export default AboutPage;
