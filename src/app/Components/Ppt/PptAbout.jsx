"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PptAbout = () => {
    return (
        <section className="ppt-about-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div style={{ marginBottom: '12px' }}>
                            <span style={{ 
                                color: '#be185d', 
                                fontWeight: '700', 
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Meet BDIT
                            </span>
                        </div>
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '24px',
                            lineHeight: '1.3'
                        }}>
                            We Know Company Profile PowerPoint Presentation
                        </h2>
                        
                        <p style={{ color: '#55585b', fontSize: '16.5px', lineHeight: '1.8', marginBottom: '20px' }}>
                            With a firm dedicated to helping companies across various industries succeed at communicating their message, we are a creative company and ppt presentation agency. We deliver consistent, on-brand presentations for all of our clients’ key meetings and events.
                        </p>
                        
                        <p style={{ color: '#55585b', fontSize: '16.5px', lineHeight: '1.8', marginBottom: '35px' }}>
                            Our presentation designers come from all walks of life and have cross-disciplinary experience in the creative industry. As a result, we bring a caring, forward-thinking, perseverant, and bold approach to every project we take on. We seek to deepen our understanding of human communication while embracing change, technology, and innovation.
                        </p>

                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link href="/contact-us" style={{
                                backgroundColor: '#be185d',
                                color: '#fff',
                                padding: '12px 28px',
                                borderRadius: '5px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'all 0.3s'
                            }}>
                                TALK TO EXPERT
                            </Link>
                            <a href="tel:+917700091613" style={{
                                backgroundColor: '#003061',
                                color: '#fff',
                                padding: '12px 28px',
                                borderRadius: '5px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'all 0.3s'
                            }}>
                                CALL: +91 7700091613
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Image 
                                src="/assets/images/resource/company-profile-powerpoint-presentation-1200x675-1.webp" 
                                alt="Company Profile PPT Presentation" 
                                width={600} 
                                height={450} 
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PptAbout;
