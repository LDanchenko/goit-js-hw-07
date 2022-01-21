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

const instance = createModal();

galleryWrapper.addEventListener('click', event => {
  if (event.target.className !== 'gallery__image') {
    return;
  }
  event.preventDefault();
  instance.element().innerHTML = ` <div class="modal">
 <img src="${event.target.dataset.source}"  alt="${event.target.alt}">
 </div>`;
  instance.show();
});

function createModal() {
  const instance = basicLightbox.create(``, {
    onShow: instance => {
      instance.element().onclick = instance.close;
      document.addEventListener('keydown', closeModal);
    },
    onClose: document.removeEventListener('keydown', closeModal),
  });
  return instance;
}

function closeModal(event) {
  if (event.code.toLowerCase() === 'escape') {
    instance.close();
  }
}
