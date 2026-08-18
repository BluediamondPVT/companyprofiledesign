"use client"
import React from 'react';

const LogoTestimonial = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)' }}>
                            Testimonials
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '40px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                            textAlign: 'center'
                        }}>
                            <p style={{ color: '#334155', fontSize: '18px', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '20px' }}>
                                “A highly professional logo design company in India. Their designs boosted our brand presence instantly.”
                            </p>
                            <div style={{ color: '#0f172a', fontSize: '16px', fontWeight: '600' }}>
                                &rarr; E-commerce Business, Delhi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoTestimonial;
