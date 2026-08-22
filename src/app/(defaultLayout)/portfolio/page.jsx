import BreadCumb from '../../Components/Common/BreadCumb';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Link from 'next/link';

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Portfolio | Company Profile Design | Profile Design Company",
  description: "Explore our creative portfolio of company profiles, business brochures, product catalogues, flyers, and packaging designs created for top global brands.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/portfolio/",
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
    title: "Portfolio | Company Profile Design | Profile Design Company",
    description: "Explore our creative portfolio of company profiles, business brochures, product catalogues, flyers, and packaging designs created for top global brands.",
    url: "https://www.companyprofiledesign.in/portfolio/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/assets/images/logo.png",
        width: 384,
        height: 80,
        alt: "Company Profile Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Company Profile Design | Profile Design Company",
    description: "Explore our creative portfolio of company profiles, business brochures, product catalogues, flyers, and packaging designs created for top global brands.",
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
      "@id": "https://www.companyprofiledesign.in/portfolio/",
      "url": "https://www.companyprofiledesign.in/portfolio/",
      "name": "Portfolio | Company Profile Design | Profile Design Company",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "about": { "@id": "https://www.companyprofiledesign.in/#organization" },
      "description": "Explore our creative portfolio of company profiles, business brochures, product catalogues, flyers, and packaging designs created for top global brands.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/portfolio/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Portfolio)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/portfolio/#breadcrumb",
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
          "name": "Portfolio",
          "item": "https://www.companyprofiledesign.in/portfolio/"
        }
      ]
    }
  ]
};

const PortfolioPage = () => {
    return (
        <>
            {/* Single Consolidated Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
            <div style={{ backgroundColor: '#f8f9fb', padding: '130px 0 40px', borderBottom: '1px solid #eaecee' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <h1 style={{ fontSize: '24px', margin: 0, color: '#1c1f1c', fontWeight: '600' }}>Portfolio</h1>
                        </div>
                        <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                            <span style={{ color: '#55585b', fontSize: '15px' }}>
                                <Link href="/" style={{ color: '#55585b', textDecoration: 'none' }}>Home</Link> &gt; <strong style={{color: '#1c1f1c'}}>Portfolio</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio hideBanner={true} />
        </>
    );
};

export default PortfolioPage;
