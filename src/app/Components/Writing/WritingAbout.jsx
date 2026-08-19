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
                                src="/assets/images/resource/company-profile-writing-about.webp" 
                                alt="Company Profile Writing Services Advantage" 
                                width={600} 
                                height={450}
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
                            Want to take advantage of the Company Profile Writing Services in India?
                        </h2>
                        
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                A company profile is a primary document representing you and your company before your prospects or clients. It is a formal document that explains everything you are proud of and tells about your products or services. This writing can make you or break you because your clients or customers make decisions about your products or services by reading it. So if you need a bespoke, engaging, and well-designed company profile, it looks no further than our Company Profile Writing Company.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                               When we talk about a Company Profile Writing Company, it is essential to remember that it will represent your brand and business. It can quickly unveil the powerful string of lucrative opportunities that can be a key to any successful business. The company profile will incorporate any information that turns out to be relevant to the industry. The distinctiveness of the content will reflect the competitive edge of the company.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                               Converting the visitors into potential customers is the primary job of the company profile writer. Therefore, our Company Profile Writing Services are well aware of the ways and techniques that need to adopt to deliver the best service. Content is a piece of communication that will give the readers an insight into client business, and therefore, we believe in generating content that will be short and highly informative.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default WritingAbout;
