import CatalogueAbout from "@/app/Components/About/CatalogueAbout";
import Portfolio from "@/app/Components/Portfolio/Portfolio";
import WhyBestCatalogue from "@/app/Components/Feature/WhyBestCatalogue";
import GraphicWhyMatters from "@/app/Components/Graphic/GraphicWhyMatters";
import GraphicFaq from "@/app/Components/Graphic/GraphicFaq";
import GraphicCtaCard from "@/app/Components/Graphic/GraphicCtaCard";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Graphic Design Company in India | Creative Graphic Designers",
  description:
    "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions? Partner with us today.",
  alternates: {
    canonical:
      "https://www.companyprofiledesign.in/graphic-design-company-in-india/",
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
    title: "Graphic Design Company in India",
    description:
      "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions? Partner with us today.",
    url: "https://www.companyprofiledesign.in/graphic-design-company-in-india/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
        width: 1920,
        height: 1080,
        alt: "Graphic Design Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Company in India",
    description:
      "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions? Partner with us today.",
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

// 2. Clean Unified Schema Graph (Yoast / Google Rich Results Validated with FAQPage)
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
        "https://www.companyprofiledesign.in/graphic-design-company-in-india/#primaryimage",
      url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      contentUrl:
        "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      width: 1920,
      height: 1080,
      caption: "Catalogue Design Company",
      inLanguage: "en-US",
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id":
        "https://www.companyprofiledesign.in/graphic-design-company-in-india/",
      url: "https://www.companyprofiledesign.in/graphic-design-company-in-india/",
      name: "Graphic Design Company in India",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      primaryImageOfPage: {
        "@id":
          "https://www.companyprofiledesign.in/graphic-design-company-in-india/#primaryimage",
      },
      image: {
        "@id":
          "https://www.companyprofiledesign.in/graphic-design-company-in-india/#primaryimage",
      },
      thumbnailUrl:
        "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.webp",
      datePublished: "2025-12-02T15:10:14+00:00",
      description:
        "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions?",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/graphic-design-company-in-india/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Graphic Design Company in India)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/graphic-design-company-in-india/#breadcrumb",
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
          name: "Graphic Design Company in India",
          item: "https://www.companyprofiledesign.in/graphic-design-company-in-india/",
        },
      ],
    },

    // FAQPage Schema
    {
      "@type": "FAQPage",
      "@id":
        "https://www.companyprofiledesign.in/graphic-design-company-in-india/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do graphic design services cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the project type and complexity, but we offer affordable custom packages.",
          },
        },
        {
          "@type": "Question",
          name: "What file formats do you deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide print-ready PDFs, high-resolution PNG/JPG, and editable source files like AI, PSD, EPS, CDR, etc.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle bulk design projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, We regularly manage ongoing design work and monthly retainers.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide brand identity packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely, logo design, color palette, typography, brand guidelines, and full branding kits.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign my existing graphics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer complete redesign services for outdated or inconsistent visuals.",
          },
        },
      ],
    },
  ],
};

const GraphicDesignPage = () => {
  const graphicParagraphs = [
    "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions? You’ve come to the right place. We are a leading graphic design agency offering premium-quality designs that help businesses build a strong brand identity and communicate effectively with their audience.",
    "Whether you need branding, marketing materials, social media creatives, packaging, or corporate designs, our expert designers bring your ideas to life with precision and creativity.",
  ];

  const graphicAdvantagesData = [
    {
      icon: "Palette",
      title: "Highly Skilled & Creative Designers",
      desc: "Our team consists of experienced graphic designers who understand branding, marketing, and visual communication deeply.",
    },
    {
      icon: "Sparkles",
      title: "Customized Designs for Every Brand",
      desc: "We create unique, concept-driven designs tailored to your brand personality, audience, and business goals.",
    },
    {
      icon: "Layers",
      title: "End-to-End Graphic Design Solutions",
      desc: "From logo design to packaging, we offer a full suite of creative services under one roof.",
    },
    {
      icon: "Zap",
      title: "Fast Turnaround Time",
      desc: "Professional designs delivered quickly without compromising quality.",
    },
    {
      icon: "CircleDollarSign",
      title: "Affordable Design Packages",
      desc: "Premium-quality designs at competitive Indian pricing—perfect for startups, SMEs, and enterprises.",
    },
    {
      icon: "RotateCcw",
      title: "Unlimited Revisions",
      desc: "We refine your favorite design until it aligns perfectly with your brand vision.",
    },
  ];

  const graphicWhyBestFeatures = [
    {
      id: 1,
      icon: "Sparkles",
      title: "Logo Design & Brand Identity",
      desc: "Creative and memorable logos that define your brand.",
    },
    {
      id: 2,
      icon: "FileText",
      title: "Print Design",
      desc: "Brochures, flyers, business cards, posters, banners, packaging inserts, etc.",
    },
    {
      id: 3,
      icon: "Package",
      title: "Packaging Design",
      desc: "Professional packaging artwork for FMCG, cosmetics, food, health, and retail brands.",
    },
    {
      id: 4,
      icon: "Send",
      title: "Social Media Design",
      desc: "High-quality creatives for Instagram, Facebook, LinkedIn, and ads.",
    },
    {
      id: 5,
      icon: "Laptop",
      title: "Website Graphics & UI Elements",
      desc: "Web banners, icons, layouts, and user-friendly digital visuals.",
    },
    {
      id: 6,
      icon: "Target",
      title: "Advertising Creatives",
      desc: "Creative ad banners, campaign graphics, and promotional materials.",
    },
    {
      id: 7,
      icon: "Palette",
      title: "Infographics & Illustrations",
      desc: "Engaging visuals and custom illustrations for storytelling and brand communication.",
    },
  ];

  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <CatalogueAbout
        title="Graphic Design Company in India"
        subTitle="Creative, Modern & Professional Design Services"
        paragraphs={graphicParagraphs}
        advantagesTitle="Why We Are the Best Graphic Design Company in India?"
        advantagesContent="Choosing the right design partner can significantly impact your brand’s success. Here’s why clients across India and worldwide trust us:"
        advantagesSubtext=""
        customData={graphicAdvantagesData}
        imgSrc="/assets/images/resource/graphic-firstpage.webp"
      />

      <Portfolio
        title="Our Previous Work"
        content="As a trusted graphic design company, we have delivered creative and professional design services to top companies across major cities including Mumbai, Delhi, Chennai, Bangalore, Bengaluru, and Lucknow, as well as to many international clients. Explore the work showcased below to get ideas and understand the quality standards we maintain as a leading graphic design company."
      />

      <WhyBestCatalogue
        title="Our Graphic Design Services in India"
        subtitle="We offer comprehensive graphic design solutions to support all your branding and marketing needs."
        customFeatures={graphicWhyBestFeatures}
      />

      {/* Why Good Graphic Design Matters */}
      <GraphicWhyMatters />

      {/* FAQs Section */}
      <GraphicFaq />

      {/* CTA Card */}
      <GraphicCtaCard />
    </div>
  );
};

export default GraphicDesignPage;
