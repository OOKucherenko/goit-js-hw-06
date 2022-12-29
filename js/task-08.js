const loginForm = document.querySelector(`.login-form`);
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);

const handleSubmit = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    return alert('All fields must be filled');
  }

  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
};
loginForm.addEventListener('submit', handleSubmit);
