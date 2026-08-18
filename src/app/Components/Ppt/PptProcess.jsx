"use client"
import React, { useEffect, useState } from 'react';
import { FileText, Palette, CheckCircle2 } from 'lucide-react';

const PptProcess = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const processSteps = [
        {
            icon: <FileText size={32} color="#ffffff" />,
            title: "Briefing and content writing",
            desc: "The first step is all about briefing and content writing. Therefore, this means the company will provide us the detail, and we will provide the content. Furthermore, by doing so, the client will finalize the same."
        },
        {
            icon: <Palette size={32} color="#ffffff" />,
            title: "Designing",
            desc: "The next step is all about designing. Then, we can do custom designing following your instructions. Afterward, we will deliver you the slides, and you have to check them and finalize the Company Profile Powerpoint Presentation Slides. Moreover, you can pick out the issues, if any."
        },
        {
            icon: <CheckCircle2 size={32} color="#ffffff" />,
            title: "Final Draft",
            desc: "At last, we will draft the final Company Profile Powerpoint Presentation Slides. Also, we will give an excellent finishing to every slide of the presentation. Above all, we encourage you to cooperate with us while researching and preparing the Company ppt presentation."
        }
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes drawLine {
                    0% {
                        width: 0;
                        opacity: 0;
                    }
                    100% {
                        width: 66.66%;
                        opacity: 1;
                    }
                }
                .animate-step {
                    opacity: 0;
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-line {
                    opacity: 0;
                    animation: drawLine 1s ease-out forwards;
                }
            `}} />
            
            <section className="ppt-process-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div className="container">
                    <div className={`row justify-content-center text-center mb-5 ${isVisible ? 'animate-step' : ''}`} style={{ animationDelay: '0.1s' }}>
                        <div className="col-lg-10">
                            <h2 style={{ 
                                color: '#1c1f1c', 
                                fontSize: '34px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '20px',
                                lineHeight: '1.3'
                            }}>
                                How to Prepare a Company Profile Powerpoint Presentation Slides?
                            </h2>
                            <p style={{ color: '#55585b', fontSize: '17px', lineHeight: '1.8' }}>
                                Creating a business presentation from scratch is never an easy task – but BDIT makes it easy here are a few steps of how to prepare a Company Profile Powerpoint Presentation Slides.
                            </p>
                        </div>
                    </div>

                    <div className="row position-relative mt-5 pt-3">
                        {/* Horizontal Line for Desktop */}
                        <div className={`d-none d-lg-block ${isVisible ? 'animate-line' : ''}`} style={{
                            position: 'absolute',
                            top: '40px',
                            left: '16.66%',
                            height: '2px',
                            backgroundColor: '#be185d',
                            zIndex: 1,
                            animationDelay: '0.4s'
                        }}></div>

                        {processSteps.map((step, idx) => (
                            <div key={idx} className={`col-lg-4 text-center position-relative mb-5 mb-lg-0 ${isVisible ? 'animate-step' : ''}`} style={{ zIndex: 2, animationDelay: `${0.3 + (idx * 0.2)}s` }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    backgroundColor: '#be185d',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 25px auto',
                                    boxShadow: '0 0 0 8px #f8fafc',
                                    border: '2px solid #be185d',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                >
                                    {step.icon}
                                </div>
                                <h3 style={{ 
                                    color: '#0f172a', 
                                    fontSize: '22px', 
                                    fontWeight: '700',
                                    marginBottom: '15px'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{ 
                                    color: '#475569', 
                                    fontSize: '15.5px', 
                                    lineHeight: '1.75',
                                    padding: '0 15px',
                                    margin: 0
                                }}>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PptProcess;
