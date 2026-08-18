"use client"
import React from 'react';

const MakerAbout = () => {
    return (
        <section className="maker-about-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11 text-center">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '28px',
                            lineHeight: '1.3'
                        }}>
                            Optimized Company Profile Maker Agency
                        </h2>
                        
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Searching for a reliable company profile maker agency in India to craft a company profile for your business? Profile Design Company is a leading company profile making company in India. We have a team of professional content writers and graphic designers who work together to create a stunning company profile for your business.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Profile Design Company is a trusted company profile maker agency in India. We have created company profiles for companies across various industries including IT, Real Estate, Healthcare, Education, Manufacturing, Retail, FMCG and many more. Our experienced writers and designers craft a company profile that speaks for your brand value.
                            </p>
                        </div>

                        {/* Talk to Our Expert Button */}
                        <div style={{ textAlign: 'left' }}>
                            <a 
                                href="https://api.whatsapp.com/send?phone=917700091613&text=Hi,%20I%20am%20interested%20in%20Company%20Profile%20Maker%20Services."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#be185d',
                                    backgroundImage: 'linear-gradient(90deg, #dc2626 0%, #be185d 100%)',
                                    color: '#ffffff',
                                    fontWeight: '700',
                                    fontSize: '15px',
                                    padding: '12px 28px',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Talk to Our Expert
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakerAbout;
