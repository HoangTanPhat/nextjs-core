import BannerSection from "./BannerSection";
import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import IntroductionSection from "./IntroductionSection";
import CommitmentSection from "./CommitmentSection";
import OurTeamSection from "./OurTeamSection";
import TestimonialSection from "./TestimonialSection";
import CallToActionSection from "./CallToActionSection";
import ContactFormSection from "./ContactFormSection";

export default function HomePage() {
  return (
    <LayoutContainer>
      <BannerSection />
      <IntroductionSection />
      <CommitmentSection />
      <OurTeamSection />
      <TestimonialSection />
      <CallToActionSection />
      <ContactFormSection />
    </LayoutContainer>
  );
}
