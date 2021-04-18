import React from "react";
import logo from './logo.svg';
import './App.css';
import ReportMap from './components/ReportMap'
import Form from './components/Form';
import Home from './components/Home';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Request from './components/Request'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/report" component={ReportMap} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/request" component={Request} />
      </Switch>
    </Router>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ReportMap />
//       </div>
//     );
//   }
// }

export default App;
