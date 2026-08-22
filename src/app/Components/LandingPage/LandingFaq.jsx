"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "1. What is the process of getting a company profile?",
        answer: "Our process is simple and streamlined: We start by understanding your business and requirements, followed by drafting the content. Once the content is approved, our designers create a custom layout. Finally, we refine the design based on your feedback until you are completely satisfied."
    },
    {
        question: "2. Do you provide content for the company profile?",
        answer: "Yes, we have a dedicated team of professional content writers who specialize in corporate communication. They will craft engaging, persuasive, and professional content tailored to your brand's voice and industry."
    },
    {
        question: "3. How many revisions do I get?",
        answer: "The number of revision rounds depends on the package you select. Our Basic package includes 2 rounds of revisions, Standard includes 3 rounds, and Premium includes up to 5 rounds to ensure the final product perfectly aligns with your vision."
    },
    {
        question: "4. Will my company profile be optimized for digital viewing and PDF sharing?",
        answer: "Absolutely. We deliver your final company profile as a high-quality, print-ready PDF, as well as a compressed, web-optimized PDF that is perfect for emailing and sharing digitally on platforms like WhatsApp or LinkedIn."
    },
    {
        question: "5. Can you print the company profile as well?",
        answer: "Yes, we offer premium printing services alongside our design solutions. We can provide you with various paper qualities and finishes. Please reach out to our team for a custom printing quote based on your requirements."
    },
    {
        question: "6. What is the standard cost for a company profile?",
        answer: "Our costs are highly competitive and structured around our three main packages: Basic, Standard, and Premium. The price varies depending on the number of pages, content requirements, and specific design needs. Contact us for a customized quote."
    },
    {
        question: "7. How long does it take to get a final design?",
        answer: "Delivery timelines depend on the package you choose. Typically, our Basic package is delivered in 3-4 days, Standard in 4-5 days, and Premium in 6-7 days. We also ensure fast turnaround times for urgent requests."
    },
    {
        question: "8. Can I update my company profile in the future?",
        answer: "Yes, you can. If you choose our Premium or Standard packages, we provide you with the open source files (Ai, InDesign), allowing you to make edits. Alternatively, our team is always available to assist you with any future updates at a nominal cost."
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
                            We have answered some of the most common questions our clients ask us about our company profile design services. If you have more questions, feel free to contact us.
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
