import React, { Component } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  MapConsumer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import "./styles.css";

class Maps extends Component {
  constructor(props) {
  	super(props)
  	this.markers = [[0,0]]
  	console.log(this.markers)
  }

  render() {

  	return (
    <MapContainer
      center={[50.5, 30.5]}
      zoom={13}
      style={{ height: "100vh" }}
      scrollWheelZoom={false}
      // whenReady={(map) => {
      //   console.log(map);
      //   map.target.on("click", function (e) {
      //     const { lat, lng } = e.latlng;
      //     L.marker([lat, lng], { icon }).addTo(map.target);
      //   });
      // }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          map.on("click", function (e) {
            const { lat, lng } = e.latlng;
            console.log('hemlo world')
            console.log(this)
            this.markers.push([lat, lng])
            console.log(this.markers)
          });
          return null;
        }}
      </MapConsumer>
    </MapContainer>
  )}
}
export default Maps;