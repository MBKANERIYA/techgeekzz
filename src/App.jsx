import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReferralPage from './pages/ReferralPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogPostPage from './pages/BlogPostPage';
// Right-column services
import SocialMediaPage from './pages/SocialMediaPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import CROPage from './pages/CROPage';
import PublicRelationsPage from './pages/PublicRelationsPage';
import DigitalStrategyPage from './pages/DigitalStrategyPage';
import WebAnalyticsPage from './pages/WebAnalyticsPage';
import AIMarketingPage from './pages/AIMarketingPage';
// SEO
import SEOPage from './pages/SEOPage';
import LocalSEOPage from './pages/LocalSEOPage';
import TechnicalSEOPage from './pages/TechnicalSEOPage';
import InternationalSEOPage from './pages/InternationalSEOPage';
import EcommerceSEOPage from './pages/EcommerceSEOPage';
import MobileSEOPage from './pages/MobileSEOPage';
import MultilingualSEOPage from './pages/MultilingualSEOPage';
import GEOPage from './pages/GEOPage';
import OnPageSEOPage from './pages/OnPageSEOPage';
import OffPageSEOPage from './pages/OffPageSEOPage';
import ShopifySEOPage from './pages/ShopifySEOPage';
import WordPressSEOPage from './pages/WordPressSEOPage';
import SEOAuditPage from './pages/SEOAuditPage';
import SEOConsultingPage from './pages/SEOConsultingPage';
import WhiteLabelSEOPage from './pages/WhiteLabelSEOPage';
// Paid Advertising
import PaidAdvertisingPage from './pages/PaidAdvertisingPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import FacebookAdsPage from './pages/FacebookAdsPage';
import InstagramAdsPage from './pages/InstagramAdsPage';
import YouTubeAdsPage from './pages/YouTubeAdsPage';
import XAdsPage from './pages/XAdsPage';
import AmazonAdsPage from './pages/AmazonAdsPage';
// Digital Design
import DigitalDesignPage from './pages/DigitalDesignPage';
import WebDesignPage from './pages/WebDesignPage';
import UIUXDesignPage from './pages/UIUXDesignPage';
import BrandingPage from './pages/BrandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/referral" element={<ReferralPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/post/:postSlug" element={<BlogPostPage />} />
            <Route path="/blog/:slug" element={<BlogCategoryPage />} />
            {/* Right-column services */}
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
            <Route path="/services/cro" element={<CROPage />} />
            <Route path="/services/public-relations" element={<PublicRelationsPage />} />
            <Route path="/services/digital-strategy" element={<DigitalStrategyPage />} />
            <Route path="/services/web-analytics" element={<WebAnalyticsPage />} />
            <Route path="/services/ai-marketing" element={<AIMarketingPage />} />
            {/* SEO */}
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/seo/local" element={<LocalSEOPage />} />
            <Route path="/services/seo/technical" element={<TechnicalSEOPage />} />
            <Route path="/services/seo/international" element={<InternationalSEOPage />} />
            <Route path="/services/seo/ecommerce" element={<EcommerceSEOPage />} />
            <Route path="/services/seo/mobile" element={<MobileSEOPage />} />
            <Route path="/services/seo/multilingual" element={<MultilingualSEOPage />} />
            <Route path="/services/seo/geo" element={<GEOPage />} />
            <Route path="/services/seo/on-page" element={<OnPageSEOPage />} />
            <Route path="/services/seo/off-page" element={<OffPageSEOPage />} />
            <Route path="/services/seo/shopify" element={<ShopifySEOPage />} />
            <Route path="/services/seo/wordpress" element={<WordPressSEOPage />} />
            <Route path="/services/seo/audit" element={<SEOAuditPage />} />
            <Route path="/services/seo/consulting" element={<SEOConsultingPage />} />
            <Route path="/services/seo/white-label" element={<WhiteLabelSEOPage />} />
            {/* Paid Advertising */}
            <Route path="/services/paid-advertising" element={<PaidAdvertisingPage />} />
            <Route path="/services/paid-advertising/google-ads" element={<GoogleAdsPage />} />
            <Route path="/services/paid-advertising/facebook-ads" element={<FacebookAdsPage />} />
            <Route path="/services/paid-advertising/instagram-ads" element={<InstagramAdsPage />} />
            <Route path="/services/paid-advertising/youtube-ads" element={<YouTubeAdsPage />} />
            <Route path="/services/paid-advertising/x-ads" element={<XAdsPage />} />
            <Route path="/services/paid-advertising/amazon-ads" element={<AmazonAdsPage />} />
            {/* Digital Design */}
            <Route path="/services/digital-design" element={<DigitalDesignPage />} />
            <Route path="/services/digital-design/web-design" element={<WebDesignPage />} />
            <Route path="/services/digital-design/ui-ux-design" element={<UIUXDesignPage />} />
            <Route path="/services/digital-design/branding" element={<BrandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
