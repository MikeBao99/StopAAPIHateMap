import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import Form from './components/Form';
import Search from './components/Search'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Fragment} from 'react';

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
}

export default App;
