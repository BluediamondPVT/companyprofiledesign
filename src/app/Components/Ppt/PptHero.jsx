"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const PptHero = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div 
            className="breatcam-section ppt-hero-section d-flex align-items-center" 
            data-background="/assets/images/resource/inner-bg-theme.jpg" 
        >
            <div className="container">
                <div className="row dream-bg align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="breatcam-content text-center" style={{ marginTop: '0' }}>
                            {/* Breadcrumb Nav */}
                            <div className="ppt-breadcrumb">
                                <Link href="/" style={{ color: '#272622', textDecoration: 'none', fontWeight: '600' }}>
                                    Home
                                </Link>
                                <span style={{ color: '#272622' }}>/</span>
                                <span style={{ color: '#272622', fontWeight: '700' }}>
                                    Company Profile PPT
                                </span>
                            </div>

                            <h1 className="ppt-hero-title">
                                Pick out the Company Profile PPT Services in India to make your brand work
                            </h1>
                            
                            <p className="ppt-hero-desc">
                                Profile Design Company provides a high-quality company profile presentation making service for businesses across the country. Our business presentation makers have an established process and understand your overall business objectives.
                            </p>

                            <div>
                                <Link href="/contact-us" className="theme-btn ppt-hero-btn">
                                    TALK TO EXPERT
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="inner-page-shape d-none d-md-block">
                        <div className="inner-shape">
                            <Image src="/assets/images/resource/shape-2.png" alt="shape" width={46} height={46} />
                        </div>
                        <div className="inner-shape2">
                            <Image src="/assets/images/resource/shap-2.png" alt="shape" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .ppt-hero-section {
                    height: auto !important;
                    min-height: 480px;
                    position: relative;
                    padding-top: 190px;
                    padding-bottom: 90px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    overflow: hidden;
                }

                .ppt-breadcrumb {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background-color: rgba(39, 38, 34, 0.06);
                    padding: 6px 16px;
                    border-radius: 30px;
                    margin-bottom: 18px;
                    border: 1px solid rgba(39, 38, 34, 0.1);
                    font-size: 13px;
                }

                .ppt-hero-title {
                    font-size: clamp(22px, 4.5vw, 40px);
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: #272622;
                    font-family: var(--heading-font);
                    line-height: 1.3;
                    max-width: 1050px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .ppt-hero-desc {
                    font-size: clamp(14px, 2.5vw, 16.5px);
                    line-height: 1.8;
                    color: #475569;
                    width: 100% !important;
                    max-width: 950px !important;
                    margin: 0 auto 28px auto !important;
                    font-weight: 500;
                    padding: 0 15px;
                }

                .ppt-hero-btn {
                    background-color: #be185d;
                    color: #ffffff !important;
                    padding: 12px 30px;
                    border-radius: 6px;
                    font-weight: 600;
                    text-decoration: none;
                    display: inline-block;
                    transition: all 0.3s ease;
                }

                .ppt-hero-btn:hover {
                    background-color: #9d174d;
                }

                @media (max-width: 768px) {
                    .ppt-hero-section {
                        padding-top: 130px !important;
                        padding-bottom: 60px !important;
                        min-height: auto !important;
                    }
                    .ppt-hero-title {
                        font-size: 24px !important;
                        line-height: 1.35 !important;
                        margin-bottom: 14px !important;
                    }
                    .ppt-hero-desc {
                        font-size: 14.5px !important;
                        line-height: 1.65 !important;
                        margin-bottom: 22px !important;
                        padding: 0 10px !important;
                    }
                    .ppt-breadcrumb {
                        font-size: 12px !important;
                        padding: 4px 12px !important;
                        margin-bottom: 14px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default PptHero;
