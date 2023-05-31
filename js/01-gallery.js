import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const addImagesToGallery = galleryItems.reduce((acc, newImage) => {
  return (
    acc +
    `<li class="gallery__item"><a class="gallery__link"><img src="${newImage.preview}" alt="${newImage.description}" class="gallery__image" data-source="${newImage.original}"></a></li>`
  );
}, "");

galleryList.insertAdjacentHTML("beforeend", addImagesToGallery);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const bigImg = event.target.dataset.source;
  console.log(bigImg);

  const bigAlt = event.target.alt;
  console.log(bigAlt);

  basicLightbox.create(`<img src="${bigImg}" alt="${bigAlt}">`).show();
});
