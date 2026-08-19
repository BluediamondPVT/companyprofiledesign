"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const WritingProcess = () => {
  const processSteps = [
    "We never outsource our work or any part of the project. Instead, we have an in-house team of highly skilled professionals, which helps us maintain a high level of control over the quality of service delivery.",
    "As the project unfolds, the clients can look after the progress on a real-time basis. However, the transparency helps us deliver high-quality content the very first time. Although the revision requests are minimal, we work on them to the satisfaction of our clients.",
    "We share a framework of the content with the clients before getting started with the detailed draft. Additionally, we don’t work on just predictions. We clear many questions at the beginning of the project until we fully understand your exact requirements.",
    "We are strictly in compliance with the deadline – no exceptions, no excuses, and no explanations. Besides, we make sure that the company profile always sends positive vibes to clients to turn out to be a great communication tool for the audience.",
    "We work on a Three-step editing process. Therefore, this means–the writer proofreads the complete content. Then, point out the errors and in content edit and proofread accordingly by our experienced and professional editors.",
    "Our professional business profile writing solutions include transforming the knowledge into crisp that can keep readers glued to the website. In addition, developing a company profile can play an essential role that offer maximum exposure to the business.",
  ];

  return (
    <section
      className="writing-process-section"
      style={{ padding: "80px 0", backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-11">
            <h2
              style={{
                color: "#1c1f1c",
                fontSize: "34px",
                fontWeight: "700",
                fontFamily: "var(--heading-font)",
                marginBottom: "14px",
                lineHeight: "1.3",
              }}
            >
              How is Our Company Profile Writing Agency Works to ensure the
              quality of the content?
            </h2>
            <p
              style={{
                color: "#55585b",
                fontSize: "17px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              To ensure the quality of the profile content, we majority stick to
              the following perspective:
            </p>
          </div>
        </div>

        <div className="row g-4">
          {processSteps.map((stepText, idx) => (
            <div key={idx} className="col-md-6">
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  padding: "24px 24px",
                  height: "100%",
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
                <p
                  style={{
                    color: "#334155",
                    fontSize: "15.5px",
                    lineHeight: "1.75",
                    margin: 0,
                    fontWeight: "400",
                  }}
                >
                  {stepText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingProcess;
