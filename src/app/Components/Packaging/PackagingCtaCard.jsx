"use client"
import React from 'react';
import { Sparkles, Mail, Phone } from 'lucide-react';

const PackagingCtaCard = () => {
    const handleOpenEnquiry = (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('openEnquirySidebar'));
            const fabBtn = document.querySelector('.enquiry-fab-btn');
            if (fabBtn) {
                fabBtn.click();
            }
        }
    };

    return (
        <section className="packaging-cta-section" style={{ padding: '60px 0 90px', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            backgroundColor: '#f4f7fc',
                            borderRadius: '24px',
                            border: '1px solid #e1e9f5',
                            padding: '45px 50px',
                            boxShadow: '0 10px 30px rgba(0, 48, 97, 0.05)'
                        }}>
                            {/* Title */}
                            <h2 style={{ 
                                color: '#0b1a30', 
                                fontSize: '30px', 
                                fontWeight: '700', 
                                marginBottom: '16px' 
                            }}>
                                Build a Powerful Brand with Professional Packaging Design
                            </h2>

                            {/* Description */}
                            <p style={{ 
                                color: '#4a5568', 
                                fontSize: '16px', 
                                lineHeight: '1.65', 
                                marginBottom: '16px' 
                            }}>
                                Your product deserves the best visual identity. Partner with a leading Product Packaging Design Company to create packaging that connects with consumers and drives sales.
                            </p>

                            {/* Subtext */}
                            <p style={{ 
                                color: '#4a5568', 
                                fontSize: '16px', 
                                marginBottom: '32px' 
                            }}>
                                Contact us today for a <strong style={{ color: '#0b1a30' }}>FREE consultation</strong> and custom quote.
                            </p>

                            {/* Action Buttons */}
                            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                                <button
                                    type="button"
                                    onClick={handleOpenEnquiry}
                                    className="d-inline-flex align-items-center justify-content-center border-0"
                                    style={{
                                        backgroundColor: '#4f46e5',
                                        color: '#ffffff',
                                        padding: '14px 28px',
                                        borderRadius: '12px',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Sparkles size={18} className="me-2" /> Get a FREE Quote
                                </button>

                                <a
                                    href="mailto:info@profiledesigncompany.com"
                                    className="d-inline-flex align-items-center justify-content-center text-decoration-none"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        color: '#1e293b',
                                        border: '1px solid #cbd5e1',
                                        padding: '14px 28px',
                                        borderRadius: '12px',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Mail size={18} className="me-2" /> Email Us
                                </a>

                                <a
                                    href="tel:+917718967729"
                                    className="d-inline-flex align-items-center justify-content-center text-decoration-none"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        color: '#3b82f6',
                                        border: '1px solid #bfdbfe',
                                        padding: '14px 28px',
                                        borderRadius: '12px',
                                        fontWeight: '600',
                                        fontSize: '15px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Phone size={18} className="me-2" /> Call Us
                                </a>
                            </div>

                            {/* Footer Note */}
                            <p style={{ 
                                color: '#718096', 
                                fontSize: '14px', 
                                margin: 0 
                            }}>
                                No obligation — quick response within business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackagingCtaCard;
