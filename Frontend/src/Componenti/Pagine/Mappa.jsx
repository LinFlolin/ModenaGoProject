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
          postsL : [],
      }
  }
  componentDidMount() {
    // Recupera il token dalla localStorage (o da dove hai salvato il token)
    const token = localStorage.getItem('1ffa3bcc89c1bf95dfb85765ebcd332af3053e66');
  
    // Configura l'header con il token
    // const headers = {
    //   Authorization: `Bearer ${token}`
    // };
  
    axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/')
      .then(response => {
        console.log(response);
        this.setState({ postsL: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: 'error retrieving data' });
      });
  };
  
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
                  
                  <ul>
                    {postsL.map(item =>(
                        <div className="container " key={item.id}>
                            {item.Titolo}
                        </div>             
                    ))}
                 </ul>
                  
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      // </div>
    );
  }
}


