const formEl = document.querySelector('.login-form');
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    if(email.value === '' || password.value === '') {
        alert("Усі поля повинні бути заповнені!");
    }
    else {
        const data = {
            email: email.value,
            password: password.value
        };
        console.log(data);
    }
    event.target.reset();
});







