import BreadCumb from "@/app/Components/Common/BreadCumb";
import Link from "next/link";
import React from "react";

// 1. Next.js App Router Metadata (Preserving WordPress SEO Authority + Enhancements)
export const metadata = {
  title:
    "Terms and Conditions | Company Profile Design | Profile Design Company",
  description:
    "Read the official Terms and Conditions of Blue Diamond Infotech for our company profile design, brochure design, and corporate branding services.",
  alternates: {
    canonical: "https://www.companyprofiledesign.in/terms-and-conditions/",
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
    title:
      "Terms and Conditions | Company Profile Design | Profile Design Company",
    description:
      "Read the official Terms and Conditions of Blue Diamond Infotech for our company profile design, brochure design, and corporate branding services.",
    url: "https://www.companyprofiledesign.in/terms-and-conditions/",
    siteName: "Company Profile Design | Profile Design Company",
    images: [
      {
        url: "https://www.companyprofiledesign.in/wp-content/uploads/2020/02/company-profile-design-logo.png",
        width: 384,
        height: 80,
        alt: "Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Terms and Conditions | Company Profile Design | Profile Design Company",
    description:
      "Read the official Terms and Conditions of Blue Diamond Infotech for our company profile design, brochure design, and corporate branding services.",
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
      "@id": "https://www.companyprofiledesign.in/terms-and-conditions/",
      url: "https://www.companyprofiledesign.in/terms-and-conditions/",
      name: "Terms and Conditions | Company Profile Design | Profile Design Company",
      isPartOf: { "@id": "https://www.companyprofiledesign.in/#website" },
      datePublished: "2021-05-29T12:10:38+00:00",
      dateModified: "2021-05-29T12:16:54+00:00",
      description:
        "Read the official Terms and Conditions of Blue Diamond Infotech for our company profile design, brochure design, and corporate branding services.",
      breadcrumb: {
        "@id":
          "https://www.companyprofiledesign.in/terms-and-conditions/#breadcrumb",
      },
      inLanguage: "en-US",
    },

    // BreadcrumbList Schema (Home -> Terms and Conditions)
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.companyprofiledesign.in/terms-and-conditions/#breadcrumb",
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
          name: "Terms and Conditions",
          item: "https://www.companyprofiledesign.in/terms-and-conditions/",
        },
      ],
    },
  ],
};

