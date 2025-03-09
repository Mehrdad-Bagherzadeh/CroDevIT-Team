document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const faqContainer = document.querySelector(".faq-container");

  // Define FAQs for each category
  const faqData = {
    membership: [
      {
        question: "How do I sign up?",
        answer: "You can sign up via our homepage.",
      },
      {
        question: "Can I cancel my membership?",
        answer: "Yes, you can cancel anytime.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards and PayPal.",
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, refunds are available within 30 days.",
      },
    ],
    shipping: [
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship worldwide.",
      },
      {
        question: "How long does delivery take?",
        answer: "Standard shipping takes 5-7 days.",
      },
    ],
  };

  // Function to update the FAQ section with a smooth fade-in effect
  function updateFAQ(category) {
    faqContainer.style.opacity = "0"; // Start fade-out

    setTimeout(() => {
      faqContainer.innerHTML = ""; // Clear existing FAQs

      faqData[category].forEach(({ question, answer }) => {
        const faqItem = document.createElement("div");
        faqItem.classList.add("faq-item");

        faqItem.innerHTML = `
            <div class="faq-question" aria-expanded="false">
              ${question}
              <img
                src="./assets/Images/faq/down-arrow.svg"
                class="arrow"
                alt="arrow icon"
              />
            </div>
            <div class="faq-answer">${answer}</div>
          `;

        faqContainer.appendChild(faqItem);
      });

      faqContainer.style.opacity = "1"; // Fade-in effect
      addAccordionListeners(); // Re-attach event listeners for toggling FAQ answers
    }, 300);
  }

  // Function to toggle FAQ answers with animation
  function addAccordionListeners() {
    document.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", function () {
        const isActive = this.classList.contains("active");
        document.querySelectorAll(".faq-question").forEach((q) => {
          q.classList.remove("active");
          q.setAttribute("aria-expanded", "false");
          q.nextElementSibling.style.maxHeight = "0"; // Collapse all
        });

        if (!isActive) {
          this.classList.add("active");
          this.setAttribute("aria-expanded", "true");
          const answer = this.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + 20 + "px"; // Expand the answer
        }
      });
    });
  }

  // Add event listeners to category buttons
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryButtons.forEach((b) => b.classList.remove("active")); // Remove active class
      this.classList.add("active"); // Set active class
      updateFAQ(this.getAttribute("data-category")); // Update FAQ content
    });
  });

  // Initialize with the first category
  updateFAQ("membership");
});
