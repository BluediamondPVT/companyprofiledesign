"use client"
import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
    "Increasing product visibility",
    "Improving brand recognition",
    "Influencing buying decisions",
    "Standing out against competitors",
    "Building trust and credibility",
    "Boosting sales online and offline"
];

const PackagingWhyMatters = () => {
    return (
        <section className="packaging-why-matters-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column: Image */}
                    <div className="col-lg-5 col-md-12 text-center">
                        <div className="position-relative d-inline-block" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0, 48, 97, 0.12)' }}>
                            <Image 
                                src="/assets/images/resource/product-packeging.webp" 
                                alt="Why Good Packaging Design Matters" 
                                width={520} 
                                height={450} 
                                style={{ objectFit: 'cover', display: 'block', width: '100%', height: 'auto' }}
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Right Column: Text & Checklist */}
                    <div className="col-lg-7 col-md-12">
                        <h2 style={{ 
                            color: '#0f172a', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            marginBottom: '15px'
                        }}>
                            Why Good Packaging Design Matters
                        </h2>
                        
                        <p style={{ 
                            color: '#475569', 
                            fontSize: '17px', 
                            fontWeight: '500',
                            marginBottom: '25px'
                        }}>
                            Effective product packaging helps your business by:
                        </p>

                        {/* Checklist Grid */}
                        <div className="row g-3 mb-4">
                            {checklistItems.map((item, index) => (
                                <div key={index} className="col-md-6 d-flex align-items-center">
                                    <div className="me-3 flex-shrink-0 d-inline-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px', backgroundColor: 'rgba(255, 77, 0, 0.1)', borderRadius: '50%' }}>
                                        <CheckCircle2 size={20} color="#ff4d00" />
                                    </div>
                                    <span style={{ color: '#1e293b', fontSize: '16px', fontWeight: '500' }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Highlight Banner */}
                        <div className="p-4" style={{ 
                            backgroundColor: '#003061', 
                            borderRadius: '14px', 
                            color: '#ffffff',
                            boxShadow: '0 4px 20px rgba(0, 48, 97, 0.15)'
                        }}>
                            <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', lineHeight: '1.5' }}>
                                Your packaging is your first impression, make it powerful and unforgettable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackagingWhyMatters;
