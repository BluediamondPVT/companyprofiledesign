import CatalogueAbout from '@/app/Components/About/CatalogueAbout';
import Cta from '@/app/Components/Cta/Cta';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import WhyBestCatalogue from '@/app/Components/Feature/WhyBestCatalogue';
import React from 'react';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Creative Flyer Design Services in India | Custom Flyer Designs",
  description: "We are the leading flyer design company based out of Mumbai. The advantage of our Flyer Design is that it will surely attract your customers.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/flyer-design-company/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Creative Flyer Design Services in India | Custom Flyer Designs",
    description: "We are the leading flyer design company based out of Mumbai. The advantage of our Flyer Design is that it will surely attract your customers.",
    url: "https://www.companyprofiledesign.in/flyer-design-company/",
    siteName: "Company Profile Design",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Flyer-Design-Company.jpg",
        width: 1920,
        height: 1080,
        alt: "Creative Flyer Design Services in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Flyer Design Services in India | Custom Flyer Designs",
    description: "We are the leading flyer design company based out of Mumbai. The advantage of our Flyer Design is that it will surely attract your customers.",
    images: ["https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Flyer-Design-Company.jpg"],
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
      "@id": "https://www.companyprofiledesign.in/flyer-design-company/#primaryimage",
      "url": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Flyer-Design-Company.jpg",
      "contentUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Flyer-Design-Company.jpg",
      "width": 1920,
      "height": 1080,
      "caption": "Flyer Design Company",
      "inLanguage": "en-US"
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/flyer-design-company/",
      "url": "https://www.companyprofiledesign.in/flyer-design-company/",
      "name": "Creative Flyer Design Services in India",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "primaryImageOfPage": { "@id": "https://www.companyprofiledesign.in/flyer-design-company/#primaryimage" },
      "image": { "@id": "https://www.companyprofiledesign.in/flyer-design-company/#primaryimage" },
      "thumbnailUrl": "https://www.companyprofiledesign.in/wp-content/uploads/2020/01/Flyer-Design-Company.jpg",
      "description": "We are the leading flyer design company based out of Mumbai. The advantage of our Flyer Design is that it will surely attract your customers.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/flyer-design-company/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Flyer Design Company)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/flyer-design-company/#breadcrumb",
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
          "name": "Flyer Design Company",
          "item": "https://www.companyprofiledesign.in/flyer-design-company/"
        }
      ]
    }
  ]
};

const FlyerDesignPage = () => {
    const flyerParagraphs = [
        "We are the leading flyer design company based out of Mumbai, the commercial hub of India. We are in this business for a long time with a simple motto to help our customers to increase their client base. We have worked with several companies in India from top business cities like Delhi, Chennai, Banglore, Bengaluru, Lucknow and many more. Furthermore, we also have international relations with many companies for their flyer requirement. We are chosen over other companies for flyer design as our creations are unique, crisp and classy. We understand the trend in the market very well and implement it creatively in our designs.",
        "Flyers are the most economical and top used marketing tool which will always be the best medium for conveying announcements and offers to the customers about your business in the market. The best thing about the Flyer is that it doesn’t limit your creativeness to any particular format. We are free to use any type of picture, colour, artwork or context, and make flyer creative."
    ];

    const flyerAdvantagesData = [
        {
            icon: "Palette",
            title: "No limitations to Creativity",
            desc: "Unlike other forms, there is no limitation to creativity while designing a Flyer (also known as a pamphlet). We can use all sorts of elements to make flyers creative and classy. A flyer can accept any content and represent your company and offer that you want to convey to your customer."
        },
        {
            icon: "TrendingUp",
            title: "Great Reach",
            desc: "It is very convenient to distribute the flyer in the market directly to the customer. The flyer will help you to enhance your business by directly connecting with the customers. Creative flyers directly impact your customer’s minds and generate curiosity about your company and offer."
        },
        {
            icon: "CircleDollarSign",
            title: "The best budget option",
            desc: "It is the best option when you are limited on your budget. A flyer usually cost less than the cost of candy and yet most impactful than any other marketing medium. Flyer’s important cost is usually associated with its designing cost and printing cost, there is usually no or minimal cost to distribute the flyer."
        }
    ];

    const flyerWhyBestFeatures = [
        {
            id: 1,
            icon: "Award",
            title: "Experienced and Reliable Company",
            desc: "The Profile Design company is experienced and the most reliable flyer design company in India. Located in Mumbai, our company has worked with many national and international companies around the world."
        },
        {
            id: 2,
            icon: "UserCheck",
            title: "Excellent Creative Team",
            desc: "ProfileDesignCompany.com  has a great creative team that are proficient in creating the most creative flyer to attract your customers. Based on our top-notch flyer design services we are preferred in all major business hubs in India like Mumbai, Delhi, Chennai, Banglore, Bengaluru, Lucknow, and many others."
        },
        {
            id: 3,
            icon: "CircleDollarSign",
            title: "The best budget option",
            desc: "We offer the most economical Flyer Design service to our customers compared to other similar services. Our designers first understand your business and motive thoroughly then only designs the flyer for you, it helps us to amalgamate our creativeness with your business. The advantage of our Flyer Design is that it will surely attract your customers and enhance your business and offer."
        },
        {
            id: 4,
            icon: "CheckCircle",
            title: "100% satisfied customer",
            desc: "We offer free modifications to our customers until they are satisfied with our unique and customized designs. Our designs create a new design every time for every customer as we believe that every business requires a unique market presence."
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
                title="Flyer Design Company"
                subTitle="We are the most dependable flyer design company in India"
                paragraphs={flyerParagraphs}
                advantagesTitle="Why a Professional Flyer Design Company Is Important for Every Business"
                advantagesContent="A professional flyer design company helps businesses create visually appealing and strategically designed flyers that effectively communicate their message. Well-designed flyers increase brand visibility, promote offers clearly, and attract customer attention, making them an essential marketing tool for businesses looking to grow and stand out in competitive markets."
                advantagesSubtext=""
                customData={flyerAdvantagesData}
                imgSrc="/assets/images/resource/flyer-design-about.webp"
            />

            <Portfolio 
                title="Our previous work" 
                content="As a trusted flyer design company, we have delivered creative flyer designs to clients across Mumbai, Delhi, Chennai, Bangalore, Bengaluru, Lucknow, and international markets. Explore our recent work to see the quality and creativity we offer." 
            />

            <WhyBestCatalogue 
                title="Why Choose Us as Your Flyer Design Company?"
                subtitle="As a professional flyer design company, we create high-impact flyers that receive excellent market response and customer engagement. Flyers are one of the most effective marketing tools for reaching a wide audience, and whether you are launching a new business or promoting special offers, our creatively designed flyers help you connect with customers quickly and effectively."
                customFeatures={flyerWhyBestFeatures}
            />

            <Cta 
                title="Contact Us Now"
                content="Creative Flyers spread like a fire in wild forest, hence it is very important to synergize your message with the creative designs to get the best and most appropriate response from your customer. Our creative designs have attracted many international companies and top companies from leading business cities Mumbai, Delhi, Chennai, Banglore, Bengaluru, Lucknow."
            />
        </div>
    );
};

export default FlyerDesignPage;
