export default function fetchRooms() {
    fetch("./js/data/rooms.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            createRooms(json);
            galleryEffects();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function createRooms(rooms) {
    const container = document.querySelector(".room__grid");
    container.innerHTML = "";

    rooms.forEach(room => {

        container.innerHTML += `
        <div class="${room.class}">
            <img src="${room.img}" class="card-img-top" alt="Couch with blanket draped on it next to a small table with a plant on it and a lantern on the floor">
            <div class="room__grid__content">
                <div class="room__grid__content__text">
                    <h3>${room.name}</h3> 
                    <p>${room.description}</p>
                    <hr>
                </div>
                <a href="product-bug.html">Shop ${room.name}<span>></span></a>
            </div>
        </div>
`;
    });
}

function galleryEffects() {
    const singleRoomDiv = document.querySelectorAll(".room__grid > div");
    const links = document.querySelectorAll(".room__grid__content a")

    links.forEach(link => {
        const arrow = link.childNodes[1];

        link.addEventListener("mouseover", function () {
            arrow.style.marginLeft = "10px";

        });

        link.addEventListener("mouseout", function () {
            arrow.style.marginLeft = "4px";
        });
    });



    singleRoomDiv.forEach(div => {
        const content = div.childNodes[3];
        const text = content.childNodes[1];

        div.addEventListener("mouseover", function () {
            content.style.height = "100%";
            content.height = "100%";
            text.style.opacity = "1";
        });

        div.addEventListener("mouseout", function () {
            text.style.opacity = "0";
            content.style.height = "3rem";
        });
    });
}