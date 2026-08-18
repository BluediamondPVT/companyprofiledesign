"use client"
import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

const ConstructionFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (parseInt(formData.securityAnswer) !== (captcha.num1 + captcha.num2)) {
            setError('Security answer is incorrect.');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                securityAnswer: ''
            });
            generateCaptcha();
            
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section className="construction-form-section" style={{ 
            backgroundColor: '#0284c7', 
            padding: '80px 0',
            backgroundImage: 'url("/assets/images/resource/network-bg.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center text-white mb-4">
                        <h2 style={{ 
                            fontSize: '36px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '15px',
                            color: '#ffffff'
                        }}>
                            Contact Us For Your New Company Profile
                        </h2>
                        
                        <p style={{ 
                            fontSize: '16px', 
                            lineHeight: '1.7', 
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginBottom: '40px'
                        }}>
                            We would love to connect with you. Please fill out the form below and we will get back to you with a free consultation and project quote.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {isSuccess && (
                            <div className="text-center mb-4" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', padding: '20px', borderRadius: '8px', border: '1px solid #10b981' }}>
                                <CheckCircle2 size={40} color="#10b981" className="mb-2" />
                                <h4 className="text-white m-0">Thank you! Your message has been sent successfully.</h4>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
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
                                            borderRadius: '4px',
                                            border: 'none',
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
                                        placeholder="Email*"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 20px',
                                            borderRadius: '4px',
                                            border: 'none',
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
                                        placeholder="Phone Number"
                                        style={{
                                            width: '100%',
                                            padding: '14px 20px',
                                            borderRadius: '4px',
                                            border: 'none',
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
                                            borderRadius: '4px',
                                            border: 'none',
                                            backgroundColor: '#ffffff',
                                            color: '#0f172a',
                                            fontSize: '15px'
                                        }}
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message*"
                                        required
                                        rows="5"
                                        style={{
                                            width: '100%',
                                            padding: '14px 20px',
                                            borderRadius: '4px',
                                            border: 'none',
                                            backgroundColor: '#ffffff',
                                            color: '#0f172a',
                                            fontSize: '15px',
                                            resize: 'vertical'
                                        }}
                                    ></textarea>
                                </div>
                                
                                <div className="col-12">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                                        <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>
                                            Security Math: {captcha.num1} + {captcha.num2} =
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <input
                                                type="number"
                                                name="securityAnswer"
                                                value={formData.securityAnswer}
                                                onChange={handleChange}
                                                placeholder="Ans"
                                                required
                                                style={{
                                                    width: '80px',
                                                    padding: '10px 15px',
                                                    borderRadius: '4px',
                                                    border: 'none',
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    fontSize: '15px',
                                                    textAlign: 'center'
                                                }}
                                            />
                                            <button type="button" onClick={generateCaptcha} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}>
                                                <RefreshCw size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    {error && <p style={{ color: '#fca5a5', fontSize: '14px', marginTop: '10px' }}>{error}</p>}
                                </div>

                                <div className="col-12 text-center mt-4">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        style={{
                                            backgroundColor: '#e11d48',
                                            color: '#ffffff',
                                            padding: '12px 40px',
                                            borderRadius: '30px',
                                            border: 'none',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            transition: 'background-color 0.3s',
                                        }}
                                        onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#be123c')}
                                        onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#e11d48')}
                                    >
                                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionFormSection;
