let map;

function initMap(){
    let ensenada = {lat: 31.8578, lng: -116.60631}
    map= new google.maps.Map(document.getElementById("map"),{
        center: ensenada,
        zoom: 14
    })
}