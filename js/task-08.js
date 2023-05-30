const loginForm = document.querySelector(".login-form");
console.log(loginForm);

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Wypełnij wszystkie pola");
  }
  event.currentTarget.reset();
  console.log(`Email: ${email.value}, Password: ${password.value}`);
}
