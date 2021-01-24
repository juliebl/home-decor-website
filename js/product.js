// Change main image based on active thumbnail and add active style to thumbnail
const thumbnailContainer = document.querySelector(".product__image__thumbnails");
const thumbnailsArray = thumbnailContainer.children;
const thumbnails = document.querySelectorAll(".product__image__thumbnails__single");
const mainImage = document.querySelector(".product__image__main");


thumbnails.forEach(img => {
    img.addEventListener("click", function () {
        removeActiveClass();
        img.classList.add("product__image__thumbnails__single--active");
        mainImage.src = img.src;
    });
});

function removeActiveClass() {
    for (let i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].classList.remove("product__image__thumbnails__single--active");
    }
}