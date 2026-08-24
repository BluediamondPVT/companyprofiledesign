"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "1. Can you provide content for the company profile?",
        answer: "Yes, we have an in-house content writing team that creates custom-written content for every project, ensuring your company profile is professional, authentic, and uniquely crafted to reflect your brand identity and business strengths."
    },
    {
        question: "2. How long does it take to complete a company profile?",
        answer: "Most company profiles are completed within 24 to 72 hours, depending on the number of pages, content requirements, and the timely availability of information and feedback from the client."
    },
    {
        question: "3. Do you design Construction Company Profiles and Civil Contractor Profiles?",
        answer: "Absolutely. We specialize in Construction Company Profile, Civil Contractor Profile, and Corporate Profile Design solutions for businesses across various industries."
    },
    {
        question: "4. Can I request revisions to the design?",
        answer: "Yes, revision options are included in our packages to ensure the final company profile aligns perfectly with your brand and expectations."
    },
    {
        question: "5. What if I don't have images for my company profile?",
        answer: "No problem. We can use premium, royalty-free stock images relevant to your industry, or you can provide your own images and branding materials."
    },
    {
        question: "6. What information do I need to provide to get started?",
        answer: "Simply share your company details, services, products, logo, clients, and any relevant business information. Our team will take care of the content, design, and presentation to create a professional company profile."
    },
    {
        question: "7. Will my company profile be customized for my business?",
        answer: "Yes. Every Company Profile Design is created from scratch and tailored to your brand identity, industry, and business objectives."
    },
    {
        question: "8. In which formats will I receive the final company profile?",
        answer: "You will receive a high-quality PDF file suitable for digital sharing, client presentations, proposals, websites, and business meetings. We also provide the editable source file, giving you complete flexibility for future updates and modifications."
    }
];

const LandingFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    // Split FAQs into two columns for the grid layout shown in the image
    const leftColumnFaqs = faqData.slice(0, 4);
    const rightColumnFaqs = faqData.slice(4, 8);

    const FaqItem = ({ item, index, actualIndex }) => (
        <div 
            className={`faq-item ${openIndex === actualIndex ? 'active' : ''}`} 
            style={{ 
                marginBottom: '15px', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e1e8ed', 
                borderRadius: '8px',
                overflow: 'hidden'
            }}
        >
            <div 
                className="faq-header" 
                onClick={() => toggleAccordion(actualIndex)}
                style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: openIndex === actualIndex ? '#f8f9fb' : '#ffffff',
                    transition: 'background-color 0.3s'
                }}
            >
                <h4 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: openIndex === actualIndex ? '#1b4f91' : '#1c1f1c',
                    margin: 0,
                    lineHeight: '1.4'
                }}>
                    {item.question}
                </h4>
                <div style={{ color: openIndex === actualIndex ? '#1b4f91' : '#777' }}>
                    {openIndex === actualIndex ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>
            
            {openIndex === actualIndex && (
                <div className="faq-body" style={{ padding: '0 20px 20px 20px', backgroundColor: '#f8f9fb' }}>
                    <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', margin: 0, paddingTop: '10px', borderTop: '1px solid #e1e8ed' }}>
                        {item.answer}
                    </p>
                </div>
            )}
        </div>
    );

    return (
        <section className="faq-section" style={{ padding: '80px 0', backgroundColor: '#f4f7fa' }}>
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1c1f1c', fontFamily: 'var(--heading-font)' }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ fontSize: '16px', color: '#555', marginTop: '15px', maxWidth: '800px', margin: '15px auto 0' }}>
Get quick answers to the most commonly asked questions about our company profile solutions, timelines, pricing, and project workflow.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        {leftColumnFaqs.map((item, index) => (
                            <FaqItem key={index} item={item} index={index} actualIndex={index} />
                        ))}
                    </div>
                    <div className="col-lg-6 col-md-12">
                        {rightColumnFaqs.map((item, index) => (
                            <FaqItem key={index} item={item} index={index} actualIndex={index + 4} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingFaq;
