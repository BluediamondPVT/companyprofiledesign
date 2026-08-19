"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const WritingWhyChoose = () => {
  const features = [
    {
      title: "Experienced Writers",
      desc: "Our team mixes talented professionals who possess expertise in writing quality profiles for multiple industries and sectors.",
    },
    {
      title: "Quality Content",
      desc: "We make sure that we offer high-quality profiles to you, which are thoroughly research and also creative at the same time.",
    },
    {
      title: "100% Satisfaction",
      desc: "We decide on a strict timeline with the client, within which we set as the motto to deliver well-written, quality, and engaging profiles soon.",
    },
  ];

  return (
    <section
      className="writing-why-choose-section"
      style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}
    >
      <div className="container">
        {/* Heading & Paragraphs */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-11">
            <h2
              style={{
                color: "#1c1f1c",
                fontSize: "34px",
                fontWeight: "700",
                fontFamily: "var(--heading-font)",
                marginBottom: "24px",
              }}
            >
              Why Select Our Company Profile Writing Services in India?
            </h2>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  color: "#55585b",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Inducing clients is very important, and we know exactly how to
                convince them via appealing and engaging business profiles.
                Hence, it is doubtful that it will be beneficial if you
                outsource these services to us. We have avant-garde solutions,
                making it easier for the client to achieve better results within
                a concise time frame.
              </p>

              <p
                style={{
                  color: "#55585b",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                We have got highly qualified professionals who have extensive
                knowledge in the field of company profile writing service. Above
                all, they can easily understand other companies and clients’
                requirements to make your company profile easily acceptable. In
                addition, the following fantastic feature attracts huge
                customers to attain our magnificent services for company profile
                writing.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bullet Items */}
        <div className="row g-4 mb-5 justify-content-center">
          <div className="col-lg-11">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  <div
                    style={{
                      color: "#be185d",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#0f172a",
                        fontSize: "18px",
                        fontWeight: "700",
                        marginBottom: "6px",
                        fontFamily: "var(--heading-font)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#55585b",
                        fontSize: "15.5px",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Callout Paragraph */}
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                borderLeft: "5px solid #dc2626",
                padding: "24px 28px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <p
                style={{
                  color: "#334155",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Above all, this in itself is self-explanatory about the benefits
                of associating with{" "}
                <span style={{ color: "#dc2626", fontWeight: "700" }}>
                  Company Profile Writing Agency
                </span>{" "}
                for any writing-related to company profiles. We guarantee that
                your company’s vision, mission, goals, objectives, activities,
                and brand message are communicated that help your customers get
                motivated and build unbreakable trust in you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingWhyChoose;
