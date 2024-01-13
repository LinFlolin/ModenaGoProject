import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import{
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
}
from '@vis.gl/react-google-maps'



export function Mappa() {

  
  const position = {
    lat: 44.6488366,
    lng: 10.9200867
  };
  return(
    <APIProvider apiKey= 'AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo' >
    <div style={{height: "100vh"}}>
      <Map zoom={17} center={position}></Map>
    </div>
    </APIProvider>

  )

}

export default React.memo(Mappa)