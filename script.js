// Theme Switch
const themeToggle = document.getElementById('toggle-theme');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

// Scroll Animations
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

// Loading Animation
const spinner = document.getElementById('spinner');

window.addEventListener('load', () => {
  spinner.style.display = 'none';
});
