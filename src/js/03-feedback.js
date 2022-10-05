const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', formCheck);

function formCheck(event) {
  event.preventDefault();
  if (userEmail === '' || userMessage === '') {
    return alert('Please fill in all the fields!');
  }
}

const userCredentials = { email, message };

input.addEventListener('input', event => {
  event.currentTarget.value = userCredentials.email;
});

textarea.addEventListener('input', event => {
  event.currentTarget.value = userCredentials.message;
});

localStorage.setItem('feedback-form-state', JSON.stringify(userCredentials));

/*const userCredentials = {
  email: userEmail,
  message: userMessage,
};*/

//event.preventDefault();
