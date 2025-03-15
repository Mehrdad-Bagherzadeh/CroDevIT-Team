document.addEventListener("DOMContentLoaded", () => {
  const sessionContainer = document.querySelector(".sessions-section");

  if (sessionContainer) {
    function addAccordionListeners() {
      document.querySelectorAll(".season").forEach((question) => {
        question.addEventListener("click", function () {
          const isActive = this.classList.contains("active");

          if (isActive) {
            this.classList.remove("active");
            this.setAttribute("aria-expanded", "false");
            this.nextElementSibling.style.maxHeight = "0"; // Collapse the answer
          } else {
            this.classList.add("active");
            this.setAttribute("aria-expanded", "true");
            const answer = this.nextElementSibling;
            answer.style.maxHeight = answer.scrollHeight + 20 + "px"; // Expand the answer
          }
        });
      });
    }

    addAccordionListeners();
  } else {
    console.error("Element with class 'session-container' not found.");
  }
});
