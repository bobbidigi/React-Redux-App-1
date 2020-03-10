import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {useDispatch, useSelector} from 'react-redux'

export default function Map({lat, lng, icon}) {
  const state = useSelector(state => state)


  const [viewport, setViewport] = useState({
    width: '100%',
    height: '50vh',
    latitude: 33,
    longitude: 0.9,
    zoom: 11.5
  });

  useEffect(()=>{
    console.log("viewport updated",viewport)
    // state.details.location && setVenueLocation(state.details.location)
  },[viewport])

  const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;

  return (

    <div className="map">
      {state.isLoading ? (<p>...loading</p>) :
      
      

      (<ReactMapGL
        mapboxApiAccessToken={REACT_APP_MAP_KEY}
        {...viewport}
        mapStyle="mapbox://styles/bobbidigi/ck7jfv8s83bvh1ipswl1hv564"
        onViewportChange={ (viewport) => setViewport({
              width: '100vw',
              height: '50vh',
              marginBottom: '15rem',
              latitude: lat,
              longitude: lng,
              zoom: 11.666
            })}>
         <Marker latitude={lat}
                  longitude={lng}
         >
           <div>
             <img className="marker-icon" src={icon}/>
           </div>
         </Marker>
      </ReactMapGL>)}
    </div>
  );
}
