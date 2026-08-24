import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Privacy Policy | Company Profile Design | Profile Design Company",
  description: "Learn how Blue Diamond Infotech collects, protects, and manages your personal information and privacy for our company profile design and branding services.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/privacy-policies/",
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
    title: "Privacy Policy | Company Profile Design | Profile Design Company",
    description: "Learn how Blue Diamond Infotech collects, protects, and manages your personal information and privacy for our company profile design and branding services.",
    url: "https://www.companyprofiledesign.in/privacy-policies/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Company Profile Design | Profile Design Company",
    description: "Learn how Blue Diamond Infotech collects, protects, and manages your personal information and privacy for our company profile design and branding services.",
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

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/privacy-policies/",
      "url": "https://www.companyprofiledesign.in/privacy-policies/",
      "name": "Privacy Policy | Company Profile Design | Profile Design Company",
      "isPartOf": { "@id": "https://www.companyprofiledesign.in/#website" },
      "datePublished": "2021-05-29T12:20:00+00:00",
      "dateModified": "2021-05-29T12:25:00+00:00",
      "description": "Learn how Blue Diamond Infotech collects, protects, and manages your personal information and privacy for our company profile design and branding services.",
      "breadcrumb": { "@id": "https://www.companyprofiledesign.in/privacy-policies/#breadcrumb" },
      "inLanguage": "en-US"
    },

    // BreadcrumbList Schema (Home -> Privacy Policy)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/privacy-policies/#breadcrumb",
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
          "name": "Privacy Policy",
          "item": "https://www.companyprofiledesign.in/privacy-policies/"
        }
      ]
    }
  ]
};

const policySections = [
  {
    number: "01",
    title: "Information We Collect",
    icon: "bi-globe2",
    text: "As a Visitor, you can browse our Website to find out more about our organisation and you are not required to provide us with any of your personal information as a Visitor on our website.",
  },
  {
    number: "02",
    title: "Information You Provide to Us",
    icon: "bi-person-lines-fill",
    text: "We obtain your personal information when you register with us (“User”), when you express an interest in obtaining information about us or our products and services, when you participate in activities on our Website Site (such as using our builder) or otherwise contacting us. Generally, the amount and type of information that you provide to us when using our Website is controlled by you. The personal information that we obtain depends on the context of your interaction with us and our Website, the choices you make and the products and features you use. This personal information can include the following: Name, Email Address and Contact Details.",
  },
  {
    number: "03",
    title: "Payment Processors",
    icon: "bi-shield-lock-fill",
    text: "As we offer paid products and/or services on our Website. To facilitate the process, we use third-party services for payment processing (e.g. payment processors). We do not store or collect your payment details. That information is dealt directly by our third-party payment processors and their use of your personal information is governed by their Privacy Policy.",
  },
  {
    number: "04",
    title: "Contacting Us",
    icon: "bi-envelope-check",
    text: "You may contact our team in case of any concerns or questions regarding this privacy policy.",
  },
];

const PrivacyPoliciesPage = () => {
  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="privacy-policies"
        title="Privacy Policy"
      />

      <section className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container py-4">
          {/* Introductory Commitment Card */}
          <div
            className="p-4 p-md-5 mb-5 rounded-4 shadow-sm bg-white border-start border-5"
            style={{ borderColor: "var(--primary-color)" }}
          >
            <div className="d-flex align-items-start gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgba(254, 94, 21, 0.1)",
                  color: "var(--primary-color)",
                }}
              >
                <i className="bi bi-shield-check fs-4"></i>
              </div>
              <div>
                <h3
                  className="fw-bold mb-3"
                  style={{ color: "var(--secondary-color)", fontSize: "24px" }}
                >
                  Our Privacy Commitment
                </h3>
                <p
                  className="mb-0 text-muted fs-6"
                  style={{ lineHeight: "1.8" }}
                >
                  We adhere to protecting your personal information and right to
                  privacy. You may contact us in case of any questions or
                  concerns about our policy, or our practices with regards to
                  your personal information.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections Grid */}
          <div className="row g-4">
            {policySections.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div
                  className="p-4 rounded-4 bg-white shadow-sm h-100 border"
                  style={{
                    borderColor: "#e5e7eb",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-3 fw-bold text-white"
                        style={{
                          width: "38px",
                          height: "38px",
                          backgroundColor: "var(--secondary-color)",
                          fontSize: "14px",
                        }}
                      >
                        {item.number}
                      </span>
                      <h4
                        className="fw-bold m-0"
                        style={{
                          fontSize: "18px",
                          color: "var(--secondary-color)",
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <i
                      className={`bi ${item.icon} fs-4`}
                      style={{ color: "var(--primary-color)" }}
                    ></i>
                  </div>
                  <p
                    className="text-muted m-0"
                    style={{ lineHeight: "1.7", fontSize: "15px" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Callout */}
          <div
            className="p-4 p-md-5 mt-5 text-white rounded-4 shadow-lg text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)",
            }}
          >
            <h3 className="text-white fw-bold mb-3">
              Questions Regarding Our Privacy Policy?
            </h3>
            <p
              className="text-white-50 mb-4 fs-6 mx-auto"
              style={{ maxWidth: "650px" }}
            >
              If you have any questions, suggestions, or concerns regarding your
              privacy and data protection, our dedicated support team is here to
              help.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                href="/contact-us"
                className="btn px-4 py-3 fw-bold rounded-pill text-white"
                style={{ background: "var(--primary-color)" }}
              >
                Contact Privacy Team <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <a
                href="tel:+917718967729"
                className="btn px-4 py-3 fw-bold rounded-pill btn-outline-light"
              >
                <i className="bi bi-telephone me-2"></i> +91 77189 67729
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPoliciesPage;
