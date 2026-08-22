import BlogSidebar from "@/app/Components/BlogSidebar/BlogSidebar";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

// 1. Next.js App Router Metadata (SEO Optimized)
export const metadata = {
  title: "Blog Articles & Guides | Company Profile Design",
  description:
    "Explore in-depth guides, articles, and expert insights on company profile design, brochure making, corporate branding, and presentation design in India.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/blog-sidebar/",
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
    type: "website",
    title: "Blog Articles & Guides | Company Profile Design",
    description:
      "Explore in-depth guides, articles, and expert insights on company profile design, brochure making, corporate branding, and presentation design in India.",
    url: "https://www.companyprofiledesign.in/blog-sidebar/",
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
    title: "Blog Articles & Guides | Company Profile Design",
    description:
      "Explore in-depth guides, articles, and expert insights on company profile design, brochure making, corporate branding, and presentation design in India.",
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

// 2. Clean Unified Schema Graph
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
        contentUrl: "https://www.companyprofiledesign.in/assets/images/logo.png",
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

    // CollectionPage / Blog Schema
    {
      "@type": "CollectionPage",
      "@id": "https://www.companyprofiledesign.in/blog-sidebar/",
      url: "https://www.companyprofiledesign.in/blog-sidebar/",
      name: "Blog Articles & Guides | Company Profile Design",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      description:
        "Explore in-depth guides, articles, and expert insights on company profile design, brochure making, corporate branding, and presentation design in India.",
      breadcrumb: {
        "@id": "https://www.companyprofiledesign.in/blog-sidebar/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/blog-sidebar/#breadcrumb",
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
          name: "Blog List",
          item: "https://www.companyprofiledesign.in/blog-sidebar/",
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
        subTitle="Blog Articles"
        title="Our Latest Articles & Design Guides"
      />
      <BlogSidebar />
    </div>
  );
};

export default page;
