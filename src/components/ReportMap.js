import Maps from "./Maps"
import OurNav from "./OurNav"
import Search from "./Search"
import { Component } from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'

class ReportMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: {
                lat: 33.9806,
                lng: -117.3755,
            }
        }
    }

    handleCallback = (childData) => {
        this.setState({ position: childData })
        console.log('ChildData')
        console.log(this.state.position)
    }
    render() {
        return (
            <div>
                <OurNav />
                <Container >
                    <Row style={{ margin: '4vmin 0 0 0' }}>
                        <Search parentCallback={this.handleCallback} />
                    </Row>
                    <div style={{ marginTop: '2vmin', marginBottom: '5vmin' }}>
                        <Maps position={this.state.position} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReportMap