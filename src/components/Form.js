import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import firebase from '../test_firebase.js';

class Form extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    if('position' in this.props) {
    	this.position = this.props.position;
    }
    else{
    	this.position = [0,0]
    }
    this.state = {
      currentItem: '',
      username: '',
      gender: '',
      items: [],
      position: [],
      time: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
  	return this.position
  }

  handleChange(e) {
    const nowDate = new Date()
    const month = nowDate.getMonth() + 1
    const day = nowDate.getDate()
    const year = nowDate.getFullYear()
    const hour = nowDate.getHours()
    var minute = nowDate.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    
    const date = hour + ":" + minute + ' ' + month + '/' + day + '/' + year
    this.setState({
      [e.target.name]: e.target.value,
      position: this.props,
      time: date
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      position: this.position,
      user: this.state.username,
      gender: this.state.gender,
      time: this.state.time
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: '',
      time: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          position: items[item].position,
          user: items[item].user,
          gender: items[item].gender,
          time: items[item].time
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
  	const pos = this.position
    return (
      <div className='app'>
              <header>
            <div className="wrapper">
              <h1>Report an Incident</h1>
                             
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What was your incident?" onChange={this.handleChange} value={this.state.username} ></input>
                  <br></br>
                  <input type="radio" id="male" name="gender" onChange={this.handleChange} value="Sexual"></input>
					<label for="male">Sexual</label><br></br>
					<input type="radio" id="female" name="gender" onChange={this.handleChange} value="Verbal"></input>
					<label for="female">Verbal</label><br></br>
					<input type="radio" id="other" name="gender" onChange={this.handleChange} value="Violent"></input>
					<label for="other">Violent</label>

<br></br>
                  <button>Report</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    if((item.position.lat == this.position.lat) && (item.position.lng == this.position.lng)) {  
                      return (
                        <li key={item.id}>
                          <p>Submitted: {item.time}</p>
                          <p>({item.gender}) {item.user}
                            
                          </p>
                        </li>
                    )}
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Form;