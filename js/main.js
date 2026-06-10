/**
 * Unregulated: How HOAs Threaten the American Dream
 * Main JavaScript Entry Point
 *
 * This file serves as the primary JavaScript entry point for the website.
 * It initializes core functionality and coordinates other modules.
 */

(function() {
  'use strict';

  /**
   * Initialize the application
   */
  function init() {
    console.log('Unregulated - The Film Initialized');

    // Initialize smooth scrolling for anchor links
    initSmoothScroll();

    // Initialize scroll animations
    initScrollAnimations();
  }

  /**
   * Smooth scrolling for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just '#'
        if (href === '#') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Initialize scroll-triggered animations
   */
  function initScrollAnimations() {
    // Only run if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observe elements with animation class
      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
      });
    }
  }

  /**
   * Handle page visibility changes for analytics
   */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      console.log('Page hidden');
    } else {
      console.log('Page visible');
    }
  });

  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
