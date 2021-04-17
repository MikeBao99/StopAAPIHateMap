import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"
import OurNav from './OurNav'
import Input from 'react-phone-number-input/input'
import { useState } from 'react'

const SignUp = () => {
    const [value, setValue] = useState('')

    const handleSubmit = () => {

    }
    return (
        <div>
            <OurNav />
            <Container>
                <h5 style={{ marginTop: '3vmin' }}>Thanks for signing up!</h5>
                <p>Enter your phone number and city to be notified when someone in your area needs help</p>
                <Row>
                    <Col md={3}>

                        <Input
                            country="US"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} />
                    </Col>

                </Row>
                <Row style={{ marginTop: '1vmin' }}>
                    <Col md={3}>

                        <input
                            placeholder="Enter ZIP code"
                            value={value}
                            onChange={setValue} />
                    </Col>
                </Row>
                <Button style={{ marginTop: '3vmin' }} onClick={handleSubmit} variant='danger'>submit</Button>
            </Container>
        </div>
    )
}
export default SignUp