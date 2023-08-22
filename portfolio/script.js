const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
});

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true
});

const elementsToReveal = ['.home-text', '.home-image', '.about', '.services', '.cta', '.resume'];

elementsToReveal.forEach((selector, index) => {
  sr.reveal(selector, { delay: 100 * (index + 1), origin: 'top' });
});
