"use client";
import { useEffect } from "react";

export default function TrackingScripts() {
  useEffect(() => {
    let loaded = false;

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
      window.removeEventListener("pointerdown", loadAnalytics);
      window.removeEventListener("mousemove", loadAnalytics);
      window.removeEventListener("keydown", loadAnalytics);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());

      // 1. Google Ads Tag
      const adsScript = document.createElement("script");
      adsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17523857833";
      adsScript.async = true;
      document.head.appendChild(adsScript);
      gtag("config", "AW-17523857833");

      // 2. Google Analytics Tag
      const gaScript = document.createElement("script");
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-120371393-6";
      gaScript.async = true;
      document.head.appendChild(gaScript);
      gtag("config", "UA-120371393-6");

      // 3. Google Tag Manager
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-PVBN95XL");
    };

    // Trigger on first user interaction
    window.addEventListener("scroll", loadAnalytics, { passive: true, once: true });
    window.addEventListener("touchstart", loadAnalytics, { passive: true, once: true });
    window.addEventListener("pointerdown", loadAnalytics, { passive: true, once: true });
    window.addEventListener("mousemove", loadAnalytics, { passive: true, once: true });
    window.addEventListener("keydown", loadAnalytics, { passive: true, once: true });

    // Fallback timer: load after 4 seconds if user doesn't interact
    const timer = setTimeout(loadAnalytics, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
      window.removeEventListener("pointerdown", loadAnalytics);
      window.removeEventListener("mousemove", loadAnalytics);
      window.removeEventListener("keydown", loadAnalytics);
    };
  }, []);

  return null;
}
