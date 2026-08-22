import React from 'react';
import PptHero from '@/app/Components/Ppt/PptHero';
import PptServicesGrid from '@/app/Components/Ppt/PptServicesGrid';
import PptAbout from '@/app/Components/Ppt/PptAbout';
import PptBenefits from '@/app/Components/Ppt/PptBenefits';
import PptProcess from '@/app/Components/Ppt/PptProcess';
import PptFormSection from '@/app/Components/Ppt/PptFormSection';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Company Profile PPT Services in India || Company Profile Powerpoint",
  description: "Professional company profile PPT services in India. We design captivating corporate PowerPoint presentations, investor pitch decks, and sales decks that drive results.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/company-profile-ppt/",
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
    title: "Company Profile Powerpoint Presentation",
    description: "Professional company profile PPT services in India. We design captivating corporate PowerPoint presentations, investor pitch decks, and sales decks that drive results.",
    url: "https://www.companyprofiledesign.in/company-profile-ppt/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile PPT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile PPT Services in India || Company Profile Powerpoint",
    description: "Professional company profile PPT services in India. We design captivating corporate PowerPoint presentations, investor pitch decks, and sales decks that drive results.",
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
      "@id": "https://www.companyprofiledesign.in/company-profile-ppt/",
      "url": "https://www.companyprofiledesign.in/company-profile-ppt/",
      "name": "Company Profile PPT Services in India || Company Profile Powerpoint",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "datePublished": "2021-09-28T12:02:35+00:00",
      "dateModified": "2021-11-12T06:28:31+00:00",
      "description": "Professional company profile PPT services in India. We design captivating corporate PowerPoint presentations, investor pitch decks, and sales decks that drive results.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/company-profile-ppt/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Company Profile Powerpoint Presentation)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/company-profile-ppt/#breadcrumb",
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
          "name": "Company Profile Powerpoint Presentation",
          "item": "https://www.companyprofiledesign.in/company-profile-ppt/"
        }
      ]
    }
  ]
};

const CompanyProfilePptPage = () => {
  return (
    <main>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

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
