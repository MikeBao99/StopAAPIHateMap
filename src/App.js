import React from "react";
import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import Form from './components/Form';
import Search from './components/Search'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Component, Fragment } from 'react';
import OurNav from './components/OurNav';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      position : {
        lat : 33.9806,
        lng : -117.3755,
      }
    }
  }

  handleCallback = (childData) =>{
        this.setState({position: childData})
        console.log('ChildData')
        console.log(this.state.position)
    }
  render () {
  return (
    <div>
      <OurNav />
      <Search parentCallback = {this.handleCallback}/>
        <Maps position = {this.state.position}/>
    </div>
  );
}}

export default App;
