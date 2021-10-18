import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryWrap = document.querySelector(".gallery");

galleryItems.forEach(createElement);

function createElement(el) {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = el.original;

  const image = document.createElement("img");
  image.src = el.preview;
  image.alt = el.description;
  image.classList.add("gallery__image");

  link.appendChild(image);
  galeryWrap.appendChild(link);
}

galeryWrap.addEventListener('click', onPreventDefault);

function onPreventDefault(event) {
    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a');

lightbox.on('show.simplelightbox', () => {
    lightbox.options.captionsData = 'alt';
    lightbox.options.captionDelay = '250';
})
