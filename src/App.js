import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';
import Form from './components/Form'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Component, Fragment } from 'react';
import OurNav from './components/OurNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <OurNav />
      <Maps />
    </div>
  );
}

export default App;
