function showAlert(event) {
  event.preventDefault(); // Prevent the form from submitting
  document.getElementById('alertBox').style.display = 'block';
}

function closeAlert() {
  document.getElementById('alertBox').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  const firstname = document.getElementById('firstname-id');
  const lastname = document.getElementById('lastname');
  const email = document.getElementById('email');
  const query = document.querySelector('input[name="query"]:checked');
  const message = document.getElementById('focus');
  const consent = document.getElementById('consent-error');

  const firstnameError = document.getElementById('firstname-error');
  const lastnameError = document.getElementById('lastname-error');
  const emailError = document.getElementById('email-error');
  const queryError = document.getElementById('query-error');
  const messageError = document.getElementById('message-error');
  const consentError = document.getElementById('consent-error');

  // Clear previous error styles
  firstname.classList.remove('error');
  lastname.classList.remove('error');
  email.classList.remove('error');
  message.classList.remove('error');
  consent.classList.remove('error');
  
  firstnameError.style.display = 'none';
  lastnameError.style.display = 'none';
  emailError.style.display = 'none';
  queryError.style.display = 'none';
  messageError.style.display = 'none';
  consentError.style.display = 'none';

  if (firstname.value.trim() === '') {
    firstnameError.style.display = 'block';
    firstname.classList.add('error');
    isValid = false;
  }

  if (lastname.value.trim() === '') {
    lastnameError.style.display = 'block';
    lastname.classList.add('error');
    isValid = false;
  }

  if (email.value.trim() === '') {
    emailError.style.display = 'block';
    email.classList.add('error');
    isValid = false;
  }

  if (!query) {
    queryError.style.display = 'block';
    isValid = false;
  }

  if (message.value.trim() === '') {
    messageError.style.display = 'block';
    message.classList.add('error');
    isValid = false;
  }

  if (message.value.trim() === '') {
    consentError.style.display = 'block';
    consent.classList.add('error');
    isValid = false;
  }

  if (isValid) {
    showAlert(event);
  }
});

function setFocusToTextBox() {
  document.getElementById('focus').focus();
}

window.onload = function() {
  setFocusToTextBox();
};
