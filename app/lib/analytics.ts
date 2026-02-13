type AnalyticsEvent = {
  event: string;
  properties?: Record<string, any>;
};

export function trackEvent({ event, properties }: AnalyticsEvent) {
  if (typeof window === 'undefined') return;

  // Vercel Analytics
  if (window.va) {
    window.va('event', event, properties);
  }

  // Segment
  if (window.analytics) {
    window.analytics.track(event, properties);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event, properties);
  }
}

export function trackFeatureClick(featureId: string, featureTitle: string) {
  trackEvent({
    event: 'Feature Clicked',
    properties: { featureId, featureTitle },
  });
}

export function trackFeatureHover(featureId: string, duration: number) {
  trackEvent({
    event: 'Feature Hovered',
    properties: { featureId, duration },
  });
}

export function trackScrollDepth(depth: number) {
  trackEvent({
    event: 'Scroll Depth',
    properties: { depth },
  });
}

export function trackSearch(query: string, resultsCount: number) {
  trackEvent({
    event: 'Search',
    properties: { query, resultsCount },
  });
}

export function trackVideoPlay(videoId: string, videoTitle: string) {
  trackEvent({
    event: 'Video Played',
    properties: { videoId, videoTitle },
  });
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    va?: (event: string, name: string, properties?: Record<string, any>) => void;
    analytics?: {
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}
