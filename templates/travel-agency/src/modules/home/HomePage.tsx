import useOnScreen from "@/hooks/useOnScreen";
import BannerSection from "./BannerSection";
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
