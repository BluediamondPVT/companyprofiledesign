"use client";
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    title: "What is Company Profile?",
    desc: "Company profile is a professional document that represents your company and its work in documented format.",
  },
  {
    title: "How does Company Profile differs from Brochure?",
    desc: "Company Profile is company specific and Brochures are product specific. The purpose of both differs one represents your company and other your products.",
  },
  {
    title: "Does the Customer have to visit our Office?",
    desc: "Depends on customers’ choice as we offer our service completely online. Our customers are always welcome to our office to meet our team.",
  },
  {
    title: "What Software do you use to design a company profile?",
    desc: "We use all kinds of premium software to design like Coreldraw, Adobe Photoshop, Illustrator & InDesign, and many others.",
  },
  {
    title: "How many changes do you make before finalization?",
    desc: "We believe in customer satisfaction, hence we work until the customer is satisfied Usually we rarely need to do multiple changes as our customers like our designs and content in 1st draft itself.",
  },
  {
    title: "Do you provide only content writing services?",
    desc: "Yes, as per client requirement we do provide only content writing services.",
  },
  {
    title: "Do you provide only graphic design services?",
    desc: "Yes, as per client requirement we do provide only graphic design services.",
  },
  {
    title: "Do you have Content writer?",
    desc: "Yes we write content for every sector.",
  },
];

const CompanyFaq = () => {
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="about-section style-three faq"
      data-background="/assets/images/resource/about-bg3.webp"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="company-profile-design-section-title text-center padding-lg">
              <h2>Frequently Asked Questions</h2>
              <p
                className="mx-auto"
                style={{ maxWidth: "900px", width: "100%" }}
              >
                We have listed everything for the information for our customers.
                Still, if you find any doubt you can connect with us via Email,
                Phone, or Social Media Network. Here are answers to some
                Frequently Asked Questions.
              </p>
            </div>
          </div>

          {/* Left Column (Items 0-3) */}
          <div className="col-lg-6 col-md-6 faq-pd">
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <ul className="accordion">
                  {faqData.slice(0, 4).map((item, index) => (
                    <li
                      key={index}
                      className={`cs_accordian ${
                        index === openItemIndex ? "active" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleItemClick(index)}
                        aria-expanded={index === openItemIndex}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={18}
                          style={{
                            display: "inline-block",
                            transition: "transform 0.3s ease",
                            transform:
                              index === openItemIndex
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                          className="faq-chevron"
                        />
                      </button>
                      <p
                        style={{
                          display: index === openItemIndex ? "block" : "none",
                        }}
                      >
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Items 4-7) */}
          <div className="col-lg-6 col-md-6">
            <div className="tab_container">
              <div id="tab1" className="tab_content">
                <ul className="accordion">
                  {faqData.slice(4).map((item, idx) => {
                    const absoluteIndex = idx + 4;
                    return (
                      <li
                        key={absoluteIndex}
                        className={`cs_accordian ${
                          absoluteIndex === openItemIndex ? "active" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handleItemClick(absoluteIndex)}
                          aria-expanded={absoluteIndex === openItemIndex}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            size={18}
                            style={{
                              display: "inline-block",
                              transition: "transform 0.3s ease",
                              transform:
                                absoluteIndex === openItemIndex
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                            className="faq-chevron"
                          />
                        </button>
                        <p
                          style={{
                            display:
                              absoluteIndex === openItemIndex
                                ? "block"
                                : "none",
                          }}
                        >
                          {item.desc}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Query Box */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <div
              className="faq-contact-box"
              style={{
                padding: "22px 45px",
                background: "rgba(255, 77, 0, 0.06)",
                borderRadius: "16px",
                display: "inline-block",
                border: "1px solid rgba(255, 77, 0, 0.2)",
                boxShadow: "0 4px 15px rgba(0, 48, 97, 0.04)",
              }}
            >
              <p
                className="mb-0"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "var(--secondary-color)",
                }}
              >
                For More Query Contact us on :{" "}
                <a
                  href="tel:+917700091613"
                  style={{
                    color: "var(--primary-color)",
                    fontWeight: "700",
                    textDecoration: "none",
                    marginLeft: "6px",
                  }}
                >
                  +91 77000 91613
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFaq;
