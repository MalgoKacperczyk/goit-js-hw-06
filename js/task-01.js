const categoriesList = document.querySelector("#categories");
const categoryItem = categoriesList.querySelectorAll("li.item");
const categoriesCount = categoryItem.length;

console.log("Number of categories:" + categoriesCount);

const itemName = categoryItem.forEach(function (item) {
  const categoryName = item.querySelector("h2").textContent;
  const element = item.querySelectorAll("li");
  const elementCount = element.length;

  console.log("Categories:" + categoryName);
  console.log("Elements:" + elementCount);
});
