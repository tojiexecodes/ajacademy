import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import ProgramsSection from "@/components/ProgramsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import LeadershipQuotesSection from "@/components/LeadershipQuotesSection";
import InitiativesSection from "@/components/InitiativesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <ProgramsSection />
      <FeaturesSection />
      <StatsSection />
      <LeadershipQuotesSection />
      <InitiativesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
