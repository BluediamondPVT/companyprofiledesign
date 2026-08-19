"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const WritingHero = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div 
            className="breatcam-section d-flex align-items-center" 
            data-background="/assets/images/resource/inner-bg.jpg" 
            style={{ 
                minHeight: '480px', 
                position: 'relative',
                paddingTop: '200px',
                paddingBottom: '80px',
               
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container">
                <div className="row dream-bg align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="breatcam-content text-center" style={{ marginTop: '0' }}>
                            <h1 style={{ 
                                fontSize: '42px', 
                                fontWeight: '800', 
                                marginBottom: '22px', 
                                color: '#272622ff',
                                fontFamily: 'var(--heading-font)',
                                lineHeight: '1.3'
                            }}>
                                The leading Company Profile Writing Services
                            </h1>
                            <p style={{ 
                                fontSize: '17px', 
                                lineHeight: '1.85', 
                                color: '#272622ff',
                                width: '100% !important',
                                maxWidth: '1080px !important', 
                                margin: '0 auto',
                                fontWeight: '400',
                                padding: '0'
                            }}>
                                Get high value for your business & attract maximum clients with our innovatively written Company Profile Writing Services. BDIT offers youth pre-eminent and professional content writing services with a business profile that is straightforward, simple, and easy to understand. We facilitate content with no space for uncertainty and exciting clients to instantly build a business relationship with you.
                            </p>
                        </div>
                    </div>
                    <div className="inner-page-shape">
                        <div className="inner-shape">
                            <Image src="/assets/images/resource/shape-2.png" alt="shape" width={46} height={46} />
                        </div>
                        <div className="inner-shape2">
                            <Image src="/assets/images/resource/shap-2.png" alt="shape" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritingHero;
