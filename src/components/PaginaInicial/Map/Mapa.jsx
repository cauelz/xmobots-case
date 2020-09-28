
import React, { Fragment } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import './Map.css'

export default function Mapa() {
  const position = [51.505, -0.09]
  return (
    <Fragment>
      <h1 className="titulo">Mapa</h1>
      <Map className="map" center={position} zoom={10} style={{ height: 600, width: "70%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </Fragment>
  );
}