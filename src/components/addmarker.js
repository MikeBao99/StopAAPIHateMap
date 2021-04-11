import React, { Component, useEffect, useState } from "react";
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
import Form from './Form.js'

import icon1 from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon1,
    shadowUrl: iconShadow,
    iconSize: [25,41], 
    iconAnchor: [12,41]
});

L.Marker.prototype.options.icon = DefaultIcon;




function AddMarkerToClick(props) {

    const [markers, setMarkers] = useState([]);

    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng
        setMarkers([...markers, newMarker]);

      },
    })

    return (
      <>
        {markers.map(marker => 
          <Marker position={marker}>
            <Popup><Form position ={marker}/></Popup>
          </Marker>
        )}
      </>
    )
  };
export default AddMarkerToClick 