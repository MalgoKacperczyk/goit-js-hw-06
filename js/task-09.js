function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
console.log(widget);

const backgroundColor = document.querySelector(".color");
console.log(backgroundColor);

const button = document.querySelector(".change-color");
console.log(button);

changeBackgroundColor();

widget.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
  backgroundColor.textContent = randomColor;
}
