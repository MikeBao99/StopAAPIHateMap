import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from "react-bootstrap/Col"
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

const OurNav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand style={{ color: 'crimson' }} href="/">App Name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/report">Report</Nav.Link>
                            <Nav.Link href="/request">Request</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <Button className='ml-auto addpostbutton' inline variant="outline-info" href="/addpost">+</Button> */}
                    <Button href="/signup" className='ml-auto' inline variant="outline-danger" title="+">Sign Up</Button>

                </Container>
            </Navbar>
        </div>
    )
}

export default OurNav