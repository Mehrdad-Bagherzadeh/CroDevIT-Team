//LOAD COMPONENTS SCRIPT
// Function to load HTML content into an element
function loadHTMLComponent(targetElement, filePath, callback) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      targetElement.innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading HTML component:", error));
}

// Get the <nav> and <footer> elements
const supportChat = document.getElementById("chatSupportComponent");
const ad = document.querySelector(".ad");
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");

// Load the nav and footer content into the corresponding elements
loadHTMLComponent(
  supportChat,
  "./components/support.html",
  addChatMessageListener
);
loadHTMLComponent(ad, "./components/ad.html");
loadHTMLComponent(navbar, "./components/nav.html");
loadHTMLComponent(footer, "./components/footer.html");

//CHAT SCRIPT
// Function to toggle the visibility of the chat box
function toggleChatBox() {
  const chatButton = document.getElementById("chatButton");
  const chatBox = document.getElementById("chatBox");
  chatBox.classList.toggle("open");
  chatBox.setAttribute(
    "aria-hidden",
    chatBox.classList.contains("open") ? "false" : "true"
  );
  chatButton.classList.toggle("deactivated");
}

function addChatMessageListener() {
  const messageInput = document.getElementById("chatMessage");
  if (messageInput) {
    messageInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (form submission)
        sendMessage();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  addChatMessageListener();
});

function sendMessage() {
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
