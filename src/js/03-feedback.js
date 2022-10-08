import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let email = '';
let message = '';
const userCredentials = { email, message };

//userCredentials.message = event.currentTarget.value;
//const userCredentials = { email: input.value, message: textarea.value };

textarea.addEventListener('input', throttle(saveMessage, 500));
function saveMessage() {
  userCredentials.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userCredentials));
}

input.addEventListener('input', throttle(saveInput, 500));
function saveInput() {
  userCredentials.email = form.elements.email.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userCredentials));
}

const savedUserCredentials = localStorage.getItem('feedback-form-state');
const parsedUserCredentials = JSON.parse(savedUserCredentials);

if (localStorage.length > 0) {
  userCredentials.email = parsedUserCredentials.email;
  userCredentials.message = parsedUserCredentials.message;
}

function updateCredentials() {
  input.value =
    parsedUserCredentials.email !== undefined
      ? (input.value = parsedUserCredentials.email)
      : '';
  textarea.value =
    parsedUserCredentials.message !== undefined
      ? (textarea.value = parsedUserCredentials.message)
      : '';
}
updateCredentials();

form.addEventListener('submit', formCheck);

function formCheck(event) {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    console.log(parsedUserCredentials);
    localStorage.clear();
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}
