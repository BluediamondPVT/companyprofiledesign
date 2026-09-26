"use client"
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Portfolio = ({
    hideBanner = false,
    limit,
    title = "Our previous work",
    content,
    desc
}) => {
    const defaultDesc = hideBanner
        ? "We own many clients around the world, our expertise in setting up and designing Our team of designers looking for creativity and development We own many clients around the world, our expertise in setting up and designing Our team of designers looking for creativity and development"
        : "We have served clients across the globe with professionally designed company profiles. Our experienced design team focuses on creativity, brand clarity, and business growth.";

    const paragraphText = content || desc || defaultDesc;

    const portfolioImages = [
        { id: 1, src: "/assets/images/portfolio/Company-profile-Design-3.jpg", alt: "Company Profile Design Work 1" },
        { id: 2, src: "/assets/images/portfolio/Profile-Design-Company-2.jpg", alt: "Company Profile Design Work 2" },
        { id: 3, src: "/assets/images/portfolio/Profile-Design-Company-1.jpeg", alt: "Company Profile Design Work 3" },
        { id: 4, src: "/assets/images/portfolio/Company-profile-Design-2.jpeg", alt: "Company Profile Design Work 4" },
        { id: 5, src: "/assets/images/portfolio/Profile-Design-Company-3.jpeg", alt: "Company Profile Design Work 5" },
        { id: 6, src: "/assets/images/portfolio/Company-profile-Design-10.jpeg", alt: "Company Profile Design Work 6" },
        { id: 7, src: "/assets/images/portfolio/Company-profile-Design-11.jpg", alt: "Company Profile Design Work 7" },
        { id: 8, src: "/assets/images/portfolio/profile-design-company-4.jpg", alt: "Company Profile Design Work 8" },
        { id: 9, src: "/assets/images/portfolio/Company-profile-Design-3.jpg", alt: "Company Profile Design Work 9" },
        { id: 10, src: "/assets/images/portfolio/Profile-Design-Company-1.jpeg", alt: "Company Profile Design Work 10" },
        { id: 11, src: "/assets/images/portfolio/Company-profile-Design-2.jpeg", alt: "Company Profile Design Work 11" },
        { id: 12, src: "/assets/images/portfolio/Company-profile-Design-10.jpeg", alt: "Company Profile Design Work 12" },
    ];

    return (
        <section className="portfolio-section" style={{ backgroundColor: '#f8f9fb', paddingTop: '90px', borderTop: '1px solid #eaecee', borderBottom: '1px solid #eaecee' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="mb-5">
                            <h2 style={{ color: '#1c1f1c', fontSize: '42px', fontWeight: '700', fontFamily: 'var(--heading-font)' }}>
                                {title}
                            </h2>
                            <p className="mx-auto mt-3" style={{ color: '#55585b', maxWidth: '1000px', width: '100%', fontSize: '16px', lineHeight: '1.8' }}>
                                {paragraphText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 100% full width container with 2px gaps between cards */}
            <div className="container-fluid" style={{ padding: '0 2px' }}>
                <div className="row g-0">
                    {portfolioImages.slice(0, limit || portfolioImages.length).map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ padding: '1px' }}>
                            <div className="portfolio-item-card">
                                <Zoom>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={600}
                                        height={450}
                                        className="portfolio-item-img"
                                    />
                                </Zoom>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!hideBanner && (
                <div className="portfolio-contact-banner" style={{
                    background: 'var(--secondary-color)',
                    padding: '35px 0',
                    marginTop: '10px',
                    marginBottom: '50px',
                    color: '#ffffff',
                    boxShadow: '0 -5px 25px rgba(0, 0, 0, 0.08)'
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-7 text-center text-md-start mb-3 mb-md-0">
                                <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '600', margin: 0, letterSpacing: '0.3px' }}>
                                    Contact Us Now For Your Next Company Profile Design
                                </h3>
                            </div>
                            <div className="col-lg-4 col-md-5 text-center text-md-end">
                                <a href="tel:+917718967729" style={{
                                    color: '#ffffff',
                                    fontSize: '26px',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.3s ease'
                                }} className="portfolio-phone-link">
                                    +91 77189 67729
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .portfolio-item-card {
                    position: relative;
                    border-radius: 0;
                    overflow: hidden;
                    background: var(--secondary-color);
                    cursor: pointer;
                    height: 100%;
                }
                .portfolio-item-img {
                    width: 100%;
                    height: 340px;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                    display: block;
                }
                .portfolio-item-card:hover .portfolio-item-img {
                    transform: scale(1.08);
                }
                .portfolio-phone-link:hover {
                    color: var(--primary-color) !important;
                }
                @media (max-width: 991px) {
                    .portfolio-item-img {
                        height: 280px;
                    }
                }
                @media (max-width: 575px) {
                    .portfolio-item-img {
                        height: 250px;
                    }
                }
                
                /* Fix react-medium-image-zoom close button */
                [data-rmiz-btn-unzoom] {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    background-color: rgba(0, 0, 0, 0.7) !important;
                    border: none !important;
                    border-radius: 50% !important;
                    width: 40px !important;
                    height: 40px !important;
                    top: 20px !important;
                    right: 20px !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    box-shadow: none !important;
                    cursor: pointer !important;
                }
                [data-rmiz-btn-unzoom] svg {
                    fill: white !important;
                    width: 24px !important;
                    height: 24px !important;
                }
                [data-rmiz-btn-unzoom]:hover {
                    background-color: rgba(0, 0, 0, 0.9) !important;
                }
            `}</style>
        </section>
    );
};

export default Portfolio;