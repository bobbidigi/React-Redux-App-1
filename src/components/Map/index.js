import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {useDispatch, useSelector} from 'react-redux'

export default function Map() {
  const state = useSelector(state => state)
  const [venueDetails, setVenueDetails] = useState(state.details)
  console.log("map state", state.details.location)


  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '50vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11.5
  });

  useEffect(()=>{
    state.details.location && setViewport({
      latitude: state.details.location.lat,
      longitude: state.details.location.lng,
      zoom: 12
    })
  },[])

  useEffect(()=>{
    console.log("updated viewport", viewport)
  },[viewport])

  const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;
  return (
    <ReactMapGL
      mapboxApiAccessToken={REACT_APP_MAP_KEY}
      {...viewport}
      mapStyle="mapbox://styles/bobbidigi/ck7jfv8s83bvh1ipswl1hv564"
      onViewportChange={viewport => {setViewport(viewport)}}
    />
  );
}
