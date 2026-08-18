"use client"
import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, BookOpen, MessageSquare, ShieldCheck, X, RefreshCw, CheckCircle2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const EnquirySidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        captchaInput: ''
    });
    
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate random math captcha
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
        // Reset states on path change
        setIsOpen(false);
        setIsSubmitted(false);
        generateCaptcha();

        let autoOpenTimer;
        let isOpenedOnTimeout = false;
        let isOpenedOnScroll = false;

        const openFormFromTimeout = () => {
            if (!isOpenedOnTimeout && !isOpenedOnScroll) {
                setIsOpen(true);
                isOpenedOnTimeout = true;
            }
        };

        const openFormFromScroll = () => {
            if (!isOpenedOnScroll) {
                setIsOpen(true);
                isOpenedOnScroll = true;
                if (autoOpenTimer) {
                    clearTimeout(autoOpenTimer);
                }
            }
        };

        // 1. Auto open form after 5 seconds on load
        autoOpenTimer = setTimeout(openFormFromTimeout, 5000);

        // 2. Auto open when scrolled 90%
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const scrollHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                document.documentElement.offsetHeight,
                document.body.offsetHeight
            );
            const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            
            const totalScrollable = scrollHeight - clientHeight;
            
            if (totalScrollable > 50) {
                const scrollPercent = (scrollTop / totalScrollable) * 100;
                
                // Debug console log so we can inspect
                console.log(`Scroll percentage: ${scrollPercent.toFixed(1)}%`);
                
                if (scrollPercent >= 90) {
                    openFormFromScroll();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        const handleCustomOpen = () => setIsOpen(true);
        window.addEventListener('openEnquirySidebar', handleCustomOpen);

        return () => {
            clearTimeout(autoOpenTimer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('openEnquirySidebar', handleCustomOpen);
        };
    }, [pathname]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Contact number is required';
        } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (parseInt(formData.captchaInput) !== captcha.result) {
            newErrors.captchaInput = 'Incorrect captcha answer';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    captchaInput: ''
                });
                setIsSubmitted(false);
                setIsOpen(false);
                generateCaptcha();
            }, 3000);
        }
    };

    return (
        <>
            {/* Floating button on the right edge */}
            <button className="enquiry-fab-btn" onClick={() => setIsOpen(true)}>
                <span>Enquire Now</span>
            </button>

            {/* Sidebar Drawer Panel */}
            <div className={`enquiry-sidebar-container ${isOpen ? 'active' : ''}`}>
                {/* Backdrop overlay */}
                <div className="enquiry-sidebar-overlay" onClick={() => setIsOpen(false)}></div>
                
                <div className="enquiry-sidebar-panel">
                    <div className="sidebar-header">
                        <div>
                            <h3>Let&apos;s Get in Touch! 👋</h3>
                            <p>Share your requirements and we will get back to you shortly.</p>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <X size={22} />
                        </button>
                    </div>

                    <div className="sidebar-body">
                        {isSubmitted ? (
                            <div className="success-message-container">
                                <CheckCircle2 size={64} className="success-icon" />
                                <h4>Enquiry Submitted Successfully!</h4>
                                <p>Thank you! Our team will get in touch with you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="enquiry-form">
                                {/* Name Input */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">Full Name</label>
                                    <div className="input-with-icon">
                                        <User size={18} className="input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                {/* Email Input */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">Email Address</label>
                                    <div className="input-with-icon">
                                        <Mail size={18} className="input-icon" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                {/* Contact Number Input */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">Contact Number</label>
                                    <div className="input-with-icon">
                                        <Phone size={18} className="input-icon" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter your contact number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>

                                {/* Subject Input */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">Subject</label>
                                    <div className="input-with-icon">
                                        <BookOpen size={18} className="input-icon" />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject (e.g. Profile Design Quote)"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={errors.subject ? 'error' : ''}
                                        />
                                    </div>
                                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                                </div>

                                {/* Message Textarea */}
                                <div className="form-group-custom">
                                    <label className="form-label-custom">Message / Requirements</label>
                                    <div className="input-with-icon align-start">
                                        <MessageSquare size={18} className="input-icon mt-2" />
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder="Describe your project specifications and requirements..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={errors.message ? 'error' : ''}
                                        ></textarea>
                                    </div>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                {/* Captcha */}
                                <div className="form-group-custom captcha-container-custom">
                                    <label className="captcha-label">
                                        <ShieldCheck size={16} className="text-muted mr-1" />
                                        Security Verification (Solve the math problem):
                                    </label>
                                    <div className="captcha-row">
                                        <span className="captcha-math-box">
                                            {captcha.num1} + {captcha.num2} =
                                        </span>
                                        <input
                                            type="number"
                                            name="captchaInput"
                                            placeholder="?"
                                            value={formData.captchaInput}
                                            onChange={handleChange}
                                            className={`captcha-input ${errors.captchaInput ? 'error' : ''}`}
                                        />
                                        <button 
                                            type="button" 
                                            onClick={generateCaptcha} 
                                            className="captcha-refresh-btn"
                                            title="Refresh verification code"
                                        >
                                            <RefreshCw size={14} />
                                        </button>
                                    </div>
                                    {errors.captchaInput && <span className="error-text">{errors.captchaInput}</span>}
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="submit-btn-custom">
                                    Submit Enquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnquirySidebar;
