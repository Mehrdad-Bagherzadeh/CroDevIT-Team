"use strict";
// index page
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});
document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".mobile-menu") &&
    !event.target.closest(".hamburger")
  ) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  }
});
let lastScrollTop = 0;
const ad = document.querySelector(".ad");
const nav = document.querySelector("nav");
const scrollThreshold = 20; //it's the height we scroll

window.addEventListener(
  "scroll",
  () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Handle ad visibility
    if (currentScroll > scrollThreshold) {
      ad.classList.add("hide");
      nav.classList.add("sticky");
    } else {
      ad.classList.remove("hide");
      nav.classList.remove("sticky");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  { passive: true }
);

// Optional: Add smooth scroll behavior to the whole page
document.documentElement.style.scrollBehavior = "smooth";
// for search overlay
const searchInputs = document.querySelectorAll(
  ".search-container input, .mobile-search input,.search-icon"
);
const searchOverlay = document.querySelector(".search-overlay");
const closeSearchBtn = document.querySelector(".close-search");

// Open search overlay when clicking on any search input
searchInputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    e.preventDefault();
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    // Focus on the overlay search input
    searchOverlay.querySelector("input").focus();
  });
});

// Close search overlay
closeSearchBtn.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close if clicked outside of search content
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});
