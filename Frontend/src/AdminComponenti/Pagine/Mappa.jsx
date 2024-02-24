import React, { Component} from 'react';
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import {Percorso, Directions} from './mappa/index'
import axios from 'axios'

export class Mappa extends Component {
  constructor(props){
    super(props)
    this.state = {
        postsL : []
    }
}
componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/Mappa/")
    .then(response=> {
        console.log(response)
        this.setState({postsL : response.data})
    })
    .catch(error=>{
        console.log(error)
        this.setState({erroeMsg : 'error retreiving data'})
    })
  }
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
    const { open, selectedMarker ,postsL} = this.state;   
    return (
      <div className='MappaBody'>
        <Percorso></Percorso>

        <div className="MappaLuoghi" style={{ height: "100vh" }}>
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map zoom={15.5} center={this.position} mapId={'8b3c296d5e49a998'}>
              {postsL.map(post => (
                <Marker key={post.id} position={{ lat: post.Latitudine, lng: post.Longitudine }}   onClick={() =>  this.handleMarkerClick(position)}  />
              ))}
              {open && ( postsL.map(marker=>(
                 <InfoWindow
                 key={marker.id}
                 position={{ lat: parseFloat(selectedMarker.Latitudine), lng: parseFloat(selectedMarker.Longitudine) }}
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

