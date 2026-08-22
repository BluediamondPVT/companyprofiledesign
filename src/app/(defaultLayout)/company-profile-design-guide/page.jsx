import CompanyProfileDesignGuide from "@/app/Components/BlogDetails/CompanyProfileDesignGuide";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Company Profile Design Complete Guide for Businesses",
  description:
    "Whether you are a startup or SME, investing in a professional company profile design in India significantly improves your brand image and credibility.",
  alternates: {
    canonical:
      "https://www.companyprofiledesign.in/company-profile-design-guide/",
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
    title: "Company Profile Design Complete Guide for Businesses",
    description:
      "Whether you are a startup or SME, investing in a professional company profile design in India significantly improves your brand image and credibility.",
    url: "https://www.companyprofiledesign.in/company-profile-design-guide/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2025-12-13T12:30:52+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
        width: 1024,
        height: 576,
        alt: "Company Profile Design Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile Design Complete Guide for Businesses",
    description:
      "Whether you are a startup or SME, investing in a professional company profile design in India significantly improves your brand image and credibility.",
    images: [
      "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
    ],
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
      name: "Company Profile Design",
      url: "https://www.companyprofiledesign.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.companyprofiledesign.in/#/schema/logo/image/",
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        contentUrl:
          "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        caption: "Company Profile Design",
      },
      image: {
        "@id": "https://www.companyprofiledesign.in/#/schema/logo/image/",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+917718967729",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: ["https://in.pinterest.com/companyprofiledesignind"],
    },

    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://www.companyprofiledesign.in/#website",
      url: "https://www.companyprofiledesign.in/",
      name: "Company Profile Design",
      description: "Design Company Profile, Brochures, Catalogs, etc",
      publisher: { "@id": "https://www.companyprofiledesign.in/#organization" },
      alternateName: "Profile Design Company",
      inLanguage: "en-US",
    },

    // Primary Image Object
    {
      "@type": "ImageObject",
      "@id":
        "https://www.companyprofiledesign.in/company-profile-design-guide/#primaryimage",
      url: "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
      contentUrl:
        "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
      width: 1024,
      height: 576,
      caption: "Company Profile Design",
      inLanguage: "en-US",
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id":
        "https://www.companyprofiledesign.in/company-profile-design-guide/#article",
      isPartOf: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/",
      },
      author: {
        "@type": "Person",
        name: "TheBDIT",
      },
      headline: "Company Profile Design Complete Guide for Businesses",
      datePublished: "2025-12-13T12:30:52+00:00",
      mainEntityOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/",
      },
      wordCount: 800,
      publisher: { "@id": "https://www.companyprofiledesign.in/#organization" },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
      keywords: [
        "Company profile",
        "Company Profile Design",
        "Company Profile design Guide",
        "Profile Design Company",
      ],
      articleSection: ["Company Profile"],
      inLanguage: "en-US",
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id":
        "https://www.companyprofiledesign.in/company-profile-design-guide/",
      url: "https://www.companyprofiledesign.in/company-profile-design-guide/",
      name: "Company Profile Design Complete Guide for Businesses",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      primaryImageOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/#primaryimage",
      },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/assets/images/resource/about.jpg",
      datePublished: "2025-12-13T12:30:52+00:00",
      description:
        "Whether you are a startup or SME's, investing in a professional company profile design in India, significantly improve your brand image.",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/company-profile-design-guide/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Guide)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/company-profile-design-guide/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.companyprofiledesign.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Blog",
          item: "https://www.companyprofiledesign.in/our-blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Company Profile Design Complete Guide for Businesses",
          item: "https://www.companyprofiledesign.in/company-profile-design-guide/",
        },
      ],
    },
  ],
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
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="Blog Details"
        title="Company Profile Design Complete Guide for Businesses"
      />
      <CompanyProfileDesignGuide />
    </div>
  );
};

export default page;
