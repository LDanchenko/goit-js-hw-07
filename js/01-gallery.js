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

galleryWrapper.addEventListener('click', event => {
  if (event.target.className !== 'gallery__image') {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${event.target.dataset.source}"> </div>
     `,
    {
      onShow: instance => {
        instance.element().onclick = instance.close;
      },
    },
  );

  instance.show();
});

document.addEventListener('keydown', event => {
  console.log('key: ', event.key);
  console.log('code: ', event.code);
});
