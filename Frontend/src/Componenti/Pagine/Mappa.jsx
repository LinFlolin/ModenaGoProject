import React, { Component } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';
import axios from 'axios';
import './Mappa.css'

export class Mappa extends Component {
    constructor(props){
      super(props)
      this.state = {
          postsL : []
      }
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/','')
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
    open: false
  };

  position = {
    lat: 44.646420,
    lng: 10.926023
  };

  render() {
    const { open } = this.state;
    const { postsL } = this.state;

    return (
      
        <div className="MappaLuoghi" style={{ height: "100vh" }}>
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map zoom={15} center={this.position} mapId={'8b3c296d5e49a998'}>
              <AdvancedMarker position={this.position} onClick={() => this.setState({ open: true })}>
                <Pin background={'gray'} />
              </AdvancedMarker>
              {open && (
                <InfoWindow position={this.position} onCloseClick={() => this.setState({ open: false })}>
                  <p>
                  <ul>
                    {postsL.map(item =>(
                        <div className="container " key={item.id}>
                            {item.Titolo}
                        </div>             
                    ))}
                 </ul>
                  </p>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      
    );
  }
}


