import { galleryItems } from './gallery-items.js';
const galleryWrapper = document.querySelector('.gallery');
const gallery = galleryItems
  .map(
    galleryItem => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`,
  )
  .join('');

galleryWrapper.innerHTML = gallery;

let instance = {};

galleryWrapper.addEventListener('click', event => {
  if (event.target.className !== 'gallery__image') {
    return;
  }
  event.preventDefault();
  instance = createModal(event);
  instance.show();
});

function createModal(ev) {
  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${ev.target.dataset.source}"> </div>
     `,
    {
      onShow: instance => {
        instance.element().onclick = instance.close;
        document.addEventListener('keydown', closeModal);
      },
      onClose: document.removeEventListener('keydown', closeModal),
    },
  );
  return instance;
}

function closeModal(event) {
  if (event.code.toLowerCase() === 'escape') {
    instance.close();
  }
}
