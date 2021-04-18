import React, { Component, useEffect, useState, newState } from "react";
import {
    MapContainer,
    TileLayer,
    useMapEvents,
    MapConsumer,
    Marker,
    Popup
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import "./styles.css";
import RequestForm from './RequestForm.js'
import firebase from '../test_firebase.js';
import icon1 from './img/marker-icon-grey.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon1,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;




function RequestAddMarkerToClick(props) {

    const [markers, setMarkers] = useState([]);
    const markersRef = firebase.database().ref('markers');

    markersRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
            newState.push({ position: item });
        }
        // setMarkers(newState);
    });


    const map = useMapEvents({
        click(e) {
            const newMarker = e.latlng
            setMarkers([...markers, newMarker]);
            markersRef.push({ position: newMarker })
        },
    })

    return (
        <>
            {markers.map(marker =>
                <Marker position={marker}>
                    <Popup><RequestForm position={marker} /></Popup>
                </Marker>
            )}
        </>
    )
};
export default RequestAddMarkerToClick 