const termsList = [
  {
    number: "01",
    title: "Money Refund",
    icon: "bi-cash-coin",
    text: "The amount paid towards any services is Non-Refundable under reasonable circumstances.",
  },
  {
    number: "02",
    title: "Project Duration",
    icon: "bi-calendar-event",
    text: "Your Project validity will be for only 1 month. It is our work policy to mail you the first draft within Max 5 working days. Accordingly, you should cooperate with us and revert as soon as possible. In case it takes you more than a month to revert back your project will be considered closed. If you want us to work on the same project after a month, you need to choose a new plan again with fresh payment processes.",
  },
  {
    number: "03",
    title: "Text Content We Use",
    icon: "bi-file-earmark-text",
    text: "We have our in-House Content Writer who writes fresh new content for each of our clients to make our client free of copyright issues. All the technical details on the first side must be provided by the client, we will provide revisions on it from our side. We avoid copy and paste content for our valuable client.",
  },
  {
    number: "04",
    title: "Images We Use",
    icon: "bi-images",
    text: "If You don’t have the images to be added in your Project, We from our end use high quality images from the Internet (Royalty free Images) that reflect your Content and business nature. Clients also can provide their own images of high quality.",
  },
  {
    number: "05",
    title: "Concept We Make",
    icon: "bi-lightbulb",
    text: "We provide the best Design and Concepts. If a client has any Idea, Concept, Design or Opinion, they must inform or share with us prior initializing your work. In case a client desires to make changes post starting the project, they will be chargeable at the additional rates as discussed below.",
  },
  {
    number: "06",
    title: "Revisions We Make",
    icon: "bi-arrow-repeat",
    text: "All the revisions should be strictly made through Mail only. Clients can also call and explain the same. Clients should send all the revisions at once. Additional revision for the client below the amount Rs 2,999/- will be charged at a rate of 20% on each revision/changes made and for the client above the amount Rs 2,449/- additional charges of 10% on each revision/charges will be applicable. We do not accept any physical visit for remarks or changes.",
  },
  {
    number: "07",
    title: "Customized Services",
    icon: "bi-sliders",
    text: "The Plans we provide are a regular need of every organization. In case the client wants totally customized services, Client must contact us for the same and disclose it to our representative and we will provide a custom quote for the same.",
  },
  {
    number: "08",
    title: "Additional Services",
    icon: "bi-plus-circle",
    text: "There is no guarantee that extra requirements of the same category product/Services will be available at the same price. We reserve the right to charge a price for the product/ service on a proportionate basis.",
  },
  {
    number: "09",
    title: "Payment Terms",
    icon: "bi-credit-card",
    text: "For quotations amounting to less than Rs 2449/- the client is under obligation to pay the entire payment at once in advance. In other cases, Clients have the option to make 50% down payment to start their project and rest 50% can be paid at any time before the final handing over of the project.",
  },
  {
    number: "10",
    title: "Copyright Ownership",
    icon: "bi-shield-check",
    text: "Copyright ownership will be assigned to the Client which will be applicable for final design after the completion of the project.",
  },
  {
    number: "11",
    title: "Portfolio Right",
    icon: "bi-folder-check",
    text: "The Company reserves the right to add any work done by Blue Diamond to our portfolio list and also to display it on our website or any other platform. And in this process we may use client Name and logo to our client list.",
  },
  {
    number: "12",
    title: "Limited Responsibility",
    icon: "bi-exclamation-triangle",
    text: "The Company can be held responsible for any loss caused due to its negligence only to the extent of the amount paid by the client to the Company. Any other losses in the name of ours will not be entertained/refunded.",
  },
  {
    number: "13",
    title: "Claiming Files",
    icon: "bi-cloud-arrow-down",
    text: "All the necessary documents and Project Files should be Claimed within your Work duration. Blue Diamond will not be held responsible for any claims made after closing of the Projects.",
  },
  {
    number: "14",
    title: "Our Responding Time",
    icon: "bi-clock-history",
    text: "We revert all the inquiries within 36 working hours. All the queries regardings the remarks/changes will be done and completed within 2-4 working days.",
  },
  {
    number: "15",
    title: "Client’s Representative",
    icon: "bi-person-badge",
    text: "Customer/ Company should alert single person to contact regarding the projects by single phone number and email address.",
  },
];

const TermsAndConditionsPage = () => {
  return (
    <div>
      {/* Single Consolidated Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <BreadCumb
        bgImg="/assets/images/resource/inner-bg.webp"
        subTitle="terms-and-conditions"
        title="Terms and Conditions"
      />

      <section className="py-5" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container py-4">
          {/* Introductory Notice */}
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
                <i className="bi bi-file-text-fill fs-4"></i>
              </div>
              <div>
                <h3
                  className="fw-bold mb-3"
                  style={{ color: "var(--secondary-color)", fontSize: "24px" }}
                >
                  Agreement & Working Policy
                </h3>
                <p
                  className="mb-0 text-muted fs-6"
                  style={{ lineHeight: "1.8" }}
                >
                  These terms and conditions have been designed keeping in mind
                  the rights and responsibilities of our clients as well as our
                  company and to make the work process smooth for both parties
                  <strong> “the client and the Company (Blue Diamond)”</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Grid */}
          <div className="row g-4">
            {termsList.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div
                  className="p-4 rounded-4 bg-white shadow-sm h-100 border transition-all"
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

          {/* Help & Contact Callout */}
          <div
            className="p-4 p-md-5 mt-5 text-white rounded-4 shadow-lg text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--secondary-color) 0%, #001f42 100%)",
            }}
          >
            <h3 className="text-white fw-bold mb-3">
              Have Questions About Our Terms?
            </h3>
            <p
              className="text-white-50 mb-4 fs-6 mx-auto"
              style={{ maxWidth: "650px" }}
            >
              If you have any questions or require clarification regarding any
              of our terms and working policies, please feel free to reach out
              to our support team.
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

export default TermsAndConditionsPage;
