import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {useDispatch, useSelector} from 'react-redux'

export default function Map() {
  const state = useSelector(state => state)
  const [venueLocation, setVenueLocation] = useState(state.details)
  console.log("map state", state.details.location)


  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '50vh',
    marginBottom: '15rem',
   
    zoom: 11.5
  });

  

  useEffect(()=>{
    state.details.location && setVenueLocation(state.details.location)
  },[])

  useEffect(()=>{
    console.log("venueLocation",venueLocation)
    venueLocation.lng && setViewport({
      latitude: venueLocation.lat,
      longitude: venueLocation.lng,
    })
    console.log("the updated viewport", viewport)
  },[venueLocation])

  const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;
  return (
    <ReactMapGL
      mapboxApiAccessToken={REACT_APP_MAP_KEY}
      {...viewport}
      mapStyle="mapbox://styles/bobbidigi/ck7jfv8s83bvh1ipswl1hv564"
      onViewportChange={setViewport}
    />
  );
}
