import React, { Component, useState, useEffect, newState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./constants";
import "./styles.css";
import firebase from '../test_firebase.js';
import Ticker from 'react-ticker';



const GetRatesFromAPI = () => {
  const [rates, setRates] = useState("");
  useEffect(() => {
    async function fetchData() {
      const itemsRef = firebase.database().ref('items');
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
  const nowDate = new Date()
  const month = nowDate.getMonth() + 1
  const day = nowDate.getDate()
  const year = nowDate.getFullYear()
  const hour = nowDate.getHours()
  var minute = nowDate.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  let today = month + '/' + day + '/' + year
  let newrates = []
  for (var i = 0; i < rates.length; i++) {
    var time = rates[i]['time']
    if (time.slice(6) == today) {
      if (time[2] == ':') {
        if (Math.abs(Number(time.slice(0, 2)) - Number(hour)) <= 1) {
          newrates.push(rates[i]['user'] + ' reported at time ' + rates[i]['time'])
        }
      }
      else {
        if (Math.abs(Number(time.slice(0, 1)) - Number(hour)) <= 1) {
          newrates.push(rates[i]['user'] + ' reported at time ' + rates[i]['time'])
        }
      }
    }
  }
  // let descripts = rates.map(({ username }) => username);
  // A placeholder is needed, to tell react-ticker, that width and height might have changed
  // It uses MutationObserver internally
  return rates ? (
    <p style={{ whiteSpace: "nowrap", fontFamily: 'Helvetica, Times, Serif', fontWeight: '300' }}> {" || " + newrates.join(" || ")} </p>
  ) : (
      <p style={{ visibility: "hidden" }}>Placeholder</p>
    );
};

function StockTicker() {
  return (
    <Ticker offset="run-in" speed={4}>
      {() => <GetRatesFromAPI />}
    </Ticker>
  );
}

export default StockTicker;