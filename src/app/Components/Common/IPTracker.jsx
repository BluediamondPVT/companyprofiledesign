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
        await fetch('/api/track-ip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pageVisited: pathname }),
          keepalive: true,
        });
      } catch (err) {
        // Silently ignore tracking failures so the user experience is uninterrupted
      }
    };

    track();
  }, [pathname]);

  return null;
}
