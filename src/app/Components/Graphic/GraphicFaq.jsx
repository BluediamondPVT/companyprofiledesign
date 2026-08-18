"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
    {
        id: 1,
        question: "How much do graphic design services cost in India?",
        answer: "The cost depends on the project type and complexity, but we offer affordable custom packages."
    },
    { 
        id: 2,
        question: "What file formats do you deliver?",
        answer: "We provide print-ready PDFs, high-resolution PNG/JPG, and editable source files like AI, PSD, EPS, CDR, etc."
    },
    {
        id: 3,
        question: "Do you handle bulk design projects?",
        answer: "Yes, We regularly manage ongoing design work and monthly retainers."
    },
    {
        id: 4, 
        question: "Do you provide brand identity packages?",
        answer: "Absolutely, logo design, color palette, typography, brand guidelines, and full branding kits."
    },
    {
        id: 5,
        question: "Can you redesign my existing graphics?",
        answer: "Yes, we offer complete redesign services for outdated or inconsistent visuals."
    }
];

const GraphicFaq = () => {
    const [openIndex, setOpenIndex] = useState(3); // 4th item open by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="graphic-faq-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                {/* Header Title */}
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h2 style={{ 
                            color: '#0f172a', 
                            fontSize: '36px', 
                            fontWeight: '700', 
                            marginBottom: '15px'
                        }}>
                            Frequently Asked Questions
                        </h2>
                    </div>
                </div>

                {/* FAQ List */}
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="d-flex flex-column gap-3">
                            {faqItems.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div 
                                        key={item.id} 
                                        style={{
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-100 p-4 text-start d-flex align-items-center justify-content-between border-0 bg-transparent"
                                            style={{ cursor: 'pointer', outline: 'none' }}
                                        >
                                            <span style={{ 
                                                fontSize: '18px', 
                                                fontWeight: '600', 
                                                color: '#0f172a', 
                                                paddingRight: '15px'
                                            }}>
                                                {item.id}. {item.question}
                                            </span>
                                            <div className="flex-shrink-0 d-inline-flex align-items-center justify-content-center" style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                backgroundColor: isOpen ? '#003061' : '#f1f5f9',
                                                color: isOpen ? '#ffffff' : '#0f172a'
                                            }}>
                                                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                            </div>
                                        </button>

                                        {isOpen && (
                                            <div className="px-4 pb-4">
                                                <p style={{ 
                                                    color: '#475569', 
                                                    fontSize: '15px', 
                                                    lineHeight: '1.7', 
                                                    margin: 0,
                                                    paddingTop: '10px',
                                                    borderTop: '1px solid #e2e8f0'
                                                }}>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
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

export default GraphicFaq;
