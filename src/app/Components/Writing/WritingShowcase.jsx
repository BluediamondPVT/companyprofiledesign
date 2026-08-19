"use client";
import React from "react";
import Portfolio from "../Portfolio/Portfolio";

const WritingShowcase = () => {
  return (
    <section
      className="writing-showcase-section"
      style={{ padding: "80px 0 20px", backgroundColor: "#f8fafc" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
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
              Please have a look our Reliable Company Profile Writing Service
              work
            </h2>

            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
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
                Who doesn’t want to accelerate business growth in the digital
                world of today! Everybody does. Hereafter, this call for the
                significant need for company profile writing services that
                provide a well-engaging profile that stimulates future clients
                towards your developing business. A company profile not just
                induces your customer but also facilitates the path to ample
                business avenues. Hence, it can rightly refer to as the
                essential marketing strategy of any organization.
              </p>

              <p
                style={{
                  color: "#55585b",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                Our company has always given value to the hard-earned money and
                time of customers. We can do this by providing excellent content
                and success in business. You always aim to take advantage of the
                best Company Profile Writing Services and hire professional
                business profile writers of BDIT. Our company offers incredible
                business profiles.
              </p>

              <p
                style={{
                  color: "#dc2626",
                  fontSize: "18px",
                  fontWeight: "700",
                  margin: "8px 0 0",
                }}
              >
                Get a professional company profile that makes you and your
                marketing initiatives garb maximum optimal results. Want to
                discuss further details?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Portfolio
        title="Our Recent Company Profile Writing Works"
        content="Explore some of the high-impact company profile contents and designs created for our corporate clients."
      />
    </section>
  );
};

export default WritingShowcase;
