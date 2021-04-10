import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Component, Fragment} from 'react';

function App() {
  const position = [51.505, -0.09]

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
      
        <Maps />
      </>
  );
}

export default App;
