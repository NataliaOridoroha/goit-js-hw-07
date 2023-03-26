import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const divRef = document.querySelector(".gallery");
function createGallaryMarkup(items) {
  return items
  .map(
    (item) => `<li class="gallery_item">
    <a class="gallery_link" href="${item.original}">
    <img
    class="gallery_image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="{item.description}"
    width=100%
    height=100%
    />
    </a>
    </li>`
  )
  .join("");
}

const addGallaryMarkup = createGallaryMarkup(galleryItems);
divRef.innerHTML = addGallaryMarkup;
divRef.addEventListener("click", onImageClick);
function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}">
  `);
  instance.show();

  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
      divRef.removeEventListener("click", onImageClick);
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();

}