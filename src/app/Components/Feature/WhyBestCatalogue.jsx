"use client"
import React from 'react';
import { 
    Laptop, UserCheck, BookOpen, Handshake, 
    Palette, Layers, Sparkles, Award, 
    FileText, CheckCircle, ShieldCheck, 
    Zap, Target, Send, Package, Shield, 
    HelpCircle, Clock, CircleDollarSign, TrendingUp 
} from 'lucide-react';

const iconMap = {
    Laptop,
    UserCheck,
    BookOpen,
    Handshake,
    Palette,
    Layers,
    Sparkles,
    Award,
    FileText,
    CheckCircle,
    ShieldCheck,
    Zap,
    Target,
    Send,
    Package,
    Shield,
    Clock,
    CircleDollarSign,
    TrendingUp
};

const WhyBestCatalogue = ({
    title = "Why We Are the Best Catalogue Design Company in India",
    subtitle = "We are a professional catalogue design company offering high-quality catalogue design solutions, from new catalogue creation to redesigns, with a focus on clean layouts, enhanced visuals, and precise execution to deliver impactful and cost-effective results for businesses.",
    customFeatures
}) => {
    const defaultFeatures = [
        {
            id: 1,
            icon: "Laptop",
            title: "Our company is the best in design",
            desc: "A well-established international customer base enables us to be the premier company for catalogue Design in India. We have created product catalogues for many companies around the world."
        },
        {
            id: 2,
            icon: "UserCheck",
            title: "We are having experienced professionals",
            desc: "We are having experienced professionals in our company. They are well-versed and experienced in their field. Their experience last for over 10 years. Furthermore, they deliver optimal results in a given time."
        },
        {
            id: 3,
            icon: "BookOpen",
            title: "E- catalogues",
            desc: "The E- catalogues that we provide our customers with are so that they can share them digitally and will be able to print untold numbers of copies as their needs grow."
        },
        {
            id: 4,
            icon: "Handshake",
            title: "100% Satisfaction Guarantee",
            desc: "We aim to satisfy our clients. Hence we offer our free redraft service until the customer is satisfied. We believe that it is essential for our customers to get the design as per their vision."
        }
    ];

    const features = customFeatures || defaultFeatures;

    return (
        <section className="why-best-catalogue-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                {/* Header Title & Subtitle */}
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '38px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '15px'
                        }}>
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mx-auto" style={{ 
                                color: '#55585b', 
                                maxWidth: '960px', 
                                fontSize: '16px', 
                                lineHeight: '1.7',
                                margin: '0 auto'
                            }}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                {/* 2x2 Feature Cards Grid */}
                <div className="row g-4">
                    {features.map((item) => {
                        const Icon = typeof item.icon === 'string' ? (iconMap[item.icon] || HelpCircle) : (item.icon || HelpCircle);
                        return (
                            <div key={item.id} className="col-lg-6 col-md-6 d-flex">
                                <div className="feature-card-item d-flex align-items-start p-3 w-100" style={{
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Icon Box */}
                                    <div className="icon-box d-flex align-items-center justify-content-center flex-shrink-0 me-3" style={{
                                        width: '64px',
                                        height: '64px',
                                        backgroundColor: '#003061',
                                        borderRadius: '14px',
                                        boxShadow: '0 4px 12px rgba(0, 48, 97, 0.15)'
                                    }}>
                                        <Icon size={30} color="#ffffff" strokeWidth={1.8} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="feature-text-content">
                                        <h3 style={{ 
                                            color: '#1b4f91', 
                                            fontSize: '20px', 
                                            fontWeight: '600', 
                                            marginBottom: '8px',
                                            fontFamily: 'var(--heading-font)'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ 
                                            color: '#55585b', 
                                            fontSize: '15px', 
                                            lineHeight: '1.65',
                                            margin: 0
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyBestCatalogue;
