import React, { Component, useState, useEffect, newState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import "./styles.css";
import firebase from '../test_firebase.js';
import Ticker from 'react-ticker'



const GetRatesFromAPI = () => {
  const [rates, setRates] = useState("");
  useEffect(() => {
    async function fetchData() {
      const itemsRef = await firebase.database().ref('items');
	    itemsRef.on('value', (snapshot) => {
	      let items = snapshot.val();
	      let newState = [];
	      for (let item in items) {
	        newState.push(
	          {
	          	position: items[item].position,
	          	gender: items[item].gender,
	          	time: items[item].time,
	          	user: items[item].user
	          }
	        );
	      }	
	      setRates(newState);
	    });
    }
    fetchData();
  }, []);
  let newrates = []
  for (var i = 0; i < rates.length; i++){
  	newrates.push(rates[i]['user'] + ' reported at time ' + rates[i]['time'])
  }
  // let descripts = rates.map(({ username }) => username);
  // A placeholder is needed, to tell react-ticker, that width and height might have changed
  // It uses MutationObserver internally
  return rates ? (
    <p style={{ whiteSpace: "nowrap" }}> {newrates.join(" +++ ")} +++ </p>
  ) : (
    <p style={{ visibility: "hidden" }}>Placeholder</p>
  );
};
 
function StockTicker() {
  return (
    <Ticker offset="run-in" speed={7}>
      {() => <GetRatesFromAPI />}
    </Ticker>
  );
}
 
export default StockTicker;