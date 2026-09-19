import { Kumbh_Sans } from "next/font/google";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/main.css";
import './assets/responsive.css';
import dynamic from 'next/dynamic';
const ContactToolbar = dynamic(() => import("./Components/ContactToolbar/ContactToolbar"));
const EnquirySidebar = dynamic(() => import("./Components/EnquirySidebar/EnquirySidebar"));
import TrackingScripts from "./Components/Common/TrackingScripts";
import IPTracker from "./Components/Common/IPTracker";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--body-color-font',
  display: 'swap',
});

const clashdisplay = localFont({
  src: './assets/fonts/ClashDisplay.ttf',
  variable: '--heading-font',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.companyprofiledesign.in'),
  title: {
    default: "Company Profile Design | Profile Design Company",
    template: "%s",
  },
  description: "Leading company profile design and corporate branding agency in India. We craft bespoke company profiles, brochures, catalogues, and corporate presentations.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Company Profile Design" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Company Profile Design India",
              "url": "https://www.companyprofiledesign.in",
              "priceRange": "₹2500 - ₹15000",
              "telephone": "+917700091613",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thane",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Company Profile Design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Brochure Design"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Catalog Design"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${kumbh_sans.variable} ${clashdisplay.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVBN95XL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <main id="main-content">
          {children}
        </main>
        <ContactToolbar />
        <EnquirySidebar />
        <TrackingScripts />
        <IPTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
