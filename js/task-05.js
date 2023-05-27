const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function changeName() {
  const name = nameInput.value;
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
}
nameInput.addEventListener("input", changeName);
