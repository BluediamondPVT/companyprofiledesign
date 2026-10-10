"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function TrackingScripts() {
  const [loadTracking, setLoadTracking] = useState(false);

  useEffect(() => {
    // 1. Load instantly on first real user interaction
    const handleUserInteraction = () => {
      setLoadTracking(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("mousemove", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("click", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction, { passive: true });

    // 2. Fallback: Load after 8s idle if no user interaction occurs
    const timer = setTimeout(() => {
      setLoadTracking(true);
    }, 8000);

    return () => {
      cleanup();
      clearTimeout(timer);
    };
  }, []);

  if (!loadTracking) return null;

  return (
    <>
      {/* 1. Google Ads Tag */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17523857833"
      />

      {/* Initialize dataLayer and config */}
      <Script id="google-analytics-config" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17523857833');
        `}
      </Script>

      {/* 2. Google Tag Manager (GTM handles GA4 & event tags) */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PVBN95XL');
        `}
      </Script>
    </>
  );
}
