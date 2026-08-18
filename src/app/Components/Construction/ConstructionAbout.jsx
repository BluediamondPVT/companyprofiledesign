"use client"
import React from 'react';
import Image from 'next/image';

const ConstructionAbout = () => {
    return (
        <section className="construction-about-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                            <Image 
                                src="/assets/images/resource/construction-second-section.webp" 
                                alt="Construction Company Profile Design" 
                                width={1000} 
                                height={1400} 
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-7 ps-lg-5">
                        <div style={{ marginBottom: '35px' }}>
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '28px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '20px',
                                lineHeight: '1.3'
                            }}>
                                Make your Civil contractor company profile work for your business
                            </h2> 
                            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                An effective civil contractor company profile will serve more than just as an overview of your construction firm. A compelling construction company profile requires a creative touch and industry knowledge. Have you considered hiring a professional writer to draft your business profile?
                            </p>
                        </div>

                        <div>
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '28px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '20px',
                                lineHeight: '1.3'
                            }}>
                               We are civil contractor company profile Team. We will provide you High Quality Design.
                            </h2>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                    Company profile design is a team of creative writers and designers that will help you in crafting a creative company profile that will clearly communicate your message. We have helped more than 1500+ clients by helping them to get their company profile created which got them results. The main focus while making a company profile is that it must convey what we want to communicate.
                                </p>
                                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                    It would be wise to develop a solid corporate overview for your website in the digitized business environment. It would be wise to retain the services of a professional content writer to do so. In addition to your corporate brochures, general communications material, and annual reports, your business profile is a crucial part of your brand image because it represents your company’s capabilities, financial stability, and resources.
                                </p>
                                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                    Using this construction company profile PDF, DOC, PPT, Download you can see how we design these profiles, so they’re tailored for each client. Download this doc to see how we create these profiles for our clients.
                                </p>
                                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                    With our services, you can present your portfolio with greater authenticity and professionalism to the world. Therefore, if you are looking for a company profile writer in Mumbai, you should contact us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionAbout;
