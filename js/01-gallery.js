import { galleryItems } from './gallery-items.js';
// Change code below this line

function createLi(array) {
    return array.reduce(
        (acc, item) =>
        acc + 'li gallery__item = "${item.description}">${item.original}>${item.preview}</li>', ""
    );
}

console.log(createLi(galleryItems));




// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>













console.log(galleryItems);
