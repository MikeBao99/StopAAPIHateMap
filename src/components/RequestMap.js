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
import RequestAddMarkerToClick from './RequestAddMarkerToClick.js';
import RequestForm from './RequestForm'
import StockTicker from './scrollbar.js'
import firebase from '../test_firebase.js';
import icon1 from './img/marker-icon-gold.png'
import icon2 from './img/marker-icon-red.png'
import icon3 from './img/marker-icon-blue.png'
import icon4 from './img/marker-icon-grey.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import Ticker from 'react-ticker'

class RequestMaps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            center: this.props.position,
            map: null
        };
        this.setState({ center: this.props.position })
        this.handleCallbackForm = () => {
            this.forceUpdate()
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ position: props.position });
        const { map } = this.state;
        if (map) map.flyTo(props.position);
    }

    handleCallbackForm = () => {
        this.forceUpdate()
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('requests');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push(
                    {
                        position: items[item].position,
                        urgency: items[item].urgency
                    }
                );
            }
            this.setState({
                data: newState,
            });
        });
    }


    render() {



        const handleCallbackForm = this.handleCallbackForm
        return (
            <div>
                <div>
                    <MapContainer
                        center={[this.state.center.lat, this.state.center.lng]}
                        zoom={13}
                        style={{ height: "75vmin" }}
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
                        {this.state.data.map((marker) => {
                            console.log(marker)
                            if ('position' in marker) {
                                if (marker.urgency == "urgently") {
                                    var icon = icon2
                                } else if (marker.urgency == "within a week") {
                                    var icon = icon1
                                } else if (marker.urgency == "not time-sensitive") {
                                    var icon = icon3
                                } else {
                                    var icon = icon4
                                }


                                let DefaultIcon = L.icon({
                                    iconUrl: icon,
                                    shadowUrl: iconShadow,
                                    iconSize: [25, 41],
                                    iconAnchor: [12, 41]
                                });
                                return (
                                    <Marker position={marker.position} icon={DefaultIcon}>
                                        <Popup>
                                            <RequestForm parentCallback={handleCallbackForm} position={marker.position} />
                                        </Popup>
                                    </Marker>)
                            }
                        })}

                        <RequestAddMarkerToClick />

                    </MapContainer>
                </div>
                <div>
                    {/* <StockTicker /> */}
                </div>
            </div>
        )
    }
}
export default RequestMaps;