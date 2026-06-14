const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const contactForm = document.querySelector('#contact-form');
const contactStatus = document.querySelector('#contact-status');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
  });
});

contactForm?.addEventListener('submit', async event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name')?.toString().trim(),
    email: formData.get('email')?.toString().trim(),
    message: formData.get('message')?.toString().trim(),
  };

  if (!data.name || !data.email || !data.message) {
    contactStatus.textContent = 'Please complete all fields before sending.';
    return;
  }

  contactStatus.textContent = 'Sending message...';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Server error');
    }

    const result = await response.json();
    contactStatus.textContent = result.message || 'Message sent successfully.';
    contactForm.reset();
  } catch (error) {
    contactStatus.textContent = 'Unable to send message. Please try again later.';
    console.error(error);
  }
});
