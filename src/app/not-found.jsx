import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "404 - Page Not Found | Company Profile Design",
  description: "The page you are looking for does not exist or has been moved. Explore our company profile design and branding services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 20px',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '96px',
          fontWeight: '900',
          color: 'var(--primary-color, #fe5e15)',
          lineHeight: '1',
          marginBottom: '16px'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '16px'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#64748b',
          lineHeight: '1.6',
          marginBottom: '32px'
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us help you find what you are looking for.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              backgroundColor: 'var(--primary-color, #fe5e15)',
              color: '#ffffff',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Back to Homepage
          </Link>
          <Link
            href="/company-profile-writing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Profile Writing
          </Link>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
