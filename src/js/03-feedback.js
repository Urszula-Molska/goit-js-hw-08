import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let email = '';
let message = '';
const userCredentials = { email, message };

input.addEventListener('input', event => {
  //const userCredentials = { email: input.value, message: textarea.value };
  userCredentials.email = form.elements.email.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userCredentials));
});

textarea.addEventListener('input', event => {
  //const userCredentials = { email: input.value, message: textarea.value };
  userCredentials.message = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userCredentials));
});

const savedUserCredentials = localStorage.getItem('feedback-form-state');
const parsedUserCredentials = JSON.parse(savedUserCredentials);
const updateCredentials = () => {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  } else {
    form.elements.email.value = parsedUserCredentials.email;
    form.elements.message.value = parsedUserCredentials.message;
  }
};

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
