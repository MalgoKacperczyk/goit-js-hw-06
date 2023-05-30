const loginForm = document.querySelector(".login-form");
console.log(loginForm);

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie pola");
  } else {
    const elements = {
      email: email.value,
      password: password.value,
    };

    event.currentTarget.reset();
    console.log(elements);
  }
}
