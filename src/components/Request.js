import RequestMaps from "./RequestMap"
import OurNav from "./OurNav"
import Search from "./Search"
import { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"

class Request extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: {
                lat: 37.8719,
                lng: -122.2585,
            }
        }
    }

    handleCallback = (childData) => {
        this.setState({ position: childData })
    }
    render() {
        return (
            <div>
                <OurNav />
                <Container >

                    <Row style={{ margin: '4vmin 0 0 0' }}>
                        <Col style={{ margin: '1vmin 0 0 0' }} md={2.5}>
                            <p>Click the map to file a request</p>
                        </Col>
                        <Col style={{ margin: '1vmin 0 0 0' }} md={3}>
                            <Search parentCallback={this.handleCallback} />
                        </Col>


                    </Row>
                    <div style={{ marginTop: '0.5vmin', marginBottom: '5vmin' }}>
                        <RequestMaps position={this.state.position} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Request