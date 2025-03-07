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
const ad = document.querySelector(".ad");
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");

// Load the nav and footer content into the corresponding elements
loadHTMLComponent(ad, "./components/ad.html");
loadHTMLComponent(navbar, "./components/nav.html");
loadHTMLComponent(footer, "./components/footer.html");
