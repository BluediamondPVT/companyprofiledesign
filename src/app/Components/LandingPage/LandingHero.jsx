"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const LandingHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, result: 0 });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
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
            service: formData.service,
            subject: `New Enquiry for ${formData.service}`,
            message: `Service Requested: ${formData.service}`,
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
              service: "",
              captchaInput: "",
            });
            setIsSubmitted(false);
            generateCaptcha();
          }, 5000);
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

  return (
    <section className="landing-hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Area */}
          <div className="col-lg-7 col-md-12 mb-5 mb-lg-0 pe-lg-5">
            <h1 className="hero-title">
              Professional Company Profile Design Services That{" "}
              <span className="highlight-text">Elevate Your Brand</span>
            </h1>
            <h3 className="hero-subtitle">
              A Standout Company Profile, Ready in Just 24 Hours
            </h3>
            <p className="hero-desc">
              With 15+ years of experience, we are a trusted Company Profile
              Maker delivering professional Company Profile Design solutions
              that build credibility and strengthen brands. From Corporate
              Profile Design to Construction Company Profile and Civil
              Contractor Profile services, we combine strategic content with
              premium design to help businesses stand out and grow.
            </p>

            {/* Trust Badges */}
            <div className="badge-wrapper mb-4">
              <Image
                src="/assets/images/resource/certfacte.png"
                alt="Certifications and Badges"
                width={450}
                height={90}
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="landing-cta-wrapper">
              <p className="cta-phone-text">
                Contact Us for Exclusive Offers & Special Discounts
              </p>
              <div className="d-flex align-items-center flex-wrap gap-3">
                <a href="tel:+917700091613" className="nav-style-btn">
                  <i className="bi bi-telephone-fill btn-icon"></i>
                  <span>Call for Discount!</span>
                </a>
                <a
                  href="https://wa.me/917700091613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-style-btn"
                >
                  <i className="bi bi-whatsapp btn-icon"></i>
                  <span>WhatsApp Chat</span>
                </a>
                <a href="mailto:bdm@thebdit.net" className="nav-style-btn">
                  <i className="bi bi-envelope-fill btn-icon"></i>
                  <span>Email Us Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="col-lg-5 col-md-12">
            <div className="hero-form-card">
              <h3 className="form-title">Get Started Now</h3>

              {isSubmitted ? (
                <div
                  className="success-message-container"
                  style={{ padding: "40px 10px", textAlign: "center" }}
                >
                  <CheckCircle2
                    size={64}
                    className="success-icon"
                    style={{ color: "#28a745", marginBottom: "20px" }}
                  />
                  <h4
                    style={{
                      fontSize: "22px",
                      color: "#1c1f1c",
                      marginBottom: "10px",
                    }}
                  >
                    Enquiry Submitted Successfully!
                  </h4>
                  <p style={{ color: "#555" }}>
                    Thank you! Our team will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enquiry-form">
                  <div
                    className="form-group-custom"
                    style={{ marginBottom: "15px" }}
                  >
                    <label
                      className="form-label-custom"
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#1c1f1c",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Full Name
                    </label>
                    <div
                      className="input-with-icon"
                      style={{ position: "relative" }}
                    >
                      <User
                        size={18}
                        className="input-icon"
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "12px",
                          color: "#7b7b7b",
                        }}
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "10px 15px 10px 40px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderRadius: "6px",
                          fontSize: "14px",
                        }}
                        className={errors.name ? "error" : ""}
                      />
                    </div>
                    {errors.name && (
                      <span
                        className="error-text"
                        style={{
                          color: "#dc3545",
                          fontSize: "12px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div
                    className="form-group-custom"
                    style={{ marginBottom: "15px" }}
                  >
                    <label
                      className="form-label-custom"
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#1c1f1c",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Email Address
                    </label>
                    <div
                      className="input-with-icon"
                      style={{ position: "relative" }}
                    >
                      <Mail
                        size={18}
                        className="input-icon"
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "12px",
                          color: "#7b7b7b",
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "10px 15px 10px 40px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderRadius: "6px",
                          fontSize: "14px",
                        }}
                        className={errors.email ? "error" : ""}
                      />
                    </div>
                    {errors.email && (
                      <span
                        className="error-text"
                        style={{
                          color: "#dc3545",
                          fontSize: "12px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div
                    className="form-group-custom"
                    style={{ marginBottom: "15px" }}
                  >
                    <label
                      className="form-label-custom"
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#1c1f1c",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Contact Number
                    </label>
                    <div
                      className="input-with-icon"
                      style={{ position: "relative" }}
                    >
                      <Phone
                        size={18}
                        className="input-icon"
                        style={{
                          position: "absolute",
                          left: "12px",
                          top: "12px",
                          color: "#7b7b7b",
                        }}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your contact number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "10px 15px 10px 40px",
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderRadius: "6px",
                          fontSize: "14px",
                        }}
                        className={errors.phone ? "error" : ""}
                      />
                    </div>
                    {errors.phone && (
                      <span
                        className="error-text"
                        style={{
                          color: "#dc3545",
                          fontSize: "12px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div
                    className="form-group-custom"
                    style={{ marginBottom: "15px" }}
                  >
                    <label
                      className="form-label-custom"
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#1c1f1c",
                        marginBottom: "5px",
                        display: "block",
                      }}
                    >
                      Service Needed <span style={{ color: "#dc3545" }}>*</span>
                    </label>
                    <div
                      className="select-wrapper"
                      style={{ position: "relative" }}
                    >
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "10px 35px 10px 15px",
                          border: errors.service
                            ? "1px solid #dc3545"
                            : "1px solid rgba(0,0,0,0.15)",
                          borderRadius: "6px",
                          fontSize: "14px",
                          color: formData.service ? "#1c1f1c" : "#7b7b7b",
                          backgroundColor: "#ffffff",
                          appearance: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          cursor: "pointer",
                          outline: "none",
                          height: "44px",
                        }}
                        className={errors.service ? "error" : ""}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Corporate Company Profile">
                          Corporate Company Profile
                        </option>
                        <option value="Construction Company Profile">
                          Construction Company Profile
                        </option>
                        <option value="IT Company Profile">
                          IT Company Profile
                        </option>
                        <option value="Interior Company Profile">
                          Interior Company Profile
                        </option>
                        <option value="Contractor Company Profile">
                          Contractor Company Profile
                        </option>
                        <option value="Housekeeping Company Profile">
                          Housekeeping Company Profile
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      <div
                        style={{
                          position: "absolute",
                          right: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: "#1c1f1c",
                        }}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <span
                        className="error-text"
                        style={{
                          color: "#dc3545",
                          fontSize: "12px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {errors.service}
                      </span>
                    )}
                  </div>

                  <div
                    className="form-group-custom captcha-container-custom"
                    style={{
                      marginBottom: "15px",
                      background: "#f8f9fb",
                      padding: "15px",
                      borderRadius: "8px",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <label
                      className="captcha-label"
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#555",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ShieldCheck
                        size={16}
                        className="text-muted mr-1"
                        style={{ marginRight: "5px" }}
                      />
                      Security Verification (Solve the math problem):
                    </label>
                    <div
                      className="captcha-row"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        className="captcha-math-box"
                        style={{
                          background: "#003061",
                          color: "#f5683d",
                          padding: "8px 15px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          letterSpacing: "1px",
                        }}
                      >
                        {captcha.num1} + {captcha.num2} =
                      </span>
                      <input
                        type="number"
                        name="captchaInput"
                        placeholder="?"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        style={{
                          width: "70px",
                          padding: "8px",
                          textAlign: "center",
                          border: "1px solid rgba(0,0,0,0.15)",
                          borderRadius: "6px",
                          fontWeight: "700",
                        }}
                        className={errors.captchaInput ? "error" : ""}
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        style={{
                          background: "#fff",
                          border: "1px solid rgba(0,0,0,0.1)",
                          padding: "8px",
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        <RefreshCw size={16} color="#555" />
                      </button>
                    </div>
                    {errors.captchaInput && (
                      <span
                        className="error-text"
                        style={{
                          color: "#dc3545",
                          fontSize: "12px",
                          display: "block",
                          marginTop: "5px",
                        }}
                      >
                        {errors.captchaInput}
                      </span>
                    )}
                  </div>

                  {submitError && (
                    <div
                      className="error-text"
                      style={{
                        color: "#dc3545",
                        marginBottom: "10px",
                        textAlign: "center",
                        fontSize: "13px",
                      }}
                    >
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit-btn"
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Global scoped overrides for navbar on dark landing hero */
        .cs_site_header {
          background: rgba(9, 21, 51, 0.95) !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        .cs_site_header .cs_nav .cs_nav_list > li > a {
          color: #ffffff !important;
          transition: color 0.3s ease;
        }
        .cs_site_header .cs_nav .cs_nav_list > li > a:hover {
          color: #ff3366 !important;
        }
        .cs_site_header .cs-munu_toggle span,
        .cs_site_header .cs-munu_toggle span::before,
        .cs_site_header .cs-munu_toggle span::after {
          background-color: #ffffff !important;
        }
      `}</style>

      <style jsx>{`
        .landing-hero {
          background-color: #091533;
          padding-top: 140px;
          padding-bottom: 80px;
          position: relative;
        }
        .hero-title {
          color: #ffffff;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 20px;
          font-family: var(--heading-font);
        }
        .highlight-text {
          color: #f5683d;
        }
        .hero-subtitle {
          color: #ffffff;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .hero-desc {
          color: #d1d8e0;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 25px;
        }
        .landing-cta-wrapper {
          margin-top: 10px;
        }
        .cta-phone-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 14px;
          width: 100%;
          display: block;
        }
        .phone-highlight {
          color: #f5683d;
          text-decoration: none;
        }
        .nav-style-btn {
          font-size: 15px;
          padding: 12px 24px;
          font-weight: 600;
          color: #ffffff;
          background: #003061;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
          text-decoration: none;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }
        .nav-style-btn:before {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 5px;
          background: #f5683d;
          transform: scale(0);
          transition: all 0.4s ease;
        }
        .nav-style-btn:hover:before {
          transform: scale(1);
        }
        .nav-style-btn:hover {
          color: #003061 !important;
        }
        :global(.nav-style-btn .btn-icon) {
          color: #f5683d;
          font-size: 16px;
          transition: all 0.4s ease;
        }
        :global(.nav-style-btn:hover .btn-icon) {
          color: #003061 !important;
        }
        .hero-form-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
        }
        .form-title {
          font-size: 24px;
          font-weight: 700;
          color: #1c1f1c;
          margin-bottom: 20px;
          font-family: var(--heading-font);
        }
        .form-submit-btn {
          width: 100%;
          background: #003061;
          color: #ffffff;
          border: none;
          padding: 13px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 4px 12px rgba(0, 48, 97, 0.3);
        }
        .form-submit-btn:before {
          position: absolute;
          content: "";
          z-index: -1;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 5px;
          background: #f5683d;
          transform: scale(0);
          transition: all 0.4s ease;
        }
        .form-submit-btn:hover:before {
          transform: scale(1);
        }
        .form-submit-btn:hover {
          color: #003061;
        }

        @media (max-width: 991px) {
          .landing-hero {
            padding-top: 120px;
            padding-bottom: 50px;
          }
          .hero-title {
            font-size: 30px;
          }
          .hero-subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 576px) {
          .landing-hero {
            padding-top: 110px;
            padding-bottom: 40px;
          }
          .hero-title {
            font-size: 26px;
          }
          .landing-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
