import BlogGrid from "@/app/Components/Blog/BlogGrid";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Our Blog | Company Profile Design | Profile Design Company",
  description:
    "Read the latest articles, insights, and expert design guides on company profile design, corporate brochures, product catalogues, and branding strategies.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/our-blog/",
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
    title: "Our Blog | Company Profile Design | Profile Design Company",
    description:
      "Read the latest articles, insights, and expert design guides on company profile design, corporate brochures, product catalogues, and branding strategies.",
    url: "https://www.companyprofiledesign.in/our-blog/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Blog | Company Profile Design | Profile Design Company",
    description:
      "Read the latest articles, insights, and expert design guides on company profile design, corporate brochures, product catalogues, and branding strategies.",
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

    // CollectionPage / WebPage Schema
    {
      "@type": "CollectionPage",
      "@id": "https://www.companyprofiledesign.in/our-blog/",
      url: "https://www.companyprofiledesign.in/our-blog/",
      name: "Our Blog | Company Profile Design | Profile Design Company",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      about: { "@id": "https://www.companyprofiledesign.in/#organization" },
      description:
        "Read the latest articles, insights, and expert design guides on company profile design, corporate brochures, product catalogues, and branding strategies.",
      breadcrumb: {
        "@id": "https://www.companyprofiledesign.in/our-blog/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Our Blog)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/our-blog/#breadcrumb",
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
        subTitle="Blog"
        title="Blog"
      />
      <BlogGrid />
    </div>
  );
};

export default page;
