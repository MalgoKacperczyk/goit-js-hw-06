const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map(function (ingredient) {
  const itemList = document.createElement("li");
  itemList.textContent = ingredient;
  itemList.classList.add("item");
  return itemList;
});
ingredientsList.append(...elements);
console.log(ingredientsList);
