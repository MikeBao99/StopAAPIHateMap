import Maps from "./Maps"
import OurNav from "./OurNav"
import Search from "./Search"
import { Component } from "react"

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
                <Search parentCallback={this.handleCallback} />
                <Maps position={this.state.position} />
            </div>
        );
    }
}

export default ReportMap