import React from 'react';
import {LayersControl, TileLayer} from "react-leaflet";

const BasemapLayer = ({map}) => {
    return (
        <LayersControl.BaseLayer name={map.name} checked={map.isMain}>
            <TileLayer
                url={`${map.url}?access_token=${map.authToken}`}
                attribution={map.attribution}
            />
        </LayersControl.BaseLayer>
    );
};

export default BasemapLayer;