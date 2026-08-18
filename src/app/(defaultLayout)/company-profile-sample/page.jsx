import CompanyProfileSample from '@/app/Components/BlogDetails/CompanyProfileSample';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Company Profile Sample || Company Profile Templates Samples PDF",
  description: "Explore top inspiring company profile samples and PDF templates for businesses. Learn how to structure and design a high-impact corporate profile.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/company-profile-sample/",
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
    title: "Top 5 Inspiring Company Profile samples for business",
    description: "Explore top inspiring company profile samples and PDF templates for businesses. Learn how to structure and design a high-impact corporate profile.",
    url: "https://www.companyprofiledesign.in/company-profile-sample/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2021-06-05T12:14:55+00:00",
    modifiedTime: "2021-06-08T06:08:28+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg",
        width: 1440,
        height: 810,
        alt: "Company Profile Samples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 5 Inspiring Company Profile samples for business",
    description: "Explore top inspiring company profile samples and PDF templates for businesses. Learn how to structure and design a high-impact corporate profile.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/company-profile-sample/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg",
      "width": 1440,
      "height": 810,
      "caption": "Company Profile Sample",
      "inLanguage": "en-US"
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id": "https://www.companyprofiledesign.in/company-profile-sample/#article",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/" },
      "author": {
        "@type": "Person",
        "name": "TheBDIT"
      },
      "headline": "Top 5 Inspiring Company Profile samples for business",
      "datePublished": "2021-06-05T12:14:55+00:00",
      "dateModified": "2021-06-08T06:08:28+00:00",
      "mainEntityOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/" },
      "wordCount": 3740,
      "publisher": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg",
      "keywords": [
        "Company Profile",
        "Company Profile Sample",
        "Company Profile Templates"
      ],
      "articleSection": ["Company Profile"],
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/company-profile-sample/",
      "url": "https://www.companyprofiledesign.in/company-profile-sample/",
      "name": "Company Profile Sample || Company Profile Templates Samples PDF",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/06/Company-Profile-Samples.jpg",
      "datePublished": "2021-06-05T12:14:55+00:00",
      "dateModified": "2021-06-08T06:08:28+00:00",
      "description": "A Company Profile Sample gives you an idea to choose your Company Profile template according to your type of business.Company Profile samples.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/company-profile-sample/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Article)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/company-profile-sample/#breadcrumb",
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
          "name": "Top 5 Inspiring Company Profile samples for business",
          "item": "https://www.companyprofiledesign.in/company-profile-sample/"
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
                title="Top 5 Inspiring Company Profile samples for business"
            />
            <CompanyProfileSample />
        </div>
    );
};

export default page;