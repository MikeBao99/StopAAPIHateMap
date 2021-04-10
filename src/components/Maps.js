import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import React from 'react';
import ReactDOM from 'react-dom';

function Maps() {
	const position = [51.505, -0.09]
	return (
		<div>
	    	<link
	  			rel="stylesheet"
	  			href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
	  			integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
	  			crossorigin=""
		/>

		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
	    	<TileLayer
	      		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	      		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	    	/>
	    	<Marker position={position}>
	      		<Popup>
	        		A pretty CSS3 popup. <br /> Easily customizable.
	      		</Popup>
	    	</Marker>
	  	</MapContainer>
	  </div>
  	)
}

export default Maps;