"use client"
import React from 'react';
import { Book, Activity, Monitor, Factory, Home, ShoppingBag, Truck, Heart } from 'lucide-react';

const industries = [
    { name: "Education & Institution", icon: Book },
    { name: "Health & Pharmaceuticals", icon: Activity },
    { name: "IT & Technology", icon: Monitor },
    { name: "Manufacturing & Production", icon: Factory },
    { name: "Real Estate", icon: Home },
    { name: "Retail & E-commerce", icon: ShoppingBag },
    { name: "Logistics & Supply Chain", icon: Truck },
    { name: "Travel & Hospitality", icon: Heart },
];

const LandingIndustries = () => {
    return (
        <section id='industries' className="industries-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1c1f1c', fontFamily: 'var(--heading-font)' }}>
                            Industries We Serve
                        </h2>
                        <p style={{ fontSize: '16px', color: '#555', marginTop: '15px', maxWidth: '900px', margin: '15px auto 0', lineHeight: '1.6' }}>
                            We partner with businesses across various sectors to deliver custom design solutions. Our expertise spans diverse industries, enabling us to adapt our approach and meet your specific needs.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div className="industry-card" style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e1e8ed',
                                    borderRadius: '10px',
                                    padding: '30px 15px',
                                    textAlign: 'center',
                                    height: '100%',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                                    transition: 'transform 0.3s, box-shadow 0.3s'
                                }}>
                                    <div className="icon-wrapper" style={{ marginBottom: '15px' }}>
                                        <Icon size={40} color="#bc2c5d" strokeWidth={1.5} />
                                    </div>
                                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1b4f91', margin: 0, textTransform: 'uppercase' }}>
                                        {industry.name}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LandingIndustries;
