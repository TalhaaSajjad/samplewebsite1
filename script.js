const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
  });
});

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thanks for reaching out! This form is currently static. Please email youremail@example.com to connect.');
});
