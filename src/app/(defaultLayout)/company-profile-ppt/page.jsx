import React from 'react';
import PptHero from '@/app/Components/Ppt/PptHero';
import PptServicesGrid from '@/app/Components/Ppt/PptServicesGrid';
import PptAbout from '@/app/Components/Ppt/PptAbout';
import PptBenefits from '@/app/Components/Ppt/PptBenefits';
import PptProcess from '@/app/Components/Ppt/PptProcess';
import PptFormSection from '@/app/Components/Ppt/PptFormSection';

export const metadata = {
  title: "Company Profile PPT Services | Profile Design Company",
  description: "Get professional company profile PPT presentation making services in India. We craft engaging corporate, sales deck, pitch deck presentations."
};

const CompanyProfilePptPage = () => {
  return (
    <main>
      {/* 1. Hero Banner */}
      <PptHero />

      {/* 2. Services Grid */}
      <PptServicesGrid />

      {/* 3. About / Why Choose Us */}
      <PptAbout />

      {/* 4. Benefits Section */}
      <PptBenefits />

      {/* 5. Process Section */}
      <PptProcess />

      {/* 6. Bottom Form Section */}
      {/* <PptFormSection /> */}
    </main>
  );
};

export default CompanyProfilePptPage;
