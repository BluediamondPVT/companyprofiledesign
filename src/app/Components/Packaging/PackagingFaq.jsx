"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
    {
        id: 1,
        question: "What is the cost of product packaging design?",
        answer: "Pricing depends on product category, number of SKUs, and complexity. We offer affordable packages for all business sizes."
    },
    { 
        id: 2,
        question: "Do you provide print-ready and editable files?",
        answer: "Yes, we deliver AI, PDF, CDR, PNG, and other required formats."
    },
    {
        id: 3,
        question: "Can you design packaging for multiple SKUs or a full product range?",
        answer: "Absolutely, We handle single products as well as complete product lines."
    },
    {
        id: 4, 
        question: "Do you follow industry-specific compliance guidelines?",
        answer: "Yes, especially for food, cosmetics, and pharmaceutical packaging."
    }
];

const PackagingFaq = () => {
    const [openIndex, setOpenIndex] = useState(3); // 4th item open by default as shown in prompt

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="packaging-faq-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
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

export default PackagingFaq;
