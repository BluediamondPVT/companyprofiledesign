'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function IPTracker() {
  const pathname = usePathname();
  const lastTracked = useRef(null);

  useEffect(() => {
    // Don't track admin viewing page or api routes
    if (!pathname || pathname.startsWith('/hidden-logs') || pathname.startsWith('/api')) {
      return;
    }

    // Avoid duplicate tracking on re-renders for the same route
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;

    const track = async () => {
      try {
        const res = await fetch('/api/track-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pageVisited: pathname }),
          keepalive: true,
        });

        const data = await res.json();
        
        // Enforce Client-Side Block
        if (data && data.isBlocked) {
          document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f8fafc; font-family: system-ui, sans-serif;">
              <div style="text-align: center; padding: 40px; background-color: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
                <h1 style="color: #ef4444; margin-bottom: 10px;">403 Access Denied</h1>
                <p style="color: #64748b; margin: 0;">You do not have permission to access this resource.</p>
              </div>
            </div>
          `;
        }
      } catch (err) {
        // Silently ignore tracking failures so the user experience is uninterrupted
      }
    };

    track();
  }, [pathname]);

  return null;
}
