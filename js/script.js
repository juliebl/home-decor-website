import fetchCategories from "./categories.js";
import fetchRooms from "./rooms.js";

fetchCategories();
fetchRooms();

// Add hover style to Header CTA button
const headerCTA = document.querySelector(".carousel__main__caption .button--cta");
headerCTA.innerHTML = `Get started <span class="arrow">></span>`;

const headerArrow = document.querySelector(".arrow");

headerCTA.addEventListener("mouseover", function () {
    headerArrow.style.marginLeft = "1rem";
    headerCTA.style.paddingRight = "1.5rem";
});

headerCTA.addEventListener("mouseout", function () {
    headerArrow.style.marginLeft = "0.2rem";
    headerCTA.style.paddingRight = "2.3rem";
});