import React, {useEffect, useState} from 'react';
import './App.css';
import { fetchVenues, fetchLocation } from "./actions/venueActions";
import { useSelector, useDispatch } from "react-redux";
import VenueList from './components/VenueList';
import Form from './components/Form'

function App(props) {
 console.log("APP.js",props)
 const dispatch = useDispatch();
 const state = useSelector(state => state);
 console.log("appstsate",state)

 const [categoryID, setCategoryID] = useState("4bf58dd8d48988d1c1941735");

  useEffect(() => {
    // kick off our asyncronous action creator
    // fetch user location which also dispatches update location to set the global state of location to the users location
    dispatch(fetchLocation())
  }, []);

  useEffect(()=>{
    dispatch(fetchVenues(state.location, categoryID))
  },[state.location])

  useEffect(()=>{
    dispatch(fetchVenues(state.location, categoryID))
  },[categoryID])

  

  return (
    <div className="App">
      
      <Form
      //location
      userLocation={state.userLocation} 
      //id
      categoryID={categoryID}
      setCategoryID={setCategoryID}
      //user Location
      userLocation={state.userLocation}
      />

      <VenueList
      userLocation={state.userLocation}
        categoryID={categoryID}
        venues={state.venues}/>
    </div>
  );
}
export default App;
