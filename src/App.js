import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import Form from './components/Form';
import Search from './components/Search'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
<<<<<<< HEAD
import {Fragment} from 'react';
=======
import { Component, Fragment } from 'react';
import OurNav from './components/OurNav';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 74035459cd2725673ca9fd7e22f6b19cca01c25a

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
<<<<<<< HEAD
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Search parentCallback = {this.handleCallback}/>
        <Maps position = {this.state.position}/>
      </>
  );}
=======
    <div>
      <OurNav />
      <Search />
      <Maps />
    </div>
  );
>>>>>>> 74035459cd2725673ca9fd7e22f6b19cca01c25a
}

export default App;
