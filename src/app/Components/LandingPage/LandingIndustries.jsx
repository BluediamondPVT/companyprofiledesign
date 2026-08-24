"use client";
import React from "react";
import {
  Building,
  HardHat,
  Hammer,
  Factory,
  Monitor,
  Home,
  Truck,
  HeartPulse,
} from "lucide-react";

const industries = [
  { name: "Corporate Company Profile", icon: Building },
  { name: "Construction Company Profile", icon: HardHat },
  { name: "Civil Contractor Profile", icon: Hammer },
  { name: "Manufacturing Company Profile", icon: Factory },
  { name: "IT Company Profile", icon: Monitor },
  { name: "Real Estate Company Profile", icon: Home },
  { name: "Logistics Company Profile", icon: Truck },
  { name: "Healthcare Company Profile", icon: HeartPulse },
];

const LandingIndustries = () => {
  return (
    <section
      id="industries"
      className="industries-section"
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
              }}
            >
              Industries We Specialize In
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
              We create customized Company Profile Design solutions for businesses across diverse industries, ensuring every profile reflects your brand identity, highlights your strengths, and supports your business goals.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-3 g-md-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
                <div className="industry-card">
                  <div className="icon-wrapper">
                    <Icon className="industry-icon" color="#bc2c5d" strokeWidth={1.5} />
                  </div>
                  <h4 className="industry-title">
                    {industry.name}
                  </h4>
                </div>
              </div>
            );
          })}

          <p style={{fontSize: "16px",color: "#555",marginTop: "15px",maxWidth: "600px",margin: "15px auto 0",lineHeight: "1.6",}}>
            ...and many more industries, tailored to your specific business requirements
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .industry-card {
          background-color: #ffffff;
          border: 1px solid #e1e8ed;
          border-radius: 10px;
          padding: 20px 10px;
          text-align: center;
          height: 100%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .icon-wrapper {
          margin-bottom: 12px;
        }

        .industry-title {
          font-size: 13px;
          font-weight: 700;
          color: #1b4f91;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.4;
          word-wrap: break-word;
        }

        @media (min-width: 768px) {
          .industry-card {
            padding: 30px 15px;
          }
          .icon-wrapper {
            margin-bottom: 15px;
          }
          .industry-title {
            font-size: 15px;
          }
        }
      `}</style>

      {/* Global CSS for Icon sizes since lucide-react size prop is hard to responsive inline */}
      <style>{`
        .industry-icon {
          width: 32px;
          height: 32px;
        }
        @media (min-width: 768px) {
          .industry-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingIndustries;
