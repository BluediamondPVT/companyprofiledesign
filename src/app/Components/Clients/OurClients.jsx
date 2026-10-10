"use client"
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import brand from '../../Data/brand.json';
import Image from 'next/image';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NextArrow = ({ onClick }) => (
    <div 
        onClick={onClick}
        style={{
            position: 'absolute',
            right: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '20px',
            transition: 'all 0.3s ease'
        }}
        className="client-slider-arrow next-arrow"
    >
        <ChevronRight size={20} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div 
        onClick={onClick}
        style={{
            position: 'absolute',
            left: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
            fontSize: '20px',
            transition: 'all 0.3s ease'
        }}
        className="client-slider-arrow prev-arrow"
    >
        <ChevronLeft size={20} />
    </div>
);

const OurClients = () => {
    // Duplicate brand list to ensure smooth infinite sliding across all screen sizes
    const clientLogos = [...brand, ...brand, ...brand];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="call-to-action our-clients-section" data-background="/assets/images/resource/call-bg.png" style={{ backgroundImage: 'url(/assets/images/resource/call-bg.png)', padding: '100px 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="row dream1-bg">
                    <div className="col-lg-12 text-center" style={{ position: 'relative', zIndex: 5 }}>
                        <div className="company-profile-design-section-title white mb-5">
                            <h2 style={{ color: '#ffffff', fontSize: '38px', fontWeight: '700' }}>
                                Our Happy <span style={{ color: 'var(--primary-color)' }}>Customers</span>
                            </h2>
                            <p className="mx-auto mt-3" style={{ color: '#a8a8b3', maxWidth: '900px', width: '100%', fontSize: '16px', lineHeight: '1.8' }}>
                                We have a large customer base from all around the world. Our every customer is proud to associate with us and take our services. We always aim to continue the creative journey with our customers and grow exponentially by providing the best services in the market. We value every customer and always offer them the best of our services.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-4" style={{ padding: '0 25px', position: 'relative', zIndex: 5 }}>
                        <div className="our-clients-slider">
                            <Slider {...settings}>
                                {clientLogos.map((item, index) => (
                                    <div key={index} className="px-2">
                                        <div style={{
                                            background: '#ffffff',
                                            borderRadius: '10px',
                                            padding: '0px 0px',
                                            height: '150px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                                            margin: '10px 0'
                                        }}>
                                            <Image 
                                                src={item.img} 
                                                alt="Client Logo" 
                                                width={180} 
                                                height={65} 
                                                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100px', width: 'auto', height: 'auto' }} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="call-to-all-shape" style={{ pointerEvents: 'none' }}>
                        <div className="call-shape">
                            <Image src="/assets/images/resource/line.png" alt="shape" width={302} height={376} />
                        </div>
                        <div className="call-shape2">
                            <Image src="/assets/images/resource/shap2.png" alt="shape" width={183} height={96} />
                        </div>
                        <div className="call-shape3">
                            <Image src="/assets/images/resource/shap1.png" alt="shape" width={41} height={42} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .client-slider-arrow:hover {
                    background: var(--primary-color) !important;
                    border-color: var(--primary-color) !important;
                    color: var(--secondary-color) !important;
                }
            `}</style>
        </div>
    );
};

export default OurClients;
