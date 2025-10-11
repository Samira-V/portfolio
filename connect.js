var map = L.map('map').setView([38.29, 45.95], 4);
var marker = L.marker([38.29, 45.95]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



marker.bindPopup("موقعیت").openPopup();




function onMapClick(e) {
    alert(" شما در این موقعیت مکانی کلیک کردید " + e.latlng);
   marker= L.marker([e.latlng, 45.95]).addTo(map);
    
}
map.on('click', onMapClick);

const mobileMenu = document.querySelector(".mobile-menu-container")
const burger = document.querySelector(".burger")
burger.addEventListener("click", () => {
   
    mobileMenu.classList.toggle('openMenu')
})