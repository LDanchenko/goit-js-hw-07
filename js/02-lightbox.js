import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');
const gallery = galleryItems
  .map(
    galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>
  `,
  )
  .join('');

galleryWrapper.innerHTML = gallery;
