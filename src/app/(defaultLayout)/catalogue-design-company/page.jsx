import CatalogueAbout from '@/app/Components/About/CatalogueAbout';
import Cta from '@/app/Components/Cta/Cta';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import WhyBestCatalogue from '@/app/Components/Feature/WhyBestCatalogue';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Catalogue Design Company in India | Custom Product Catalogues",
  description: "Looking for a custom catalogue design company in India? We create visually stunning, high-quality catalogues tailored to showcase your brand.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/catalogue-design-company/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Catalogue Design Company in India | Custom Product Catalogues",
    description: "Looking for a custom catalogue design company in India? We create visually stunning, high-quality catalogues tailored to showcase your brand.",
    url: "https://www.companyprofiledesign.in/catalogue-design-company/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Catalogue Design Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalogue Design Company in India | Custom Product Catalogues",
    description: "Looking for a custom catalogue design company in India? We create visually stunning, high-quality catalogues tailored to showcase your brand.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/catalogue-design-company/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Catalogue Design Company in India",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/catalogue-design-company/",
      "url": "https://www.companyprofiledesign.in/catalogue-design-company/",
      "name": "Catalogue Design Company in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/catalogue-design-company/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/catalogue-design-company/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "description": "Looking for a custom catalogue design company in India? We create visually stunning, high-quality catalogues tailored to showcase your brand.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/catalogue-design-company/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Catalogue Design Company)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/catalogue-design-company/#breadcrumb",
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
          "name": "Catalogue Design Company",
          "item": "https://www.companyprofiledesign.in/catalogue-design-company/"
        }
      ]
    }
  ]
};

const CatalogueDesignCompanyPage = () => {
    return (
        <div>
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <CatalogueAbout />
            <Portfolio 
                title="Explore Our Latest Catalogue Designs for Businesses" 
                content="As a leading catalogue design company, we have created high-quality business catalogues for clients across major cities including Delhi, Mumbai, Bangalore, Bengaluru, Chennai, Lucknow, and other business hubs. Browse our latest catalogue design work below to see the creativity, structure, and professional standards." 
            />
            <WhyBestCatalogue />
            <Cta />
        </div>
    );
};

export default CatalogueDesignCompanyPage;
