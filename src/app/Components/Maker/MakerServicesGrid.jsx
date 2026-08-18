"use client"
import React from 'react';
import { User, Laptop, Factory, Building2, HardHat, Megaphone } from 'lucide-react';

const MakerServicesGrid = () => {
    const services = [
        {
            icon: <User size={28} />,
            title: "Personal Company Profile",
            desc: "We craft personal company profiles for professionals, freelancers, consultants and individuals who want to highlight their profile, skills, experience, projects, clients and achievements."
        },
        {
            icon: <Laptop size={28} />,
            title: "IT Company Profile",
            desc: "We craft IT company profiles for IT companies, software development companies, web development agencies, mobile app development companies and technology startups."
        },
        {
            icon: <Factory size={28} />,
            title: "Manufacturing Company Profile",
            desc: "We craft manufacturing company profiles for manufacturing companies, industrial companies, factories, production units and exporters to showcase their infrastructure, products and capacities."
        },
        {
            icon: <Building2 size={28} />,
            title: "Real Estate Company Profile",
            desc: "We craft real estate company profiles for real estate developers, builders, property consultants, architects and construction companies to present their projects and vision."
        },
        {
            icon: <HardHat size={28} />,
            title: "Civil Company Profile",
            desc: "We craft civil company profiles for civil engineering companies, contractors, infrastructure developers and construction companies to showcase their expertise, equipment and projects."
        },
        {
            icon: <Megaphone size={28} />,
            title: "Financial Company Profile",
            desc: "We craft financial company profiles for financial services companies, investment firms, wealth management agencies, accounting firms and advisory firms."
        }
    ];

    return (
        <section className="maker-services-grid-section" style={{ padding: '85px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                {/* Heading & Subtitle */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '14px',
                            lineHeight: '1.3' 
                        }}>
                            A few Company Profile Making Services we deal in
                        </h2>
                        <p style={{ color: '#55585b', fontSize: '16.5px', fontWeight: '500', margin: 0 }}>
                            Profile Design Company offers a wide range of company profile making services in India. Here are a few company profile making services we deal in:
                        </p>
                    </div>
                </div>

                {/* 6 Cards Grid */}
                <div className="row g-4 justify-content-center">
                    {services.map((item, idx) => (
                        <div key={idx} className="col-md-6 col-lg-4">
                            <div style={{
                                backgroundColor: '#f8fafc',
                                borderRadius: '16px',
                                padding: '32px 26px',
                                height: '100%',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '16px',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{ 
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '12px',
                                    backgroundColor: '#fce7f3',
                                    color: '#be185d',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 style={{ 
                                        color: '#0f172a', 
                                        fontSize: '19px', 
                                        fontWeight: '700', 
                                        marginBottom: '10px', 
                                        fontFamily: 'var(--heading-font)' 
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ 
                                        color: '#55585b', 
                                        fontSize: '14.5px', 
                                        lineHeight: '1.7', 
                                        margin: 0,
                                        fontWeight: '400' 
                                    }}>
                                        {item.desc}
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

export default MakerServicesGrid;
