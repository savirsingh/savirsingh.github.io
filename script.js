// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Listen for click events on the theme toggle button
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle('dark');

  // Check if the 'dark' class is present and save the theme preference to localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check if a theme preference is stored in localStorage
if (localStorage.getItem('theme') === 'dark') {
  // If 'dark' theme is stored, set the 'dark' class on the body element
  document.body.classList.add('dark');
}

