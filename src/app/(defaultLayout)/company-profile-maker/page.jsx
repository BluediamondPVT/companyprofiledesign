import React from 'react';
import MakerHero from '@/app/Components/Maker/MakerHero';
import MakerAbout from '@/app/Components/Maker/MakerAbout';
import MakerProcess from '@/app/Components/Maker/MakerProcess';
import MakerWhyChooseForm from '@/app/Components/Maker/MakerWhyChooseForm';
import MakerServicesGrid from '@/app/Components/Maker/MakerServicesGrid';
import Cta from '@/app/Components/Cta/Cta';

export const metadata = {
  title: "Top-Rated Company Profile Making Agency in India | Profile Design Company",
  description: "Profile Design Company is a leading company profile maker agency in India offering professional company profile making services for companies across all industries."
};

const CompanyProfileMakerPage = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <MakerHero />

      {/* 2. Optimized Agency Section */}
      <MakerAbout />

      {/* 3. Process Section */}
      <MakerProcess />

      {/* 4. Why Choose & Quote Form Section */}
      <MakerWhyChooseForm />

      {/* 5. Services We Deal In Grid Section */}
      <MakerServicesGrid />

      {/* 6. Bottom CTA */}
      <Cta 
        title="Contact Us Now for Company Profile Making"
        content="To know more details about our Company Profile Making Services, kindly contact us! We deliver top-quality company profiles for businesses across India and internationally."
      />
    </main>
  );
};

export default CompanyProfileMakerPage;
