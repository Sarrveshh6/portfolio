const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function isGaEnabled() {
  return Boolean(GA_ID && typeof window !== 'undefined');
}

/** Load gtag script once */
export function initGoogleAnalytics() {
  if (!GA_ID || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

/** Track SPA page views (call on route change) */
export function trackPageView(path) {
  if (!isGaEnabled()) return;
  window.gtag('config', GA_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Custom events — resume download, form submit, etc. */
export function trackEvent(eventName, params = {}) {
  if (!isGaEnabled()) return;
  window.gtag('event', eventName, params);
}
