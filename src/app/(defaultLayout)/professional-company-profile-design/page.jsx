import ProfessionalCompanyProfileDesign from '@/app/Components/BlogDetails/ProfessionalCompanyProfileDesign';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Professional Company Profile || Construction Profile Design",
  description: "Being a leading professional company profile design company in India, we design high-impact construction company profiles and corporate sector brochures.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/professional-company-profile-design/",
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
    title: "Professional Company Profile || Construction Profile Design",
    description: "Being a leading professional company profile design company in India, we design high-impact construction company profiles and corporate sector brochures.",
    url: "https://www.companyprofiledesign.in/professional-company-profile-design/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2020-01-06T08:20:49+00:00",
    modifiedTime: "2021-12-31T04:56:07+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
        width: 1920,
        height: 1080,
        alt: "Professional Company Profile Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Company Profile || Construction Profile Design",
    description: "Being a leading professional company profile design company in India, we design high-impact construction company profiles and corporate sector brochures.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg"],
  },
  verification: {
    google: [
      "fz__DsrAHtHD5Yr3iarcIuZf6fuBHMh55wAGlNFLQNI",
      "NkkC2VmcZACC6OvOjJH8axgdErjv2uwIFZrlNMXfkXI",
    ],
  },
};

// 2. Clean Unified Schema Graph (Yoast / Google Rich Results Validated Article Schema)
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
      "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Brochure Design Company",
      "inLanguage": "en-US"
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#article",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/" },
      "author": {
        "@type": "Person",
        "name": "TheBDIT"
      },
      "headline": "Importance of Construction Company Profile",
      "datePublished": "2020-01-06T08:20:49+00:00",
      "dateModified": "2021-12-31T04:56:07+00:00",
      "mainEntityOfPage": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/" },
      "wordCount": 623,
      "publisher": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "image": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "keywords": [
        "Company Profile",
        "Construction Company Profile",
        "Profile Design Company"
      ],
      "articleSection": ["Company Profile"],
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/",
      "url": "https://www.companyprofiledesign.in/professional-company-profile-design/",
      "name": "Professional Company Profile || Construction Profile Design",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "datePublished": "2020-01-06T08:20:49+00:00",
      "dateModified": "2021-12-31T04:56:07+00:00",
      "description": "Being a leading Professional Company Profile design company, we have designed numerous Construction Company Profile and service sector company",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Article)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/professional-company-profile-design/#breadcrumb",
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
          "name": "Our Blog",
          "item": "https://www.companyprofiledesign.in/our-blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Importance of Construction Company Profile",
          "item": "https://www.companyprofiledesign.in/professional-company-profile-design/"
        }
      ]
    }
  ]
};

const page = () => {
    return (
        <div>
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Professional Company Profile Design"
            />
            <ProfessionalCompanyProfileDesign />
        </div>
    );
};

export default page;