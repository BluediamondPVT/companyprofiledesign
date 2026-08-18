import GraphicDesignWebsitesGuide from '@/app/Components/BlogDetails/GraphicDesignWebsitesGuide';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Looking for the Best Graphic Design Websites? Here’s What You Need to Know!",
  description: "Explore top graphic design websites for creativity, innovation, and stunning visuals. Find best platforms to inspire your next design project.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/",
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
    title: "Looking for the Best Graphic Design Websites? Here’s What You Need to Know!",
    description: "Explore top graphic design websites for creativity, innovation, and stunning visuals. Find best platforms to inspire your next design project.",
    url: "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2025-02-20T11:55:59+00:00",
    modifiedTime: "2025-02-20T12:11:18+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg",
        width: 400,
        height: 250,
        alt: "Looking for the Best Graphic Design Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looking for the Best Graphic Design Websites? Here’s What You Need to Know!",
    description: "Explore top graphic design websites for creativity, innovation, and stunning visuals. Find best platforms to inspire your next design project.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg",
      "width": 400,
      "height": 250,
      "inLanguage": "en-US"
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#article",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/" },
      "author": {
        "@type": "Person",
        "name": "TheBDIT"
      },
      "headline": "Looking for the Best Graphic Design Websites? Here’s What You Need to Know!",
      "datePublished": "2025-02-20T11:55:59+00:00",
      "dateModified": "2025-02-20T12:11:18+00:00",
      "mainEntityOfPage": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/" },
      "wordCount": 726,
      "publisher": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "image": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg",
      "keywords": [
        "Company Profile Design",
        "Graphic Design",
        "Logo Design",
        "Web Design"
      ],
      "articleSection": ["Graphic Design"],
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/",
      "url": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/",
      "name": "Looking for the Best Graphic Design Websites?",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2025/02/Brochure-Designing-Services-Riyadh-Company-Brochure-Services-Saudi-Arabia-Company-Brochure-Services-36wa5b3w3w7txmxs0fh4i2-400x250-1.jpg",
      "datePublished": "2025-02-20T11:55:59+00:00",
      "dateModified": "2025-02-20T12:11:18+00:00",
      "description": "Explore top graphic design websites for creativity, innovation, and stunning visuals. Find best platforms to inspire next design project.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Article)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/#breadcrumb",
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
          "name": "Looking for the Best Graphic Design Websites? Here’s What You Need to Know!",
          "item": "https://www.companyprofiledesign.in/looking-for-the-best-graphic-design-websites/"
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
                title="Looking for the Best Graphic Design Websites? Here’s What You Need to Know!"
            />
            <GraphicDesignWebsitesGuide />
        </div>
    );
};

export default page;