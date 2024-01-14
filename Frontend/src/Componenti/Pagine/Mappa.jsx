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

export function Mappa () {
  const position = {
    lat: 44.646420,
    lng: 10.926023
     
  };
  
  return(
    <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
    <div style={{height: "100vh"}}>
      <Map zoom={15} center={position} mapId={'8b3c296d5e49a998'}>
        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
          <Pin 
            background={'gray'}
          />
        </AdvancedMarker>
        {open &&(
          <InfoWindow position={position} onCloseClick={() => setOpen(false)} >
            <p>Heii Modena</p>
          </InfoWindow>
        )}     

      </Map>
      
    </div>
    </APIProvider>

  )

}

export default React.memo(Mappa)