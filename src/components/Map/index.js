import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {useDispatch, useSelector} from 'react-redux'

export default function Map({lat, lng}) {
  const state = useSelector(state => state)


  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '50vh',
    marginBottom: '15rem',
    latitude: 33,
    longitude: 0.9,
    zoom: 11.5
  });

  
  //component mounted
  // useEffect(()=>{
  //   if(!state.isLoading){
  //     // console.log("details from redux store", state.details.location.lng)
  //   }
  //   // state.details.location && setVenueLocation(state.details.location)
  // },[state.isLoading])

  useEffect(()=>{
    console.log("viewport updated",viewport)
    // state.details.location && setVenueLocation(state.details.location)
  },[viewport])

  const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;

  return (

    <div>
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
            })}
      />)
          }

    </div>
    
    
  );
}
