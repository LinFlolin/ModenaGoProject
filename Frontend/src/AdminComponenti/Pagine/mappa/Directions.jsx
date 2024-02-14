import { useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

export function Directions() {

const map = useMap();
  const routerLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);
  const [routes, setRoute] = useState([]);
  const [routeIndex, setRouteIndex ] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  let latitude;
  let longitude;

  useEffect(() => {
    if (!routerLibrary || !map) return;
    setDirectionService(new routerLibrary.DirectionsService());
    setDirectionRenderer(new routerLibrary.DirectionsRenderer({ map }));
  }, [routerLibrary, map]);

  useEffect(() => {
    if (!directionService || !directionRenderer) return;

    const successCallback = (position) => {
      const cord = position.coords;
      latitude = cord.latitude;
      longitude = cord.longitude;
      console.log(latitude);
      console.log(longitude);
      const loca = new google.maps.LatLng(latitude,longitude);
      directionService.route({
        origin: loca ,
        destination: "Museo Enzo Ferrari",
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      }).then(response => {
        directionRenderer.setDirections(response);
        setRoute(response.routes);
      });

    };
    
    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    

    // directionService.route({
    //   origin: loca ,
    //   destination: "Museo Enzo Ferrari",
    //   travelMode: google.maps.TravelMode.DRIVING,
    //   provideRouteAlternatives: true,
    // }).then(response => {
    //   directionRenderer.setDirections(response);
    //   setRoute(response.routes);
    // });
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
