"use client"
import React, { useState, useEffect } from 'react';
import { Lock, RefreshCw, CheckCircle2 } from 'lucide-react';

const MakerWhyChooseForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Company Profile Maker',
        message: '',
        captchaInput: ''
    });

    const [captcha, setCaptcha] = useState({ num1: 5, num2: 4, result: 9 });
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
        
        const text = `Hi, I am interested in Company Profile Maker Services.%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
        window.open(`https://api.whatsapp.com/send?phone=917700091613&text=${text}`, '_blank');
    };

    const benefits = [
        "We have a team of expert writers and graphic designers who have experience in creating company profiles.",
        "We offer high-quality, plagiarism-free content and unique designs that stand out from the crowd.",
        "We offer 100% satisfaction guarantee with free revisions until you are satisfied with the company profile."
    ];

    return (
        <section 
            id="quote-form"
            className="maker-form-section" 
            style={{ 
                padding: '90px 0', 
                backgroundColor: '#ffffff',
                backgroundImage: 'linear-gradient(rgba(11, 23, 39, 0.88), rgba(11, 23, 39, 0.92)), url("/assets/images/resource/call-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#ffffff'
            }}
        >
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column Text */}
                    <div className="col-lg-6">
                        <div>
                            <h2 style={{ 
                                color: '#ffffff', 
                                fontSize: '36px', 
                                fontWeight: '800', 
                                fontFamily: 'var(--heading-font)',
                                lineHeight: '1.3',
                                marginBottom: '24px' 
                            }}>
                                Why Choose BDC Over Others for Company Profile Making Vendors?
                            </h2>

                            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                                Profile Design Company is a leading company profile maker agency in India. We have a team of expert content writers and graphic designers who work together to create a company profile for your business. We have created company profiles for companies across various industries including IT, Real Estate, Healthcare, Education, Manufacturing, Retail, FMCG and many more.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {benefits.map((text, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <CheckCircle2 size={22} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                                        <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '15px', lineHeight: '1.6', margin: 0, fontWeight: '500' }}>
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column Form Card */}
                    <div className="col-lg-6">
                        <div style={{
                            backgroundColor: 'rgba(15, 23, 42, 0.95)',
                            borderRadius: '24px',
                            padding: '36px 32px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Top Red Gradient Line */}
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
                                marginBottom: '22px',
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
                                                <option value="Company Profile Maker">Company Profile Maker</option>
                                                <option value="Company Profile Writing">Company Profile Writing</option>
                                                <option value="Company Profile Design">Company Profile Design</option>
                                                <option value="Brochure Design">Brochure Design</option>
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

export default MakerWhyChooseForm;
