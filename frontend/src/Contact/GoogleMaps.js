import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class GoogleMaps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const styles = require('./GoogleMapStyles.json')
        return ( 
            <Map 
            zoom={10}
            initialCenter={{
            lat: 51.068378,
            lng: -0.3552285
            }}
            google={this.props.google} styles={styles}><Marker/></Map>
            
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBjMtuPi9Epp9vVqOylvU3GaJqGmQXtvCE')
   })(GoogleMaps);