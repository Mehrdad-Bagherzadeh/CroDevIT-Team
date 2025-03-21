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

// scroll indicator for blog detail
document.addEventListener("scroll", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    const scrollTop = window.scrollY;
    console.log(document.documentElement.scrollHeight, window.innerHeight);
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const scrollPercentRounded = Math.round(scrollPercent);

    scrollIndicator.style.background = `conic-gradient(#2EC4FF ${scrollPercentRounded}%, #ddd ${scrollPercentRounded}%)`;
  } else "";
});

//FAQ functionality
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".questions-item p");
  const answerSection = document.querySelector(".answer");
  const answerTitle = answerSection.querySelector("h4");
  const answerText = answerSection.querySelector("p");

  let isAnimating = false;

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      if (isAnimating) return;

      // Remove active class from all questions
      questions.forEach((q) => q.classList.remove("active"));

      // Add active class to the clicked question
      question.classList.add("active");

      // Get new title and answer
      const newTitle = question.textContent.trim();
      const newAnswer = question.getAttribute("data-answer");

      // Slide out the current answer section
      answerSection.classList.add("slide-out-right");
      isAnimating = true;

      // Wait for the slide-out animation to finish
      answerSection.addEventListener(
        "animationend",
        () => {
          // Update the content
          answerTitle.textContent = newTitle;
          answerText.textContent = newAnswer;

          // Slide in the new answer section
          answerSection.classList.remove("slide-out-right");
          answerSection.classList.add("slide-in-left");

          // Remove the slide-in class after the animation
          answerSection.addEventListener(
            "animationend",
            () => {
              answerSection.classList.remove("slide-in-left");
              isAnimating = false;
            },
            { once: true }
          );
        },
        { once: true }
      );
    });
  });
});