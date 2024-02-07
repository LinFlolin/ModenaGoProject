import React, { Component, useEffect, useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMapsLibrary,
  useMap,
  
} from '@vis.gl/react-google-maps';
import axios from 'axios';
import '../AdminCss/Mappa.css'
import { useGeolocation } from "@uidotdev/usehooks";

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
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/', { headers })
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
      <div className='MostraPercorsi'>
      
        <div className="MappaLuoghi" style={{ height: "100vh" }}>
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map 
              zoom={15} 
              center={this.position} 
              mapId={'8b3c296d5e49a998'}              
            >
              <AdvancedMarker position={this.position} onClick={() => this.setState({ open: true })}>
                <Pin background={'red'} />
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
            <Direction/>
            </Map>
          </APIProvider>
        </div>
      </div>
    );
  }
}
function Direction() {
  const map = useMap();
  const routerLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);
  const [routes, setRoute] = useState([]);
  const [routeIndex, setRouteIndex ] = useState(0);
  const [location, setLocation] = useState(null);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const origine = useGeolocation();
  const loc = useState()[null];


  axios.get( "http://127.0.0.1:8000/api/Mappa/")
  .then( response =>{
    console.log(response);
    this.setState({loc : response.data });
  })
  .catch(error => {
    console.log(error);
    this.setState({ errorMsg: 'error retrieving data' });
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // If Geolocation API is supported
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  
    function success(position) {
      // Callback function for successful geolocation retrieval
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      setLocation({ latitude, longitude });
    }
  
    function error() {
      // Callback function for error in geolocation retrieval
      console.log("Unable to retrieve your location");
    }
  }, []);
  

  useEffect(() => {
    if (!routerLibrary || !map) return;
    setDirectionService(new routerLibrary.DirectionsService());
    setDirectionRenderer(new routerLibrary.DirectionsRenderer({ map }));
  }, [routerLibrary, map]);

  const loca = "44.6389004,10.9228512 "

  useEffect(() => {
    if (!directionService || !directionRenderer) return;
    directionService.route({
      origin: loca,
      destination: "Museo Enzo Ferrari",
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then(response => {
      directionRenderer.setDirections(response);
      setRoute(response.routes);
    });
  }, [directionService, directionRenderer]);
  console.log(routes)

  if(!leg)return null;
  return (
    <div className='directions'>
      <h2>{selected.summary}</h2>
      <p></p>
    </div>    

  )
}



