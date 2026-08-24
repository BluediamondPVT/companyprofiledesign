"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
  MapPin,
  Globe,
  MessageCircle,
  PhoneCall,
  Briefcase,
  FileText,
  Building
} from "lucide-react";
import Link from "next/link";

const LandingFooter = () => {
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
    <footer
      id="get-quote"
      className="landing-footer"
      style={{
        background: "linear-gradient(135deg, #1b4f91 0%, #763199 100%)",
        color: "#ffffff",
        paddingTop: "80px",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Left Contact Info */}
          <div className="col-lg-6 col-md-12 mb-5 pe-lg-5">
            <div className="contact-info-list">
              <div className="d-flex align-items-start mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <MapPin size={24} color="#ffffff" />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      margin: 0,
                      color: "#e1e8ed",
                    }}
                  >
                    B 403, Virani Business Center, Opposite Bharat Gears, Mumbai-Pune Road, Thane, Mumbai – Maharashtra 400612.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <PhoneCall size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "16px" }}>
                    Sales:{" "}
                    <a
                      href="tel:+917718967729"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      +91 7700091613
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <Briefcase size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "16px" }}>
                    Projects:{" "}
                    <a
                      href="tel:+917718967729"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      +91 7700090159
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <Mail size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "16px" }}>
                    Email:{" "}
                    <a
                      href="mailto:bdm@thebdit.net"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      bdm@thebdit.net
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <FileText size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "16px" }}>
                    GSTIN:{" "}
                    <a
                      href="#"
                      
                      rel="noopener noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                     27AAFCB0696M1Z9
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    padding: "12px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                >
                  <Building size={24} color="#ffffff" />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "16px" }}>
                    CIN:{" "}
                    <a
                      href="#"
                      
                      rel="noopener noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                    >
                      U72300MH2012PTC232709
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="col-lg-6 col-md-12 mb-5">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1c1f1c",
                  marginBottom: "20px",
                  fontFamily: "var(--heading-font)",
                }}
              >
                Get Started Now
              </h3>

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
                  <div className="row">
                    <div
                      className="col-md-6 form-group-custom"
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
                            color: "#333",
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
                      className="col-md-6 form-group-custom"
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
                            color: "#333",
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
                          color: "#333",
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
                          color: "#333",
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
                    style={{
                      width: "100%",
                      background: "#003061",
                      color: "#ffffff",
                      border: "none",
                      padding: "14px",
                      borderRadius: "5px",
                      fontWeight: "700",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar
            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '20px 0', marginTop: '20px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p style={{ margin: 0, fontSize: '14px', color: '#e1e8ed' }}>
                                © Copyright {new Date().getFullYear()}. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="d-flex justify-content-center justify-content-md-end gap-3">
                                <a href="#" style={{ color: '#ffffff', width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><i className="bi bi-facebook" style={{ fontSize: '16px' }}></i></a>
                                <a href="#" style={{ color: '#ffffff', width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><i className="bi bi-instagram" style={{ fontSize: '16px' }}></i></a>
                                <a href="#" style={{ color: '#ffffff', width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><i className="bi bi-linkedin" style={{ fontSize: '16px' }}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </footer>
  );
};

export default LandingFooter;
