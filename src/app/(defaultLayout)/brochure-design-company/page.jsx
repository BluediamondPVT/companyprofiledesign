import CatalogueAbout from '@/app/Components/About/CatalogueAbout';
import Cta from '@/app/Components/Cta/Cta';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import WhyBestCatalogue from '@/app/Components/Feature/WhyBestCatalogue';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Corporate Brochure Design Company in India | Custom Brochure Designs",
  description: "Looking for a top Corporate Brochure Design Company in India? We create professional, high-quality brochures that showcase your brand.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/brochure-design-company/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Corporate Brochure Design Company in India | Custom Brochure Designs",
    description: "Looking for a top Corporate Brochure Design Company in India? We create professional, high-quality brochures that showcase your brand.",
    url: "https://www.companyprofiledesign.in/brochure-design-company/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
        width: 1920,
        height: 1080,
        alt: "Corporate Brochure Design Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Brochure Design Company in India | Custom Brochure Designs",
    description: "Looking for a top Corporate Brochure Design Company in India? We create professional, high-quality brochures that showcase your brand.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg"],
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

    // Primary Image Object
    {
      "@type": "ImageObject",
      "@id": "https://www.companyprofiledesign.in/brochure-design-company/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Brochure Design Company",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/brochure-design-company/",
      "url": "https://www.companyprofiledesign.in/brochure-design-company/",
      "name": "Corporate Brochure Design Company in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/brochure-design-company/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/brochure-design-company/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Construction-Company-Profile-1.jpg",
      "description": "Looking for a top Corporate Brochure Design Company in India? We create professional, high-quality brochures that showcase your brand.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/brochure-design-company/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Brochure Design Company)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/brochure-design-company/#breadcrumb",
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
          "name": "Brochure Design Company",
          "item": "https://www.companyprofiledesign.in/brochure-design-company/"
        }
      ]
    }
  ]
};

const BrochureDesignPage = () => {
    const brochureParagraphs = [
        "Looking for a reliable brochure design company to elevate your brand communication? You’re in the right place. Profile Design Company is a leading brochure design company in India, known for delivering creative, impactful, and professionally designed brochures that help businesses stand out.",
        "As a trusted brochure design company, we have successfully served top companies across major cities including Mumbai, Delhi, Chennai, Bangalore, Bengaluru, Lucknow, and many more. Our expertise and creative approach make us one of the most preferred brochure design companies for businesses looking to market their products and services effectively."
    ];

    const brochureAdvantagesData = [
        {
            icon: "Package",
            title: "Product Representation",
            desc: "Brochures are most useful to represent your product to your customers. It helps to strengthen your market presence through a professional approach. It is mandatory to represent your product well as it is said that you might have the best product in the world."
        },
        {
            icon: "FileText",
            title: "Services information",
            desc: "It is very important to inform your customers about your product and services to dominate your market. Many times, you too have experienced that when you are waiting at someone’s office you read the brochures kept in front of you about their services, and this is a most commonly used market strategy."
        },
        {
            icon: "TrendingUp",
            title: "The best marketing tool",
            desc: "It is one of the best marketing tools to market your services in the industry. You can share your brochures rather than product sample to your distributor and customers so that they will get entire information about that particular option and additional details about all the options available to them."
        }
    ];

    const brochureWhyBestFeatures = [
        {
            id: 1,
            icon: "Award",
            title: "Great Experience",
            desc: "We have a vast experience in the field of brochure designing, we have delivered thousands of creative brochures to many companies around India and abroad as well, hence we are the best brochure design company."
        },
        {
            id: 2,
            icon: "CheckCircle",
            title: "Free Redrafts",
            desc: "We believe in customer satisfaction and hence we offer free redrafts till our customer is 100% satisfied with our designs. We give the true value of our customer’s investment by delivering the designs as per their business domain and market trend."
        },
        {
            id: 3,
            icon: "Laptop",
            title: "Latest and premium software tools",
            desc: "Our creative design team is supported by the latest and premium software for designing the top creative brochure for your company and services. We can offer our designs in any format as per your requirement ranging from JPEG to High-resolution pdf."
        },
        {
            id: 4,
            icon: "BookOpen",
            title: "E-brochures",
            desc: "In addition to the printing document, we also provide a copy of E-brochures that our customers can share digitally. We offer free E-brochures to our valuable customers."
        }
    ];

    return (
        <div>
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <CatalogueAbout 
                title="Brochure Design Company"
                subTitle="The Most Creative Brochure Design Company in India"
                paragraphs={brochureParagraphs}
                advantagesTitle="Why a Professional Brochure Design Company Is Important?"
                advantagesContent="A professional brochure design company helps businesses create impactful, well-structured brochures that effectively represent their brand and products. A creatively designed brochure builds trust, enhances brand visibility, and communicates key information clearly, making it an essential marketing tool for business growth."
                advantagesSubtext=""
                customData={brochureAdvantagesData}
                imgSrc="/assets/images/resource/brochure-design-about.webp"
            />

            <Portfolio 
                title="Our Previous Work" 
                content="As a trusted brochure design company, we have delivered creative and professional brochure designs to top companies across major cities including Mumbai, Delhi, Chennai, Bangalore, Bengaluru, and Lucknow, as well as to many international clients. Explore the work showcased below to get ideas and understand the quality standards we maintain as a leading brochure design company." 
            />

            <WhyBestCatalogue 
                title="Why Choose Us as Your Brochure Design Company?"
                subtitle="As a professional brochure design company, we create creative and well-designed brochures that effectively represent your brand and products. Whether you are a startup or an established business, our expertise ensures your brochure makes a strong impression, engages your audience, and supports your marketing goals."
                customFeatures={brochureWhyBestFeatures}
            />

            <Cta 
                title="Contact Us Now"
                content="To know more details about our Brochure Design Service, kindly contact us!!! We are delivered our creative designs to many top companies in cities like Mumbai, Delhi, Chennai, Banglore, Bengaluru, Lucknow. Our customer base defines our reliability and brand in the creative brochure design market."
            />
        </div>
    );
};

export default BrochureDesignPage;
