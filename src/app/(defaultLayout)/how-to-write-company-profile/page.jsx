import HowToWriteCompanyProfile from "@/app/Components/BlogDetails/HowToWriteCompanyProfile";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "How to Write a Company Profile? Step-by-Step Guide for Businesses",
  description:
    "Learn how to write a compelling, professional company profile with our complete step-by-step guide. Includes structure tips, checklist, and key writing strategies.",
  alternates: {
    canonical:
      "https://www.companyprofiledesign.in/how-to-write-company-profile/",
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
    title: "How to Write a Company Profile? Step-by-Step Guide for Businesses",
    description:
      "Learn how to write a compelling, professional company profile with our complete step-by-step guide. Includes structure tips, checklist, and key writing strategies.",
    url: "https://www.companyprofiledesign.in/how-to-write-company-profile/",
    siteName: "Company Profile Design | Profile Design Company",
    publishedTime: "2025-08-15T10:00:00+00:00",
    authors: ["TheBDIT"],
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
        width: 1200,
        height: 675,
        alt: "How to write a company profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Company Profile? Step-by-Step Guide for Businesses",
    description:
      "Learn how to write a compelling, professional company profile with our complete step-by-step guide. Includes structure tips, checklist, and key writing strategies.",
    images: [
      "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
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
        "https://www.companyprofiledesign.in/how-to-write-company-profile/#primaryimage",
      url: "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
      contentUrl:
        "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
      width: 1200,
      height: 675,
      caption: "How to write a company profile",
      inLanguage: "en-US",
    },

    // Article / BlogPosting Schema
    {
      "@type": "Article",
      "@id":
        "https://www.companyprofiledesign.in/how-to-write-company-profile/#article",
      isPartOf: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/",
      },
      author: {
        "@type": "Person",
        name: "TheBDIT",
      },
      headline: "How to Write a Company Profile? Step-by-Step Guide for Businesses",
      datePublished: "2025-08-15T10:00:00+00:00",
      mainEntityOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/",
      },
      wordCount: 850,
      publisher: { "@id": "https://www.companyprofiledesign.in/#organization" },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
      keywords: [
        "How to write a company profile",
        "Company profile writing",
        "Company profile format",
        "Profile content writing",
        "Company Profile Design",
      ],
      articleSection: ["Company Profile Writing"],
      inLanguage: "en-US",
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id":
        "https://www.companyprofiledesign.in/how-to-write-company-profile/",
      url: "https://www.companyprofiledesign.in/how-to-write-company-profile/",
      name: "How to Write a Company Profile? Step-by-Step Guide for Businesses",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      primaryImageOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/#primaryimage",
      },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/assets/images/blog/How-to-write-a-company-profile-1200x675.jpg",
      datePublished: "2025-08-15T10:00:00+00:00",
      description:
        "Learn how to write a compelling, professional company profile with our complete step-by-step guide. Includes structure tips, checklist, and key writing strategies.",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/how-to-write-company-profile/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Our Blog -> Guide)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/how-to-write-company-profile/#breadcrumb",
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
          name: "How to write a Company Profile?",
          item: "https://www.companyprofiledesign.in/how-to-write-company-profile/",
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
        title="How to write a Company Profile?"
      />
      <HowToWriteCompanyProfile />
    </div>
  );
};

export default page;
