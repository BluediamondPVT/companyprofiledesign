import React from 'react';
import Link from 'next/link';
import ConstructionHero from '@/app/Components/Construction/ConstructionHero';
import ConstructionAbout from '@/app/Components/Construction/ConstructionAbout';
import ConstructionChecklist from '@/app/Components/Construction/ConstructionChecklist';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import ConstructionSizes from '@/app/Components/Construction/ConstructionSizes';

export const metadata = {
  title: "Construction Company Profile",
  description: "Construction Company Profile Design Service"
};

const ConstructionCompanyProfilePage = () => {
  return (
    <>
      <ConstructionHero />
      <ConstructionAbout />
      <ConstructionChecklist />
      <Portfolio 
        title="A glance at Our builders and developers Portfolio" 
        content={
          <>
            You can significantly benefit from hiring an experienced <Link href="/company-profile-writing" style={{ color: '#2563eb', textDecoration: 'underline' }}>company profile content writer</Link>, as the expert will organize and present the firm’s management structure in an organized manner. In addition, this will demonstrate to the customer the level of control and competence of your company. It would also be good to provide a financial statement showing the profit or revenue over the last few years. We use the most professional company profile format to organize the content on your page. Reach out to us for professional company profile writers and streamline your business.
          </>
        } 
      />
      <ConstructionSizes />
    </>
  );
};

export default ConstructionCompanyProfilePage;
