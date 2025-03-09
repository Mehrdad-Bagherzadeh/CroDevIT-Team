// Select all elements with the class 'filter-item'
document.querySelectorAll('.filter-item').forEach(item => {
    // Get the input and popup list elements within the current filter item
    const input = item.querySelector('input');
    const popup = item.querySelector('.popup-list');
    const icon = item.querySelector('.icon');

    // Add click event listener to the filter item to show the popup list
    item.addEventListener('click', (e) => {
        // Prevent the default action if the input is clicked
        e.preventDefault();
        // Toggle the active class on the filter item
        item.classList.toggle('active');
        // Show or hide the popup list
        popup.style.display = item.classList.contains('active') ? 'block' : 'none';
    });

    // Add click event listeners to each list item in the popup list
    popup.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            // Set the input value to the text content of the clicked list item
            input.value = li.textContent;
            // Hide the popup list
            popup.style.display = 'none';
            // Remove the active class from the filter item
            item.classList.remove('active');
        });
    });

    // Add click event listener to the document to hide the popup list when clicking outside
    document.addEventListener('click', (e) => {
        // Check if the click target is outside the current filter item
        if (!item.contains(e.target)) {
            // Hide the popup list
            popup.style.display = 'none';
            // Remove the active class from the filter item
            item.classList.remove('active');
        }
    });
});