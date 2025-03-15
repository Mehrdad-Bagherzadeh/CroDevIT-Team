//side navbar
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".sidebar .close-btn");
  const hamburger = document.querySelector(".hamburger");

  // Toggle sidebar visibility
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  const listItems = document.querySelectorAll(".sidebar ul li");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove 'selected' class from all list items
      listItems.forEach((li) => li.classList.remove("selected"));

      // Add 'selected' class to the clicked item
      item.classList.add("selected");
    });
  });

  const conversationSection = document.querySelector(
    ".chat-bot-conversation-section"
  );
  const sidebarBtn = document.querySelector(".conversation-sidebar-btn");
  const chatBotCloseBtn = document.querySelector(".chat-bot-close-btn");

  // Toggle sidebar visibility
  sidebarBtn.addEventListener("click", () => {
    conversationSection.classList.add("active");
  });

  chatBotCloseBtn.addEventListener("click", () => {
    conversationSection.classList.remove("active");
  });

  const sidebarLinks = document.querySelectorAll(".sidebar ul li");
  const contentContainers = document.querySelectorAll(".content-container");

  sidebarLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      // Remove 'selected' class from all sidebar items
      sidebarLinks.forEach((item) => item.classList.remove("selected"));

      // Add 'selected' class to the clicked item
      link.classList.add("selected");

      // Hide all content containers
      contentContainers.forEach((container) =>
        container.classList.remove("active")
      );

      // Show the corresponding content container
      contentContainers[index].classList.add("active");
    });
  });
});

//chat-bot functionality
function addChatMessageListener() {
  const messageInput = document.getElementById("chatMessage");
  if (messageInput) {
    messageInput.addEventListener("keydown", function (event) {
      console.log("Key pressed:", event.key); // Debugging line
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (form submission)
        sendMessage();
      }
    });
  }
}

function sendMessage() {
  console.log("sendMessage called"); // Debugging line
  const messageInput = document.getElementById("chatMessage");
  const message = messageInput.value.trim();
  if (message) {
    const messagesContainer = document.querySelector(".messages");

    const messageBox = document.createElement("p");
    messageBox.textContent = message;
    messageBox.classList.add("user-message");
    messagesContainer.appendChild(messageBox);

    messageInput.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

addChatMessageListener();
