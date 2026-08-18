import CompanyProfileContent from '@/app/Components/BlogDetails/CompanyProfileContent';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "What Should A Company Profile Content | Professional Profile Content",
  description: "Discover what essential elements and sections should be included in a company profile content to create a powerful, professional corporate presentation.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/company-profile-content/",
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
    title: "What Should A Company Profile Content | Professional Profile Content",
    description: "Discover what essential elements and sections should be included in a company profile content to create a powerful, professional corporate presentation.",
    url: "https://www.companyprofiledesign.in/company-profile-content/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2020-01-06T08:31:55+00:00",
    modifiedTime: "2020-01-25T13:45:10+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg",
        width: 1920,
        height: 1080,
        alt: "What Should A Company Profile Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Should A Company Profile Content | Professional Profile Content",
    description: "Discover what essential elements and sections should be included in a company profile content to create a powerful, professional corporate presentation.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/company-profile-content/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Company profile Content",
      "inLanguage": "en-US"
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id": "https://www.companyprofiledesign.in/company-profile-content/#article",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/company-profile-content/" },
      "author": {
        "@type": "Person",
        "name": "TheBDIT"
      },
      "headline": "what should a company profile content",
      "datePublished": "2020-01-06T08:31:55+00:00",
      "dateModified": "2020-01-25T13:45:10+00:00",
      "mainEntityOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-content/" },
      "wordCount": 636,
      "publisher": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-content/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg",
      "keywords": [
        "Company Profile",
        "Company Profile Content",
        "Profile Writing"
      ],
      "articleSection": ["Company Profile"],
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/company-profile-content/",
      "url": "https://www.companyprofiledesign.in/company-profile-content/",
      "name": "What Should A Company Profile Content | Professional Profile Content",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-content/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-content/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Company-Profile-Design.jpg",
      "datePublished": "2020-01-06T08:31:55+00:00",
      "dateModified": "2020-01-25T13:45:10+00:00",
      "description": "The company profile content plays the most important role along with its design, therefore Company profile content should always be prepared..",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/company-profile-content/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Article)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/company-profile-content/#breadcrumb",
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
          "name": "what should a company profile content",
          "item": "https://www.companyprofiledesign.in/company-profile-content/"
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
                title="what should a company profile content"
                content="Complete Guide for Businesses"
            />
            <CompanyProfileContent />
        </div>
    );
};

export default page;