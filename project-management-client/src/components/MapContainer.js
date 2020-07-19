import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '800px',
  height: '500px'
};

export class MapContainer extends Component {
    state = {
        places: [,
            {latitude: 38.71193, longitude: -9.1252514},
            {latitude: 38.7107948, longitude: -9.1549223}
        ]
    }

    displayMarkers = () => {
        return this.state.places.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
            onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                lat: 38.7104766,
                lng: -9.1476696
                }}>
                {this.displayMarkers()}
            </Map>
            
        );
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(MapContainer);