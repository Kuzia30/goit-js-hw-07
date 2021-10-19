import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryWrap = document.querySelector(".gallery");

const murkup = galleryItems.map(createElement).join('');

function createElement({preview, original, description}) {
return `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`
}

galeryWrap.insertAdjacentHTML("beforeend", murkup);

galeryWrap.addEventListener('click', onPreventDefault);

function onPreventDefault(event) {
    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a');

lightbox.on('show.simplelightbox', () => {
    lightbox.options.captionsData = 'alt';
    lightbox.options.captionDelay = '250';
})
