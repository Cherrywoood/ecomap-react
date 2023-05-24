import React, {useEffect, useRef, useState} from "react";
import {MapContainer, Popup, TileLayer, useMapEvents, ZoomControl} from "react-leaflet";
import './Map.css';
import 'leaflet/dist/leaflet.css'
import PolygonDistrict from "./components/PolygonDistrict/PolygonDistrict";
import MarkerClusterGroup from "react-leaflet-cluster";
import EcopointMarker from "./components/EcopointMarker/EcopointMarker";
import L from 'leaflet';
import 'leaflet.locatecontrol';
import {getUserBounds} from "./utils/getUserBounds";
import geoLocation from "./components/GeoLocation/geoLocation";

const {minZoom, zoom, maxZoom} = {minZoom: 12, zoom: 13, maxZoom: 17};
const maxBounds = [
    [60.070752, 30.633234],  // Северо-восточная точка границы
    [59.884475, 30.302892] // Юго-западная точка границы
];
const center = [59.964462, 30.460398];
const Map = ({markers, setUserBounds, selectedMarker}) => {
    const mapRef = useRef(null)
    //const [mapProviders, setMapProviders] = useState([])
    const [currentZoom, setCurrentZoom] = useState(zoom);

   /* useEffect(() => {
        const fetchMapProviders = async () => {
            const maps = await MapProviderService.getAll();
            setMapProviders(maps);
        };

        fetchMapProviders();
    }, []);*/


    const whenMapReady = (map) => {
        mapRef.current = map;
        geoLocation(map, maxZoom)
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

    const MapEventsHandler = () => {
        const map = useMapEvents({
            moveend: () => {
                setUserBounds(getUserBounds(map))
            },
            zoomend: () => {
                setCurrentZoom(map.getZoom());
            },
        });
        return null;
    }

    /* baselayerchange: () => {
              console.log(map)
          }*/

    return (
        <MapContainer className="map" center={center} zoomControl={false} zoom={zoom}
                      maxZoom={maxZoom} minZoom={minZoom} maxBounds={maxBounds}
                      whenReady={whenMapReady}>
            <TileLayer
                url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                //url='https://api.mapbox.com/styles/v1/cherrywoood/clg89b14i000u01p396wdlbmo/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hlcnJ5d29vb2QiLCJhIjoiY2xmdjFocTBlMDJ1YjN0cWtudHdka25wdyJ9.UbWiiWtwNZHX7Lwj52xFag'
                attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <MapEventsHandler/>
            <ZoomControl position="bottomright"/>
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

{/* <LayersControl collapsed={true} position="topright">
                {
                    mapProviders.map((map) =>
                        <BasemapLayer key={map.id} map={map}/>
                    )
                }
            </LayersControl>*/}
