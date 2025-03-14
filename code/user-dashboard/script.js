const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const logos = document.querySelectorAll(".logo-image");
const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("hide");
  sideMenu.classList.add("show");
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
  sideMenu.classList.add("hide");
  setTimeout(() => {
    sideMenu.style.display = "none";
  }, 400);
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  logos.forEach((logo) => {
    console.log("hi");
    logo.classList.toggle("active-logo");
  });
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
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
