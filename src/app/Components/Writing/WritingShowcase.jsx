"use client"
import React from 'react';
import Portfolio from '../Portfolio/Portfolio';

const WritingShowcase = () => {
    return (
        <section className="writing-showcase-section" style={{ padding: '80px 0 20px', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-11">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '24px' 
                        }}>
                            Have a look at India's 1st Company Profile Writing Service work
                        </h2>

                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                We are India's 1st Company Profile Writing Company, we have written content for more than 5000+ companies across India and abroad. We have a team of creative writers who have experience in writing content for various industries including IT, Real Estate, Healthcare, Education, Manufacturing, Retail, FMCG and many more.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                If you are looking for a professional Company Profile Writing Company, then you are at the right place. We can craft a content for your company profile that speaks for your brand value. <a href="tel:+917700091613" style={{ color: '#dc2626', fontWeight: '700', textDecoration: 'none' }}>Call us +91-7700091613</a> or email us at <a href="mailto:info@companyprofiledesign.in" style={{ color: '#dc2626', fontWeight: '700', textDecoration: 'none' }}>info@companyprofiledesign.in</a>
                            </p>

                            <p style={{ color: '#dc2626', fontSize: '18px', fontWeight: '700', margin: '8px 0 0' }}>
                                What are you waiting for? Get in touch with us today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Portfolio 
                title="Our Recent Company Profile Writing Works" 
                content="Explore some of the high-impact company profile contents and designs created for our corporate clients." 
            />
        </section>
    );
};

export default WritingShowcase;
