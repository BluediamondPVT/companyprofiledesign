"use client"
import SectionTitle from "../Common/SectionTitle";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Cta = ({ 
    title = "Contact us for business Catalogues", 
    content 
}) => {
    const defaultContent = "Whenever we design a business catalogue, we work with the best and the most experienced designers in the industry. For every catalogue, our team uses a combination of the ideas of the business and its products. Our catalogue design is one of the best in India. For more information about our catalog design service, price, or sample, please feel free to contact us!";
    const descriptionText = content || defaultContent;

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const handleOpenEnquiry = (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('openEnquirySidebar'));
            const fabBtn = document.querySelector('.enquiry-fab-btn');
            if (fabBtn) {
                fabBtn.click();
            }
        }
    };

    return (
        <div className="call-to-action" data-background="/assets/images/resource/call-bg.png">
            <div className="container">
                <div className="row dream1-bg align-items-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="company-profile-design-section-title white">
                            <SectionTitle
                                Title={title}
                                Content={descriptionText}
                            ></SectionTitle>
                        </div>
                        <div className="hero-button mt-4 justify-content-start flex-wrap">
                            <button 
                                type="button" 
                                className="hero-btn-primary"
                                onClick={handleOpenEnquiry}
                            >
                                Contact Now <ArrowRight size={16} style={{ marginLeft: '6px', display: 'inline-block' }} />
                            </button>
                            
                            <a 
                                className="hero-btn-secondary text-white text-decoration-none"
                                href="tel:+917718967729"
                            >
                                +91 7718967729 <ArrowRight size={16} style={{ marginLeft: '6px', display: 'inline-block' }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 text-center text-lg-end mt-4 mt-lg-0">
                        <a 
                            href="https://wa.me/917718967729" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="call-info d-inline-block text-decoration-none"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="call-icon mx-auto">
                                <Image src="/assets/images/resource/call.png" alt="img" width={50} height={50} />
                            </div>
                            <div className="call-number">
                                <span className="d-block" style={{ color: '#ffffff', fontSize: '26px', fontWeight: '700', margin: '10px 0 5px', fontFamily: 'var(--heading-font)' }}>
                                    +91 77189 67729
                                </span>
                            </div>
                            <div className="call-text">
                                <span style={{ color: '#ffffff', opacity: 0.9 }}>(Whats App/Call)</span>
                            </div>
                        </a>
                    </div>
                    <div className="call-to-all-shape">
                        <div className="call-shape">
                            <Image src="/assets/images/resource/line.png" alt="img" width={302} height={376} />
                        </div>
                        <div className="call-shape2">
                            <Image src="/assets/images/resource/shap2.png" alt="img" width={183} height={96} />
                        </div>
                        <div className="call-shape3">
                            <Image src="/assets/images/resource/shap1.png" alt="img" width={41} height={42} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;