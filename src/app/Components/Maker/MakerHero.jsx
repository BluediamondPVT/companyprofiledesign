"use client"
import React from 'react';
import Link from 'next/link';

const MakerHero = () => {
    return (
        <section 
            className="maker-hero-section"
            style={{
                position: 'relative',
                paddingTop: '180px',
                paddingBottom: '80px',
                backgroundImage: 'linear-gradient(rgba(11, 23, 39, 0.85), rgba(11, 23, 39, 0.92)), url("/assets/images/resource/inner-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        {/* Breadcrumb Nav */}
                        <div style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '8px', 
                            backgroundColor: 'rgba(255, 255, 255, 0.12)', 
                            backdropFilter: 'blur(8px)',
                            padding: '6px 18px', 
                            borderRadius: '30px', 
                            marginBottom: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}>
                            <Link href="/" style={{ color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>
                                Home
                            </Link>
                            <span style={{ color: '#94a3b8', fontSize: '14px' }}>/</span>
                            <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}>
                                Company Profile Maker
                            </span>
                        </div>

                        {/* Title */}
                        <h1 style={{ 
                            fontSize: '40px', 
                            fontWeight: '800', 
                            marginBottom: '20px', 
                            color: '#ffffff',
                            fontFamily: 'var(--heading-font)',
                            lineHeight: '1.3'
                        }}>
                            Meet the Top-Rated Company Profile Making Agency in India
                        </h1>

                        {/* Paragraph */}
                        <p style={{ 
                            fontSize: '17px', 
                            lineHeight: '1.8', 
                            color: 'rgba(255, 255, 255, 0.92)', 
                            maxWidth: '920px', 
                            margin: '0 auto',
                            fontWeight: '400'
                        }}>
                            Profile Design Company provides professional company profile making services for companies across all industries. We craft high-impact company profiles that speak for your brand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakerHero;
