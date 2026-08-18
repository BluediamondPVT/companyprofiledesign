"use client"
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WritingProcess = () => {
    const processSteps = [
        "We assign a dedicated content writer for your project who has experience in your industry to write a content for your company profile.",
        "We send a questionnaire to you to get details about your company, vision, mission, products, services, achievements, clients, team and other details as per your requirement.",
        "After getting details from you, our writer will do research on your industry, competitors and target audience to craft a content that speaks for your brand value.",
        "After writing the content, we send it to our proofreader for quality check. Our proofreader checks the content for grammar, spelling, flow, readability and other quality parameters.",
        "After quality check, we send the content to you for approval. If you need any changes in the content, our writer will make changes as per your feedback until you are satisfied.",
        "Once you approve the content, we deliver the final content file to you. You can use the content for your company profile, website, brochure, presentation or any other marketing material."
    ];

    return (
        <section className="writing-process-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-11">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '14px',
                            lineHeight: '1.3' 
                        }}>
                            How is Our Company Profile Writing Agency Works to ensure the quality of the content?
                        </h2>
                        <p style={{ color: '#55585b', fontSize: '17px', fontWeight: '500', margin: 0 }}>
                            We have a step by step process to ensure the quality of the content:
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {processSteps.map((stepText, idx) => (
                        <div key={idx} className="col-md-6">
                            <div style={{
                                backgroundColor: '#f8fafc',
                                borderRadius: '16px',
                                padding: '24px 24px',
                                height: '100%',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
                            }}>
                                <div style={{ 
                                    color: '#be185d',
                                    flexShrink: 0,
                                    marginTop: '2px'
                                }}>
                                    <CheckCircle2 size={24} />
                                </div>
                                <p style={{ 
                                    color: '#334155', 
                                    fontSize: '15.5px', 
                                    lineHeight: '1.75', 
                                    margin: 0,
                                    fontWeight: '400'
                                }}>
                                    {stepText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WritingProcess;
