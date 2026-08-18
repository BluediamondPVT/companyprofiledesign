"use client"
import React from 'react';
import { Building2, MousePointer2, Briefcase, Wand2, Box, RefreshCcw } from 'lucide-react';

const LogoServices = () => {
    const services = [
        {
            icon: <Building2 size={24} color="#0284c7" />,
            title: "Corporate Logo Design",
            desc: "Professional and timeless logos for corporate brands"
        },
        {
            icon: <MousePointer2 size={24} color="#0284c7" />,
            title: "Minimal Logo Design",
            desc: "Clean, modern, and trending minimalistic logo styles."
        },
        {
            icon: <Briefcase size={24} color="#0284c7" />,
            title: "Business Logo Design",
            desc: "Perfect for startups, SMEs, and online businesses."
        },
        {
            icon: <Wand2 size={24} color="#0284c7" />,
            title: "Creative & Illustrative Logos",
            desc: "Highly personalized designs full of creativity and brand storytelling."
        },
        {
            icon: <Box size={24} color="#0284c7" />,
            title: "3D Logo Design",
            desc: "Dynamic and visually stunning 3D logo concepts."
        },
        {
            icon: <RefreshCcw size={24} color="#0284c7" />,
            title: "Logo Redesign & Rebranding",
            desc: "Revamp your existing logo and give your brand a new life."
        }
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div className="row text-center mb-5 justify-content-center">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)', marginBottom: '15px' }}>
                            Our Best Logo Design Services in India
                        </h2>
                        <p style={{ color: '#475569', fontSize: '16.5px' }}>
                            We offer a wide range of branding and logo design solutions:
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '20px',
                                padding: '25px',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                height: '100%'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    minWidth: '50px',
                                    backgroundColor: 'rgba(2, 132, 199, 0.1)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 style={{ color: '#0284c7', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoServices;
