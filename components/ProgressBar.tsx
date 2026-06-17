'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.3 });

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Stop the progress bar when the pathname or searchParams change
    NProgress.done();

    // In Next.js App Router, we can capture link clicks to start the progress bar
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href) {
        const url = new URL(target.href);
        // Only trigger for internal links that actually change the route
        if (
          url.origin === window.location.origin &&
          (url.pathname !== window.location.pathname || url.search !== window.location.search) &&
          !target.target
        ) {
          NProgress.start();
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [pathname, searchParams]);

  return null;
}