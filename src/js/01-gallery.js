// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector('.gallery');
galleryCard.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(element) {
    return element.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
        `;
    }).join("");
} 

const galleryItemsContainer = document.querySelector(".gallery");
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick);

function onGalleryItemsContainerClick(event) { 
    event.preventDefault();

    if (event.target.getAttribute("class") !== "gallery__image") {
        return;
    }
    
new SimpleLightbox('.gallery a', {captionDelay:250, captionsData: 'alt'});
};