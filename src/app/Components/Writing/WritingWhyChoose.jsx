"use client"
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WritingWhyChoose = () => {
    const features = [
        {
            title: "Experienced Writers",
            desc: "We have a team of experienced content writers who have experience in writing content for various industries."
        },
        {
            title: "Quality Content",
            desc: "We deliver high-quality, plagiarism-free, engaging and well-structured content that speaks for your brand value."
        },
        {
            title: "100% Satisfaction",
            desc: "We offer free revisions until you are satisfied with the content."
        }
    ];

    return (
        <section className="writing-why-choose-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                {/* Heading & Paragraphs */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-11">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '24px' 
                        }}>
                            Why Select Our Company Profile Writing Services in India?
                        </h2>

                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Writing a content for a company profile is an art. It takes time, patience and deep understanding of your brand so that we can help you create a content that speaks for your business. We at Profile Design Company are known as the best company profile writing company in India, creating high-quality content that speaks about your company and brand values to your clients.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                We have a team of creative writers who have experience in writing content for various industries including IT, Real Estate, Healthcare, Education, Manufacturing, Retail, FMCG and many more. Our experienced writers can craft a content for your company profile that speaks for your brand value. We can craft a company profile that speaks for your brand value.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Bullet Items */}
                <div className="row g-4 mb-5 justify-content-center">
                    <div className="col-lg-11">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {features.map((item, index) => (
                                <div key={index} style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '14px',
                                    padding: '20px 24px',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                                }}>
                                    <div style={{ color: '#be185d', flexShrink: 0, marginTop: '2px' }}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '6px', fontFamily: 'var(--heading-font)' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#55585b', fontSize: '15.5px', lineHeight: '1.7', margin: 0 }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Callout Paragraph */}
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div style={{ 
                            backgroundColor: '#ffffff', 
                            borderRadius: '16px',
                            borderLeft: '5px solid #dc2626',
                            padding: '24px 28px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                        }}>
                            <p style={{ 
                                color: '#334155', 
                                fontSize: '16px', 
                                lineHeight: '1.8', 
                                margin: 0 
                            }}>
                                Looking for a professional company profile writing company to craft content for your company profile? Profile Design Company is a leading <span style={{ color: '#dc2626', fontWeight: '700' }}>Company Profile Writing Agency</span> in India, offering high-quality, engaging and well-structured content writing services for company profiles. Contact us today to get started!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WritingWhyChoose;
