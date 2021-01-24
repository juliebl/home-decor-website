export default function fetchCategories() {
    fetch("./js/data/categories.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            createCategories(json);
            categoryEffects();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function createCategories(categories) {
    const container = document.querySelector(".categories__row");
    container.innerHTML = "";

    categories.forEach(prod => {
        container.innerHTML += `
    <div class="col">
        <a href="product-bug.html"> 
            <img src="${prod.img}" class="w-100" alt="">
        </a>
         <a class="button button--full-width" href="product-bug.html"> Shop ${prod.name}</a>
    </div>
    `
    });
}

function categoryEffects() {
    const divs = document.querySelectorAll(".categories__row > div");
    divs.forEach(div => {
        const link = div.childNodes[3];

        div.addEventListener("mouseover", function () {
            link.style.backgroundColor = "var(--beige)";
            link.style.color = "#000";
        });

        div.addEventListener("mouseout", function () {
            link.style.backgroundColor = "var(--maroon)";
            link.style.color = "#FFF";
        });
    });
}