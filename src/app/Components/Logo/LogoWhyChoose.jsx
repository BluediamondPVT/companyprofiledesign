"use client"
import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const LogoWhyChoose = () => {
    const points = [
        "High creativity",
        "Cost-effective branding services",
        "Professional delivery",
        "Excellent communication",
        "Strong understanding of digital trends"
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)' }}>
                            Why choose Us
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
                            <Image 
                                src="/assets/images/resource/logo-design.webp" 
                                alt="Business Team" 
                                width={600} 
                                height={400} 
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <h3 style={{ color: '#0f172a', fontSize: '26px', fontWeight: '700', marginBottom: '15px' }}>
                            Why Brands Prefer Logo Design Companies in India
                        </h3>
                        <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', marginBottom: '25px' }}>
                            India is a global hub for creative design and branding. Businesses choose Indian logo designers because of:
                        </p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {points.map((point, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ color: '#0f172a' }}>
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <span style={{ color: '#0f172a', fontSize: '16px', fontWeight: '500' }}>
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoWhyChoose;
