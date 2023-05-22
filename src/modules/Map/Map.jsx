import React, {useEffect, useRef, useState} from "react";
import {LayersControl, MapContainer, Popup, useMapEvents, ZoomControl} from "react-leaflet";
import './Map.css';
import MapProviderService from "../../api/MapProviderService";
import BasemapLayer from "./components/BasemapLayer/BasemapLayer";
import 'leaflet/dist/leaflet.css'
import PolygonDistrict from "./components/PolygonDistrict/PolygonDistrict";
import MarkerClusterGroup from "react-leaflet-cluster";
import EcopointMarker from "./components/EcopointMarker/EcopointMarker";
import L from 'leaflet';
import 'leaflet.locatecontrol';
import {getUserBounds} from "./utils/getUserBounds";

const {minZoom, zoom, maxZoom} = {minZoom: 12, zoom: 13, maxZoom: 17};
const maxBounds = [
    [60.070752, 30.633234],  // Северо-восточная точка границы
    [59.884475, 30.302892] // Юго-западная точка границы
];
const center = [59.964462, 30.460398];
const Map = ({markers, setUserBounds, selectedMarker}) => {
    const mapRef = useRef(null)
    const [mapProviders, setMapProviders] = useState([])
    const [currentZoom, setCurrentZoom] = useState(zoom);

    useEffect(() => {
        const fetchMapProviders = async () => {
            const maps = await MapProviderService.getAll();
            setMapProviders(maps);
        };

        fetchMapProviders();
    }, []);


    const whenMapReady = (map) => {
        mapRef.current = map;
        L.control
            .locate({
                position: "bottomright",
                flyTo: true,
                strings: {
                    title: "Показать мое местоположение",
                    popup: 'You need to enable geolocation to use this feature.',
                    outsideMapBoundsMsg: 'You seem to be located outside the boundaries of the map.',
                    geolocationErrorAlert: 'Geolocation failed. Please enable location services.',
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
        setUserBounds(getUserBounds(map.target));
        setUserBounds(getUserBounds(map.target));
    }

    useEffect(() => {
        if (selectedMarker) {
            mapRef.current.target.flyTo(selectedMarker, maxZoom, {
                duration: 2,
            }).once('zoomend', () => {
                console.log(selectedMarker)
                setTimeout(() => {
                    mapRef.current.target.eachLayer((layer) => {
                        if (layer instanceof L.Marker) {
                            if (layer.getLatLng().lat === selectedMarker[0]
                                && layer.getLatLng().lng === selectedMarker[1]) {
                                layer.openPopup();
                            }
                        }
                    });
                }, 200);
            });
        }

    }, [selectedMarker]);

    function MapEventsHandler() {
        const map = useMapEvents({
            moveend: () => {
                setUserBounds(getUserBounds(map))
            },
            zoomend: () => {
                setCurrentZoom(map.getZoom());
            },
            baselayerchange: () => {
                console.log(map)
            }
        });
        return null;
    }

    return (
        <MapContainer className="map" center={center} zoomControl={false} zoom={zoom}
                      maxZoom={maxZoom} minZoom={minZoom} maxBounds={maxBounds}
                      whenReady={whenMapReady}>
            <MapEventsHandler/>
            <ZoomControl position="bottomright"/>
            <LayersControl collapsed={true} position="topright">
                {
                    mapProviders.map((map) =>
                        <BasemapLayer key={map.id} map={map}/>
                    )
                }
            </LayersControl>
            <PolygonDistrict/>
            <MarkerClusterGroup chunkedLoading polygonOptions={{opacity: 0, fillOpacity: 0}}>
                {
                    markers.map((marker) => {
                        return <EcopointMarker key={marker.id} position={marker.position} zoom={currentZoom}>
                            <Popup>{marker.name + " " + marker.ecopointTypes.map(obj => obj.name)}</Popup>
                        </EcopointMarker>
                    })
                }
            </MarkerClusterGroup>

        </MapContainer>
    );
}
export default Map;
