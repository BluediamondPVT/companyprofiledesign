"use client"
import React from 'react';

const MakerProcess = () => {
    return (
        <section className="maker-process-section" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11 text-center">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '34px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '28px',
                            lineHeight: '1.3'
                        }}>
                            How we easily facilitate you to prepare Company Profile
                        </h2>
                        
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                Preparing a company profile is an easy process with Profile Design Company. We have a team of expert content writers and graphic designers who work together to create a company profile for your business. You just need to provide details about your company, vision, mission, products, services, achievements, clients, team and other details.
                            </p>

                            <p style={{ color: '#55585b', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                After getting details from you, our content writer will write a content for your company profile. After writing the content, our designer will design a company profile for your business. We offer free revisions until you are satisfied with the company profile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakerProcess;
