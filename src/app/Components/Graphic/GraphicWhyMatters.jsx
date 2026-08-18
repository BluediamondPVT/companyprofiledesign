"use client"
import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
    "High-quality design at competitive pricing",
    "Skilled designers familiar with global trends",
    "Fast communication and reliable delivery",
    "Creative and strategic approach"
];

const GraphicWhyMatters = () => {
    return (
        <section className="graphic-why-matters-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column: Image */}
                    <div className="col-lg-5 col-md-12 text-center">
                        <div className="position-relative d-inline-block" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0, 48, 97, 0.12)' }}>
                            <Image 
                                src="/assets/images/resource/graphic-why-choose.webp" 
                                alt="Why Professional Graphic Design Matters" 
                                width={520} 
                                height={450} 
                                style={{ objectFit: 'cover', display: 'block', width: '100%', height: 'auto' }}
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
                            Why Indian Graphic Design Companies Are Preferred Worldwide
                        </h2>
                        
                        <p style={{ 
                            color: '#475569', 
                            fontSize: '17px', 
                            fontWeight: '500',
                            marginBottom: '25px'
                        }}>
                            India is a global hub for creative talent. Businesses choose Indian graphic design agencies because of:
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
                                Our team combines creativity with business strategy to produce designs that not only look great but also perform well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default GraphicWhyMatters;
