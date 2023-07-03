import useOnScreen from "@/hooks/useOnScreen";
import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import dynamic from "next/dynamic";
import BannerSection from "@/shared-components/BannerSection";
import { HomeProps } from "@/pages/index";
const IntroductionSection = dynamic(() => import("./IntroductionSection"));
const ContactFormSection = dynamic(() => import("./ContactFormSection"));
const CallToActionSection = dynamic(() => import("./CallToActionSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));
const OurTeamSection = dynamic(() => import("./OurTeamSection"));
const CommitmentSection = dynamic(() => import("./CommitmentSection"));

export default function HomePage({ title, description }: HomeProps) {
  return (
    <LayoutContainer>
      <BannerSection
        homepage
        title={title}
        description={description}
        url="/images/hero-banner-comz.webp"
      />
      <IntroductionSection />
      <CommitmentSection />
      <OurTeamSection />
      <TestimonialSection />
      <CallToActionSection />
      <ContactFormSection />
    </LayoutContainer>
  );
}
