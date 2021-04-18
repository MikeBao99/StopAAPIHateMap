import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
const MY_DOMAIN = 'http://localhost:3000'

const Home = () => {
    const rowStyle = { height: '20vmin', margin: '15vmin ' };

    return (

        < div >
            <Container>
                <Row className="justify-content-md-center" style={rowStyle}>
                    <Col >
                        <img style={{ height: '50vmin', margin: '0 0 5vmin 0' }} src={`${MY_DOMAIN}/empower.png`} alt="logo"></img>
                    </Col>
                    <Col style={{ marginTop: '3.5vmin' }}>
                        <h2>welcome to</h2>
                        <h1 style={{ fontSize: '10vmin', color: 'crimson' }}>EMPOWER</h1>
                        <div style={{ marginTop: '5vmin', marginLeft: '2vmin' }}>
                            <Row>
                                <Button style={{ marginRight: '1vmin' }} href="/report" variant='danger'>Report</Button>
                                <h3> an incident</h3>
                            </Row>
                            <Row style={{ marginTop: '2vmin' }}>
                                <Button style={{ marginRight: '1vmin' }} href="/request" variant='danger'>Request</Button>
                                <h3> assistance</h3>
                            </Row>
                            <Row style={{ marginTop: '2vmin' }}>
                                <Button style={{ marginRight: '1vmin' }} href="/signup" variant='outline-danger'>Sign Up</Button>
                                <h3>for updates</h3>
                            </Row>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div >
    )
}

export default Home