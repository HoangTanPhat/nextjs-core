import useOnScreen from "@/hooks/useOnScreen";
import BannerSection from "../../shared-components/BannerSection";
import LayoutContainer from "@/shared-components/layouts/LayoutContainer";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const IntroductionSection = dynamic(() => import("./IntroductionSection"));
const ContactFormSection = dynamic(() => import("./ContactFormSection"));
const CallToActionSection = dynamic(() => import("./CallToActionSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));
const OurTeamSection = dynamic(() => import("./OurTeamSection"));
const CommitmentSection = dynamic(() => import("./CommitmentSection"));

export default function HomePage() {
  return (
    <LayoutContainer>
      <BannerSection
        homepage
        title="Quickest & safest delivery"
        description=" Our cutting-edge logistics system guarantees the fastest and most
        secure delivery service available."
        url="/images/hero-banner-comz.jpeg"
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
