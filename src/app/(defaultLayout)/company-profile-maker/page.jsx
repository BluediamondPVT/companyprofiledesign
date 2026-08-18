import React from 'react';
import MakerHero from '@/app/Components/Maker/MakerHero';
import MakerAbout from '@/app/Components/Maker/MakerAbout';
import MakerProcess from '@/app/Components/Maker/MakerProcess';
import MakerWhyChooseForm from '@/app/Components/Maker/MakerWhyChooseForm';
import MakerServicesGrid from '@/app/Components/Maker/MakerServicesGrid';
import Cta from '@/app/Components/Cta/Cta';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Company Profile Maker in India || Profile Making Agency",
  description: "Top-rated company profile maker agency in India. We design professional, high-impact company profiles and corporate brochures that attract clients and investors.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/company-profile-maker/",
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
    title: "Company Profile Maker in India",
    description: "Top-rated company profile maker agency in India. We design professional, high-impact company profiles and corporate brochures that attract clients and investors.",
    url: "https://www.companyprofiledesign.in/company-profile-maker/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/Profile-Design-Company-1.jpg",
        width: 1920,
        height: 450,
        alt: "Company Profile Maker in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile Maker in India",
    description: "Top-rated company profile maker agency in India. We design professional, high-impact company profiles and corporate brochures that attract clients and investors.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2021/09/Profile-Design-Company-1.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/company-profile-maker/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/Profile-Design-Company-1.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/Profile-Design-Company-1.jpg",
      "width": 1920,
      "height": 450,
      "caption": "Company Profile Maker in India",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/company-profile-maker/",
      "url": "https://www.companyprofiledesign.in/company-profile-maker/",
      "name": "Company Profile Maker in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/company-profile-maker/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/company-profile-maker/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2021/09/Profile-Design-Company-1.jpg",
      "datePublished": "2021-09-18T07:28:44+00:00",
      "dateModified": "2025-03-01T10:23:23+00:00",
      "description": "Top-rated company profile maker agency in India. We design professional, high-impact company profiles and corporate brochures that attract clients and investors.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/company-profile-maker/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Company Profile Making Services)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/company-profile-maker/#breadcrumb",
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
          "name": "Company Profile Making Services",
          "item": "https://www.companyprofiledesign.in/company-profile-maker/"
        }
      ]
    }
  ]
};

const CompanyProfileMakerPage = () => {
  return (
    <main>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* 1. Hero Section */}
      <MakerHero />

      {/* 2. Optimized Agency Section */}
      <MakerAbout />

      {/* 3. Process Section */}
      <MakerProcess />

      {/* 4. Why Choose & Quote Form Section */}
      <MakerWhyChooseForm />

      {/* 5. Services We Deal In Grid Section */}
      <MakerServicesGrid />

      {/* 6. Bottom CTA */}
      <Cta 
        title="Contact Us Now for Company Profile Making"
        content="To know more details about our Company Profile Making Services, kindly contact us! We deliver top-quality company profiles for businesses across India and internationally."
      />
    </main>
  );
};

export default CompanyProfileMakerPage;
