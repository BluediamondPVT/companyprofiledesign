"use client"
import React from 'react';
import Image from 'next/image';

const WritingAbout = () => {
    return (
        <section className="writing-about-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column Image */}
                    <div className="col-lg-5">
                        <div style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.08)',
                            border: '1px solid #e2e8f0'
                        }}>
                            <Image 
                                src="/assets/images/resource/about.jpg" 
                                alt="Company Profile Writing Services Advantage" 
                                width={600} 
                                height={500}
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    {/* Right Column Text (Exact Text Preserved) */}
                    <div className="col-lg-7">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '24px',
                            lineHeight: '1.3'
                        }}>
                            What is the advantage of the Company Profile Writing Services in India?
                        </h2>
                        
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Company profile is a great way to communicate your company profile, vision, values, strategy and key highlights to your customers. An effective company profile content is a combination of creativity, expertise and research. Writing a company profile is an essential part of branding your company. We can craft a content that reflects your brand values and creates an impact on your customers' minds so that your company can build a great brand value.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                As a leading <span style={{ color: '#dc2626', fontWeight: '700' }}>Company Profile Writing Company</span>, we understand your business domain, your vision, your mission and your brand values so that we can deliver you a content that helps you to pitch your brand, vision, and products to your customers. Our experienced writers can craft a content for your company.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Company profile is a great way to communicate your company profile, vision, values, strategy and key highlights to your customers. An effective company profile content is a combination of creativity, expertise and research. Writing a company profile is an essential part of branding your company. We can craft a content that reflects your brand values and creates an impact on your customers' minds so that your company can build a great brand value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default WritingAbout;
