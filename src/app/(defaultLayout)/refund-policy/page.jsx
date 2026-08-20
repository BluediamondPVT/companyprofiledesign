import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title: "Refund Policy | Company Profile Design | Profile Design Company",
  description:
    "Read the official Refund and Cancellation Policy of Blue Diamond Infotech for company profile design, branding, catalogue design, and corporate services.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/refund-policy/",
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
    title: "Refund Policy | Company Profile Design | Profile Design Company",
    description:
      "Read the official Refund and Cancellation Policy of Blue Diamond Infotech for company profile design, branding, catalogue design, and corporate services.",
    url: "https://www.companyprofiledesign.in/refund-policy/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Refund Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Company Profile Design | Profile Design Company",
    description:
      "Read the official Refund and Cancellation Policy of Blue Diamond Infotech for company profile design, branding, catalogue design, and corporate services.",
    images: [
      "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
    ],
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

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://www.companyprofiledesign.in/refund-policy/",
      url: "https://www.companyprofiledesign.in/refund-policy/",
      name: "Refund Policy | Company Profile Design | Profile Design Company",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      datePublished: "2021-05-29T12:23:36+00:00",
      dateModified: "2021-05-29T12:29:22+00:00",
      description:
        "Read the official Refund and Cancellation Policy of Blue Diamond Infotech for company profile design, branding, catalogue design, and corporate services.",
      breadcrumb: {
        "@id": "https://www.companyprofiledesign.in/refund-policy/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Refund Policy)
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.companyprofiledesign.in/refund-policy/#breadcrumb",
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
          name: "Refund Policy",
          item: "https://www.companyprofiledesign.in/refund-policy/",
        },
      ],
    },
  ],
};

const refundPoints = [
  {
    number: "01",
    title: "Completed Work Non-Refundable",
    icon: "bi-check2-circle",
    text: "A lot of effort and time is involved in achieving every minute detail about the project scope, a refund is not at all possible for any work already completed.",
  },
  {
    number: "02",
    title: "Mid-Project Termination",
    icon: "bi-x-circle",
    text: "In case a project is terminated in the middle, we give our client complete control on all the work completed and any further payment will become null. However any payments or deposits made already would not be refunded.",
  },
  {
    number: "03",
    title: "Post Sample Approval",
    icon: "bi-file-earmark-check",
    text: "No payment is refundable once the client approves the sample designs and the team moves into the development phase of the project work.",
  },
  {
    number: "04",
    title: "No Partial Refunds",
    icon: "bi-slash-circle",
    text: "There is no policy for partial refunds for projects mid way under any standard circumstances.",
  },
  {
    number: "05",
    title: "Special Offers & Festive Promotions",
    icon: "bi-tag-fill",
    text: "NO cancellations are entertained for services or any offers made on special occasions by our marketing team. As these are offers for limited period and cannot be refunded.",
  },
  {
    number: "06",
    title: "Digital Marketing & SEO Packages",
    icon: "bi-graph-up-arrow",
    text: "Similarly any Digital marketing packages or SEO services are not refundable and may be cancelled only by giving a written notice 30 days in advance otherwise deemed to be continued with the applicable charges.",
  },
  {
    number: "07",
    title: "Dormant Projects",
    icon: "bi-pause-circle",
    text: "We do not credit any refunds on advance deposits or payments for any projects that remained dormant or inactive on the client's end.",
  },
];

const RefundPolicyPage = () => {
  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="refund-policy"
        title="Refund Policy"
      />

      <section className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container py-4">
          {/* Introductory Notice Card */}
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
                <i className="bi bi-arrow-counterclockwise fs-4"></i>
              </div>
              <div>
                <h3
                  className="fw-bold mb-3"
                  style={{ color: "var(--secondary-color)", fontSize: "24px" }}
                >
                  Our Refund & Cancellation Standards
                </h3>
                <p
                  className="mb-3 text-muted fs-6"
                  style={{ lineHeight: "1.8" }}
                >
                  We work in intent for rendering best of our services and
                  client experience to all our customers. In order to stand out
                  in our vision we have established standards and laid down
                  procedures to create an atmosphere of harmony in between our
                  client and the company.
                </p>
                <p
                  className="mb-0 text-muted fs-6"
                  style={{ lineHeight: "1.8" }}
                >
                  To chart out the complete understanding of the project and the
                  work required, we give a thorough analysis and discussion for
                  creation of a scope of the project work document in
                  consultation with the client. This step is very crucial for
                  avoiding project cancellations, reversals or any disputes.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Points Grid */}
          <div className="row g-4">
            {refundPoints.map((item, index) => (
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

          {/* Assistance Callout */}
          <div
            className="p-4 p-md-5 mt-5 text-white rounded-4 shadow-lg text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)",
            }}
          >
            <h3 className="text-white fw-bold mb-3">
              Need Further Clarification?
            </h3>
            <p
              className="text-white-50 mb-4 fs-6 mx-auto"
              style={{ maxWidth: "650px" }}
            >
              If you have any queries regarding our cancellation terms or
              project milestones, our team is always available to assist you.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                href="/contact-us"
                className="btn px-4 py-3 fw-bold rounded-pill text-white"
                style={{ background: "var(--primary-color)" }}
              >
                Contact Support <i className="bi bi-arrow-right ms-2"></i>
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

export default RefundPolicyPage;
