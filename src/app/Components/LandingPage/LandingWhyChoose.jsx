"use client"
import React from 'react';
import { Award, Palette, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        title: "10+ Years of Company Profile Design Expertise",
        desc: "With 10+ years of experience in the design industry, we deliver solutions that meet your goals.",
        icon: Award
    },
    {
        title: "Professional, Clean & Creative Design",
        desc: "Our creative process guarantees aesthetically pleasing and professional layout that make your brand stand out.",
        icon: Palette
    },
    {
        title: "100% Custom & Concept-Driven",
        desc: "Unique designs tailored exactly to your brand. We avoid templates to deliver 100% custom company profiles.",
        icon: CheckCircle
    },
    {
        title: "Fast Turnaround Time",
        desc: "Timely delivery without compromising quality. Expect quick turnaround times for all projects.",
        icon: Clock
    }
];

const LandingWhyChoose = () => {
    return (
        <section id='why-choose-us' className="why-choose-landing" style={{ padding: '80px 0', backgroundColor: '#eef2f6', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left side text */}
                    <div className="col-lg-5 col-md-12 mb-5 mb-lg-0">
                        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1c1f1c', fontFamily: 'var(--heading-font)', marginBottom: '20px' }}>
                            Why Choose Us
                        </h2>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#1b4f91', marginBottom: '20px', lineHeight: '1.5' }}>
                            We don't just design; we build experiences that drive results.
                        </p>
                        <p style={{ fontSize: '15px', color: '#555', marginBottom: '15px', lineHeight: '1.7' }}>
                            With a proven track record, we offer tailored design solutions that perfectly align with your brand's vision. Our dedicated team of professionals ensures every project is executed with precision and creativity.
                        </p>
                        <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7' }}>
                            We take pride in our ability to understand your unique requirements and translate them into compelling visual narratives that resonate with your target audience and stakeholders.
                        </p>
                    </div>

                    {/* Right side grid */}
                    <div className="col-lg-7 col-md-12">
                        <div className="row g-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="col-md-6 col-sm-12">
                                        <div className="feature-box" style={{
                                            backgroundColor: '#ffffff',
                                            borderRadius: '10px',
                                            padding: '30px',
                                            height: '100%',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                            borderLeft: '4px solid #bc2c5d'
                                        }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#003061',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '20px'
                                            }}>
                                                <Icon size={24} color="#ffffff" />
                                            </div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1c1f1c', marginBottom: '10px', lineHeight: '1.4' }}>
                                                {feature.title}
                                            </h4>
                                            <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingWhyChoose;
