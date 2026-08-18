"use client"
import React, { useState, useEffect } from 'react';
import { Lock, RefreshCw, CheckCircle2 } from 'lucide-react';

const PptFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        projectDetails: '',
        securityAnswer: ''
    });

    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1, num2 });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (parseInt(formData.securityAnswer) !== (captcha.num1 + captcha.num2)) {
            setError('Security answer is incorrect.');
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                projectDetails: '',
                securityAnswer: ''
            });
            generateCaptcha();
            
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section className="ppt-form-section" style={{ backgroundColor: '#0ea5e9', padding: '80px 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Text content */}
                    <div className="col-lg-5 mb-5 mb-lg-0 text-white">
                        <h2 style={{ 
                            fontSize: '40px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '20px',
                            color: '#ffffff'
                        }}>
                            Contact Us
                        </h2>
                        
                        <p style={{ 
                            fontSize: '17px', 
                            lineHeight: '1.8', 
                            marginBottom: '30px',
                            color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                            Please fill out the form below to get in touch with our team for company profile ppt presentation making services. Our experts will get back to you with the best solutions for your business.
                        </p>
                        
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginTop: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            <Lock size={20} color="#ffffff" />
                            <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: '500' }}>Your information is 100% secure</span>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="col-lg-7">
                        <div style={{ 
                            backgroundColor: '#0f172a',
                            borderRadius: '16px',
                            padding: '40px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            position: 'relative'
                        }}>
                            {isSuccess && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 10,
                                    color: 'white'
                                }}>
                                    <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '16px' }} />
                                    <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>Message Sent!</h3>
                                    <p style={{ color: '#94a3b8' }}>We&apos;ll get back to you shortly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name*"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid #cbd5e1',
                                                backgroundColor: '#ffffff',
                                                color: '#0f172a',
                                                fontSize: '15px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email*"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid #cbd5e1',
                                                backgroundColor: '#ffffff',
                                                color: '#0f172a',
                                                fontSize: '15px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number*"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid #cbd5e1',
                                                backgroundColor: '#ffffff',
                                                color: '#0f172a',
                                                fontSize: '15px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject*"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid #cbd5e1',
                                                backgroundColor: '#ffffff',
                                                color: '#0f172a',
                                                fontSize: '15px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={handleChange}
                                            placeholder="Tell Us More About Your Project*"
                                            required
                                            rows="4"
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                borderRadius: '8px',
                                                border: '1px solid #cbd5e1',
                                                backgroundColor: '#ffffff',
                                                color: '#0f172a',
                                                fontSize: '15px',
                                                resize: 'vertical'
                                            }}
                                        ></textarea>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{ 
                                                backgroundColor: 'rgba(255,255,255,0.1)', 
                                                padding: '10px 15px', 
                                                borderRadius: '8px',
                                                color: '#ffffff',
                                                fontWeight: '600',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                border: '1px solid rgba(255,255,255,0.15)'
                                            }}>
                                                <span>{captcha.num1} + {captcha.num2} = ?</span>
                                                <button type="button" onClick={generateCaptcha} style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, cursor: 'pointer', display: 'flex' }}>
                                                    <RefreshCw size={16} />
                                                </button>
                                            </div>
                                            <input
                                                type="number"
                                                name="securityAnswer"
                                                value={formData.securityAnswer}
                                                onChange={handleChange}
                                                placeholder="Security Math*"
                                                required
                                                style={{
                                                    flex: 1,
                                                    padding: '14px 20px',
                                                    borderRadius: '8px',
                                                    border: '1px solid #cbd5e1',
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    fontSize: '15px'
                                                }}
                                            />
                                        </div>
                                        {error && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>{error}</p>}
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                backgroundColor: '#e11d48',
                                                color: '#ffffff',
                                                padding: '16px',
                                                borderRadius: '8px',
                                                border: 'none',
                                                fontWeight: '700',
                                                fontSize: '16px',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                transition: 'background-color 0.3s',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                            onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#be123c')}
                                            onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#e11d48')}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PptFormSection;
