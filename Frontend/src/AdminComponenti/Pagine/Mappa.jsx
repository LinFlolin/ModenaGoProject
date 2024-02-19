import React, { Component} from 'react';
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { Directions } from './mappa/Directions';
 
const makers = () => [
  {
    id: 1,
    luogo: "Musei del Duomo di Modena",
    lat:44.64638766237961 ,
    lng:10.925510478461833
 },
  {
    id: 2,
    luogo: "Piazza Roma",
    lat: 44.648068400146364,
    lng: 10.928909618291854
  }
];


export class Mappa extends Component {
   makers = () => [
    {
      id: 1,
      luogo: "Musei del Duomo di Modena",
      lat:44.64638766237961 ,
      lng:10.925510478461833
   },
    {
      id: 2,
      luogo: "Piazza Roma",
      lat: 44.648068400146364,
      lng: 10.928909618291854
    }
  ];
  
  state = {
    open: false,
    selectedMarker: null,
  };
  
  position = {
    lat: 44.646420,
    lng: 10.926023
  };

  handleMarkerClick = (marker) => {
    this.setState({
      open: true,
      selectedMarker: marker,
    });
  };

  handleInfoWindowClose = () => {
    this.setState({
      open: false,
      selectedMarker: null,
    });
  };
  render() {
    const { open, selectedMarker } = this.state;
    const markers = this.makers(); // Call the function to get the markers array

    return (
      <div className='MostraPercorsi'>
        <div className="MappaLuoghi" style={{ height: "100vh" }}>
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map zoom={15.5} center={this.position} mapId={'8b3c296d5e49a998'}>
              {markers.map(marker => (
                <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }}   onClick={() =>  this.handleMarkerClick(marker)}  />
              ))}
              {open && ( markers.map(marker=>(
                 <InfoWindow key={marker.id}
                 position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                 onCloseClick={this.handleInfoWindowClose}>                
               </InfoWindow>
              )) 

              )}
              <Directions/>
            </Map>
          </APIProvider>
        </div>
      </div>
    );
  }
}

