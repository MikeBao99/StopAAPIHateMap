import React, { Component } from "react";
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
import AddMarkerToClick from './addmarker.js';
import Form from './Form'
import firebase from '../test_firebase.js';

class Maps extends Component {
  constructor(props) {
  	super(props)
    this.state = {
      data: [],
    };
  }
  
  componentDidMount() {
    const itemsRef = firebase.database().ref('markers');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push(
          {
          	position: items[item].position
          }
        );
      }
      console.log(newState)
      this.setState({
        data: newState
      });
      console.log(this.state.data)
    });
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
      parentCallback = {this.handleCallback}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
		{this.state.data.map((marker) => {if('position' in marker){ return (
			<Marker position={marker.position}>
            	<Popup>
            		<Form position={marker.position}/>
            	</Popup>
          </Marker>)}
		})}

      <AddMarkerToClick/>

    </MapContainer>
  )}
}
export default Maps;