import { Kumbh_Sans } from "next/font/google";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';
import ContactToolbar from "./Components/ContactToolbar/ContactToolbar";
import EnquirySidebar from "./Components/EnquirySidebar/EnquirySidebar";
import TrackingScripts from "./Components/Common/TrackingScripts";

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
        <TrackingScripts />
      </body>
    </html>
  );
}
