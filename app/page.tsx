import FeaturesSection from "./components/landing/FeatureSection";
import HeroSection from "./components/landing/HeroSection";
import IntegrationsSection from "./components/landing/IntegrationsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      {/* <HowItWorksSection />
      <StatsSection />
      <MoreFeaturesSection />
      <CTASection />
      <Footer /> */}
    </div>
  );
}
