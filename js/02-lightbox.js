import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');
const galleryImages = galleryItems
  .map(
    galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"  />
</a>
  `,
  )
  .join('');

galleryWrapper.innerHTML = galleryImages;

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  fadeSpeed: 150,
});

galleryWrapper.addEventListener('click', event => {
  if (event.target.className !== 'gallery__image') {
    return;
  }
  event.preventDefault();
});
