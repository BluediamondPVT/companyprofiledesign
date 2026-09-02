"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  X,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { usePathname } from "next/navigation";

const EnquirySidebar = () => {
  const pathname = usePathname();
  const isExcludedPage = pathname?.includes("myorders");

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Generate random math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({
      num1,
      num2,
      result: num1 + num2,
    });
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
  };

  useEffect(() => {
    if (isExcludedPage) return;

    // Reset states on path change
    setIsOpen(false);
    setIsSubmitted(false);
    generateCaptcha();

    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener("openEnquirySidebar", handleCustomOpen);

    return () => {
      window.removeEventListener("openEnquirySidebar", handleCustomOpen);
    };
  }, [pathname, isExcludedPage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Sirf numbers rakhega
      if (numericValue.length > 10) return; // 10 se zyada type nahi hone dega

      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      // Regex updated here
      newErrors.phone = "Please enter exactly a 10-digit phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (parseInt(formData.captchaInput) !== captcha.result) {
      newErrors.captchaInput = "Incorrect captcha answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
              captchaInput: "",
            });
            setIsSubmitted(false);
            setIsOpen(false);
            generateCaptcha();
          }, 3000);
        } else {
          setSubmitError(
            data.error || "Something went wrong. Please try again.",
          );
        }
      } catch (error) {
        setSubmitError("Failed to connect to the server. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isExcludedPage) {
    return null;
  }

  return (
    <>
      {/* Floating button on the right edge */}
      <button
        className="enquiry-fab-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open Project Enquiry Form"
      >
        <span>Enquire Now</span>
      </button>

      {/* Sidebar Drawer Panel */}
      <div className={`enquiry-sidebar-container ${isOpen ? "active" : ""}`}>
        {/* Backdrop overlay */}
        <div
          className="enquiry-sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="enquiry-sidebar-panel">
          <div className="sidebar-header">
            <div>
              <h3>Let&apos;s Get in Touch! 👋</h3>
              <p>
                Share your requirements and we will get back to you shortly.
              </p>
            </div>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Enquiry Form"
            >
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
                      className={errors.name ? "error" : ""}
                    />
                  </div>
                  {errors.name && (
                    <span className="error-text">{errors.name}</span>
                  )}
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
                      className={errors.email ? "error" : ""}
                    />
                  </div>
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
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
                      maxLength="10" 
                      pattern="[0-9]*" 
                      className={errors.phone ? "error" : ""}
                    />
                  </div>
                  {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                  )}
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
                      className={errors.subject ? "error" : ""}
                    />
                  </div>
                  {errors.subject && (
                    <span className="error-text">{errors.subject}</span>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="form-group-custom">
                  <label className="form-label-custom">
                    Message / Requirements
                  </label>
                  <div className="input-with-icon align-start">
                    <MessageSquare size={18} className="input-icon mt-2" />
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Describe your project"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <span className="error-text">{errors.message}</span>
                  )}
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
                      className={`captcha-input ${errors.captchaInput ? "error" : ""}`}
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="captcha-refresh-btn"
                      aria-label="Refresh Security Math Captcha"
                      title="Refresh verification code"
                    >
                      <RefreshCw size={14} />
                    </button>
                  </div>
                  {errors.captchaInput && (
                    <span className="error-text">{errors.captchaInput}</span>
                  )}
                </div>

                {/* Submit Button */}
                {submitError && (
                  <div
                    className="error-text"
                    style={{ marginBottom: "10px", textAlign: "center" }}
                  >
                    {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  className="submit-btn-custom"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
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
