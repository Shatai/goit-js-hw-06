// const formEl = document.querySelector('.login-form');
// formEl.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//       } = event.currentTarget;

//     if(email.value === '' || password.value === '') {
//         alert("Усі поля повинні бути заповнені!");
//     }
//     else {
//         const data = {
//             email: email.value,
//             password: password.value
//         };
//         console.log(data);
//     }
//     event.target.reset();
// });




const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
    if (!value) {
      alert("Усі поля повинні бути заповнені!");
    } else {
      data[name] = value;
    }
  });
  if (data.email && data.password) {
    console.log(data);
    event.currentTarget.reset();
  }
}










