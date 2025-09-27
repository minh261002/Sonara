'use client'

import FeaturesSection from "./components/landing/FeatureSection";
import HeroSection from "./components/landing/HeroSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import IntegrationsSection from "./components/landing/IntegrationsSection";
import MoreFeaturesSection from "./components/landing/MoreFeaturesSection";
import StatsSection from "./components/landing/StatsSection";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <HowItWorksSection />
      <StatsSection />
      <MoreFeaturesSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
}
