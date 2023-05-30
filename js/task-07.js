const inputFontSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputFontSize.addEventListener("input", function () {
  const fontSize = inputFontSize.value + "px";
  inputText.style.fontSize = fontSize;
});
