const loginForm = document.querySelector(`.login-form`);
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);

loginForm.addEventListener(`submit`, event => {
    event.preventDefault();
    if (event.currentTarget.elements.password.value === "" || event.currentTarget.elements.email.value === "") {
        return alert ('All fields must be filled');
    }
    
    const formData = {
        mail,
        password,
    }
    console.log(formData);
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    event.currentTarget.reset();
})

