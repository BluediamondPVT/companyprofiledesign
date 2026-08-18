"use client"
import React from 'react';
import Image from 'next/image';

const defaultSizes = [
    {
        id: 1,
        title: "A4 Vertical Company Profile",
        image: "/assets/images/resource/vertical.jpg",
        desc: "This document should be well written with an intense focus on business strategy to make a lasting impression on your reader. In addition, descriptions of vertical companies help you create first impressions."
    },
    {
        id: 2,
        title: "A4 Horizontal Company Profile",
        image: "/assets/images/resource/horizontal.jpg",
        desc: "Our expertise is making this section of your company profile attractive enough to draw in potential customers. The importance of this section of your company profile cannot be overlooked."
    },
    {
        id: 3,
        title: "Square Company Profile",
        image: "/assets/images/resource/aquare.jpg",
        desc: "You can let our team of talented and skilled business-oriented writers create a corporate profile that summarizes your work in simple, easy, and understandable words, leaving no room for ambiguity."
    }
];

const ConstructionSizes = ({
    title = "Our Construction Company Profiles are designed for multiple sizes",
    subtitle = "It would help if you summarized everything that would convert visitors to clients in your builder company profile. Moreover, your business profile may vary considerably depending on your portfolio.",
    customSizes,
    sizes
}) => {
    const displaySizes = customSizes || sizes || defaultSizes;

    return (
        <section className="construction-sizes-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                {/* Header Title & Subtitle */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{
                            color: '#1e293b',
                            fontSize: '32px',
                            fontWeight: '600',
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '15px',
                            lineHeight: '1.3'
                        }}>
                            {title}
                        </h2>
                        {subtitle && (
                            <p style={{
                                color: '#64748b',
                                fontSize: '15px',
                                lineHeight: '1.7',
                                maxWidth: '850px',
                                margin: '0 auto'
                            }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                {/* 3 Cards Grid */}
                <div className="row g-4 justify-content-center">
                    {displaySizes.map((item, index) => {
                        const itemImage = item.image || item.imgSrc || item.src;
                        return (
                            <div key={item.id || index} className="col-lg-4 col-md-6 d-flex">
                                <div style={{
                                    backgroundColor: '#f0f7fc',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                                    borderBottom: '4px solid #f06244',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Image Wrapper */}
                                    <div style={{
                                        backgroundColor: '#dce8f2',
                                        
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        
                                    }}>
                                        {itemImage ? (
                                            <Image  
                                                src={itemImage} 
                                                alt={item.title || "Company Profile Size"} 
                                                width={430} 
                                                height={430} 
                                                style={{
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    objectFit: 'contain',
                                                    borderRadius: '6px',
                                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
                                                }}
                                            />
                                        ) : (
                                            <div style={{ color: '#94a3b8', fontSize: '14px' }}>No image provided</div>
                                        )}
                                    </div>

                                    {/* Content Body */}
                                    <div style={{
                                        padding: '30px 24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        textAlign: 'center'
                                    }}>
                                        <h3 style={{
                                            color: '#0284c7',
                                            fontSize: '19px',
                                            fontWeight: '600',
                                            marginBottom: '16px',
                                            fontFamily: 'var(--heading-font)'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            color: '#475569',
                                            fontSize: '14.5px',
                                            lineHeight: '1.7',
                                            margin: 0
                                        }}>
                                            {item.desc || item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ConstructionSizes;
