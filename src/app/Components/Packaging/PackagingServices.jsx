"use client"
import React from 'react';
import { 
    Package, Sparkles, Layers, Award, 
    Globe, Crown, Tag, RefreshCw 
} from 'lucide-react';

const servicesData = [
    {
        id: 1,
        icon: Package,
        title: "FMCG Packaging Design",
        desc: "Attractive and market-oriented packaging for food, snacks, dairy, beverages, personal care, etc."
    },
    {
        id: 2,
        icon: Sparkles,
        title: "Cosmetics & Beauty Product Packaging",
        desc: "Elegant and premium designs for skincare, haircare, fragrance, and beauty products."
    },
    {
        id: 3,
        icon: Layers,
        title: "Food & Beverage Packaging",
        desc: "Eye-catching graphics and clean layouts that appeal to consumers and follow food safety guidelines."
    },
    {
        id: 4,
        icon: Award,
        title: "Retail & Shelf Packaging",
        desc: "Visually striking packaging that grabs attention in retail stores and supermarkets."
    },
    {
        id: 5,
        icon: Globe,
        title: "E-Commerce Packaging",
        desc: "Optimized for Amazon, Flipkart, and online stores with focus on clarity, quality, and product differentiation."
    },
    {
        id: 6,
        icon: Crown,
        title: "Luxury Packaging Design",
        desc: "High-end design concepts for premium and exclusive product lines."
    },
    {
        id: 7,
        icon: Tag,
        title: "Label Design & Sticker Design",
        desc: "Professional and compliant label designs for bottles, jars, pouches, boxes, and other packaging types."
    },
    {
        id: 8,
        icon: RefreshCw,
        title: "Packaging Redesign & Brand Refresh",
        desc: "Improve outdated packaging with a modern, impactful design that boosts brand visibility and sales."
    }
];

const PackagingServices = () => {
    return (
        <section className="packaging-services-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
            <div className="container">
                {/* Header Title & Subtitle */}
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h2 style={{ 
                            color: '#0f172a', 
                            fontSize: '36px', 
                            fontWeight: '700', 
                            marginBottom: '15px'
                        }}>
                            Our Product Packaging Design Services
                        </h2>
                        <p className="mx-auto" style={{ 
                            color: '#475569', 
                            maxWidth: '850px', 
                            fontSize: '17px', 
                            lineHeight: '1.7'
                        }}>
                            We provide complete packaging design solutions to help your brand shine across different categories:
                        </p>
                    </div>
                </div>

                {/* 4x2 Grid of Cards */}
                <div className="row g-4">
                    {servicesData.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className="col-lg-3 col-md-6 d-flex">
                                <div className="p-4 w-100 bg-white" style={{
                                    borderRadius: '16px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
                                        width: '56px',
                                        height: '56px',
                                        backgroundColor: '#003061',
                                        borderRadius: '12px'
                                    }}>
                                        <IconComponent size={28} color="#ffffff" />
                                    </div>
                                    <h3 style={{ 
                                        color: '#0f172a', 
                                        fontSize: '19px', 
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PackagingServices;
