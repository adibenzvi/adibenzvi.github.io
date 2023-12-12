// Navigation highlighting
const currentPage = location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${currentPage}`)) {
    link.classList.add('active');
  }
});