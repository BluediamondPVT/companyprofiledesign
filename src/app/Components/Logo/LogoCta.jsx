"use client"
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const LogoCta = () => {
    return (
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div style={{
                            padding: '60px 40px',
                            backgroundColor: '#ffffff',
                            borderRadius: '16px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                            border: '1px solid #f1f5f9',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ color: '#0f172a', fontSize: '32px', fontWeight: '800', fontFamily: 'var(--heading-font)', marginBottom: '20px' }}>
                                Ready to Work With the Best Logo Design Company in India?
                            </h2>
                            <p style={{ color: '#475569', fontSize: '18px', lineHeight: '1.7', marginBottom: '35px', maxWidth: '800px', margin: '0 auto 35px auto' }}>
                                Your logo is the face of your brand — we make it powerful, unique, and unforgettable.<br/>
                                Contact us today for a FREE consultation and custom quote.
                            </p>

                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: '#2563eb', color: '#ffffff',
                                    padding: '14px 28px', borderRadius: '8px',
                                    fontWeight: '600', fontSize: '16px', textDecoration: 'none',
                                    transition: 'all 0.3s ease' 
                                }}>
                                    <MessageSquare size={20} />
                                    Get a FREE Quote
                                </Link>
                                <a href="mailto:bdm@thebdit.net" style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: '#ffffff', color: '#0f172a',
                                    padding: '14px 28px', borderRadius: '8px',
                                    fontWeight: '600', fontSize: '16px', textDecoration: 'none',
                                    border: '1px solid #cbd5e1',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <Mail size={20} />
                                    Email Us
                                </a>
                                <a href="tel:+917700091613" style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    backgroundColor: '#ffffff', color: '#0f172a',
                                    padding: '14px 28px', borderRadius: '8px',
                                    fontWeight: '600', fontSize: '16px', textDecoration: 'none',
                                    border: '1px solid #cbd5e1',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <Phone size={20} />
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCta;
