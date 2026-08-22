import React from 'react';
import Link from 'next/link';
import ConstructionHero from '@/app/Components/Construction/ConstructionHero';
import ConstructionAbout from '@/app/Components/Construction/ConstructionAbout';
import ConstructionChecklist from '@/app/Components/Construction/ConstructionChecklist';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import ConstructionSizes from '@/app/Components/Construction/ConstructionSizes';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Construction Company Profile Design in India",
  description: "Leading construction company profile design service in India. We design professional, impactful corporate profiles and brochures for builders, contractors, and developers.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/construction-company-profile-design/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    locale: "en_IN",
    type: "article",
    title: "Construction Company Profile Design",
    description: "Leading construction company profile design service in India. We design professional, impactful corporate profiles and brochures for builders, contractors, and developers.",
    url: "https://www.companyprofiledesign.in/construction-company-profile-design/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Construction Company Profile Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Company Profile Design in India",
    description: "Leading construction company profile design service in India. We design professional, impactful corporate profiles and brochures for builders, contractors, and developers.",
    images: ["https://www.companyprofiledesign.in/assets/images/logo.png"],
  },
  verification: {
    google: [
      "fz__DsrAHtHD5Yr3iarcIuZf6fuBHMh55wAGlNFLQNI",
      "NkkC2VmcZACC6OvOjJH8axgdErjv2uwIFZrlNMXfkXI",
    ],
  },
};

// 2. Clean Unified Schema Graph (Yoast / Google Rich Results Validated)
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://www.companyprofiledesign.in/#organization",
      "name": "Company Profile Design",
      "url": "https://www.companyprofiledesign.in/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.companyprofiledesign.in/#/schema/logo/image/",
        "url": "https://www.companyprofiledesign.in/assets/images/logo.png",
        "contentUrl": "https://www.companyprofiledesign.in/assets/images/logo.png",
        "width": 384,
        "height": 80,
        "caption": "Company Profile Design"
      },
      "image": { "@id": "https://www.companyprofiledesign.in/#/schema/logo/image/" },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917718967729",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://in.pinterest.com/companyprofiledesignind"
      ]
    },

    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://www.companyprofiledesign.in/#website",
      "url": "https://www.companyprofiledesign.in/",
      "name": "Company Profile Design",
      "description": "Design Company Profile, Brochures, Catalogs, etc",
      "publisher": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "alternateName": "Profile Design Company",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/construction-company-profile-design/",
      "url": "https://www.companyprofiledesign.in/construction-company-profile-design/",
      "name": "Construction Company Profile Design in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "datePublished": "2021-12-23T08:03:39+00:00",
      "dateModified": "2025-03-01T11:00:24+00:00",
      "description": "Leading construction company profile design service in India. We design professional, impactful corporate profiles and brochures for builders, contractors, and developers.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/construction-company-profile-design/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Construction Company Profile Design)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/construction-company-profile-design/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.companyprofiledesign.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Construction Company Profile Design",
          "item": "https://www.companyprofiledesign.in/construction-company-profile-design/"
        }
      ]
    }
  ]
};

const ConstructionCompanyProfilePage = () => {
  return (
    <>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
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
