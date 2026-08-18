import React from 'react';
import LogoHero from '@/app/Components/Logo/LogoHero';
import LogoWhyBest from '@/app/Components/Logo/LogoWhyBest';
import LogoServices from '@/app/Components/Logo/LogoServices';
import LogoProcess from '@/app/Components/Logo/LogoProcess';
import LogoWhyChoose from '@/app/Components/Logo/LogoWhyChoose';
import LogoTestimonial from '@/app/Components/Logo/LogoTestimonial';
import LogoFaq from '@/app/Components/Logo/LogoFaq';
import LogoCta from '@/app/Components/Logo/LogoCta';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Premium Logo Design Company in India | Custom & Creative Logos",
  description: "Looking for a premium logo design company in India? We create visually stunning, high-quality logos tailored to showcase your brand.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/logo-design-company-in-india/",
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
    title: "Premium Logo Design Company in India",
    description: "Looking for a premium logo design company in India? We create visually stunning, high-quality logos tailored to showcase your brand.",
    url: "https://www.companyprofiledesign.in/logo-design-company-in-india/",
    siteName: "Company Profile Design",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
        width: 1920,
        height: 1080,
        alt: "Logo Design Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Logo Design Company in India",
    description: "Looking for a premium logo design company in India? We create visually stunning, high-quality logos tailored to showcase your brand.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg"],
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

    // Primary Image Object
    {
      "@type": "ImageObject",
      "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Logo Design Company in India",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/",
      "url": "https://www.companyprofiledesign.in/logo-design-company-in-india/",
      "name": "Premium Logo Design Company in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/Catalouge-Design-Company-Bg.jpg",
      "datePublished": "2025-12-02T13:15:46+00:00",
      "dateModified": "2026-03-24T13:03:36+00:00",
      "description": "Looking for a premium logo design company in India? We create visually stunning, high-quality logos tailored to showcase your brand.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Logo Design Company in India)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#breadcrumb",
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
          "name": "Logo Design Company in India",
          "item": "https://www.companyprofiledesign.in/logo-design-company-in-india/"
        }
      ]
    },

    // FAQPage Schema
    {
      "@type": "FAQPage",
      "@id": "https://www.companyprofiledesign.in/logo-design-company-in-india/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a professional logo design cost in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Logo design prices in India depend on factors like the number of concepts, revisions, brand research, and additional deliverables (like brand guidelines). We tailor packages for small startups to large enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "How long does logo design take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial concepts are usually delivered within 48–72 hours after we receive the brief. Final delivery depends on revisions and scope."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get vector and source files?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — you receive vector and source files in AI, EPS, SVG, PNG, and JPG formats for versatile use across print and digital channels."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign an existing logo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We provide complete logo redesign and rebranding services — from modernizing marks to full identity overhauls with guidance on rollout."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide brand guidelines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — brand guidelines are available on request and typically cover logo usage, color palette, typography, spacing rules, and examples for digital & print."
          }
        }
      ]
    }
  ]
};

const LogoDesignPage = () => {
    return (
        <div>
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />

            <LogoHero />
            <LogoWhyBest /> 
            <LogoServices />
            <LogoProcess />
            <LogoWhyChoose />
            <LogoTestimonial />
            <LogoFaq />
            <LogoCta />
        </div>
    );
};

export default LogoDesignPage;
