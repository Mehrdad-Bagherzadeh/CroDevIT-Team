// for search overlay 
const searchInputs = document.querySelectorAll('.nav__search input, .mobile-search input,.search__icon');
const searchOverlay = document.querySelector('.search-overlay');
const closeSearchBtn = document.querySelector('.close-search');

// Open search overlay when clicking on any search input
searchInputs.forEach(input => {
  input.addEventListener('click', (e) => {
    e.preventDefault();
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus on the overlay search input
    searchOverlay.querySelector('input').focus();
  });
});

// Close search overlay
closeSearchBtn.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close if clicked outside of search content
searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});