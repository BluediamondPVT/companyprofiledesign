"use client"
import React from 'react';
import Image from 'next/image';

const ConstructionPortfolio = () => {
    const portfolioCards = [
        {
            image: "/assets/images/resource/service-1.jpg",
            title: "Civil Contractor Profile",
            desc: "Our civil contractor company profiles are designed in such a way that they highlight your work and projects. We make sure that your profile stands out from the rest."
        },
        {
            image: "/assets/images/resource/service-2.jpg",
            title: "Real Estate Company Profile",
            desc: "We have designed many real estate company profiles that help them in presenting their projects. Our profiles are informative and help in building trust."
        },
        {
            image: "/assets/images/resource/service-3.jpg",
            title: "Construction Company Profile",
            desc: "Our construction company profiles are designed in such a way that they highlight your services and projects. We make sure that your profile is attractive and informative."
        }
    ];

    return (
        <section className="construction-portfolio-section" style={{ backgroundColor: '#f8fafc' }}>
            {/* Intro text */}
            <div style={{ padding: '80px 0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '32px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '20px'
                            }}>
                                A glance at Our Builders and developers Portfolio
                            </h2>
                            <p style={{ color: '#475569', fontSize: '16.5px', lineHeight: '1.8', margin: '0 auto 15px auto', maxWidth: '900px' }}>
                                Company profile design is a well-known name in company profile design. We have an expert team of content writers and graphic designers who have created some of the most creative and engaging company profiles.
                            </p>
                            <p style={{ color: '#475569', fontSize: '16.5px', lineHeight: '1.8', margin: '0 auto', maxWidth: '900px' }}>
                                Here are some of the samples of our company profile design. We make sure that your company profile design looks creative, attractive and reflects your brand image. We understand the importance of a company profile and we work hard to deliver the best results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards section */}
            <div style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-10">
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '32px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '15px'
                            }}>
                                Our Construction Company Profiles are designed for multiple uses
                            </h2>
                            <p style={{ color: '#475569', fontSize: '16.5px', margin: 0 }}>
                                Company profile design understands that every business has different requirements. This is why we design company profiles that can be used for multiple purposes.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {portfolioCards.map((card, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <div style={{ 
                                    backgroundColor: '#f8fafc', 
                                    borderRadius: '12px', 
                                    overflow: 'hidden', 
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    border: '1px solid #e2e8f0',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ position: 'relative', height: '240px', backgroundColor: '#e2e8f0', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image 
                                            src={card.image} 
                                            alt={card.title}
                                            width={280}
                                            height={200}
                                            style={{ objectFit: 'contain', maxHeight: '100%' }}
                                        />
                                    </div>
                                    <div style={{ padding: '30px 25px', textAlign: 'center' }}>
                                        <h3 style={{ 
                                            color: '#0ea5e9', 
                                            fontSize: '20px', 
                                            fontWeight: '700',
                                            marginBottom: '15px'
                                        }}>
                                            {card.title}
                                        </h3>
                                        <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                            {card.desc}
                                        </p>
                                    </div>
                                    {/* Bottom red border accent */}
                                    <div style={{ height: '4px', backgroundColor: '#be185d', width: '100%' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionPortfolio;
