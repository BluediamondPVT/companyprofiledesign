"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const ConstructionHero = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div 
            className="breatcam-section construction-hero-wrapper d-flex align-items-center" 
            data-background="/assets/images/resource/inner-bg-theme.webp" 
        >
            <div className="container">
                <div className="row dream-bg align-items-center justify-content-center text-center">
                    <div className="col-lg-10">
                        {/* Title */}
                        <h1 className="construction-hero-title">
                            Get the Construction Company Profile in stimulated time frame
                        </h1>

                        {/* Paragraph */}
                        <p className="construction-hero-desc">
                            An organization’s construction company profile gives different groups of people a general view of what the company does, its target market, its unique strengths, track record, and whether it is an excellent entity to partner with.
                        </p>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact-us" className="theme-btn" style={{
                                backgroundColor: '#be185d',
                                color: '#fff',
                                padding: '12px 30px',
                                borderRadius: '5px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                ENQUIRE NOW
                            </Link>
                            <a href="tel:+917700091613" className="theme-btn" style={{
                                backgroundColor: '#003061',
                                color: '#fff',
                                padding: '12px 30px',
                                borderRadius: '5px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                CALL: +91 7700091613
                            </a>
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
                .construction-hero-wrapper {
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

                .construction-hero-title {
                    font-size: clamp(22px, 4.5vw, 42px);
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: #1c1f1c;
                    font-family: var(--heading-font);
                    line-height: 1.3;
                }

                .construction-hero-desc {
                    font-size: clamp(14px, 2.5vw, 16.5px);
                    line-height: 1.8;
                    color: #55585b;
                    max-width: 920px;
                    margin: 0 auto 35px auto;
                    font-weight: 500;
                    padding: 0 10px;
                }

                @media (max-width: 768px) {
                    .construction-hero-wrapper {
                        padding-top: 130px !important;
                        padding-bottom: 60px !important;
                        min-height: auto !important;
                    }
                    .construction-hero-title {
                        font-size: 24px !important;
                        line-height: 1.35 !important;
                        margin-bottom: 14px !important;
                    }
                    .construction-hero-desc {
                        font-size: 14.5px !important;
                        line-height: 1.65 !important;
                        margin-bottom: 24px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ConstructionHero;
