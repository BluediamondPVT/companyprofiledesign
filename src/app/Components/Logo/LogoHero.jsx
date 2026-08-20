"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const LogoHero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="breatcam-section d-flex align-items-center"
      data-background="/assets/images/resource/inner-bg.webp"
      style={{
        height: "auto",
        minHeight: "480px",
        position: "relative",
        paddingTop: "200px",
        paddingBottom: "80px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row dream-bg align-items-center justify-content-center">
          <div className="col-lg-12">
            <div className="text-center" style={{ marginTop: "0" }}>
              <h1
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  marginBottom: "20px",
                  color: "#272622ff",
                  fontFamily: "var(--heading-font)",
                  lineHeight: "1.2",
                }}
              >
                Logo Design Company in India
              </h1>
              <h3
                style={{
                  color: "#272622ff",
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "30px",
                }}
              >
                Professional & Custom Logo Design Services
              </h3>
              <p
                style={{
                  color: "#272622ff",
                  fontSize: "16.5px",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  maxWidth: "1080px",
                  margin: "0 auto 20px auto",
                  fontWeight: "500",
                }}
              >
                Are you searching for a Logo Design Company in India that
                delivers creative, professional, and brand-focused logo designs?
                We are one of the best logo design agencies in India, offering
                custom logo design solutions that help businesses build a
                powerful and memorable brand identity.
              </p>
              <p
                style={{
                  color: "#272622ff",
                  fontSize: "16.5px",
                  lineHeight: "1.8",
                  maxWidth: "1080px",
                  margin: "0 auto",
                  fontWeight: "500",
                }}
              >
                Whether you’re a startup or an established enterprise, our
                expert designers craft logos that reflect your brand values,
                attract your target audience, and stand out in a competitive
                market.
              </p>
            </div>
          </div>
          <div className="inner-page-shape">
            <div className="inner-shape">
              <Image
                src="/assets/images/resource/shape-2.png"
                alt="shape"
                width={46}
                height={46}
              />
            </div>
            <div className="inner-shape2">
              <Image
                src="/assets/images/resource/shap-2.png"
                alt="shape"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoHero;
