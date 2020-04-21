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
            <div>
                <Map 
                zoom={10}
                initialCenter={{
                lat: 51.068378,
                lng: -0.3552285
                }}
                containerStyle={{ width: '100%', height: '46%' }}
                google={this.props.google} styles={styles}><Marker/></Map>
            </div>
            
            
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBjMtuPi9Epp9vVqOylvU3GaJqGmQXtvCE')
   })(GoogleMaps);