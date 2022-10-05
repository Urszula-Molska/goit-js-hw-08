const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', formCheck);

function formCheck(event) {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
}

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
