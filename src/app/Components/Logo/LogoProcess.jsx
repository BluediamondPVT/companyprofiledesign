"use client"
import React from 'react';
import { Search, Lightbulb, PenTool, CheckCircle } from 'lucide-react';

const LogoProcess = () => {
    const processSteps = [
        {
            icon: <Search size={28} color="#ffffff" />,
            title: "Step 1 - Research & Brand Analysis",
            desc: "We study your business, audience, competitors, and industry trends."
        },
        {
            icon: <Lightbulb size={28} color="#ffffff" />,
            title: "Step 2 - Concept Ideation",
            desc: "Our creative team develops multiple design concepts aligned with your brand strategy."
        },
        {
            icon: <PenTool size={28} color="#ffffff" />,
            title: "Step 3 - Design Development",
            desc: "We refine your chosen concept with perfect typography, color combinations, and layout."
        },
        {
            icon: <CheckCircle size={28} color="#ffffff" />,
            title: "Step 4 - Final Logo Delivery",
            desc: "You receive a complete logo bundle including all required formats."
        }
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)' }}>
                            Our Logo Design Process
                        </h2>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div style={{
                                backgroundColor: '#f8fafc',
                                padding: '40px 30px',
                                borderRadius: '12px',
                                textAlign: 'center',
                                height: '100%',
                                border: '1px solid #e2e8f0'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#334155',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px auto'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ color: '#0f172a', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoProcess;
