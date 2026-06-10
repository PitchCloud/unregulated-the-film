/**
 * Vimeo Video Integration
 * Handles autoplay, muting, looping, and fallback behavior
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    videoId: 'YOUR_VIMEO_VIDEO_ID', // Will be replaced with actual ID
    apiUrl: 'https://player.vimeo.com/api/player.js',
  };

  // Initialize video on page load
  function initVideo() {
    const player = document.getElementById('vimeo-player');

    if (!player) {
      console.warn('Vimeo player element not found');
      return;
    }

    // Load Vimeo API if not already loaded
    if (!window.Vimeo) {
      loadVimeoApi();
    } else {
      setupPlayer();
    }
  }

  // Load Vimeo API script
  function loadVimeoApi() {
    const script = document.createElement('script');
    script.src = CONFIG.apiUrl;
    script.async = true;
    script.onload = setupPlayer;
    script.onerror = handleVideoError;
    document.body.appendChild(script);
  }

  // Setup Vimeo player instance
  function setupPlayer() {
    const iframe = document.getElementById('vimeo-player');

    if (!iframe) return;

    try {
      const player = new window.Vimeo.Player(iframe);

      // Set autoplay parameters
      player.play().catch(err => {
        console.log('Autoplay prevented by browser:', err.name);
      });

      // Event listeners
      player.on('play', () => console.log('Video playing'));
      player.on('pause', () => console.log('Video paused'));
      player.on('error', handleVideoError);

    } catch (error) {
      console.error('Failed to initialize Vimeo player:', error);
      handleVideoError();
    }
  }

  // Handle video loading errors
  function handleVideoError() {
    const container = document.querySelector('.hero-video-container');
    const iframe = document.getElementById('vimeo-player');
    const fallback = document.querySelector('.hero-fallback');

    if (iframe) {
      iframe.style.display = 'none';
    }

    if (fallback) {
      fallback.style.display = 'block';
    }

    console.error('Video failed to load. Fallback poster displayed.');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideo);
  } else {
    initVideo();
  }

  // Expose for external access if needed
  window.VideoModule = {
    init: initVideo,
    config: CONFIG,
  };
})();
