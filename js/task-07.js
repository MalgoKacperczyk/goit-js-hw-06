const inputFontSize = document.getElementById("font-size-control");
const inputText = document.getElementById("text");

inputFontSize.addEventListener("input", function () {
  const fontSize = inputFontSize.value + "px";
  inputText.style.fontSize = fontSize;
});
