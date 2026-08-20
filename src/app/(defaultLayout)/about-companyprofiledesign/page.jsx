import About1 from '@/app/Components/About/About1';
import OurClients from '@/app/Components/Clients/OurClients';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta from '@/app/Components/Cta/Cta';
import Feature3 from '@/app/Components/Feature/Feature3';
import Team from '@/app/Components/Team/Team';
import React from 'react';

// 1. Next.js Native Metadata (SEO Optimized)
export const metadata = {
  title: "About CompanyProfileDesign | Profile Design Solutions",
  description: "We are a leading profile design company in India with vast experience and expert designers offering creative, tailored company profiles and brochure designs.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/about-companyprofiledesign/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About CompanyProfileDesign | Profile Design Solutions",
    description: "We are a leading profile design company in India with vast experience and expert designers offering creative, tailored company profiles and brochure designs.",
    url: "https://www.companyprofiledesign.in/about-companyprofiledesign/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CompanyProfileDesign | Profile Design Solutions",
    description: "We are a leading profile design company in India with vast experience and expert designers offering creative, tailored company profiles and brochure designs.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png"],
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

    // AboutPage Schema
    {
      "@type": "AboutPage",
      "@id": "https://www.companyprofiledesign.in/about-companyprofiledesign/",
      "url": "https://www.companyprofiledesign.in/about-companyprofiledesign/",
      "name": "About CompanyProfileDesign | Profile Design solutions",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "description": "We are a Profile design company with vast experience and a great team of designers. We assure you that our creative design solutions will cent percent meet your expectation.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/about-companyprofiledesign/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Proper Home -> About Us hierarchy)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/about-companyprofiledesign/#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.companyprofiledesign.in/about-companyprofiledesign/"
        }
      ]
    }
  ]
};

const page = () => {
    return (
        <div className="about-page">
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="About Us"
                title="Working together leads to <br>Amazing Outcomes."
                content=""
            ></BreadCumb>
            <About1
                title1="About Company Profile Design"
                content="We are a subsidiary company of Blue Diamond Infotech. We are a Profile design company with vast experience and a great team of designers. We assure you that our creative design solutions will cent percent meet your expectation and meet your business theme. We have delivered our unique designs to various companies around the world. We provide our Profile Design solutions to every domain ranging IT, Manufacturing, Construction, Retail, and many others. We take care of every minute detail of your company profile by our well written professional content that will attract your customers and increase their curiosity to know more about you and your services. Our Creative Solutions will always help you to convey your ideas and services to your customers and attract your customers. All you need is our solution to excel your goals and achieve success."
                mainimage="/assets/images/resource/about.jpg" 
                ></About1>
            <Feature3></Feature3>
            <Team></Team>
            <OurClients></OurClients>
        </div>
    );
};

export default page;