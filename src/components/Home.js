import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom'
const MY_DOMAIN = 'http://localhost:3000'

const Home = () => {
    const rowStyle = { height: '70px', margin: '15vmin ' };
    const buttonStyle = { margin: '30vmin' }
    const columnStyle = { margin: '15vmin 0 0 0' }
    const logoStyle = { color: 'teal' }

    return (

        < div >
            <Container>
                <Row className="justify-content-md-center" style={rowStyle}>
                    <Col >
                        <img style={{ height: '50vmin', margin: '0 0 5vmin 0' }} className='srcimg' src={`${MY_DOMAIN}/empower.png`}></img>
                    </Col>
                    <Col style={{ marginTop: '5vmin' }}>
                        <h2>welcome to</h2>
                        <h1 style={{ fontSize: '10vmin', color: 'crimson' }}>EMPOWER</h1>
                        <div style={{ marginTop: '5vmin', marginLeft: '2vmin' }}>
                            <Row>
                                <Button style={{ marginRight: '1vmin' }} href="/report" variant='danger'>Report</Button>
                                <h3> an incident</h3>
                            </Row>
                            <Row style={{ marginTop: '2vmin' }}>
                                <Button style={{ marginRight: '1vmin' }} href="/request" variant='danger'>Request</Button>
                                <h3> help</h3>
                            </Row>
                            <Row style={{ marginTop: '2vmin' }}>
                                <Button style={{ marginRight: '1vmin' }} href="/signup" variant='outline-danger'>Sign Up</Button>
                                <h3>for updates</h3>
                            </Row>
                        </div>
                    </Col>

                </Row>
                <div style={{ marginTop: '30vmin', marginLeft: '75vmin' }}>

                </div>


            </Container>
        </div >
    )
}

export default Home