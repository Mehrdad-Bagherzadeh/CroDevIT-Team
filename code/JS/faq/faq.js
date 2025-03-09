document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      this.classList.add("active");
    });
  });

  document.querySelectorAll(".faq-question").forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      const isExpanded = parent.classList.contains("active");

      // Toggle active class to expand/collapse the answer
      parent.classList.toggle("active", !isExpanded);

      // Update ARIA expanded state
      item.setAttribute("aria-expanded", !isExpanded);

      // Swap Chevron icons
      const arrow = item.querySelector(".arrow");
      arrow.classList.toggle("fa-chevron-down", isExpanded);
      arrow.classList.toggle("fa-chevron-up", !isExpanded);
    });
  });
});
