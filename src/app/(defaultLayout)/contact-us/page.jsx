import BreadCumb from "@/app/Components/Common/BreadCumb";
import Contact from "@/app/Components/Contact/Contact";
import Cta2 from "@/app/Components/Cta/Cta2";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Contact Us | Company Profile Design Services India",
  description:
    "Get in touch with Company Profile Design (A Blue Diamond Infotech company) for professional company profile design, brochures, and catalog design services.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/contact-us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Contact Us | Company Profile Design Services India",
    description:
      "Get in touch with Company Profile Design (A Blue Diamond Infotech company) for professional company profile design, brochures, and catalog design services.",
    url: "https://www.companyprofiledesign.in/contact-us/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Company Profile Design Services India",
    description:
      "Get in touch with Company Profile Design (A Blue Diamond Infotech company) for professional company profile design, brochures, and catalog design services.",
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

    // ContactPage Schema
    {
      "@type": "ContactPage",
      "@id": "https://www.companyprofiledesign.in/contact-us/",
      url: "https://www.companyprofiledesign.in/contact-us/",
      name: "Contact Us | Company Profile Design",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      about: { "@id": "https://www.companyprofiledesign.in/#organization" },
      description:
        "Get in touch with Company Profile Design (A Blue Diamond Infotech company) for professional company profile design, brochures, and catalog design services.",
      breadcrumb: {
        "@id": "https://www.companyprofiledesign.in/contact-us/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Contact Us)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/contact-us/#breadcrumb",
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
          name: "Contact Us",
          item: "https://www.companyprofiledesign.in/contact-us/",
        },
      ],
    },
  ],
};

const ContactUsPage = () => {
  return (
    <>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <div>
        <BreadCumb
          bgImg="/assets/images/resource/inner-bg.webp"
          subTitle="Contact"
          title="Contact Now With Us For A Great Starts…!!!"
        />
        <Contact />
        <Cta2 />
      </div>
    </>
  );
};

export default ContactUsPage;
