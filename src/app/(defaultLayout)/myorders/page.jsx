import React from "react";
import LandingHero from "@/app/Components/LandingPage/LandingHero";
import LandingPricing from "@/app/Components/LandingPage/LandingPricing";
import LandingFaq from "@/app/Components/LandingPage/LandingFaq";
import LandingIndustries from "@/app/Components/LandingPage/LandingIndustries";
import LandingOtherServices from "@/app/Components/LandingPage/LandingOtherServices";
import LandingWhyChoose from "@/app/Components/LandingPage/LandingWhyChoose";
import LandingFooter from "@/app/Components/LandingPage/LandingFooter";
import LandingPortfolio from "@/app/Components/LandingPage/LandingPortfolio";

// 1. Next.js App Router High-Converting Ads Metadata
export const metadata = {
  title: "Professional Company Profile Design Packages | 24-Hour Delivery in India",
  description:
    "Get custom company profile design with expert content starting at ₹2500. 15+ years experience, 100% original content, fast 24-hour delivery, and unlimited revisions.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/myorders/",
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
    title: "Professional Company Profile Design Packages | 24-Hour Delivery in India",
    description:
      "Get custom company profile design with expert content starting at ₹2500. 15+ years experience, 100% original content, fast 24-hour delivery, and unlimited revisions.",
    url: "https://www.companyprofiledesign.in/myorders/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Company Profile Design Packages | 24-Hour Delivery in India",
    description:
      "Get custom company profile design with expert content starting at ₹2500. 15+ years experience, 100% original content, fast 24-hour delivery, and unlimited revisions.",
    images: ["https://www.companyprofiledesign.in/assets/images/logo.png"],
  },
  verification: {
    google: [
      "fz__DsrAHtHD5Yr3iarcIuZf6fuBHMh55wAGlNFLQNI",
      "NkkC2VmcZACC6OvOjJH8axgdErjv2uwIFZrlNMXfkXI",
    ],
  },
};

// 2. High-Converting Schema Graph (Organization + Service + FAQPage)
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

    // Service Schema
    {
      "@type": "Service",
      "@id": "https://www.companyprofiledesign.in/myorders/#service",
      name: "Company Profile Design Service",
      provider: { "@id": "https://www.companyprofiledesign.in/#organization" },
      serviceType: "Corporate Branding & Profile Design",
      areaServed: "Worldwide",
      description:
        "Professional Company Profile Design services with custom written content, tailored layout, print-ready PDF, and source files starting at ₹2500.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "2500",
        highPrice: "9999",
        offerCount: "3",
      },
    },

    // FAQPage Schema for Landing Page Rich Results
    {
      "@type": "FAQPage",
      "@id": "https://www.companyprofiledesign.in/myorders/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the process of getting a company profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our process is simple and streamlined: We start by understanding your business and requirements, followed by drafting the content. Once the content is approved, our designers create a custom layout. Finally, we refine the design based on your feedback until you are completely satisfied.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide content for the company profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we have a dedicated team of professional content writers who specialize in corporate communication. They will craft engaging, persuasive, and professional content tailored to your brand's voice and industry.",
          },
        },
        {
          "@type": "Question",
          name: "How many revisions do I get?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The number of revision rounds depends on the package you select. Our Basic package includes 2 rounds of revisions, Standard includes 3 rounds, and Premium includes up to 5 rounds to ensure the final product perfectly aligns with your vision.",
          },
        },
        {
          "@type": "Question",
          name: "Will my company profile be optimized for digital viewing and PDF sharing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We deliver your final company profile as a high-quality, print-ready PDF, as well as a compressed, web-optimized PDF that is perfect for emailing and sharing digitally on platforms like WhatsApp or LinkedIn.",
          },
        },
        {
          "@type": "Question",
          name: "Can you print the company profile as well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer premium printing services alongside our design solutions. We can provide you with various paper qualities and finishes. Please reach out to our team for a custom printing quote based on your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get a final design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Delivery timelines depend on the package you choose. Typically, our Basic package is delivered in 3-4 days, Standard in 4-5 days, and Premium in 6-7 days. We also ensure fast 24-hour turnaround times for urgent requests.",
          },
        },
      ],
    },

    // BreadcrumbList Schema
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/myorders/#breadcrumb",
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
          name: "Company Profile Packages",
          item: "https://www.companyprofiledesign.in/myorders/",
        },
      ],
    },
  ],
};

const myOrders = () => {
  return (
    <div>
      {/* High-Converting Schema Graph for Google Ads & Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <LandingHero />
      <LandingPricing />
      <LandingPortfolio />
      <LandingFaq />
      <LandingIndustries />
      <LandingOtherServices />
      <LandingWhyChoose />
      <LandingFooter />
    </div>
  );
};

export default myOrders;
