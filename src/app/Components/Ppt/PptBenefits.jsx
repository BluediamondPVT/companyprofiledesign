"use client"
import React from 'react';
import { Award, Briefcase, Heart } from 'lucide-react';

const PptBenefits = () => {
    const benefits = [
        {
            icon: <Award size={36} color="#0ea5e9" />,
            title: "Our Experience Is Unsurpassed",
            desc: "It takes time and expert skills to create an effective Company profile ppt. Our designers and presenters have decades of experience developing and designing PowerPoint presentations, in addition to keeping up with the latest trends at all times."
        },
        {
            icon: <Briefcase size={36} color="#0ea5e9" />,
            title: "We know business",
            desc: "We can speak your language with a knowledge base that spans industries, and sound design is only half of the equation. Understanding your business, your audience, and your value proposition is the rest."
        },
        {
            icon: <Heart size={36} color="#0ea5e9" />,
            title: "What We Do Is What We Love",
            desc: "At BDIT, we hire only the most agile and creative storytellers, consultants, and designers. Each slide we make reflects our passion and commitment to the work we do."
        }
    ];

    return (
        <section className="ppt-benefits-section" style={{ padding: '80px 0', backgroundColor: '#f0f9ff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '20px',
                            lineHeight: '1.3'
                        }}>
                            Meet your business goals With Company profile ppt
                        </h2>
                    </div>
                </div>

                <div className="row g-4">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                padding: '35px 25px',
                                height: '100%',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                                border: '1px solid #e2e8f0',
                                textAlign: 'center'
                            }}>
                                <div style={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    backgroundColor: '#e0f2fe', 
                                    borderRadius: '50%', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    margin: '0 auto 24px auto'
                                }}>
                                    {benefit.icon}
                                </div>
                                <h3 style={{ 
                                    color: '#0f172a', 
                                    fontSize: '20px', 
                                    fontWeight: '700',
                                    marginBottom: '15px'
                                }}>
                                    {benefit.title}
                                </h3>
                                <p style={{ 
                                    color: '#475569', 
                                    fontSize: '15.5px', 
                                    lineHeight: '1.75',
                                    margin: 0
                                }}>
                                    {benefit.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PptBenefits;
