import React from 'react';
import {Marker} from "react-leaflet";
import L from 'leaflet';
import icon2 from "../../../../assets/shop-marker.png"


const EcopointMarker = ({position, zoom, children}) => {
    const icon = L.icon({
        iconUrl: icon2,
        iconSize: [zoom >= 15 ? 72 : 46, zoom >= 15 ? 72 : 46]
    });

    return (
        <Marker position={[position.coordinates[1], position.coordinates[0]]} icon={icon}>
            {children}
        </Marker>
    );
};

export default EcopointMarker;