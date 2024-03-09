import React, { Component} from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker ,
} from '@vis.gl/react-google-maps';
import {Percorso, Directions,Maker} from './mappa/index'
import axios from 'axios'
import '../AdminCss/Mappa.css'

export class Mappa extends Component {
  constructor(props){
    super(props)
    this.state = {
        post : []
    }
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/Marker/')
    .then(response=> {
        console.log(response.data)
        this.setState({post : response.data})
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
  
  render() {
    const { post } = this.state
    return (
      <div className='mapsec'>
        <div className='persec'>
          <Percorso/>
        </div>
        <div>
            <input type='text' />
            <input type='text'/>
        </div>
        <div className="map"  style={{height:'100vh', padding:'20px'}}>
        
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map zoom={15.5} center={this.position} disableDefaultUI={true} mapId={'8b3c296d5e49a998'}>
            {
              post.map(item => (
                <AdvancedMarker key={item.id} position={new google.maps.LatLng(item.Latitudine, item.Longitudine )}>
                    {console.log(item.Latitudine)}
                </AdvancedMarker>
              ))
            }
            <AdvancedMarker  position={{lat:44.646420 , lng:10.926023}}>

            </AdvancedMarker >
               <Directions/>
            </Map>
          </APIProvider>
        </div>
      </div>
    );
  }
}

