import { Kumbh_Sans } from "next/font/google";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';
import ContactToolbar from "./Components/ContactToolbar/ContactToolbar";
import EnquirySidebar from "./Components/EnquirySidebar/EnquirySidebar";
import Script from "next/script";

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
  display: 'swap',
});

const clashdisplay = localFont({ 
  src: './assets/fonts/ClashDisplay.ttf',
  variable: '--heading-font',
  display: 'swap',
});

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Company Profile Design" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Google Ads Tag (gtag.js) - Defer with lazyOnload */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17523857833" 
          strategy="lazyOnload" 
        />
        <Script id="google-ads-gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17523857833');
          `}
        </Script>

        {/* Google Analytics Tag (gtag.js) - Defer with lazyOnload */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=UA-120371393-6" 
          strategy="lazyOnload" 
        />
        <Script id="google-analytics-gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-120371393-6');
          `}
        </Script>

        {/* Google Tag Manager - Defer with lazyOnload */}
        <Script id="google-tag-manager-init" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVBN95XL');
          `}
        </Script>
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
        {children}
        <ContactToolbar />
        <EnquirySidebar />
      </body>
    </html>
  );
}
