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
import icon1 from './img/marker-icon-violet.png'
import icon2 from './img/marker-icon-red.png'
import icon3 from './img/marker-icon-orange.png'
import icon4 from './img/marker-icon-grey.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

class Maps extends Component {
  constructor(props) {
  	super(props)
    this.state = {
      data: [],
      center: this.props.position,
      map: null
    };
    this.setState({center: this.props.position})
  }

	componentWillReceiveProps(props) {
	  	this.setState({position: props.position});
	    const {map} = this.state;
	    if (map) map.flyTo(props.position);
	}


  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push(
          {
          	position: items[item].position,
          	gender: items[item].gender
          }
        );
      }
      this.setState({
        data: newState,
      });
    });
  }


  render() {


    

  	return (
    <MapContainer
      center={[this.state.center.lat, this.state.center.lng]}
      zoom={13}
      style={{ height: "100vh" }}
      scrollWheelZoom={false}
      whenCreated={map => this.setState({ map })}
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
		{this.state.data.map((marker) => {if('position' in marker){ 
			if(marker.gender == "Sexual") {
				var icon = icon1
			} else if(marker.gender == "Violent") {
				var icon = icon2
			} else if(marker.gender == "Verbal"){
				var icon = icon3
			} else {
				var icon = icon4
			}

			let DefaultIcon = L.icon({
			    iconUrl: icon,
			    shadowUrl: iconShadow,
			    iconSize: [25,41], 
			    iconAnchor: [12,41]
			});


			return (
			<Marker position={marker.position} icon={DefaultIcon}>
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