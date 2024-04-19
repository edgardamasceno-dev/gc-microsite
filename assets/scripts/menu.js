// This script toggles the visibility of the navigation menu on small screens
document.querySelector('.hamburger').addEventListener('click', function () {
  // Selects the navigation menu and toggles the 'active' class
  document.querySelector('.nav-menu').classList.toggle('active');
});
