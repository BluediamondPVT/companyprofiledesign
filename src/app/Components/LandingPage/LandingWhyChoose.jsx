"use client"
import React from 'react';
import { Award, Palette, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        title: "15+ Years of Company Profile Design Expertise",
        desc: "Backed by over 15 years of industry experience, we have helped businesses across diverse sectors create impactful company profiles that build trust, strengthen brands, and drive growth.",
        icon: Award
    },
    {
        title: "Professional Content & Creative Design",
        desc: "Our in-house team combines strategic content writing with premium design to deliver impactful Corporate Profile Design, Construction Company Profile, and Civil Contractor Profile solutions.",
        icon: Palette
    },
    {
        title: "100% Original & Customized Content",
        desc: "Every company profile is written from scratch, ensuring unique, plagiarism-free content that accurately reflects your brand identity and business strengths.",
        icon: CheckCircle
    },
    {
        title: "Fast Turnaround Time",
        desc: "Need your profile urgently? We can deliver professionally designed company profiles within 24–72 hours, depending on project requirements.",
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
                            Why Leading Businesses Choose Us for Their Company Profile Design
                        </p>
                        <p style={{ fontSize: '15px', color: '#555', marginBottom: '15px', lineHeight: '1.7' }}>
                            We combine strategic content, premium design, and industry expertise to create professional company profiles that build credibility, strengthen brands, and drive business growth.
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
