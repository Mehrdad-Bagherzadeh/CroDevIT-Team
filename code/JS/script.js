'use strict'
// index page
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link
document.querySelectorAll('.mobile-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});
let lastScrollTop = 0;
const ad = document.querySelector('.ad');
const nav = document.querySelector('nav');
const scrollThreshold = 100; // Adjust this value as needed

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Handle ad visibility
    if (currentScroll > scrollThreshold) {
        ad.classList.add('hide');
        nav.classList.add('sticky');
    } else {
        ad.classList.remove('hide');
        nav.classList.remove('sticky');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// Optional: Add smooth scroll behavior to the whole page
document.documentElement.style.scrollBehavior = 'smooth';
