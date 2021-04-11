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
      items: [],
      position: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
  	return this.position
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      position: this.props
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
        	console.log('i hate everyone')
    	console.log(this.position)
    const item = {
      position: this.position,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
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
          user: items[item].user
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
                  <input type="text" name="username" placeholder="What was your incident?" onChange={this.handleChange} value={this.state.username} />
                  <button>Report</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    console.log(item.position[0] == this.position[0]);
                      console.log(item.position)
                      console.log(this.position);
                    if((item.position.lat == this.position.lat) && (item.position.lng == this.position.lng)) {  
                      return (
                        <li key={item.id}>
                          <p>brought by: {item.user}
                            <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
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