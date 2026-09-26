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
    src: "/assets/images/portfolio/corporate-tech-profile.jpg",
    alt: "Technology & AI Corporate Profile Design",
    title: "Technology & AI Corporate Profile",
    category: "Technology",
  },
  {
    id: 2,
    src: "/assets/images/portfolio/construction-engineering-profile.jpg",
    alt: "Architecture & Infrastructure Engineering Profile",
    title: "Infrastructure & Civil Engineering",
    category: "Architecture",
  },
  {
    id: 3,
    src: "/assets/images/portfolio/finance-consulting-profile.jpg",
    alt: "Financial Advisory & Corporate Governance Profile",
    title: "Financial Advisory & Consulting",
    category: "Finance",
  },
  {
    id: 4,
    src: "/assets/images/portfolio/healthcare-medical-profile.jpg",
    alt: "MedTech & Healthcare Innovations Profile",
    title: "MedTech & Healthcare Profile",
    category: "Healthcare",
  },
  {
    id: 5,
    src: "/assets/images/portfolio/renewable-energy-profile.jpg",
    alt: "Renewable Energy & ESG Sustainability Profile",
    title: "CleanTech & Renewable Energy",
    category: "Energy & ESG",
  },
  {
    id: 6,
    src: "/assets/images/portfolio/luxury-real-estate-profile.jpg",
    alt: "Luxury Real Estate & Penthouse Development Profile",
    title: "Luxury Real Estate & Penthouse",
    category: "Real Estate",
  },
  {
    id: 7,
    src: "/assets/images/portfolio/logistics-supply-chain-profile.jpg",
    alt: "Global Logistics & Freight Supply Chain Profile",
    title: "Global Logistics & Supply Chain",
    category: "Logistics",
  },
  {
    id: 8,
    src: "/assets/images/portfolio/creative-branding-profile.jpg",
    alt: "Creative Agency & Brand Identity Profile",
    title: "Creative Agency & Brand Identity",
    category: "Branding",
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
                  <span className="portfolio-category-badge">{item.category}</span>
                  <Zoom>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={450}
                      className="portfolio-img"
                      priority={item.id <= 2}
                    />
                  </Zoom>
                </div>
                <div className="portfolio-card-info">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .landing-portfolio-section {
          background-color: #0b3b68;
          background: linear-gradient(180deg, #0e4579 0%, #082d52 100%);
          padding: 85px 0;
        }
        .portfolio-title {
          color: #ffffff;
          font-size: 34px;
          font-weight: 700;
          font-family: var(--heading-font);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .portfolio-desc {
          color: #d1e7fd;
          font-size: 15.5px;
          line-height: 1.75;
          max-width: 860px;
          margin: 0 auto;
        }
        .portfolio-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition:
            transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1),
            box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
        }
        .portfolio-img-wrapper {
          overflow: hidden;
          background: #0f2740;
          position: relative;
          aspect-ratio: 4 / 3;
          width: 100%;
        }
        .portfolio-category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(8, 35, 65, 0.85);
          color: #ffffff;
          backdrop-filter: blur(4px);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 2;
          pointer-events: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .portfolio-img {
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }
        .portfolio-card-info {
          padding: 12px 14px;
          background: #ffffff;
          text-align: center;
          border-top: 1px solid #edf2f7;
        }
        .portfolio-item-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #0f2b48;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
