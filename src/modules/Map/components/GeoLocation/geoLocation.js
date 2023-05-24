import React from 'react';
import L from "leaflet";

const geoLocation = (map, maxZoom) => {
    L.control
        .locate({
            position: "bottomright",
            flyTo: true,
            strings: {
                title: "Показать мое местоположение"
            },
            locateOptions: {
                maxZoom: maxZoom
            },
            circleStyle: {
                fillColor: "#98DC4B"
            },
            markerStyle: {
                fillColor: "#98DC4B"
            },
            onLocationError() {
                alert('Разрешите использовать данные о местоположении.');
            },
        })
        .addTo(map.target);
};

export default geoLocation;