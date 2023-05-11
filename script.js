// Buena suerte!

var map = L.map("map", { center: [51.505, -0.09], zoom: 13 });
let ipInput = document.querySelector(".ip-input");
let infoFieldsArray = document.querySelectorAll(".info-field");
let ip = "46.253.43.17";
let buttonForm = document.querySelector("form");

L.tileLayer('https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>'
}).addTo(map);

function getDirection(event){
    event.preventDefault()

    let appUrl = `https://ipapi.co/${ip}/json`;
    console.log("hola");
    fetch(appUrl)
    .then(response => response.json())
    .then(data =>{
        infoFieldsArray[0].textContent = data.ip
        infoFieldsArray[1].textContent = `${data.country_name}, ${data.city}, ${data.postal}`
        infoFieldsArray[2].textContent = data.utc_offset
        infoFieldsArray[3].textContent = data.org
        console.log(data)
    })

}

buttonForm.addEventListener("submit", getDirection);
event.preventDefault()