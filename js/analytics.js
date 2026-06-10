/**
 * Analytics Module
 * Handles Google Analytics 4 tracking
 */

(function() {
  'use strict';

  // Configuration
  const GA_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 Measurement ID

  // Initialize Google Analytics
  function init() {
    loadGoogleAnalytics();
    trackPageView();
    bindAnalyticsEvents();
  }

  // Load Google Analytics script
  function loadGoogleAnalytics() {
    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics ID not configured');
      return;
    }

    // Add GA script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
    });
  }

  // Track page view
  function trackPageView() {
    if (!window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Bind event tracking
  function bindAnalyticsEvents() {
    // Track CTA clicks
    trackButtonClicks('#support-cta-1', 'support_film');
    trackButtonClicks('#donate-btn', 'donate');
    trackButtonClicks('#shop-btn', 'shop');
    trackButtonClicks('#share-cta', 'share');

    // Track form submissions
    trackFormSubmission('#film-newsletter-form', 'film_newsletter_signup');
    trackFormSubmission('#hoa-newsletter-form', 'hoa_newsletter_signup');

    // Track scroll depth
    trackScrollDepth();

    // Track video engagement (if Vimeo player available)
    trackVideoEngagement();
  }

  // Track button clicks
  function trackButtonClicks(selector, eventName) {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener('click', () => {
        if (window.gtag) {
          window.gtag('event', eventName, {
            button_text: button.textContent.trim(),
          });
        }
      });
    }
  }

  // Track form submissions
  function trackFormSubmission(selector, eventName) {
    const form = document.querySelector(selector);
    if (form) {
      form.addEventListener('submit', () => {
        if (window.gtag) {
          window.gtag('event', eventName, {
            form_id: form.id,
          });
        }
      });
    }
  }

  // Track scroll depth
  function trackScrollDepth() {
    let scrollDepth = 0;
    const triggers = [25, 50, 75, 100];

    window.addEventListener('scroll', () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      triggers.forEach(trigger => {
        if (scrollPercent >= trigger && scrollDepth < trigger) {
          scrollDepth = trigger;
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              depth_percentage: trigger,
            });
          }
        }
      });
    });
  }

  // Track video engagement
  function trackVideoEngagement() {
    // Check if Vimeo API is available
    if (typeof window.Vimeo === 'undefined') return;

    const iframe = document.getElementById('vimeo-player');
    if (!iframe) return;

    try {
      const player = new window.Vimeo.Player(iframe);

      player.on('play', () => {
        if (window.gtag) {
          window.gtag('event', 'video_play', {
            video_title: 'Unregulated Film Trailer',
          });
        }
      });

      player.on('ended', () => {
        if (window.gtag) {
          window.gtag('event', 'video_complete', {
            video_title: 'Unregulated Film Trailer',
          });
        }
      });
    } catch (error) {
      console.log('Video tracking unavailable:', error);
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose module
  window.AnalyticsModule = {
    init,
    trackPageView,
  };
})();
