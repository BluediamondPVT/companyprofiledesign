import BestCompanyProfileDesignGuide from "@/app/Components/BlogDetails/BestCompanyProfileDesignGuide";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Best Company Profile Design Guide 2025",
  description:
    "Discover the Best Company Profile Design Guide for 2025. Learn how to design a professional, modern, and impactful company profile.",
  alternates: {
    canonical:
      "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
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
    title: "Best Company Profile Design Guide 2025",
    description:
      "Discover the Best Company Profile Design Guide for 2025. Learn how to design a professional, modern, and impactful company profile.",
    url: "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2025-12-01T10:31:52+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Best Company Profile Design Guide 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Company Profile Design Guide 2025",
    description:
      "Discover the Best Company Profile Design Guide for 2025. Learn how to design a professional, modern, and impactful company profile.",
    images: [
      "https://www.companyprofiledesign.in/assets/images/logo.png",
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

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id":
        "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/#article",
      isPartOf: {
        "@id":
          "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
      },
      author: {
        "@type": "Person",
        name: "TheBDIT",
      },
      headline: "Best Company Profile Design Guide 2025",
      datePublished: "2025-12-01T10:31:52+00:00",
      mainEntityOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
      },
      wordCount: 722,
      publisher: { "@id": "https://www.companyprofiledesign.in/#organization" },
      keywords: [
        "Company profile",
        "Company Profile Design",
        "Company Profile design Guide",
        "Profile Design Company",
        "Profile Design Guide 2025",
      ],
      inLanguage: "en-US",
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id":
        "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
      url: "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
      name: "Best Company Profile Design Guide 2025",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      datePublished: "2025-12-01T10:31:52+00:00",
      description:
        "Discover the Best Company Profile Design Guide for 2025. Learn how to design a professional, modern, and impactful company profile.",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Guide 2025)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/#breadcrumb",
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
          name: "Best Company Profile Design Guide 2025",
          item: "https://www.companyprofiledesign.in/best-company-profile-design-guide-2025/",
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
        title="Best Company Profile Design Guide 2025"
      />
      <BestCompanyProfileDesignGuide />
    </div>
  );
};

export default page;
