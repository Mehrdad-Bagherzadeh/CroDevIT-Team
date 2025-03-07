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
const ad = document.querySelector(".ad");
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");

// Load the nav and footer content into the corresponding elements
loadHTMLComponent(supportChat, "./components/support.html");
loadHTMLComponent(ad, "./components/ad.html");
loadHTMLComponent(navbar, "./components/nav.html");
loadHTMLComponent(footer, "./components/footer.html");

// Function to toggle the visibility of the chat box
function toggleChatBox() {
  const chatBox = document.getElementById("chatBox");
  const isOpen = chatBox.classList.contains("open");

  if (isOpen) {
    // Close the chat box
    chatBox.classList.remove("open");
    chatBox.setAttribute("aria-hidden", "true");
  } else {
    // Open the chat box
    chatBox.classList.add("open");
    chatBox.setAttribute("aria-hidden", "false");
  }
}
