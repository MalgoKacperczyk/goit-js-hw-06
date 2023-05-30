const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const galleryItem = images
  .map(
    (image) =>
      `<li>
  <img src="${image.url}" alt="${image.alt}">
  </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItem);

//const gallery = document.querySelector(".gallery");
//let galleryHTML = "";

//images.forEach(function (image) {
//const imageHTML = `<li><img src="${image.url}" alt="${image.alt}"></li>`;
//galleryHTML += imageHTML;
//});
//imagesList.insertAdjacentHTML("beforeend", galleryHTML);

//console.log(imagesList);
