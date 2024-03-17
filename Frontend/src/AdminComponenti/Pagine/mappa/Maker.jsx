import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AdvancedMarker, InfoWindow,Marker } from '@vis.gl/react-google-maps';

export const Maker = () => {
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Marker/')
      .then(response => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
        // Handle error
      });
  }, []);
  
  const handleMarkerClick = (marker) => {
    setOpen(true);
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setOpen(false);
    setSelectedMarker(null);
  };
  return (
    <div className='markersec'> 
        {post.map(item => (
    <Marker
      key={item.id}
      position={new google.maps.LatLng(item.Latitudine, item.Longitudine)}
      onClick={() => handleMarkerClick(item)}
    >
      {console.log(item.Latitudine)}
    </Marker>
    ))}
    {open &&
        post
          .filter(item => item.id === selectedMarker.id) // Filter the array based on the selected marker's ID
          .map(item => (
            <InfoWindow
              key={item.id}
              position={new google.maps.LatLng(item.Latitudine, item.Longitudine)}
              onCloseClick={handleInfoWindowClose}
            >
              <div>
                <h6>{item.Nome}</h6>
                <p>{item.Description}</p>
                <button type='button' className=' bg-gradient2 text-white'>info</button>

              </div>
            </InfoWindow>
        ))}
    </div>
  )
}
