import FeaturesSection from "./components/landing/FeatureSection";
import HeroSection from "./components/landing/HeroSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import IntegrationsSection from "./components/landing/IntegrationsSection";
import MoreFeaturesSection from "./components/landing/MoreFeaturesSection";
import StatsSection from "./components/landing/StatsSection";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <StatsSection />
      <MoreFeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
