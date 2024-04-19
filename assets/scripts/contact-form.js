document.querySelector('.contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const confirmationMessage = document.querySelector('.confirmation-message');
  confirmationMessage.textContent = 'Thank you for your message. We will get back to you shortly!';

  // Optionally, clear the form fields
  document.querySelector('.contact-name').value = '';
  document.querySelector('.contact-email').value = '';
  document.querySelector('.contact-message').value = '';
});
