const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function changeName() {
  const name = nameInput.value;
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
}
nameInput.addEventListener("input", changeName);
