'use strict'; 

var mapas  = {
    item :  { // defino mis variable
        latitud: undefined,
        longitud: undefined,
        map: undefined
    },
    init : function () { // inicializa variable
        let mapObj = $('#map');
        mapas.item.map = new google.maps.Map(mapObj[0],{
            zoom: 5,
            center: { lat: -9.1191427, lng: -77.0349046 },
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false 
        });
        mapas.setup ();
    },

    setup: function () { // evento click
        $('#encuentrame').click (mapas.buscar) ;
    },
    buscar: function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mapas.funcionExito, mapas.funcionError);
        }
    },
    funcionExito: function(posicion){
        mapas.item.latitud = posicion.coords.latitude;
        mapas.item.longitud = posicion.coords.longitude;
        let miUbicacion = new google.maps.Marker({
            position: {lat:mapas.item.latitud, lng:mapas.item.longitud},
            animation: google.maps.Animation.DROP,
            map: mapas.item.map
        });
        mapas.item.map.setZoom(17);
        mapas.item.map.setCenter({lat:mapas.item.latitud, lng:mapas.item.longitud});
    },

    funcionError: function(error){
        alert("Tenemos un problema con encontrar tu ubicación");
    }
};

//$(document).ready ( mapas.init );

