import BreadCumb from "@/app/Components/Common/BreadCumb";
import Cta from "@/app/Components/Cta/Cta";
import CompanyFaq from "@/app/Components/Faq/CompanyFaq";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Frequently Asked Questions | Company Profile Design | Profile Design Company",
  description: "Find answers to frequently asked questions about our company profile design, brochure design, content writing, revisions, and graphic design services.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/faq/",
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
    title: "Frequently Asked Questions | Company Profile Design | Profile Design Company",
    description: "Find answers to frequently asked questions about our company profile design, brochure design, content writing, revisions, and graphic design services.",
    url: "https://www.companyprofiledesign.in/faq/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Company Profile Design | Profile Design Company",
    description: "Find answers to frequently asked questions about our company profile design, brochure design, content writing, revisions, and graphic design services.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png"],
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

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/faq/",
      "url": "https://www.companyprofiledesign.in/faq/",
      "name": "Frequently Asked Questions | Company Profile Design | Profile Design Company",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "datePublished": "2021-05-29T12:51:33+00:00",
      "dateModified": "2021-05-29T12:57:54+00:00",
      "description": "Find answers to frequently asked questions about our company profile design, brochure design, content writing, revisions, and graphic design services.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/faq/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Frequently Asked Questions)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/faq/#breadcrumb",
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
          "name": "Frequently Asked Questions",
          "item": "https://www.companyprofiledesign.in/faq/"
        }
      ]
    },

    // FAQPage Schema (Matches on-page CompanyFaq content)
    {
      "@type": "FAQPage",
      "@id": "https://www.companyprofiledesign.in/faq/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Company Profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Company profile is a professional document that represents your company and its work in documented format."
          }
        },
        {
          "@type": "Question",
          "name": "How does Company Profile differs from Brochure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Company Profile is company specific and Brochures are product specific. The purpose of both differs one represents your company and other your products."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Customer have to visit our Office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depends on customers’ choice as we offer our service completely online. Our customers are always welcome to our office to meet our team."
          }
        },
        {
          "@type": "Question",
          "name": "What Software do you use to design a company profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use all kinds of premium software to design like Coreldraw, Adobe Photoshop, Illustrator & InDesign, and many others."
          }
        },
        {
          "@type": "Question",
          "name": "How many changes do you make before finalization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We believe in customer satisfaction, hence we work until the customer is satisfied Usually we rarely need to do multiple changes as our customers like our designs and content in 1st draft itself."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide only content writing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as per client requirement we do provide only content writing services."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide only graphic design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, as per client requirement we do provide only graphic design services."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have Content writer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes we write content for every sector."
          }
        }
      ]
    }
  ]
};

const FaqPage = () => {
  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.jpg"
        subTitle="FAQ"
        title="Frequently Asked Questions"
        content="Find quick answers to common questions about our company profile design, content writing, and corporate branding services."
      />
      <CompanyFaq />
      <Cta />
    </div>
  );
};

export default FaqPage;
