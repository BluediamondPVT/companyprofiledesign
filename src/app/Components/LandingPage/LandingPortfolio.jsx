"use client";
import React from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Mail } from "lucide-react";
import Link from "next/link";

const portfolioImages = [
  {
    id: 1,
    src: "/assets/images/portfolio/Company-profile-Design-3.jpg",
    alt: "Company Profile Design 1",
  },
  {
    id: 2,
    src: "/assets/images/portfolio/Profile-Design-Company-2.jpg",
    alt: "Company Profile Design 2",
  },
  {
    id: 3,
    src: "/assets/images/portfolio/Profile-Design-Company-1.jpeg",
    alt: "Company Profile Design 3",
  },
  {
    id: 4,
    src: "/assets/images/portfolio/Company-profile-Design-2.jpeg",
    alt: "Company Profile Design 4",
  },
  {
    id: 5,
    src: "/assets/images/portfolio/Profile-Design-Company-3.jpeg",
    alt: "Company Profile Design 5",
  },
  {
    id: 6,
    src: "/assets/images/portfolio/Company-profile-Design-11.jpg",
    alt: "Company Profile Design 6",
  },
  {
    id: 7,
    src: "/assets/images/portfolio/Company-profile-Design-10.jpeg",
    alt: "Company Profile Design 7",
  },
  {
    id: 8,
    src: "/assets/images/portfolio/Profile-Design-Company-1.jpeg",
    alt: "Company Profile Design 8",
  },
];

const LandingPortfolio = () => {
  return (
    <section id="our-portfolio" className="landing-portfolio-section">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h2 className="portfolio-title">
              Explore Our Company Profile Design Portfolio
            </h2>
            <p className="portfolio-desc">
              Explore our collection of professionally crafted Company Profile Design projects that have helped businesses build credibility, strengthen their brand image, and create lasting impressions across industries.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {portfolioImages.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="portfolio-card">
                <div className="portfolio-img-wrapper">
                  <Zoom>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={450}
                      className="portfolio-img"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .landing-portfolio-section {
          background-color: #1968b3;
          padding: 80px 0;
        }
        .portfolio-title {
          color: #ffffff;
          font-size: 34px;
          font-weight: 700;
          font-family: var(--heading-font);
          margin-bottom: 16px;
        }
        .portfolio-desc {
          color: #e3f2fd;
          font-size: 15px;
          line-height: 1.7;
          max-width: 860px;
          margin: 0 auto;
        }
        .portfolio-card {
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }
        .portfolio-img-wrapper {
          overflow: hidden;
          background: #f0f4f8;
        }
        .portfolio-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }
        .portfolio-card-footer {
          padding: 12px;
          background: #ffffff;
          text-align: center;
        }
        .nav-style-btn {
          font-size: 14px;
          padding: 10px 16px;
          font-weight: 600;
          color: #ffffff;
          background: #003061;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
          text-decoration: none;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 48, 97, 0.2);
        }
        .nav-style-btn:before {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 6px;
          background: #f5683d;
          transform: scale(0);
          transition: all 0.4s ease;
        }
        .nav-style-btn:hover:before {
          transform: scale(1);
        }
        .nav-style-btn:hover {
          color: #003061 !important;
        }
        :global(.nav-style-btn .btn-icon) {
          color: #f5683d;
          transition: all 0.4s ease;
        }
        :global(.nav-style-btn:hover .btn-icon) {
          color: #003061 !important;
        }

        @media (max-width: 768px) {
          .landing-portfolio-section {
            padding: 60px 0;
          }
          .portfolio-title {
            font-size: 26px;
          }
          .portfolio-img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingPortfolio;
