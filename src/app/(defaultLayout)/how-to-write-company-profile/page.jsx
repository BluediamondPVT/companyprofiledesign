import HowToWriteCompanyProfile from "@/app/Components/BlogDetails/HowToWriteCompanyProfile";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="Blog Details"
        title="Top 5 Inspiring Company Profile Samples for Business"
      />
      <HowToWriteCompanyProfile />
    </div>
  );
};

export default page;
