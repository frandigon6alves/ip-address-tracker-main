// Buena suerte!


//londres
const map = L.map('map').setView([51.505, -0.09], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let ipInput = document.querySelector("#ip-input");
let infoFieldsArray = document.querySelectorAll(".info-field");
let buttonForm = document.querySelector("form");



function getDirection(event){
    event.preventDefault();
    const ip=ipInput.value;
    if(ip===""){
        alert("Ingrese una IP")
        return
    }
    let appUrl = `https://ipapi.co/${ip}/json`;


    fetch(appUrl)
    .then(response => response.json())
    .then(data =>{
        if(data.error){
            alert("IP no encontrada")
            return
        } 
        infoFieldsArray[0].textContent = data.ip
        infoFieldsArray[1].textContent = `${data.country_name}, ${data.city}, ${data.postal}`
        infoFieldsArray[2].textContent =  data.utc_offset<0 ? `UTC+${data.utc_offset*-1*100/10000}`:`UTC+${data.utc_offset*100/10000}`
        infoFieldsArray[3].textContent = data.org

        L.marker([data.latitude, data.longitude]).addTo(map);
        map.setView([data.latitude, data.longitude], 13);
    })
}

buttonForm.addEventListener("submit", getDirection);
