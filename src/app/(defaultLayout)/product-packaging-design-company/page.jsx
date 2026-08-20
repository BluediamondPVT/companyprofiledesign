import CatalogueAbout from "@/app/Components/About/CatalogueAbout";
import PackagingServices from "@/app/Components/Packaging/PackagingServices";
import PackagingProcess from "@/app/Components/Packaging/PackagingProcess";
import PackagingWhyMatters from "@/app/Components/Packaging/PackagingWhyMatters";
import PackagingFaq from "@/app/Components/Packaging/PackagingFaq";
import PackagingCtaCard from "@/app/Components/Packaging/PackagingCtaCard";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title:
    "Premium Product Packaging Design Company | Custom Packaging Solutions",
  description:
    "Looking for a Product Packaging Design Company that can make your products stand out on shelves and online marketplaces?",
  alternates: {
    canonical:
      "https://www.companyprofiledesign.in/product-packaging-design-company/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title:
      "Premium Product Packaging Design Company | Custom Packaging Solutions",
    description:
      "Looking for a Product Packaging Design Company that can make your products stand out on shelves and online marketplaces?",
    url: "https://www.companyprofiledesign.in/product-packaging-design-company/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
        width: 1920,
        height: 1080,
        alt: "Product Packaging Design Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Premium Product Packaging Design Company | Custom Packaging Solutions",
    description:
      "Looking for a Product Packaging Design Company that can make your products stand out on shelves and online marketplaces?",
    images: [
      "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
    ],
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
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        contentUrl:
          "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
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
        "https://www.companyprofiledesign.in/product-packaging-design-company/#primaryimage",
      url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      contentUrl:
        "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      width: 1920,
      height: 1080,
      caption: "Product Packaging Design Company",
      inLanguage: "en-US",
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id":
        "https://www.companyprofiledesign.in/product-packaging-design-company/",
      url: "https://www.companyprofiledesign.in/product-packaging-design-company/",
      name: "Premium Product Packaging Design Company",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      about: { "@id": "https://www.companyprofiledesign.in/#organization" },
      primaryImageOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/product-packaging-design-company/#primaryimage",
      },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/product-packaging-design-company/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      datePublished: "2025-12-02T14:09:17+00:00",
      description:
        "Looking for a Product Packaging Design Company that can make your products stand out on shelves and online marketplaces?",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/product-packaging-design-company/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Product Packaging Design Company)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/product-packaging-design-company/#breadcrumb",
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
          name: "Product Packaging Design Company",
          item: "https://www.companyprofiledesign.in/product-packaging-design-company/",
        },
      ],
    },

    // FAQPage Schema (Matches on-page PackagingFaq content)
    {
      "@type": "FAQPage",
      "@id":
        "https://www.companyprofiledesign.in/product-packaging-design-company/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cost of product packaging design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on product category, number of SKUs, and complexity. We offer affordable packages for all business sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide print-ready and editable files?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we deliver AI, PDF, CDR, PNG, and other required formats.",
          },
        },
        {
          "@type": "Question",
          name: "Can you design packaging for multiple SKUs or a full product range?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely, We handle single products as well as complete product lines.",
          },
        },
        {
          "@type": "Question",
          name: "Do you follow industry-specific compliance guidelines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, especially for food, cosmetics, and pharmaceutical packaging.",
          },
        },
      ],
    },
  ],
};

const ProductPackagingDesignPage = () => {
  const packagingParagraphs = [
    "Looking for a Product Packaging Design Company that can make your products stand out on shelves and online marketplaces? We are a leading packaging design agency offering creative, strategic, and industry-specific packaging solutions that elevate your brand and boost sales.",
    "Our expert designers craft packaging that is not only visually attractive but also functional, consumer-focused, and aligned with the latest market trends, making your product irresistible to customers.",
  ];

  const packagingAdvantagesData = [
    {
      icon: "Package",
      title: "Custom Packaging Design",
      desc: "Every design is tailored specifically to your brand, product type, and target audience.",
    },
    {
      icon: "Palette",
      title: "Experienced Packaging Designers",
      desc: "Our creative team includes professional designers with proven expertise in FMCG packaging, cosmetic packaging, food & beverage packaging, and more.",
    },
    {
      icon: "BarChart3",
      title: "Market & Competitor Research",
      desc: "We study your competitors and market trends to ensure your product packaging stands out and attracts buyers instantly.",
    },
    {
      icon: "Printer",
      title: "High-Quality, Print-Ready Files",
      desc: "We deliver complete design assets that are ready for printing, manufacturing, and e-commerce listings.",
    },
    {
      icon: "CircleDollarSign",
      title: "Affordable Packaging Design Services",
      desc: "Premium quality at budget-friendly pricing, perfect for startups, SMEs, and growing brands.",
    },
  ];

  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {/* 1. Header & About Section */}
      <CatalogueAbout
        title="Product Packaging Design Company"
        subTitle="Creative, Modern & Market-Driven Packaging Solutions"
        paragraphs={packagingParagraphs}
        advantagesTitle="Why Choose Us as Your Product Packaging Design Company?"
        advantagesContent="As one of the most trusted packaging design companies, we specialize in delivering cutting-edge packaging solutions for every industry. Here’s what makes us unique."
        advantagesSubtext=""
        customData={packagingAdvantagesData}
        imgSrc="/assets/images/resource/product-packae-firstpage.webp"
      />

      {/* 2. Packaging Services Grid */}
      <PackagingServices />

      {/* 3. 4-Step Packaging Design Process */}
      <PackagingProcess />

      {/* 4. Why Good Packaging Design Matters (Image on Left) */}
      <PackagingWhyMatters />

      {/* 5. FAQs Section */}
      <PackagingFaq />

      {/* 6. CTA Card matching uploaded screenshot */}
      <PackagingCtaCard />
    </div>
  );
};

export default ProductPackagingDesignPage;
