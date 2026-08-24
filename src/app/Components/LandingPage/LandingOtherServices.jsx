"use client";
import React from "react";
import { Monitor, TrendingUp, Search, Megaphone, PenTool } from "lucide-react";

const services = [
  { name: "Website Development", icon: Monitor },
  { name: "ERP & CRM", icon: TrendingUp },
  { name: "SEO Services", icon: Search },
  { name: "Digital Marketing", icon: Megaphone },
  { name: "Logo & Branding", icon: PenTool },
];

const LandingOtherServices = () => {
  return (
    <section
      id="otherservices"
      className="other-services-section"
      style={{ padding: "80px 0", backgroundColor: "#f8f9fb" }}
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
              }}
            >
              OTHER SERVICES
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                marginTop: "15px",
                maxWidth: "900px",
                margin: "15px auto 0",
                lineHeight: "1.6",
              }}
            >
              At Blue Diamond, we provide end-to-end business branding and marketing solutions under one roof. From company profile creation and website development to SEO, digital marketing, and branding, we help businesses grow with professional, cost-effective, and globally competitive services.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="col-lg-2 col-md-4 col-sm-6 col-6"
                style={{ width: "20%" }}
              >
                <div
                  className="service-card"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e1e8ed",
                    borderRadius: "10px",
                    padding: "35px 15px",
                    textAlign: "center",
                    height: "100%",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <div
                    className="icon-wrapper"
                    style={{ marginBottom: "20px" }}
                  >
                    <Icon size={45} color="#bc2c5d" strokeWidth={1.5} />
                  </div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#1b4f91",
                      margin: 0,
                    }}
                  >
                    {service.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .other-services-section .col-lg-2 {
            width: 33.333% !important;
          }
        }
        @media (max-width: 767px) {
          .other-services-section .col-lg-2 {
            width: 50% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingOtherServices;
