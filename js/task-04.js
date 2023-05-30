const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");
let counterValue = 0;

function changeCounter() {
  value.textContent = counterValue;
}
buttonIncrement.addEventListener("click", function () {
  counterValue += 1;
  changeCounter();
});

buttonDecrement.addEventListener("click", function () {
  counterValue--;
  changeCounter();
});

changeCounter();
