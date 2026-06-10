/**
 * Forms Module
 * Handles newsletter signups and form submissions
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    filmNewsletter: {
      endpoint: null, // TODO: connect film newsletter MailerLite form
      list: 'film',
    },
    hoaNewsletter: {
      endpoint: 'https://assets.mailerlite.com/jsonp/2421571/forms/189861714140858208/subscribe',
      list: 'hoa',
    },
    contactEndpoint: null, // TODO: set Hostinger PHP endpoint after domain transfer
  };

  // Form selectors
  const SELECTORS = {
    filmNewsletterForm: '#film-newsletter',
    hoaNewsletterForm: '#hoa-newsletter',
    stickyFooterClose: '#sticky-footer-close',
    stickyFooter: '#sticky-footer',
    supportBtn: '#support-cta-1',
    donateBtn: '#donate-btn',
    shopBtn: '#shop-btn',
    shareBtn: '#share-cta',
  };

  // Initialize forms
  function init() {
    bindFormEvents();
    bindButtonEvents();
    initStickyFooter();
    initContactModal();
  }

  // Bind form submission events
  function bindFormEvents() {
    const filmForm = document.querySelector(SELECTORS.filmNewsletterForm);
    const hoaForm = document.querySelector(SELECTORS.hoaNewsletterForm);

    if (filmForm) {
      filmForm.addEventListener('submit', handleFormSubmit);
    }

    if (hoaForm) {
      hoaForm.addEventListener('submit', handleFormSubmit);
    }
  }

  // Handle form submissions
  function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    const list = form.dataset.list;

    // Validate email
    if (!validateEmail(email)) {
      showError(form, 'Please enter a valid email address.');
      return;
    }

    // Submit to email service
    submitEmail(email, list, form);
  }

  // Validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Submit email to newsletter service
  function submitEmail(email, list, form) {
    const config = CONFIG[list + 'Newsletter'];

    if (!config || !config.endpoint) {
      // No endpoint configured — show success silently (film newsletter not wired yet)
      showSuccess(form);
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const body = new URLSearchParams();
    body.append('fields[email]', email);
    body.append('ml_submit', '1');
    body.append('anticsrf', 'true');

    fetch(config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.success) {
        showSuccess(form);
      } else {
        showError(form, 'Subscription failed. Please try again.');
      }
    })
    .catch(function() {
      showError(form, 'Network error. Please try again.');
    })
    .finally(function() {
      if (submitBtn) submitBtn.disabled = false;
    });
  }

  // Show success message
  function showSuccess(form) {
    const input = form.querySelector('input[type="email"]');
    const originalPlaceholder = input.placeholder;

    input.value = '';
    input.placeholder = 'Thank you! Check your email.';
    input.style.backgroundColor = '#f0f0f0';

    // Reset after 3 seconds
    setTimeout(() => {
      input.placeholder = originalPlaceholder;
      input.style.backgroundColor = '';
    }, 3000);
  }

  // Show error message
  function showError(form, message) {
    const input = form.querySelector('input[type="email"]');
    input.style.borderColor = '#d32f2f';
    console.error(message);

    setTimeout(() => {
      input.style.borderColor = '';
    }, 3000);
  }

  // Bind CTA button events
  function bindButtonEvents() {
    const supportBtn = document.querySelector(SELECTORS.supportBtn);
    const donateBtn = document.querySelector(SELECTORS.donateBtn);
    const shopBtn = document.querySelector(SELECTORS.shopBtn);
    const shareBtn = document.querySelector(SELECTORS.shareBtn);

    if (supportBtn) supportBtn.addEventListener('click', handleDonate);
    if (donateBtn) donateBtn.addEventListener('click', handleDonate);
    if (shopBtn) shopBtn.addEventListener('click', handleShop);
    if (shareBtn) shareBtn.addEventListener('click', handleShare);
  }

  // Handle donate button
  function handleDonate(e) {
    e.preventDefault();
    window.open('https://square.link/u/BxYhlvkj', '_blank');
  }

  // Handle shop button
  function handleShop(e) {
    e.preventDefault();
    window.open('https://unregulatedmerch.printful.me', '_blank');
  }

  // Handle share button
  function handleShare(e) {
    e.preventDefault();

    const shareData = {
      title: 'Unregulated: How HOAs Threaten the American Dream',
      text: 'Check out this documentary about HOA reform.',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(err => console.log('Share failed:', err));
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  }

  // Initialize sticky footer
  function initStickyFooter() {
    const closeBtn = document.querySelector(SELECTORS.stickyFooterClose);
    const stickyFooter = document.querySelector(SELECTORS.stickyFooter);

    if (closeBtn && stickyFooter) {
      closeBtn.addEventListener('click', () => {
        stickyFooter.classList.add('hidden');
        // Save preference in localStorage (7-day cookie equivalent)
        localStorage.setItem('sticky-footer-closed', Date.now());
      });

      // Check if user closed it recently
      const closedTime = localStorage.getItem('sticky-footer-closed');
      if (closedTime) {
        const daysSince = (Date.now() - parseInt(closedTime)) / (1000 * 60 * 60 * 24);
        if (daysSince < 7) {
          stickyFooter.classList.add('hidden');
        }
      }
    }
  }

  // Contact modal
  function initContactModal() {
    const fab = document.getElementById('contact-fab');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('contact-modal-close');
    const overlay = document.getElementById('contact-modal-overlay');
    const form = document.getElementById('contact-form');

    if (!fab || !modal) return;

    function openModal() {
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      modal.querySelector('input, textarea').focus();
    }

    function closeModal() {
      modal.hidden = true;
      document.body.style.overflow = '';
    }

    fab.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('contact-form-status');
      const submitBtn = form.querySelector('.contact-submit');
      const name = form.querySelector('#contact-name').value.trim();
      const email = form.querySelector('#contact-email').value.trim();
      const message = form.querySelector('#contact-message').value.trim();

      if (!name || !validateEmail(email) || !message) {
        status.textContent = 'Please fill in all fields with a valid email address.';
        status.className = 'contact-form-status error';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      status.textContent = '';
      status.className = 'contact-form-status';

      fetch(CONFIG.contactEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      .then(function(res) {
        if (res.ok) {
          status.textContent = 'Message sent! We\'ll be in touch soon.';
          status.className = 'contact-form-status success';
          form.reset();
          setTimeout(closeModal, 2500);
        } else {
          throw new Error('Server error');
        }
      })
      .catch(function() {
        status.textContent = 'Something went wrong. Please try again.';
        status.className = 'contact-form-status error';
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose module
  window.FormsModule = {
    init,
    validateEmail,
    submitEmail,
  };
})();
