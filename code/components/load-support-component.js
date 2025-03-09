// Function to load HTML content into an element
function loadHTMLComponent(targetElement, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      targetElement.innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML component:", error));
}

// Get the <nav> and <footer> elements
const supportChat = document.getElementById("chatSupportComponent");

// Load the nav and footer content into the corresponding elements
loadHTMLComponent(supportChat, "./components/support.html");

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
