import React from 'react';
import WritingHero from '@/app/Components/Writing/WritingHero';
import WritingAbout from '@/app/Components/Writing/WritingAbout';
import WritingShowcase from '@/app/Components/Writing/WritingShowcase';
import WritingFormSection from '@/app/Components/Writing/WritingFormSection';
import WritingProcess from '@/app/Components/Writing/WritingProcess';
import WritingWhyChoose from '@/app/Components/Writing/WritingWhyChoose';
import Cta from '@/app/Components/Cta/Cta';

export const metadata = {
  title: "Best Company Profile Writing Services in India | Profile Design Company",
  description: "Leading company profile writing company in India offering professional, high-quality, engaging content writing services for company profiles."
};

const CompanyProfileWritingPage = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <WritingHero />

      {/* 2. Advantage Section */}
      <WritingAbout />

      {/* 3. Work Showcase Section */}
      <WritingShowcase />

      {/* 4. Stand Out & FREE Quote Form Section */}
      <WritingFormSection />

      {/* 5. Process Step-by-Step Checklist */}
      <WritingProcess />

      {/* 6. Why Select Us Feature Cards */}
      <WritingWhyChoose />

      {/* 7. Bottom CTA */}
      <Cta 
        title="Contact Us Now for Company Profile Writing"
        content="To know more details about our Company Profile Writing Services, kindly contact us! We deliver top-quality content for companies across India and internationally."
      />
    </main>
  );
};

export default CompanyProfileWritingPage;
