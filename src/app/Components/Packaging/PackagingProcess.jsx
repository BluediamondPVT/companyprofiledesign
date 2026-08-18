"use client"
import React from 'react';

const processSteps = [
    {
        step: "01",
        title: "Step 1 - Brand & Product Understanding",
        desc: "We analyze your brand identity, product USP, competition, and consumer psychology."
    },
    {
        step: "02",
        title: "Step 2 - Concept Development",
        desc: "Our designers create initial creative directions based on color psychology, visual hierarchy, and packaging trends."
    },
    {
        step: "03",
        title: "Step 3 - Design Finalization",
        desc: "After feedback, we refine the chosen design with perfect layout, fonts, colors, and product details."
    },
    {
        step: "04",
        title: "Step 4 - Print-Ready Delivery",
        desc: "You receive complete packaging files in AI, PDF, CDR, PNG, and other required formats, ready for production."
    }
];

const PackagingProcess = () => {
    return (
        <section className="packaging-process-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                {/* Header Title */}
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h2 style={{ 
                            color: '#0f172a', 
                            fontSize: '36px', 
                            fontWeight: '700', 
                            marginBottom: '15px'
                        }}>
                            Our Packaging Design Process
                        </h2>
                    </div>
                </div>

                {/* 4 Steps Grid */}
                <div className="row g-4">
                    {processSteps.map((item) => (
                        <div key={item.step} className="col-lg-3 col-md-6 d-flex">
                            <div className="p-4 w-100 position-relative" style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 15px rgba(0, 48, 97, 0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    fontSize: '32px',
                                    fontWeight: '800',
                                    color: '#ff4d00',
                                    marginBottom: '12px'
                                }}>
                                    {item.step}
                                </div>
                                <h3 style={{ 
                                    color: '#0f172a', 
                                    fontSize: '18px', 
                                    fontWeight: '600', 
                                    marginBottom: '10px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ 
                                    color: '#64748b', 
                                    fontSize: '14px', 
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagingProcess;
