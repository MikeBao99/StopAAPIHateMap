import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import firebase from '../test_firebase.js';
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import Input from 'react-phone-number-input/input'

class RequestForm extends Component {
    constructor(props) {
        super(props);
        console.log('propssss')
        console.log(props)
        if ('parentCallback' in this.props) {
            this.parentCallback = this.props.parentCallback
        }
        else {
            this.parentCallback = () => this.forceUpdate();
        }
        if ('position' in this.props) {
            this.position = this.props.position;
        }
        else {
            this.position = [0, 0]
        }
        this.state = {
            //   gender: '',
            //   items: [],
            //   position: [],
            //   time: '',

            currentItem: '',
            requests: [],
            request: '',
            urgency: '',
            phoneNumber: '',
            position: [],
            time: '',
            active: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }

    getPosition() {
        return this.position
    }

    handleChange(e) {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value,
            position: this.props,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const requestsRef = firebase.database().ref('requests');
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
        const request = {
            position: this.position,
            request: this.state.request,
            urgency: this.state.urgency,
            time: date,
            state: 'Calfornia',
            phoneNumber: this.state.phoneNumber,
        }
        requestsRef.push(request);
        this.setState({
            currentItem: '',
            request: '',
            time: '',
            state: 'California',
            active: false,
        });
        if ('parentCallback' in this.props) {
            this.props.parentCallback(null)
        }

        alert("Thank you for submitting a request! A community member should be in touch with you shortly.")


    }
    componentDidMount() {
        const requestsRef = firebase.database().ref('requests');
        requestsRef.on('value', (snapshot) => {
            let requests = snapshot.val();
            let newState = [];
            for (let request in requests) {
                newState.push({
                    id: request,
                    position: requests[request].position,
                    state: 'California',
                    request: requests[request].request,
                    urgency: requests[request].urgency,
                    time: requests[request].time,
                    phoneNumber: requests[request].phoneNumber,
                });
            }
            this.setState({
                requests: newState
            });
        });
    }
    removeItem(requestId) {
        const requestRef = firebase.database().ref(`/requests/${requestId}`);
        requestRef.remove();
    }
    render() {
        const pos = this.position
        return (
            <div className='app'>
                <header>
                    <div className="wrapper">
                        <Row style={{ marginLeft: '1vmin', marginRight: '1vmin' }} className='justify-content-md-center'>
                            <h4>make a request</h4>
                        </Row>
                    </div>
                </header>
                <div className='container'>
                    <section className='add-item'>
                        <form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="request">
                                <Form.Control className='justify-content-md-center' style={{ width: '20vmin' }} onChange={this.handleChange} value={this.state.request} type="text" name="request" placeholder="What do you need?" />
                            </Form.Group>
                            <input type="radio" id="urgently" name="urgency" onChange={this.handleChange} value="urgently"></input>
                            <label >Urgently</label><br></br>
                            <input type="radio" id="within a week" name="urgency" onChange={this.handleChange} value="within a week"></input>
                            <label >Within a week</label><br></br>
                            <input type="radio" id="not time-sensitive" name="urgency" onChange={this.handleChange} value="not time-sensitive"></input>
                            <label >Not time-sensitive</label>

                            <br></br>

                            <Form.Group controlId="phoneNumber">
                                <Form.Control className='justify-content-md-center' style={{ width: '20vmin' }} onChange={this.handleChange} value={this.state.phoneNumber} type="text" name="phoneNumber" placeholder="(555) 555-5555" />
                            </Form.Group>
                            {/* <Input
                                name='phoneNumber'
                                style={{ marginBottom: '2vmin' }}
                                country="US"
                                placeholder="Enter phone number"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange} /> */}
                            <button className='custom-btn'>Request</button>
                        </form>
                    </section>
                    <section className='display-item'>
                        <div className="wrapper">
                            {this.state.requests.map((request) => {
                                console.log('request', request)
                                if ((request.position.lat == this.position.lat) && (request.position.lng == this.position.lng)) {
                                    return (
                                        <li style={{ listStyleType: 'none' }} key={request.id}>
                                            <p>Submitted: {request.time}</p>
                                            <p>({request.urgency}) {request.request}</p>
                                            <p>contact at: {request.phoneNumber}</p>
                                        </li>
                                    )
                                }
                            })}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default RequestForm;