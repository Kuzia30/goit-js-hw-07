import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryWrap = document.querySelector(".gallery");

const murkup = galleryItems.map(createElement).join("");

function createElement({ preview, original, description }) {
  return `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>`;
}

galeryWrap.insertAdjacentHTML("beforeend", murkup);

galeryWrap.addEventListener("click", toggleInstanceImage);

function toggleInstanceImage(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <div class="modal">
        <img
      src=${event.target.dataset.source}
      alt=${event.target.alt}
      height = '720'
    />
    </div>`);

  instance.show();

  const modalEl = instance.element(".modal");
  modalEl.addEventListener("click", onCloseInstanceImage);
  window.addEventListener("keydown", onCloseInstanceImage);

  function onCloseInstanceImage(evt) {
    if (
      evt.target.nodeName === "IMG" ||
      evt.code === "Escape" ||
      evt.currentTarget.nodeName === "DIV"
    ) {
      instance.close();
      window.removeEventListener("keydown", onCloseInstanceImage);
    }
  }
}
