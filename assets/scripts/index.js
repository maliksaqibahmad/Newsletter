// Dom Elements

const subscribeBtn = document.querySelector('#submit');
const main = document.querySelector('main');
const dismissBtn = document.querySelector('.dismiss');
const modal = document.querySelector('.success-modal');
const emailField = document.querySelector('#user-email')
const errorEmailLabel = document.querySelector('.error-email')

// Functions

const invalidEmail = email => {
  if (!emailField.value.match(validRegex)) {
    errorEmailLabel.style.color = 'hsl(4, 100%, 67%)';
    emailField.style.color = 'hsl(4, 100%, 67%)';
    emailField.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
    emailField.style.borderColor = 'hsl(4, 100%, 67%)';
  } 
}

const validEmail = email => {
  if (emailField.value.match(validRegex)) {
    main.style.display = 'none';
    modal.style.display = 'block';
  }
}

const dismiss = () => {
  main.style.display = 'inline-flex';
  modal.style.display = 'none';
  errorEmailLabel.style.color = 'hsla(4, 100%, 67%, 0)';
  emailField.value = '';
  emailField.style.color = 'black';
  emailField.style.backgroundColor = 'white';
  emailField.style.borderColor = 'black';
}

const validateEmail = email => {

  // Check if input is valid email format
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailField.value.match(validRegex)) {
    main.style.display = 'none';
    modal.style.display = 'block';
  } else {
    errorEmailLabel.style.color = 'hsl(4, 100%, 67%)';
    emailField.style.color = 'hsl(4, 100%, 67%)';
    emailField.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
    emailField.style.borderColor = 'hsl(4, 100%, 67%)';
  } 
}

// Event Listeners

subscribeBtn.addEventListener('click', validateEmail);

dismissBtn.addEventListener('click', dismiss);



