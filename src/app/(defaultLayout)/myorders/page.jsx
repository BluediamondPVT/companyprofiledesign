import React from "react";
import LandingHero from "@/app/Components/LandingPage/LandingHero";
import LandingPricing from "@/app/Components/LandingPage/LandingPricing";
import LandingFaq from "@/app/Components/LandingPage/LandingFaq";
import LandingIndustries from "@/app/Components/LandingPage/LandingIndustries";
import LandingOtherServices from "@/app/Components/LandingPage/LandingOtherServices";
import LandingWhyChoose from "@/app/Components/LandingPage/LandingWhyChoose";
import LandingFooter from "@/app/Components/LandingPage/LandingFooter";
import LandingPortfolio from "@/app/Components/LandingPage/LandingPortfolio";

export const metadata = {
  title: "My Orders | Professional Company Profile Design",
  description: "Company Profile Design Premium Template Packages.",
};

const myOrders = () => {
  return (
    <div>
      <LandingHero />
      <LandingPricing />
      <LandingPortfolio /> 
      <LandingFaq />
      <LandingIndustries />
      <LandingOtherServices />
      <LandingWhyChoose />
      <LandingFooter />
    </div>
  );
};

export default myOrders;
