import React, {useEffect, useState} from 'react';
import {Polygon} from "react-leaflet";
import OpenStreetMapService from "../../../../api/OpenStreetMapService";

const PolygonDistrict = () => {
    const [polygon, setPolygon] = useState([]);

    useEffect(() => {
        const fetchPolygon = async () => {
            const polygon = await OpenStreetMapService.getPolygonKrasnoDistrict();
            const finalPolygon = polygon[0].geojson.coordinates[0].map((point) => [
                point[1],
                point[0],
            ]);
            setPolygon(finalPolygon);
        };

        fetchPolygon();
    }, []);

    return (
        <Polygon pathOptions={{color: "#204D38", weight: "2", fill: false}} positions={polygon}/>
    );
};

export default PolygonDistrict;