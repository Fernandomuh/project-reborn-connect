import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StatsSection from "@/components/StatsSection";
import EventsSection from "@/components/EventsSection";
import MembersPreview from "@/components/MembersPreview";
import PartnersSection from "@/components/PartnersSection";
import TweetsSection from "@/components/TweetsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import BrazilCursor from "@/components/BrazilCursor";

const Index = () => {
  return (
    <div className="min-h-screen cursor-none md:cursor-none">
      <BrazilCursor />
      <Header />
      <main>
        <HeroSection />

        <ScrollAnimationWrapper>
          <MissionSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          <StatsSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="left">
          <EventsSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <MembersPreview />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          <PartnersSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper direction="right">
          <TweetsSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <FAQSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <NewsletterSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          <CTASection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
