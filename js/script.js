'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value === '') {
    email.classList.add('invalid-input');
    errorMessage.classList.remove('hidden');
  } else {
    email.classList.add('valid-input');
    errorMessage.classList.add('hidden');
  }
});
