"use client"
import React from 'react';
import { PenTool, Users, IndianRupee, Clock, Package } from 'lucide-react';

const LogoWhyBest = () => {
    const reasons = [
        {
            icon: <PenTool size={32} color="#ffffff" />,
            title: "Custom & Unique Logo Designs",
            desc: "Every logo is designed from scratch, no templates, no stock icons, only original and meaningful concepts."
        },
        {
            icon: <Users size={32} color="#ffffff" />,
            title: "Highly Experienced Designers",
            desc: "Our team includes India’s top branding experts, graphic artists, and creative logo designers with years of experience."
        },
        {
            icon: <IndianRupee size={32} color="#ffffff" />,
            title: "Affordable Logo Design Packages",
            desc: "We provide premium-quality logo design services in India at budget-friendly prices suitable for all business types."
        },
        {
            icon: <Clock size={32} color="#ffffff" />,
            title: "Fast Delivery With Unlimited Revisions",
            desc: "Get initial logo concepts quickly and enjoy revisions until you’re 100% satisfied."
        },
        {
            icon: <Package size={32} color="#ffffff" />,
            title: "Complete Brand Identity Solutions",
            desc: "Beyond logos, we offer branding, stationery design, packaging, and digital brand guidelines."
        }
    ];

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)', marginBottom: '15px' }}>
                            Why We Are the Best Logo Design Company in India
                        </h2>
                        <p style={{ color: '#475569', fontSize: '16.5px', lineHeight: '1.8' }}>
                            Choosing the right professional logo designers in India can transform your brand presence. Here’s why businesses across India and worldwide trust us:
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className={`col-lg-4 col-md-6 ${idx > 2 ? 'mt-4' : ''}`}>
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#be185d',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px auto',
                                    boxShadow: '0 4px 15px rgba(190, 24, 93, 0.2)'
                                }}>
                                    {reason.icon}
                                </div>
                                <h3 style={{ color: '#be185d', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                                    {reason.title}
                                </h3>
                                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                    {reason.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoWhyBest;
