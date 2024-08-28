import React from "react";
import HeroLanding from "./hero";
import OurFeature from "./ourfeature";
import PaymentMethod from "./paymentmethod";
import BannerExample from "./bannerexample";
import ServicesLanding from "./services";
import Solution from "./solution";

export default async function LandingModule() {
  return (
    <>
      <HeroLanding />
      <OurFeature />
      <PaymentMethod />
      <BannerExample />
      <ServicesLanding />
      <Solution />
    </>
  );
}
