"use client"
import React from 'react';
import { Phone } from 'lucide-react';

const ContactToolbar = () => {
    return (
        <div className="floating-contact-toolbar">
            <a href="tel:+917718967729" className="contact-item call-btn" aria-label="Call Us">
                <Phone size={20} strokeWidth={2.5} />
                <span className="tooltip-text">Call Now</span>
            </a>
            <a href="https://wa.me/917718967729" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-btn" aria-label="WhatsApp Us">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2C6.485 2 2 6.48 2 12.01c0 1.91.53 3.78 1.56 5.42L2 22l4.76-1.24a9.98 9.98 0 0 0 5.25 1.48c5.53 0 10.01-4.49 10.01-10.02a9.96 9.96 0 0 0-10.01-10.22zm6.27 13.91c-.24.68-1.24 1.25-1.9 1.34-.54.07-1.24.09-3.52-.86-2.91-1.21-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.4.24-.26.63-.37.98-.37.11 0 .22 0 .31.01.27.01.41.03.59.45.23.56.78 1.91.85 2.05.07.14.12.31.02.51-.1.2-.21.32-.37.52-.16.19-.34.42-.49.56-.16.16-.34.34-.15.68.19.32.85 1.41 1.83 2.28 1.26 1.13 2.33 1.47 2.66 1.64.33.17.52.14.71-.07.19-.21.83-.97 1.05-1.3.23-.33.46-.28.78-.16.32.12 2.07 1.02 2.43 1.2.36.19.6.28.68.43.09.15.09.87-.15 1.55z"/>
                </svg>
                <span className="tooltip-text">WhatsApp</span>
            </a>
        </div>
    );
};

export default ContactToolbar;
