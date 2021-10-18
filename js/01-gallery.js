import { galleryItems } from "./gallery-items.js";
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
  image.dataset.source = el.original;

  link.appendChild(image);
  galeryWrap.appendChild(link);
}

galeryWrap.addEventListener("click", toggleInstanceImage);

function toggleInstanceImage(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <div class="modal">
        <img
      src=${event.target.dataset.source}
      alt=${event.target.alt}
    />
    </div>`
  );

  instance.show();

  const modalEl = instance.element(".modal");
  modalEl.addEventListener("click", onCloseInstanceImage);
  document.addEventListener("keydown", onCloseInstanceImage);

  function onCloseInstanceImage(evt) {
    if (evt.target.nodeName === "IMG" || evt.code === "Escape") {
      instance.close();
    }
  }
}
