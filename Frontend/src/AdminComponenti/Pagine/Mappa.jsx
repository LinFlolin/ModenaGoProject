import React, { useState, useEffect } from 'react';
import { APIProvider, Map} from '@vis.gl/react-google-maps';
import { Percorso, Directions, Maker } from './mappa/index';
import '../AdminCss/Mappa.css';

export const Mappa = () => {
  const position = {
    lat: 44.646420,
    lng: 10.926023,
  };

  return (
    <div className='mapsec'>
      <div className='persec'>
        {/* <Percorso /> */}
      </div>
      <div className="map" style={{ height: '100vh', padding: '20px' }}>
        <APIProvider apiKey='AIzaSyBiqWG7fNUrBUtfJ_fjnDK02zcTME6oEeo'>
          <Map
            zoom={16}
            center={position}
            zoomControl={false}
            mapTypeControl={false} >
            <Maker/>
          </Map>
          {/* <Directions/> */}
        </APIProvider>
      </div>
    </div>
  );
};

