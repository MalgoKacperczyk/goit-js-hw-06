const validationInput = document.querySelector("#validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));

function checkLength() {
  const inputLength = validationInput.value;

  if (inputLength.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
validationInput.addEventListener("blur", checkLength);
