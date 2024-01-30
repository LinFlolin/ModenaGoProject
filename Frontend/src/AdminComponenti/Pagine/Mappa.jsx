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
        {/* <div className='BottoniPercorsi'>
        <button>Percorso 1</button>
        <button>Percorso 1</button>
        <button>Percorso 1</button>
        </div> */}
        <div className="MappaLuoghi" style={{ height: "100vh" }}>
          <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
            <Map 
              zoom={15} 
              center={this.position} 
              mapId={'8b3c296d5e49a998'}              
            >
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
      </div>
    );
  }
}
// function direction() {
      
//   const map = useMap();
//   const routerLibrary = useMapsLibrary("routes"); 
//   const [directionService,setDirectionService] = useState <google.maps.DirectionsService>();
//   const[directionRenderer ,setDirectionRenderer]= useState<google.maps.DirectionsRenderer>();
//   const [route, setroute ] = useState <google.maps.DirectionsRoute[]>([]);
//   const [routeindex,setRoute] = useState <google.maps.
  
//   useEffect(() => {
//     if (!routerLibrary || !map) return;
//     setDirectionService(new routerLibrary.DirectionsService());
//     setDirectionRenderer(new routerLibrary.DirectionsRenderer({map}));
//   }, [routerLibrary,map]);

//   useEffect(() => {
//     if(!directionService || !directionRenderer) return ;
//     directionService.route({
//       origin : "L'Archivio, Corso Duomo, 13, 41121 Modena MO",
//       destination :"Cinema Astra, Via Francesco Rismondo, 21, 41121 Modena MO",
//       travelMode: google.maps.TravelMode.DRIVING,
//       provideRouteAlternatives : true,
//     }).then(response => {
//       directionRenderer.setDirections(response);
//       setroute(response.routes);
//     });
    
//   }, [directionService,directionRenderer])

//   console.log
//   return null
// }


