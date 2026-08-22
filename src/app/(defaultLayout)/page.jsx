import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Feature1 from '../Components/Feature/Feature1';
import Portfolio from '../Components/Portfolio/Portfolio';
import WhyChooseUs from '../Components/Services/WhyChooseUs';
import Faq from '../Components/Faq/Faq';
import BlogGrid from '../Components/Blog/BlogGrid';
import OurClients from '../Components/Clients/OurClients';

// 1. Next.js App Router Native Metadata (Super Fast & SEO Optimized)
export const metadata = {
  title: "Company Profile Design Services | Profile Design Company in India",
  description: "Get a professional company profile design starting at just ₹2500 from India’s leading profile design company.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Company Profile Design Services | Profile Design Company in India",
    description: "Get a professional company profile design starting at just ₹2500 from India’s leading profile design company.",
    url: "https://www.companyprofiledesign.in/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile Design Services | Profile Design Company in India",
    description: "Get a professional company profile design starting at just ₹2500 from India’s leading profile design company.",
  },
  verification: {
    google: [
      "fz__DsrAHtHD5Yr3iarcIuZf6fuBHMh55wAGlNFLQNI",
      "NkkC2VmcZACC6OvOjJH8axgdErjv2uwIFZrlNMXfkXI",
    ],
  },
};

// 2. Clean & Unified Schema Graph (Yoast Style - 100% Validated for Google)
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema (Google Knowledge Panel ke liye)
    {
      "@type": "Organization",
      "@id": "https://www.companyprofiledesign.in/#organization",
      "name": "Company Profile Design",
      "url": "https://www.companyprofiledesign.in/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.companyprofiledesign.in/#/schema/logo/image/",
        "url": "https://www.companyprofiledesign.in/assets/images/logo.png",
        "contentUrl": "https://www.companyprofiledesign.in/assets/images/logo.png",
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

    // WebSite Schema (Sitelinks Search Box ke liye)
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

    // WebPage Schema (Current Home Page metadata)
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/",
      "url": "https://www.companyprofiledesign.in/",
      "name": "Company Profile Design Services | Profile Design Company in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "description": "Get a professional company profile design starting at just ₹2500 from India’s leading profile design company.",
      "datePublished": "2020-01-04T05:12:03+00:00",
      "dateModified": "2026-08-22T12:00:00+00:00",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Homepage ke liye clean single Home node)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.companyprofiledesign.in/"
        }
      ]
    },

    // FAQPage Schema (Exact Match with page faq.json data)
    {
      "@type": "FAQPage",
      "@id": "https://www.companyprofiledesign.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Company Profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A company profile is a professional introduction of a business that aims to inform people about its products, services, history, vision, and values. It serves as a powerful marketing tool to build credibility and establish brand identity."
          }
        },
        {
          "@type": "Question",
          "name": "How does Company Profile differs from Brochure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A company profile is a comprehensive document providing an overview of the entire business, its values, history, and full services. A brochure is usually a short promotional flyer focused on a specific product, event, or service."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Customer have to visit our Office?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you do not need to visit our office. We provide our services completely online. We can connect with you via phone, email, WhatsApp, or video calls to discuss details, share drafts, and finalize the design."
          }
        },
        {
          "@type": "Question",
          "name": "What Software do you use to design a company profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use industry-standard professional software such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop to ensure your company profile is created with pixel-perfect accuracy and high print quality."
          }
        },
        {
          "@type": "Question",
          "name": "How many changes do you make before finalization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer multiple rounds of revisions to ensure you are fully satisfied with the content and design. We discuss and work closely with you during the drafting phase to synergize your ideology with our creative direction."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide only content writing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we can provide standalone content writing services if you already have a design template or team. However, we highly recommend our end-to-end service where our content and design work hand-in-hand."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide only graphic design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you already have well-written and finalized content, our creative design team can focus purely on graphic layout, theme selection, and preparing the files for printing."
          }
        },
        {
          "@type": "Question",
          "name": "Do you have Content writer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have a dedicated team of professional content writers and editors who specialize in corporate copy. They will prepare engaging, grammatically correct, and structured content tailored to your business domain."
          }
        }
      ]
    }
  ]
};

const HomePage = () => {
  return (
    <>
      {/* Single Consolidated Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <div>
        <HeroBanner1
          bgmage="/assets/images/slider/hero-bg.jpg"
          Title1="Company Profile Design"
          Title2="Leading Company Profile Design for Professional Businesses"
          content="A professional company profile design helps communicate your business information clearly, build customer trust, and position your brand as reliable and credible. To achieve this, it is always recommended to choose expert Company Profile Design services that combine strategic content with creative visuals. Along with company profile design, we also provide complete branding solutions including brochures, flyers, catalogs, and other marketing materials to maintain consistency across all platforms."
          btnName=" Contact Now"
          btnName2=" +91 7718967729"
          btnUrl="/contact-us" 
          btnUrl2="https://wa.me/917718967729"  
          heroShape1="/assets/images/slider/hero-shp1.png"  
          heroShape2="/assets/images/slider/hero-shp2.webp"
          heroShape3="/assets/images/slider/circle.png"
        />
        <Feature1 />
        <Portfolio limit={8} />
        <WhyChooseUs />
        <Faq />
        <BlogGrid 
          title="Our Blog" 
          description="To educate our customers about how the Profile Design process works and what are important key parameters, we are publishing our knowledge for their reading. You will find all the answers to your queries in this Blogs like how they are made, what is the strategy and why Profile Designs are mandatory piece of document for every company. We also encourage our customers to send topics that they would like to know in detail regarding Profile Design Process." 
          limit={3}
        />
        <OurClients />
      </div>
    </>
  );
};

export default HomePage;
