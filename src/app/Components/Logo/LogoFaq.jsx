"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const LogoFaq = () => {
    const faqs = [
        {
            question: "1. How much does a professional logo design cost in India?",
            answer: "Pricing varies with complexity, industry & deliverables. We offer affordable packages for all business sizes.Logo design prices in India depend on factors like the number of concepts, revisions, brand research, and additional deliverables (like brand guidelines). We tailor packages — small startups to large enterprises. Logo design prices in India depend on factors like the number of concepts, revisions, brand research, and additional deliverables (like brand guidelines). We tailor packages — small startups to large enterprises."
        },
        {
            question: "2. How long does logo design take?",
            answer: "Typical turnaround for initial concepts and timeline expectations. Initial concepts are usually delivered within 48–72 hours after we receive the brief. Final delivery depends on revisions and scope."
        },
        {
            question: "3. Will I get vector and source files?",
            answer: "Files you receive on project completion. Yes — you receive vector and source files in AI, EPS, SVG, PNG, and JPG formats for versatile use across print and digital channels."
        },
        {
            question: "4. Can you redesign an existing logo?",
            answer: "Options and approach to redesigns and rebranding. Absolutely. We provide complete logo redesign and rebranding services — from modernizing marks to full identity overhauls with guidance on rollout."
        },
        {
            question: "5. Do you provide brand guidelines?",
            answer: "Availability of brand guidelines and what they include. Yes — brand guidelines are available on request and typically cover logo usage, color palette, typography, spacing rules, and examples for digital & print."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#e2e8f0' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '700', fontFamily: 'var(--heading-font)' }}>
                            FAQs
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    {/* Left Image */}
                    <div className="col-lg-5 mb-5 mb-lg-0 text-center">
                        <Image 
                            src="/assets/images/resource/logo-design-faq.png" 
                            alt="FAQs" 
                            width={400} 
                            height={500} 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                    </div>

                    {/* Right Accordion */}
                    <div className="col-lg-7">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {faqs.map((faq, idx) => (
                                <div key={idx} style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '8px',
                                    border: '1px solid #cbd5e1',
                                    overflow: 'hidden'
                                }}>
                                    <button 
                                        onClick={() => toggleFaq(idx)}
                                        style={{
                                            width: '100%',
                                            padding: '18px 25px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <span style={{ color: '#0f172a', fontSize: '16px', fontWeight: '700' }}>
                                            {faq.question}
                                        </span>
                                        <div style={{ color: '#0ea5e9' }}>
                                            {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>
                                    </button>
                                    
                                    {openIndex === idx && (
                                        <div style={{ padding: '0 25px 20px 25px' }}>
                                            <div style={{ width: '100%', height: '1px', backgroundColor: '#e2e8f0', marginBottom: '15px' }}></div>
                                            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <p style={{ color: '#64748b', fontSize: '15px' }}>
                                Need a custom package or have other questions? Reply here and we'll help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoFaq;
