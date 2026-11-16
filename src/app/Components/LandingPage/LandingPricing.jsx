"use client";
import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const LandingPricing = () => {
  return (
    <section
      id="our-packages"
      className="pricing-section"
      style={{ padding: "80px 0", backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#1c1f1c",
                fontFamily: "var(--heading-font)",
                textTransform: "uppercase",
                marginBottom: "15px",
              }}
            >
              Company Profile Design Packages That Fit Every Business
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#003061",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              First Impressions Matter. Make Yours Unforgettable.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Choose from our affordable Company Profile Design packages
              tailored for startups, corporates, contractors, and growing
              businesses. Get expert content, premium design, and fast delivery
              that helps your brand stand out and win more opportunities.
            </p>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          {/* Basic Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="pricing-card"
              style={{
                backgroundColor: "#f4f7fa",
                borderRadius: "10px",
                padding: "40px 30px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                border: "1px solid #e1e8ed",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1b4f91",
                  marginBottom: "5px",
                }}
              >
                BASIC Company Profile
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#777",
                  marginBottom: "20px",
                }}
              >
                Fresh Content – 350 words
              </p>
              <div className="price" style={{ marginBottom: "30px" }}>
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#1c1f1c",
                  }}
                >
                  08
                </span>
                <span
                  style={{ fontSize: "16px", color: "#555", fontWeight: "600" }}
                >
                  {" "}
                  Pages
                </span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0" }}
              >
                {[
                  "About Us, Mission, Vision, Values, Services / Products",
                  "Unique design for each page",
                  "Professional Graphic Designer",
                  "2 on-call discussions with coordinator",
                  "Ready To Print, PDF & Source Files",
                  "2 Brief revisions",
                  "Delivery: 24 hours",
                  "Project validity: 25 days",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                      fontSize: "15px",
                      lineHeight: "1.4",
                      color: "#444",
                    }}
                  >
                    <Check
                      size={18}
                      color="#008000"
                      style={{
                        marginRight: "10px",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20BASIC%20Company%20Profile%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-theme-btn w-100"
              >
                <i className="bi bi-whatsapp me-2"></i>
                <span>ORDER NOW</span>
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="pricing-card premium"
              style={{
                backgroundColor: "#1b4f91",
                borderRadius: "12px",
                boxShadow: "0 15px 40px rgba(27, 79, 145, 0.3)",
                transform: "scale(1.05)",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                height: "100%",
                border: "2px solid rgba(255, 222, 93, 0.4)",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f5683d",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "7px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                ★ MOST POPULAR ★
              </div>
              <div style={{ padding: "35px 30px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "5px",
                  }}
                >
                  PREMIUM COMPANY PROFILE
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#a0c4eb",
                    marginBottom: "20px",
                  }}
                >
                  Fresh Content – 750 words
                </p>
                <div className="price" style={{ marginBottom: "30px" }}>
                  <span
                    style={{
                      fontSize: "48px",
                      fontWeight: "700",
                      color: "#fff",
                    }}
                  >
                    16
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#a0c4eb",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Pages
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 30px 0",
                  }}
                >
                  {[
                    "About Us, Mission, Vision, Values, Services / Products, Gallery, Clients, Project List, Certificates",
                    "Unique design for each page",
                    "Dedicated professional designer",
                    "Dedicated Project Coordinator",
                    "Ready To Print, PDF & Source Files",
                    "5 Brief revisions",
                    "Delivery: 4 days",
                    "Project validity: 45 days",
                    "Complimentary : Corporate Website",
                  ].map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "12px",
                        fontSize: "15px",
                        lineHeight: "1.4",
                        color: "#fff",
                      }}
                    >
                      <Check
                        size={18}
                        color="#f5683d"
                        style={{
                          marginRight: "10px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20PREMIUM%20Company%20Profile%20Package"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-theme-btn premium-btn w-100"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  <span>ORDER NOW</span>
                </a>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div
              className="pricing-card"
              style={{
                backgroundColor: "#f4f7fa",
                borderRadius: "10px",
                padding: "40px 30px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                border: "1px solid #e1e8ed",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#1b4f91",
                  marginBottom: "5px",
                }}
              >
                STANDARD Company Profile
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#777",
                  marginBottom: "20px",
                }}
              >
                Fresh Content – 500 words
              </p>
              <div className="price" style={{ marginBottom: "30px" }}>
                <span
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#1c1f1c",
                  }}
                >
                  12
                </span>
                <span
                  style={{ fontSize: "16px", color: "#555", fontWeight: "600" }}
                >
                  {" "}
                  Pages
                </span>
              </div>
              <ul
                style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0" }}
              >
                {[
                  "About Us, Mission, Vision, Values, Services / Products, Gallery, Clients",
                  "Unique design for each page",
                  "Sr. Graphic Designer",
                  "Dedicated Project Coordinator",
                  "Ready To Print, PDF & Source Files",
                  "3 Brief revisions",
                  "Delivery: 2 days",
                  "Project validity: 30 days",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                      fontSize: "15px",
                      lineHeight: "1.4",
                      color: "#444",
                    }}
                  >
                    <Check
                      size={18}
                      color="#008000"
                      style={{
                        marginRight: "10px",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/917700091613?text=Hi%2C%20I%20am%20interested%20in%20the%20STANDARD%20Company%20Profile%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-theme-btn w-100"
              >
                <i className="bi bi-whatsapp me-2"></i>
                <span>ORDER NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-theme-btn {
          font-size: 15px;
          padding: 13px 24px;
          font-weight: 700;
          color: #ffffff;
          background: #003061;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          text-decoration: none;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
          overflow: hidden;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 48, 97, 0.25);
        }
        .pricing-theme-btn:before {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 6px;
          background: #25d366; /* WhatsApp Green hover */
          transform: scale(0);
          transition: all 0.4s ease;
        }
        .pricing-theme-btn:hover:before {
          transform: scale(1);
        }
        .pricing-theme-btn:hover {
          color: #ffffff !important;
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.35);
          transform: translateY(-2px);
        }
        .pricing-theme-btn i {
          color: #25d366;
          font-size: 18px;
          transition: all 0.4s ease;
        }
        .pricing-theme-btn:hover i {
          color: #ffffff;
        }

        .premium-btn {
          background: #f5683d !important;
          color: #003061 !important;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }
        .premium-btn i {
          color: #003061 !important;
        }
        .premium-btn:before {
          background: #ffffff !important;
        }
        .premium-btn:hover {
          color: #003061 !important;
          box-shadow: 0 8px 22px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 991px) {
          .pricing-card.premium {
            transform: scale(1) !important;
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPricing;
