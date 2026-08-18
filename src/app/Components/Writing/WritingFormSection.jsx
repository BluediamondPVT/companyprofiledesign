"use client"
import React, { useState, useEffect } from 'react';
import { Lock, RefreshCw, CheckCircle2 } from 'lucide-react';

const WritingFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Company Profile Writing',
        message: '',
        captchaInput: ''
    });

    const [captcha, setCaptcha] = useState({ num1: 6, num2: 6, result: 12 });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 9) + 1;
        setCaptcha({
            num1,
            num2,
            result: num1 + num2
        });
        setFormData(prev => ({ ...prev, captchaInput: '' }));
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (parseInt(formData.captchaInput, 10) !== captcha.result) {
            setStatusMessage('Incorrect security answer. Please try again.');
            return;
        }

        setIsSubmitted(true);
        setStatusMessage('Thank you! Your request has been submitted successfully.');
        
        const text = `Hi, I am interested in Company Profile Writing.%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        window.open(`https://api.whatsapp.com/send?phone=917700091613&text=${text}`, '_blank');
    };

    return (
        <section className="writing-form-section" style={{ 
            padding: '90px 0', 
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0'
        }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column Text - High Contrast & Crisp Readability */}
                    <div className="col-lg-6">
                        <div>
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '38px', 
                                fontWeight: '800', 
                                fontFamily: 'var(--heading-font)',
                                lineHeight: '1.25',
                                marginBottom: '24px' 
                            }}>
                                Let your Company Profile stand out from the crowd
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                <p style={{ color: '#334155', fontSize: '16.5px', lineHeight: '1.85', margin: 0, fontWeight: '400' }}>
                                    We have a team of creative writers who have experience in writing content for various industries including IT, Real Estate, Healthcare, Education, Manufacturing, Retail, FMCG and many more.
                                </p>
                                <p style={{ color: '#334155', fontSize: '16.5px', lineHeight: '1.85', margin: 0, fontWeight: '400' }}>
                                    Our experienced writers can craft a content for your company profile that speaks for your brand value. We can craft a company profile that speaks for your brand value. We have a team of creative content writers who understand your business domain and can craft a content that speaks for your company, vision, mission and brand values.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Form Card */}
                    <div className="col-lg-6">
                        <div style={{
                            backgroundColor: '#0f172a',
                            borderRadius: '24px',
                            padding: '38px 34px',
                            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Top Red Gradient Accent Line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, #dc2626 0%, #be185d 50%, #f97316 100%)'
                            }}></div>

                            <h3 style={{ 
                                color: '#ffffff', 
                                fontSize: '24px', 
                                fontWeight: '800', 
                                marginBottom: '24px',
                                textAlign: 'center',
                                fontFamily: 'var(--heading-font)'
                            }}>
                                Get a FREE Quote Today
                            </h3>

                            {isSubmitted ? (
                                <div className="text-center py-4">
                                    <CheckCircle2 size={48} className="text-success mb-3 mx-auto" />
                                    <h4 className="text-white mb-2 fw-700">Request Received!</h4>
                                    <p className="text-slate-300 fs-15">Our team will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Full Name *</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                required 
                                                placeholder="Enter Full Name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    borderRadius: '8px',
                                                    padding: '12px 14px',
                                                    border: '1px solid #cbd5e1',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Email Address *</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                required 
                                                placeholder="Enter Email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    borderRadius: '8px',
                                                    padding: '12px 14px',
                                                    border: '1px solid #cbd5e1',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Contact No. *</label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                required 
                                                placeholder="Enter Mobile No." 
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    borderRadius: '8px',
                                                    padding: '12px 14px',
                                                    border: '1px solid #cbd5e1',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Outline / Service</label>
                                            <select 
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="form-select"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    borderRadius: '8px',
                                                    padding: '12px 14px',
                                                    border: '1px solid #cbd5e1',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                <option value="Company Profile Writing">Company Profile Writing</option>
                                                <option value="Company Profile Design">Company Profile Design</option>
                                                <option value="Brochure Writing & Design">Brochure Writing & Design</option>
                                                <option value="Catalogue Content Writing">Catalogue Content Writing</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Tell us about your project/requirements *</label>
                                            <textarea 
                                                name="message" 
                                                rows="3" 
                                                required 
                                                placeholder="Type your message here..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#ffffff',
                                                    color: '#0f172a',
                                                    borderRadius: '8px',
                                                    padding: '12px 14px',
                                                    border: '1px solid #cbd5e1',
                                                    fontSize: '14px',
                                                    fontWeight: '500'
                                                }}
                                            ></textarea>
                                        </div>

                                        {/* Security Math Captcha */}
                                        <div className="col-12">
                                            <div className="d-flex align-items-center justify-content-between p-3 rounded-3" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
                                                <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600' }}>
                                                    Security Math: {captcha.num1} + {captcha.num2} =
                                                </span>
                                                <div className="d-flex align-items-center gap-2">
                                                    <input 
                                                        type="number" 
                                                        name="captchaInput" 
                                                        required 
                                                        placeholder="Ans"
                                                        value={formData.captchaInput}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        style={{
                                                            backgroundColor: '#ffffff',
                                                            color: '#0f172a',
                                                            borderRadius: '6px',
                                                            padding: '8px 10px',
                                                            border: '1px solid #cbd5e1',
                                                            fontSize: '14px',
                                                            fontWeight: '700',
                                                            maxWidth: '80px',
                                                            textAlign: 'center'
                                                        }}
                                                    />
                                                    <button 
                                                        type="button" 
                                                        onClick={generateCaptcha}
                                                        className="btn text-white p-1"
                                                        title="Refresh Math Captcha"
                                                    >
                                                        <RefreshCw size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {statusMessage && (
                                            <div className="col-12">
                                                <p style={{ color: '#ef4444', fontSize: '13px', margin: 0, fontWeight: '600' }}>{statusMessage}</p>
                                            </div>
                                        )}

                                        <div className="col-12 mt-2">
                                            <button 
                                                type="submit"
                                                style={{
                                                    backgroundColor: '#be185d',
                                                    backgroundImage: 'linear-gradient(90deg, #dc2626 0%, #be185d 100%)',
                                                    color: '#ffffff',
                                                    fontWeight: '700',
                                                    fontSize: '15px',
                                                    letterSpacing: '1px',
                                                    padding: '14px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    width: '100%',
                                                    cursor: 'pointer',
                                                    boxShadow: '0 6px 18px rgba(220, 38, 38, 0.35)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                SUBMIT
                                            </button>
                                        </div>

                                        <div className="col-12 text-center mt-2">
                                            <span style={{ fontSize: '13px', color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                                <Lock size={13} className="text-success" /> 100% Privacy Guaranteed
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WritingFormSection;
