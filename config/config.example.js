/**
 * UnregulatedTheFilm Configuration Template
 *
 * Copy this file to config.js and update with your settings.
 * The config.js file is gitignored and should never be committed.
 */

const CONFIG = {
  // Environment
  environment: 'development', // 'development' or 'production'

  // Analytics
  analytics: {
    enabled: true,
    googleAnalyticsId: 'G_YOUR_GA_ID_HERE',
    trackingEnabled: true,
  },

  // API Endpoints
  api: {
    baseUrl: 'http://localhost:3000',
    endpoints: {
      streaming: '/api/streaming',
      content: '/api/content',
      engagement: '/api/engagement',
      analytics: '/api/analytics',
    },
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/unregulatedthefilm',
    instagram: 'https://instagram.com/unregulatedthefilm',
    twitter: 'https://twitter.com/unregulatedfilm',
    youtube: 'https://youtube.com/unregulatedthefilm',
  },

  // Streaming Platforms
  streaming: {
    platforms: [
      {
        name: 'Netflix',
        url: 'https://netflix.com',
        available: true,
      },
      {
        name: 'Amazon Prime',
        url: 'https://primevideo.com',
        available: true,
      },
    ],
  },

  // Feature Flags
  features: {
    emailCapture: true,
    socialSharing: true,
    comments: true,
    userAccounts: false, // Enable when user system is ready
    premiumContent: false, // Enable when monetization is ready
  },

  // SEO
  seo: {
    siteTitle: 'UnregulatedTheFilm',
    siteDescription: 'Documentary platform for unfiltered storytelling',
    keywords: 'documentary, film, independent, streaming',
    ogImage: '/images/og-image.jpg',
  },

  // Contact
  contact: {
    email: 'info@unregulatedthefilm.com',
    supportEmail: 'support@unregulatedthefilm.com',
  },
};

// Export for use in scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
