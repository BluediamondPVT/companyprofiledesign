import React from 'react';
import WritingHero from '@/app/Components/Writing/WritingHero';
import WritingAbout from '@/app/Components/Writing/WritingAbout';
import WritingShowcase from '@/app/Components/Writing/WritingShowcase';
import WritingFormSection from '@/app/Components/Writing/WritingFormSection';
import WritingProcess from '@/app/Components/Writing/WritingProcess';
import WritingWhyChoose from '@/app/Components/Writing/WritingWhyChoose';
import Cta from '@/app/Components/Cta/Cta';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Company Profile Writing Services in India || Company Profile Writer",
  description: "Leading Company Profile Writing Services in India. Get high-impact, professionally written corporate profiles that attract clients and investors worldwide.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/company-profile-writing/",
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
    title: "Company Profile Writing Services in India || Company Profile Writer",
    description: "Leading Company Profile Writing Services in India. Get high-impact, professionally written corporate profiles that attract clients and investors worldwide.",
    url: "https://www.companyprofiledesign.in/company-profile-writing/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/content.jpg",
        width: 1000,
        height: 667,
        alt: "Company Profile Writing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile Writing Services in India || Company Profile Writer",
    description: "Leading Company Profile Writing Services in India. Get high-impact, professionally written corporate profiles that attract clients and investors worldwide.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2021/09/content.jpg"],
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
        "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
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

    // Primary Image Object
    {
      "@type": "ImageObject",
      "@id": "https://www.companyprofiledesign.in/company-profile-writing/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/content.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/content.jpg",
      "width": 1000,
      "height": 667,
      "caption": "Company Profile Writing Services",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/company-profile-writing/",
      "url": "https://www.companyprofiledesign.in/company-profile-writing/",
      "name": "Company Profile Writing Services in India || Company Profile Writer",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-writing/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-writing/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/content.jpg",
      "datePublished": "2021-09-14T06:46:08+00:00",
      "dateModified": "2021-12-31T04:24:31+00:00",
      "description": "Leading Company Profile Writing Services in India. Get high-impact, professionally written corporate profiles that attract clients and investors worldwide.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/company-profile-writing/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Company Profile Writing)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/company-profile-writing/#breadcrumb",
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
          "name": "Company Profile Writing",
          "item": "https://www.companyprofiledesign.in/company-profile-writing/"
        }
      ]
    }
  ]
};

const CompanyProfileWritingPage = () => {
  return (
    <main>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

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
