


import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  state = {
    positionCoordinates: [33.7562, -84.3885]
  }


  render() {

    return (
      <LeafletMap
        center={this.state.positionCoordinates}
        zoom={18}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.state.positionCoordinates}>
          <Popup>
            <img src={require("../images/market365Logo.png")} height="40"></img>
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map







