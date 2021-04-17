import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import Form from './components/Form';
import Search from './components/Search'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Component, Fragment} from 'react';

function App() {
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
        <Search />
        <Maps />
      </>
  );
}

export default App;
